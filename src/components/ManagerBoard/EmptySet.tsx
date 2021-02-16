import React from 'react';

const EmptySet = (): React.ReactElement => {
  return (
    <div className="section type_form">
      <div className="empty_box">
        <img src="/imgs/cmt/img_board_emptyset.png" alt="img" />
        <div className="text_box">
          <strong className="empty_title">게시판 관리자</strong>
          <p className="empty_sub_title">커뮤니티에 사용될 다양한 게시판을 만들고 설정해보세요.</p>
          <ul className="empty_list">
            <li>- 게시판, 그룹(폴더), 구분선등을 상위 버튼을 통해 추가할 수 있습니다.</li>
            <li>- 등록된 게시판, 구분선은 드래그 앤 드롭하여 순서를 변경할 수 있습니다.</li>
            <li>- 폴더에 게시판, 구분선을 드래그 앤 드롭하여 그룹내로 이동할 수 있습니다.</li>
          </ul>
          <p className="empty_notice">
            <strong>* 설정한 정보는 반드시 하단 저장버튼을 선택하여 저장하세요.</strong> (저장되지 않은 정보는 삭제됩니다.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptySet;
