import React from 'react';
import StatusPanel from './StatusPanel';
import Button, { MoreButton } from '../Button';
import StatusList from './StatusList';

const StatusSection = (): React.ReactElement => {
  return (
    <>
      <div className="section type_stats">
        <StatusPanel />
      </div>
      <div className="section type_form">
        <div className="btn_box txtcnt">
          <Button className="s_medium">일간</Button>
          <Button className="s_medium">월간</Button>
          <Button className="s_medium">연간</Button>
        </div>
        <div style={{ background: 'rgba(255,0,0,0.3)', height: 300, marginTop: 15 }}>리얼 그리드 영역 입니다.</div>
      </div>
      <div className="section type_table">
        <StatusList />
        <div className="section txtcnt">
          <MoreButton />
        </div>
      </div>
    </>
  );
};

export default StatusSection;
