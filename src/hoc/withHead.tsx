import Head from 'next/head';
import { NormalizedCacheObject } from '@apollo/client';

const withHead = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: NormalizedCacheObject) => {
    const { community } = props;
    if (community) {
      const { community_name, community_introduction } = community;
      return (
        <>
          <Head>
            {community_name && <title>{community_name}</title>}
            {community_introduction && <meta name="description" content={community_introduction.toString()} />}
          </Head>
          <Component {...(props as P)} />
        </>
      );
    } else {
      return <Component {...(props as P)} />;
    }
  };
};

export default withHead;
