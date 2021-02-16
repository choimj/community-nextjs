import React from 'react';

interface IInforMationBoxProps {
  children?: React.ReactNode;
}

const InforMationBox = ({ children }: IInforMationBoxProps): React.ReactElement => {
  return (
    <div className="section type_box">
      <h4 className="info_title">금칙어 설정이란?</h4>
      <p className="info_notice">
        우리 커뮤니티의 금칙어를 설정하면, <strong>금칙어로 지정된 단어가 포함된 게시글을 자동으로 차단</strong>합니다.
        <br />
        차단된 게시글은 아래 리스트를 통해 확인할 수 있으며, <strong>100일이 지나면 영구삭제</strong>돼 복구가 불가합니다.
      </p>
      {children}
    </div>
  );
};

export default InforMationBox;
