import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo';
import { DefaultLayout, ManagerLayout } from '../src/components/Layout';
import ManagerHeader from '../src/components/ManagerHeader';
import { MANAGER_PATH } from '../src/routers';
import WehagoHeader from '../src/components/WehagoHeader';

const App = ({ Component, pageProps, router }: AppProps): React.ReactElement => {
  const apolloClient = useApollo(pageProps);
  const isManager = router.pathname.indexOf(MANAGER_PATH);

  return (
    <ApolloProvider client={apolloClient}>
      <WehagoHeader auth={false} />
      <Head>
        <meta id="viewport" name="viewport" content="width=1280" />
        <title>WEHAGO</title>
      </Head>
      {isManager ? (
        <ManagerLayout>
          <ManagerHeader router={router} />
          <Component {...pageProps} />
        </ManagerLayout>
      ) : (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      )}
    </ApolloProvider>
  );
};

export default App;
