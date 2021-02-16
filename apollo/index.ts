import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, from, NormalizedCacheObject } from '@apollo/client';
// import { concatPagination } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { getAuthHeader, getSignature } from '../src/utils/auth';
import { getCookie } from '../src/utils/common';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
const { API_URL, ENDPOINT } = process.env;
const graphqlURL = `${API_URL}${ENDPOINT}/graphql`;

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

/**
 * 비인증이기 때문에
 */
const authMiddleware = setContext((_, { headers }) => {
  if (typeof window === 'undefined') {
    // SSR 인 경우 ->> 현재는 강제로 박아놓기 이후에는 비인증인 경우 무조건 통과
    const cno = '4';
    const token = 'eCGwDQFXjWCrTAk4LOjU0VIgIUJRWf';
    const _header = getAuthHeader(graphqlURL, { cno, token, wehagoS: '17505696087459746970068487943594361279' });
    return {
      headers: { ...headers, ..._header },
    };
  } else {
    const token = getCookie('AUTH_A_TOKEN');
    if (token) {
      const cno = getCookie('h_selected_company_no');
      const wehagoS = getCookie('wehago_s');
      const _header = getAuthHeader(graphqlURL, { cno, token, wehagoS });
      return {
        headers: { ...headers, ..._header },
      };
    } else {
      return getSignature().then((signature: string) => {
        return {
          headers: { ...headers, signature, timestamp: new Date().getTime() },
        };
      });
    }
  }
});

const httpLink = new HttpLink({
  uri: graphqlURL, // 서버 URL (상대 주소가 아닌 절대 주소를 써야한다.)
  credentials: 'same-origin', // `credentials`나 `headers`같은 추가적 fetch() 옵션 -> FE, BE 서로 세션관리를 위해 쿠키를 사용하는 경우 사용
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache({
      // typePolicies: {
      //   Query: {
      //     fields: {
      //       allPosts: concatPagination(),
      //     },
      //   },
      // },
    }),
  });
};

export const initializeApollo = (initialState: Partial<unknown> | null = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // Next.js에서 Apollo Client를 이용해 데이터를 가져오는 함수가 있다면, 초기 상태값이 여기에서 합쳐진다.
  // gets hydrated here
  if (initialState) {
    // 클라이언트에서의 받은 데이터인 현재 캐시 데이터를 가져온다.
    const existingCache = _apolloClient.extract();

    // 현재 캐시와 SSR 메소드인 getStaticProps/getServerSideProps로 부터 받은 데이터를 합친다.
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s)))],
    });
    // const data = merge(initialState, existingCache);

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data as NormalizedCacheObject);
  }
  // SSG(Server Side Generation-정적사이트생성)와 SSR(Server Side Rendering)은 항상 새로운 Apollo Client를 생성한다.
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (client: ApolloClient<NormalizedCacheObject>, pageProps: any) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
};

export const useApollo = (pageProps: any) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);

  return store;
};
