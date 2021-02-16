import React from 'react';
import { InfoSection, InfoTitle, InfoContent } from '../InfoSection';
import RadioButton from '../RadioButton';
import { InputField } from '../InputField';
import { SwitchButton } from '../Button';

const InformationBox = (): React.ReactElement => {
  return (
    <div className="section type_form">
      <InfoSection>
        <InfoTitle title="게시판 타입" isRequired={true} />
        <InfoContent>
          <div className="radio_box type_add_img">
            <RadioButton label="블로그(기본)" name="radio1" value="" src="//via.placeholder.com/84x52" />
            <RadioButton label="갤러리(이미지)" name="radio1" value="" src="//via.placeholder.com/84x52" />
            <RadioButton label="피드(SNS)" name="radio1" value="" src="//via.placeholder.com/84x52" />
            <RadioButton label="미디어(영상)" name="radio1" value="" src="//via.placeholder.com/84x52" />
          </div>
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="게시판 이름" isRequired={true} />
        <InfoContent>
          <InputField
            type="text"
            name="community_name"
            placeholder="게시판 이름을 입력하세요."
            helperText="게시판 이름을 입력하세요."
            showCount
            maxLength={15}
          />
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="게시판 소개" isRequired={true} />
        <InfoContent>
          <InputField
            type="text"
            name="community_name"
            placeholder="게시판 소개를 입력하세요."
            helperText="게시판 소개를 입력하세요."
            showCount
            maxLength={15}
          />
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="익명게시판 사용" isRequired={true} />
        <InfoContent>
          <SwitchButton />
          <span className="element_text type_gray">Off 선택 시 해당 게시판 및 게시글은 관리자만 확인하실 수 있습니다.</span>
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="순위정보 표현여부" isRequired={true} />
        <InfoContent>
          <SwitchButton />
          <span className="element_text type_gray">
            게시판 내 게시글에 대한 랭킹정보를 표현합니다. (1위부터 10위의 게시글 순위 정보를 표현합니다.)
          </span>
        </InfoContent>
      </InfoSection>
    </div>
  );
};

export default InformationBox;
