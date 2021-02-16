import React from 'react';

const NoteInformation = (): React.ReactElement => {
  return (
    <>
      <h4 className="info_title">쪽지 보내기</h4>
      <span className="line" />
      <ul className="text_list">
        <li className="type_gray">커뮤니티 멤버수가 많을 경우 전체 쪽지 발송에 시간이 소요될 수 있습니다.</li>
        <li className="type_gray">쪽지 전송이 완료되면 보낸쪽지함을 통해 수신확인이 가능합니다.</li>
        <li>전체멤버 쪽지 방송을 일 1회로 제한됩니다.</li>
      </ul>
    </>
  );
};

export default NoteInformation;
