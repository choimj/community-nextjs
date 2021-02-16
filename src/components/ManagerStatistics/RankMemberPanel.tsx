import React from 'react';
import { MoreButton } from '../Button';
import { Option, SelectField } from '../SelectField';
import { Table, TableCell } from '../Table';
import RankCardItem from './RankCardItem';

const RankMemberPanel = (): React.ReactElement => {
  const rankData = [
    { no: 1, name: '김더존', portalId: 'chlalsstl112', visit: 100, posts: 30, comments: 150 },
    { no: 2, name: '김더존2', portalId: 'chlalsstl112', visit: 100, posts: 30, comments: 150 },
    { no: 3, name: '김더존3', portalId: 'chlalsstl112', visit: 100, posts: 30, comments: 150 },
  ];
  return (
    <>
      <div className="section type_title" style={{ margin: '20px 0 15px' }}>
        <div className="in_box">
          <strong>멤버순위</strong>
          <SelectField defaultValue="2020.02.02" style={{ width: 107, verticalAlign: 'middle', marginLeft: 10 }}>
            <Option value="2020.02.02">2020.02.02</Option>
          </SelectField>
          <span className="sub_info">2020. 03. 17 17:30 기준</span>
        </div>
      </div>
      <div className="section type_rank">
        <ul className="rank_list">
          {rankData.map((rank, index) => (
            <RankCardItem rank={index + 1} data={rank} key={rank.no} />
          ))}
        </ul>
      </div>
      <div className="section type_table">
        <Table>
          <div className="list_header clearfix">
            <TableCell>순위</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>아이디</TableCell>
            <TableCell>등급</TableCell>
            <TableCell>방문</TableCell>
            <TableCell>게시글</TableCell>
            <TableCell>댓글</TableCell>
          </div>
          <div className="list_body">
            <div className="row">
              <TableCell ellipsis>4위</TableCell>
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

export default RankMemberPanel;
