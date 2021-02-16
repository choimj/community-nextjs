import React, { useState } from 'react';
import { InfoSection, InfoTitle, InfoContent } from '../InfoSection';
import { InputField } from '../InputField';
import HelperText from '../HelperText';
import { ProfileTagChip } from '../TagField';

const BoardManagerBox = (): React.ReactElement => {
  const [tags] = useState([{ profile: 'https://static.wehago.com/imgs/dummy/@memberlist_sample.png', title: '김더존', subTitle: '대리' }]);
  return (
    <div className="section type_form">
      <InfoSection>
        <InfoTitle title="게시판 관리자" isRequired={true} />
        <InfoContent>
          <InputField
            type="text"
            name="community_name"
            placeholder="이름 또는 부서명을 입력해주세요."
            wrapperStyle={{ width: 405, display: 'inline-block' }}
          />
          <button type="button" className="LD_btn s_medium">
            찾기
          </button>
          <HelperText defaultText="게시판 관리자는 해당 게시판에 대한 전권(게시글 삭제, 수정, 공지 등록/해제 등)을 부여받습니다." />
          <div className="list_area type_none_border">
            <ul className="list_box">
              {tags.map((tag) => {
                const { profile, title, subTitle } = tag;
                return (
                  <li key={profile}>
                    <ProfileTagChip profile={profile} title={title} subTitle={subTitle} />
                  </li>
                );
              })}
            </ul>
          </div>
        </InfoContent>
      </InfoSection>
    </div>
  );
};

export default BoardManagerBox;
