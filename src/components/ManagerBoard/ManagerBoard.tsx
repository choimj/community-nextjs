import React from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import MenuTree from './MenuTree';
import { InfoContent } from '../InfoSection';
import Button from '../Button';
import ButtonItem from './ButtonItem';
import InformationBox from './InformationBox';
import { menus } from '../../data/Manager/board';
import AuthBox from './AuthBox';
import BoardManagerBox from './BoardManagerBox';
import EmptySet from './EmptySet';

const ManagerBoard = (): React.ReactElement => {
  return (
    <ManagerContentTemplate title="게시판 관리">
      <div className="section type_categoty">
        <div className="half_box left_box">
          <InfoContent>
            <ul className="category_btn_list">
              <ButtonItem>게시판 추가</ButtonItem>
              <ButtonItem>그룹 추가</ButtonItem>
              <ButtonItem>구분선 추가</ButtonItem>
            </ul>
            <MenuTree />
          </InfoContent>
        </div>
        <div className="half_box right_box">
          {menus.length > 0 ? (
            <>
              <h3>기본정보</h3>
              <InformationBox />
              <h3>권한 설정</h3>
              <AuthBox />
              <h3>게시판 관리자 설정</h3>
              <BoardManagerBox />
              <div className="section txtcnt">
                <Button>취소</Button>
                <Button className="c_blue">확인</Button>
              </div>
            </>
          ) : (
            <EmptySet />
          )}
        </div>
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerBoard;
