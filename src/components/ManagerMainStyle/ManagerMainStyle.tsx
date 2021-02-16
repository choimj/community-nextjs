import React from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import CardItem from './CardItem';
import ItemBox from './ItemBox';
import ListItem from './ListItem';
import RadioButton from '../RadioButton';
import Button from '../Button';

const ManagerMain = (): React.ReactElement => {
  return (
    <ManagerContentTemplate className="type_division">
      <div className="division_right">
        <div className="core_box">
          <h3>메인 꾸미기</h3>
          <div className="section type_title">
            <strong>마우스를 드래그하여 원하는 위치로 이동할 수 있습니다. (회색: 이동불가)</strong>
          </div>
          <div className="section type_edit">
            <div className="dummy_box">
              <ItemBox title="타이틀" desc="커뮤니티의 대표 이미지, 명칭정보가 표현됩니다." className="type_title" />
            </div>
            <div className="dummy_box type_half">
              <div className="half_box">
                <ItemBox title="로그인 정보" desc="구독자 정보 표현 영역입니다." className="type_login" />
                <ItemBox title="카페 정보" desc="카페 정보 표현 영역입니다." className="type_cafe" />
                <ItemBox title="검색" desc="커뮤니티 게시글 검색영역입니다." className="type_search">
                  <div className="radio_box">
                    <RadioButton label="메뉴영역" name="radio1" value="menu" checked />
                    <RadioButton label="메인영역" name="radio1" value="main" />
                  </div>
                </ItemBox>
                <ItemBox title="메뉴" desc="생성된 게시판이 표현되는 영역입니다." className="type_menu" />
              </div>
              <div className="half_box type_merge">
                <ItemBox title="대문" className="type_gate">
                  <p>
                    커뮤니티 상단에 표현되는 영역입니다.
                    <br />
                    대문 꾸미기를 통해 다양한 정보를 추가할 수 있습니다.
                  </p>
                  <button type="button" className="btn_del_box">
                    <span className="blind">삭제</span>
                  </button>
                  <Button className="btn_decoration">대문 꾸미기</Button>
                </ItemBox>
                <ItemBox title="검색" desc="커뮤니티 게시글 검색 영역입니다." className="type_search">
                  <div className="radio_box">
                    <RadioButton label="메뉴영역" name="radio2" value="menu" checked />
                    <RadioButton label="메인영역" name="radio2" value="main" />
                  </div>
                </ItemBox>
                <ItemBox title="콘텐츠 영역" className="type_content">
                  <p>
                    우측 콘텐츠를 선택해 메인에 포함된 콘텐츠를 관리합니다.
                    <br />
                    드래그 앤 드랍으로 위치 변경이 가능합니다.
                  </p>
                  <ul className="content_list">
                    <ListItem title="신규 게시글" name="new" />
                    <ListItem title="조회수 게시글" name="hit" />
                    <li className="line">&nbsp;</li>
                    <ListItem title="조회수 게시글" name="hit2" />
                  </ul>
                </ItemBox>
              </div>
            </div>
          </div>
        </div>
        <div className="right_box">
          <h3>콘텐츠 선택</h3>
          <div className="section type_right_box">
            <ul className="content_list">
              <CardItem title="대문" select>
                커뮤니티 메인 상단에 표현되는
                <br />
                대문영역을 통해 다양한 정보 표현
              </CardItem>
              <CardItem title="공지 게시글">
                공지로 등록된 게시글 정보를
                <br />
                확인할 수 있는 위젯
              </CardItem>
              <CardItem title="신규 게시글">
                최신 등록 게시글 정보를
                <br />
                확인할 수 있는 위젯
              </CardItem>
              <CardItem title="조회수 게시글">
                조회수가 높은 게시글 정보를
                <br />
                확인할 수 있는 위젯
              </CardItem>
              <CardItem title="좋아요 게시글">
                좋아요가 높은 게시글 정보를
                <br />
                확인할 수 있는 위젯
              </CardItem>
              <CardItem title="이슈 게시글">
                많은 댓글이 등록된 게시글 정보를
                <br />
                확인할 수 있는 위젯
              </CardItem>
            </ul>
          </div>
        </div>
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerMain;
