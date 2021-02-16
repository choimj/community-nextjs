import React from 'react';

const InformationBox = (): React.ReactElement => {
  return (
    <div className="section type_box">
      <h4 className="info_title">게시판 관리자란?</h4>
      <p className="info_notice">
        게시판관리자는 권한을 보유한 게시판에 <strong>아래과 같은 관리 기능이 부여</strong>됩니다.
      </p>
      <ul className="text_list">
        <li>게시판 공지등록</li>
        <li>게시글 삭제</li>
        <li>게시글 이동</li>
        <li>댓글 삭제</li>
      </ul>
      <span className="line" />
      <p className="info_notice point_color" style={{ marginBottom: 0 }}>
        * 전체 게시판관리자는 모든 게시판에 대한 권한을 부여받습니다.
      </p>
    </div>
  );
};

export default InformationBox;
