import React from 'react';
import { Table, TableCell } from '../Table';

const StatusList = (): React.ReactElement => {
  return (
    <Table>
      <div className="list_header clearfix">
        <TableCell>날짜</TableCell>
        <TableCell>관리자 전체</TableCell>
        <TableCell>멤버 전체</TableCell>
        <TableCell>비멤버 전체</TableCell>
        <TableCell>방문자 전체</TableCell>
      </div>
      <div className="list_body">
        <div className="row">
          <TableCell ellipsis>2020.03.01 (월)</TableCell>
          <TableCell ellipsis fontColor="blue">
            100
          </TableCell>
          <TableCell ellipsis>999,999</TableCell>
          <TableCell ellipsis>999,999</TableCell>
          <TableCell ellipsis fontColor="red">
            999,999
          </TableCell>
        </div>
      </div>
    </Table>
  );
};

export default StatusList;
