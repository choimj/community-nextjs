import React, { useState } from 'react';
import { MoreButton } from '../Button';
import { SelectField, Option } from '../SelectField';
import { Table, TableCell } from '../Table';
import { Tab, Tabs } from '../Tabs';
import PostCardItem from './PostCardItem';

const RankPostsPanel = (): React.ReactElement => {
  const rankData = [
    { no: 1, portalId: 'chlalsstl112', topic: '비대면 경제 플랫폼 비대면 경제 플랫폼 4차산업 혁명에 대해...', hit: 100, like: 30, comments: 150 },
    { no: 2, portalId: 'chlalsstl112', topic: '비대면 경제 플랫폼 비대면 경제 플랫폼 4차산업 혁명에 대해...', hit: 100, like: 30, comments: 150 },
    { no: 3, portalId: 'chlalsstl112', topic: '비대면 경제 플랫폼 비대면 경제 플랫폼 4차산업 혁명에 대해...', hit: 100, like: 30, comments: 150 },
  ];

  const [selectedTab, setSelectedTab] = useState<number | string>('date');

  const handleClickTab = (value: number | string) => {
    setSelectedTab(value);
  };

  return (
    <>
      <div className="section type_title" style={{ margin: '20px 0 15px' }}>
        <div className="in_box">
          <strong>게시글 순위</strong>
          <SelectField defaultValue="2020.02.02" style={{ width: 107, verticalAlign: 'middle', marginLeft: 10 }}>
            <Option value="2020.02.02">2020.02.02</Option>
          </SelectField>
          <Tabs type="button" className="fltrgt">
            <Tab value="date" selected={selectedTab === 'date'} onClick={handleClickTab}>
              일간
            </Tab>
            <Tab value="month" selected={selectedTab === 'month'} onClick={handleClickTab}>
              월간
            </Tab>
            <Tab value="year" selected={selectedTab === 'year'} onClick={handleClickTab}>
              년간
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="section type_rank">
        <ul className="rank_list type_02">
          {rankData.map((rank, index) => (
            <PostCardItem rank={index + 1} data={rank} key={rank.no} />
          ))}
        </ul>
      </div>
      <div className="section type_table">
        <Table>
          <div className="list_header clearfix">
            <TableCell>순위</TableCell>
            <TableCell style={{ flex: 3 }}>제목</TableCell>
            <TableCell>작성자</TableCell>
            <TableCell>아이디</TableCell>
            <TableCell>등급</TableCell>
            <TableCell>조회</TableCell>
            <TableCell>게시글</TableCell>
            <TableCell>댓글</TableCell>
          </div>
          <div className="list_body">
            <div className="row">
              <TableCell ellipsis>4위</TableCell>
              <TableCell ellipsis style={{ flex: 3 }}>
                비대면 경제 플랫폼 비대면 경제 플랫폼 4차산업 혁명에 대해 동해물과 백두산이 마르고 닳도록
              </TableCell>
              <TableCell ellipsis>최민식</TableCell>
              <TableCell ellipsis>douson123</TableCell>
              <TableCell ellipsis>커뮤니티장</TableCell>
              <TableCell ellipsis>1,000,000</TableCell>
              <TableCell ellipsis>999,999</TableCell>
              <TableCell ellipsis>999,999</TableCell>
            </div>
          </div>
        </Table>
      </div>
      <div className="section txtcnt">
        <MoreButton />
      </div>
    </>
  );
};

export default RankPostsPanel;
