import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import withHead from '../../src/hoc/withHead';
import { initializeApollo } from '../../apollo';
import { COMMUNITIES, COMMUNITY } from '../../src/graphql/community';
import { Community } from '../../src/types/Community';

interface IApolloDynamicPageProps {
  community: Community;
  path: string;
}

const ApolloDynamicPage = ({ community, path }: IApolloDynamicPageProps): React.ReactElement => {
  console.log(community);
  return (
    <div>
      <h1>{path}</h1>ApolloDynamicPage
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: COMMUNITIES,
  });

  const { communities } = data;

  const paths = communities.map((community: Community) => ({
    params: { path: community.community_path },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: COMMUNITY,
    variables: {
      community_path: params?.path,
    },
  });

  const { community } = data;
  return {
    props: { community, path: params?.path, revalidate: 1 },
  };

  // await apolloClient.query({
  //   query: COMMUNITY,
  //   variables: {
  //     community_path: params?.path,
  //   },
  // });

  // return addApolloState(apolloClient, {
  //   props: {},
  //   revalidate: 1,
  // });
};

export default withHead(ApolloDynamicPage);
