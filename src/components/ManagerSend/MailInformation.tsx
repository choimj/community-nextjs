import React from 'react';

const MailInformation = (): React.ReactElement => {
  return (
    <>
      <h4 className="info_title">메일 보내기</h4>
      <span className="line" />
      <ul className="text_list">
        <li className="type_gray">커뮤니티 멤버수가 많을 경우 전체 메일 발송에 시간이 소요될 수 있습니다.</li>
        <li className="type_gray">멤버들의 이용환경 등에 따라 (스팸메일 등록 등) 전체메일이 전달되지 않을 수 있습니다.</li>
        <li>전체멤버 메일 방송을 일 1회로 제한됩니다.</li>
      </ul>
    </>
  );
};

export default MailInformation;
