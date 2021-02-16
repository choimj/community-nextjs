import React from 'react';
import { DefaultEmptySet } from '../Emptyset';

const EmptySet = (): React.ReactElement => {
  return (
    <div className="empty_area" style={{ margin: '200px 0 30px' }}>
      <DefaultEmptySet className="v2" text="금칙어를 통해 차단된 게시글이 존재하지 않습니다." style={{ marginTop: '14px' }} />
    </div>
  );
};

export default EmptySet;
