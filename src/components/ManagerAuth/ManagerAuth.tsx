import React from 'react';
import MenuTree from './MenuTree';
import ManagerContentTemplate from '../ManagerContentTemplate';
import { InfoContent } from '../InfoSection';
import ManagerSectionTitleBar from '../ManagerSectionTitleBar';
import { Table, TableCell } from '../Table';
import { DefaultEmptySet } from '../Emptyset';
import { managerList } from '../../data/Manager/board';
import InformationBox from './InformationBox';
import { SearchInputField } from '../InputField';
import CheckBox from '../CheckBox';

const ManagerAuth = (): React.ReactElement => {
  return (
    <ManagerContentTemplate>
      <div className="section type_categoty">
        <div className="half_box left_box">
          <InfoContent>
            <MenuTree />
          </InfoContent>
        </div>
        <div className="half_box right_box">
          <InformationBox />
          <ManagerSectionTitleBar>
            <strong>
              전체 게시판관리자 <em className="point_color">10</em>
            </strong>
            <div className="sub_info">
              <button type="button" className="admin_btn c_navi">
                관리자 추가
              </button>
              <SearchInputField />
            </div>
          </ManagerSectionTitleBar>
          <Table>
            <div className="list_header clearfix">
              <TableCell style={{ flex: '0.5' }}>
                <CheckBox />
              </TableCell>
              <TableCell>게시판</TableCell>
              <TableCell>관리자 지정일</TableCell>
              <TableCell>최종 관리일</TableCell>
              <TableCell style={{ flex: '1.5' }}>이름</TableCell>
              <TableCell style={{ flex: '1.5' }}>아이디</TableCell>
            </div>
            {managerList.length > 0 ? (
              <div className="list_body">
                {managerList.map((manager) => {
                  const { no, boardTitle, createDt, updateDt, name, protalId } = manager;
                  return (
                    <div className="row" key={no}>
                      <TableCell style={{ flex: '0.5' }}>
                        <CheckBox />
                      </TableCell>
                      <TableCell ellipsis>{boardTitle}</TableCell>
                      <TableCell ellipsis>{createDt}</TableCell>
                      <TableCell ellipsis>{updateDt}</TableCell>
                      <TableCell ellipsis style={{ flex: '1.5' }}>
                        {name}
                      </TableCell>
                      <TableCell ellipsis style={{ flex: '1.5' }}>
                        {protalId}
                      </TableCell>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty_area" style={{ margin: '112px 0 172px' }}>
                <DefaultEmptySet className="v2" text="게시판 관리자가 없습니다." style={{ marginTop: '14px' }} />
              </div>
            )}
          </Table>
        </div>
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerAuth;
