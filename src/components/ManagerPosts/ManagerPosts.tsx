import React, { useState } from 'react';
import { MoreButton } from '../Button';
import { SearchInputField } from '../InputField';
import ManagerContentTemplate from '../ManagerContentTemplate';
import { Option, SelectField } from '../SelectField';
import { Tabs, Tab } from '../Tabs';
import PostsList from './PostsList';

const ManagerPosts = (): React.ReactElement => {
  const tabs = [
    { title: '전체', value: 'all', count: 20 },
    { title: '블로그', value: 'blog', count: 20 },
    { title: '갤러리', value: 'gallery', count: 20 },
    { title: '피드', value: 'feed', count: 20 },
    { title: '미디어', value: 'media', count: 20 },
  ];

  const [selectedTab, setSelectedTab] = useState<number | string>('all');

  const handleClickTab = (value: number | string) => {
    setSelectedTab(value);
  };

  return (
    <ManagerContentTemplate title="게시글 관리">
      <Tabs>
        {tabs.map((tab) => {
          const { title, value, count } = tab;
          return (
            <Tab value={value} selected={value === selectedTab} onClick={handleClickTab}>
              {title} <span>{count}</span>
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
        <PostsList />
      </div>
      <div className="section txtcnt">
        <MoreButton />
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerPosts;
