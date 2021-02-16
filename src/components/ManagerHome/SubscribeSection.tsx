import React from 'react';
import ManagerSectionTitleBar from '../ManagerSectionTitleBar';
import { Table, TableCell } from '../Table';
import { DefaultEmptySet } from '../Emptyset';
import { subscribeList } from '../../data/Manager/dashboard';
import CheckBox from '../CheckBox';

const SubscribeBox = (): React.ReactElement => {
  return (
    <>
      <ManagerSectionTitleBar>
        <strong>
          구독신청
          <em className="point_color">10</em>
        </strong>
        <div className="sub_info">
          <button type="button" className="admin_btn">
            구독 거절
          </button>
          <button type="button" className="admin_btn c_navi">
            구독 승인
          </button>
        </div>
      </ManagerSectionTitleBar>
      <Table>
        <div className="list_header clearfix">
          <TableCell style={{ flex: '0.5' }}>
            <CheckBox />
          </TableCell>
          <TableCell>가입신청일</TableCell>
          <TableCell>계정</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>성별</TableCell>
          <TableCell style={{ flex: 5 }}>가입답변</TableCell>
        </div>
        {subscribeList.length > 0 ? (
          <div className="list_body">
            {subscribeList.map((sub) => {
              const { no, date, account, name, sex, answer } = sub;
              return (
                <div className="row" key={no}>
                  <TableCell style={{ flex: '0.5' }}>
                    <CheckBox />
                  </TableCell>
                  <TableCell ellipsis>{date}</TableCell>
                  <TableCell ellipsis>{account}</TableCell>
                  <TableCell ellipsis>{name}</TableCell>
                  <TableCell ellipsis>{sex}</TableCell>
                  <TableCell ellipsis style={{ flex: 5 }}>
                    {answer}
                  </TableCell>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty_area" style={{ margin: '112px 0 172px' }}>
            <DefaultEmptySet className="v2" text="신규구독신청이 없습니다." style={{ marginTop: '14px' }} />
          </div>
        )}
      </Table>
    </>
  );
};

export default SubscribeBox;
