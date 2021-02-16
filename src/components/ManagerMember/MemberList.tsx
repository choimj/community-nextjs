import React from 'react';
import CheckBox from '../CheckBox';
// import { DefaultEmptySet } from '../Emptyset';
import { Table, TableCell } from '../Table';

const MemberList = (): React.ReactElement => {
  return (
    <Table>
      <div className="list_header clearfix">
        <TableCell style={{ flex: '0.5' }}>
          <CheckBox />
        </TableCell>
        <TableCell>멤버등급</TableCell>
        <TableCell>가입일</TableCell>
        <TableCell style={{ flex: '0.5' }}>멤버명</TableCell>
        <TableCell style={{ flex: '0.5' }}>아이디</TableCell>
        <TableCell>최종방문일</TableCell>
        <TableCell style={{ flex: '0.5' }}>방문수</TableCell>
        <TableCell style={{ flex: '0.5' }}>게시글수</TableCell>
        <TableCell style={{ flex: '0.5' }}>댓글수</TableCell>
        <TableCell>구독질문</TableCell>
      </div>
      <div className="list_body">
        {/* <div className="empty_area" style={{ margin: '112px 0 172px' }}>
          <DefaultEmptySet className="v2" text="검색결과가 없습니다." style={{ marginTop: '14px' }} />
        </div> */}
        <div className="row">
          <TableCell style={{ flex: '0.5' }}>
            <CheckBox />
          </TableCell>
          <TableCell ellipsis>커뮤니티 관리자</TableCell>
          <TableCell ellipsis>2020.01.31 13:12</TableCell>
          <TableCell ellipsis style={{ flex: '0.5' }}>
            최민식
          </TableCell>
          <TableCell ellipsis style={{ flex: '0.5' }}>
            douzone
          </TableCell>
          <TableCell ellipsis>최종방문일</TableCell>
          <TableCell ellipsis style={{ flex: '0.5' }}>
            2020.12.31
          </TableCell>
          <TableCell ellipsis style={{ flex: '0.5' }}>
            9,999
          </TableCell>
          <TableCell ellipsis style={{ flex: '0.5' }}>
            9,999
          </TableCell>
          <TableCell ellipsis className="type_btn">
            네, 알겠습니다.
            <button type="button" className="btn_open">
              <span className="blind">열기</span>
            </button>
          </TableCell>
        </div>
      </div>
    </Table>
  );
};

export default MemberList;
