import React from 'react';
import RankMemberPanel from './RankMemberPanel';
import RankPostsPanel from './RankPostsPanel';

const RankSection = (): React.ReactElement => {
  return (
    <>
      <RankMemberPanel />
      <RankPostsPanel />
    </>
  );
};

export default RankSection;
