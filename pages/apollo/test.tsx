import { useQuery } from '@apollo/client';
import React from 'react';
import { initializeApollo } from '../../apollo';
import { COMMUNITIES } from '../../src/graphql/community';

const TestPage = (): React.ReactElement => {
  const { data } = useQuery(COMMUNITIES);
  console.log({ data });
  return <div>test</div>;
};

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: COMMUNITIES,
  });

  return {
    props: {},
  };
};

export default TestPage;
