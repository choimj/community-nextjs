import React, { useState } from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import RadioButton from '../RadioButton';
import GradeListSection from './GradeListSection';

const ManagerGrade = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [useEmoji, setUseEmoji] = useState('use');

  const handleClickToggle = () => {
    setOpen(!open);
  };

  const handleChangeUseGrade = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUseEmoji(e.target.value);
  };

  return (
    <ManagerContentTemplate title="등급관리">
      <div className="section type_box add_label">
        <h4 className="info_title"> 커뮤니티 멤버의 등급을 설정하여 사용해보세요!</h4>
        <p className="info_notice">커뮤니티 등급 기능을 사용함으로 설정하여 멤버에게 등급을 부여해보세요. 사용으로 설정 시 등급 관리가 가능합니다.</p>
        <ul className="text_list">
          <li>자동등업 기능을 통해 등업 조건을 설정하여 멤버에 자동으로 등급을 부여할 수 있습니다.</li>
          <li>등급에 따라 아이콘을 설정하여 관리할 수 있습니다.</li>
        </ul>
        <span className="line" />
        <p className="emphasis_text">
          등급 미사용 시에는 커뮤니티 관리자, 메머, 게시판 관리자 권한으로 관리되며 등급 설정 시 멤버의 등급을 세분화해서 관리합니다.
        </p>
        <div className="label_box" onClick={handleClickToggle}>
          <p>커뮤니티 등급 {!open && '미'}사용</p>
        </div>
      </div>
      <div className="section type_table">
        {open && (
          <>
            <div className="table_title_area">
              <h4>등급 이모티콘 사용여부</h4>
              <div className="radio_box">
                <RadioButton label="사용" name="useEmoji" value="use" onChnage={handleChangeUseGrade} checked={useEmoji === 'use'} />
                <RadioButton
                  label="미사용"
                  name="useEmoji"
                  value="notUse"
                  style={{ marginLeft: 14 }}
                  checked={useEmoji !== 'use'}
                  onChnage={handleChangeUseGrade}
                />
              </div>
            </div>
            <GradeListSection useEmoji={useEmoji === 'use'} />
          </>
        )}
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerGrade;
