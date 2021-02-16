import React from 'react';
import { useRouter } from 'next/router';
import { Table, TableCell } from '../Table';
import Button from '../Button';
import { SearchInputField } from '../InputField';
import { MANAGER_PATH } from '../../routers';

interface ISendListProps {
  type: { title: string; value: number; path: string };
}

const SendList = ({ type }: ISendListProps): React.ReactElement => {
  const router = useRouter();
  const { title, path } = type;

  const handleClickSendButton = () => {
    router.push(`${MANAGER_PATH}/send/${path}`);
  };

  return (
    <>
      <div className="sort_box" style={{ textAlign: 'left' }}>
        <Button className="admin_btn c_navi" onClick={handleClickSendButton}>
          {title} 보내기
        </Button>
        <SearchInputField style={{ width: 180, float: 'right' }} />
      </div>
      <Table>
        <div className="list_header clearfix">
          <TableCell>보낸사람</TableCell>
          <TableCell>받는사람</TableCell>
          <TableCell>제목</TableCell>
          <TableCell>보낸시간</TableCell>
        </div>
        <div className="list_body">
          <div className="row">
            <TableCell ellipsis>
              <strong>최민식</strong>
              <span className="type_bar">커뮤니티관리자</span>
            </TableCell>
            <TableCell ellipsis>
              <strong>전체멤버</strong>
            </TableCell>
            <TableCell ellipsis>
              <span>커뮤니티 개선 작업이 완료되었습니다.</span>
            </TableCell>
            <TableCell ellipsis>
              <span>2020.12.31&nbsp;&nbsp;13:20</span>
            </TableCell>
          </div>
        </div>
      </Table>
    </>
  );
};

export default SendList;
