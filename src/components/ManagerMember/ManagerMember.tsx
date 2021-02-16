import React, { useState } from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import { SelectField, Option } from '../SelectField';
import { Tab, Tabs } from '../Tabs';
import { SearchInputField } from '../InputField';
import MemberList from './MemberList';
import { MoreButton } from '../Button';

const ManagerMember = (): React.ReactElement => {
  const tabs = [
    { title: '전체멤버', value: 'all', count: 100 },
    { title: '구독신청', value: 'subscribe', count: 20 },
  ];
  const [selectedTab, setSelectedTab] = useState<number | string>('all');

  const handleClickTab = (value: number | string) => {
    setSelectedTab(value);
  };

  return (
    <ManagerContentTemplate title="전체멤버 관리">
      <Tabs>
        {tabs.map((tab) => {
          const { title, value, count } = tab;
          return (
            <Tab value={value} onClick={handleClickTab} selected={value === selectedTab}>
              {title} <span className="num">{count}</span>
            </Tab>
          );
        })}
      </Tabs>
      <div className="section type_title">
        <div className="in_box">
          <div className="sub_info">
            <SelectField defaultValue="all" style={{ width: 128 }}>
              <Option value="all">게시판 전체 (30)</Option>
              <Option value="board1">게시판A (10)</Option>
              <Option value="board2">게시판B (20)</Option>
            </SelectField>
            <SearchInputField style={{ width: 184 }} />
          </div>
        </div>
      </div>
      <div className="section type_table">
        <MemberList />
      </div>
      <div className="section txtcnt">
        <MoreButton />
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerMember;
