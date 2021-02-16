import React from 'react';
import { Option, SelectField } from '../SelectField';
import StatusItem from './StatusItem';

const StatusPanel = (): React.ReactElement => {
  return (
    <>
      <div className="sort_box">
        <SelectField defaultValue="acc" style={{ width: 107 }}>
          <Option value="acc">누적현황</Option>
          <Option value="week">주간현황</Option>
          <Option value="visiter">방문자 수</Option>
          <Option value="date">일간현황</Option>
        </SelectField>
        <span className="sub_info">2020. 03. 17 17:30 기준</span>
      </div>
      <ul className="follow_list">
        <StatusItem title="방문자 수" count="3,000" />
        <StatusItem title="구독자 수" count="100,000,000" />
        <StatusItem title="게시글 수" count="-100" error />
        <StatusItem title="댓글 수" count="1,000" />
      </ul>
    </>
  );
};

export default StatusPanel;
