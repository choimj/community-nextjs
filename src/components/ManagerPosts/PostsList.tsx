import React from 'react';
import CheckBox from '../CheckBox';
// import { DefaultEmptySet } from '../Emptyset';
import { Table, TableCell } from '../Table';

const PostsList = (): React.ReactElement => {
  return (
    <Table>
      <div className="list_header clearfix">
        <TableCell style={{ flex: '0.5' }}>
          <CheckBox />
        </TableCell>
        <TableCell>등록게시판</TableCell>
        <TableCell>타입</TableCell>
        <TableCell style={{ flex: 2 }}>제목</TableCell>
        <TableCell>글쓴이</TableCell>
        <TableCell>작성일</TableCell>
        <TableCell style={{ flex: '0.8' }}>조회수</TableCell>
        <TableCell style={{ flex: '0.8' }}>좋아요수</TableCell>
        <TableCell style={{ flex: '0.8' }}>댓글수</TableCell>
      </div>
      <div className="list_body">
        {/* <div className="empty_area" style={{ margin: '112px 0 172px' }}>
          <DefaultEmptySet className="v2" text="검색결과가 없습니다." style={{ marginTop: '14px' }} />
        </div> */}
        <div className="row">
          <TableCell style={{ flex: '0.5' }}>
            <CheckBox />
          </TableCell>
          <TableCell ellipsis>게시판A</TableCell>
          <TableCell ellipsis>블로그</TableCell>
          <TableCell ellipsis style={{ flex: 2 }}>
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
          </TableCell>
          <TableCell ellipsis>최민식</TableCell>
          <TableCell ellipsis>2020.12.31</TableCell>
          <TableCell ellipsis style={{ flex: '0.8' }}>
            999,999
          </TableCell>
          <TableCell ellipsis style={{ flex: '0.8' }}>
            999,999
          </TableCell>
          <TableCell ellipsis style={{ flex: '0.8' }}>
            999,999
          </TableCell>
        </div>
      </div>
    </Table>
  );
};

export default PostsList;
