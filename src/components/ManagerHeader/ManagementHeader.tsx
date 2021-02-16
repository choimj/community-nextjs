import React from 'react';
import Navigation from './Navigation';

const ManagementHeader = ({ router }: any): React.ReactElement => {
  const { community_path } = router.query;
  return (
    <>
      <div className="admin_title">
        <h2>커뮤니티 관리</h2>
      </div>
      {community_path && <Navigation communityPath={community_path} />}
    </>
  );
};

export default ManagementHeader;
