import React from 'react';
import { GetStaticProps } from 'next';
import { COMMUNITIES } from '../../src/graphql/community';
import { initializeApollo, addApolloState } from '../../apollo';
import withHead from '../../src/hoc/withHead';
import { useQuery } from '@apollo/client';
// import { APOLLO_STATE_PROP_NAME } from '../../apollo';

const ApolloPage = (props: any): React.ReactElement => {
  const { date } = props;
  // const client = initializeApollo();
  // const client = useApollo(props);
  // console.log('>>> ', client.cache.readQuery({ query: COMMUNITIES }));

  useQuery(COMMUNITIES);

  return <>{date}</>;
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: COMMUNITIES,
  });

  return addApolloState(apolloClient, {
    props: { date: new Date().getTime() },
    // revalidate: 60 * 60 * 24, // 하루에 한번씩
    revalidate: 1,
  });
};

export default withHead(ApolloPage);
