import React from 'react';
import InfoBox from './InfoBox';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import { COMMUNITY } from '../../../../src/graphql/community';

const CommunityInfoSection = (): React.ReactElement => {
  const router = useRouter();
  const { community_path } = router.query;

  const { data, loading } = useQuery(COMMUNITY, {
    variables: {
      community_path,
    },
  });

  if (loading) {
    return <CircularProgress />;
  }

  const { community } = data;
  const { community_name } = community;
  return (
    <div className="section home_title">
      <div className="banner_box">
        <p>{community_name}</p>
      </div>
      <InfoBox {...community} />
    </div>
  );
};

export default CommunityInfoSection;
