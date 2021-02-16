import React from 'react';
import { InfoSection, InfoTitle, InfoContent } from '../InfoSection';
import RadioButton from '../RadioButton';
import HelperText from '../HelperText';
import { SelectField, Option } from '../SelectField';

const AuthBox = (): React.ReactElement => {
  return (
    <div className="section type_form">
      <InfoSection>
        <InfoTitle title="공개 설정" isRequired={true} />
        <InfoContent>
          <div className="radio_box">
            <RadioButton label="전체공개" name="radio1" value="" />
            <RadioButton label="멤버에게만 공개" name="radio1" value="" style={{ marginLeft: 14 }} />
          </div>
          <HelperText defaultText="게시판의 공개권한을 설정합니다. (게시글 읽기, 쓰기 등에 대한 권한은 권한설정을 통해 설정합니다.)" />
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="권한 설정" isRequired={true} />
        <InfoContent>
          <div className="item">
            <span className="element_text" style={{ marginLeft: 0 }}>
              읽기
            </span>
            <SelectField defaultValue="1" style={{ width: 100, verticalAlign: 'middle' }}>
              <Option value="1">모든권한</Option>
              <Option value="2">게시판 관리자</Option>
              <Option value="3">커뮤니티 멤버</Option>
              <Option value="4">준회원</Option>
            </SelectField>
          </div>
          <div className="item">
            <span className="element_text" style={{ marginLeft: 0 }}>
              쓰기
            </span>
            <SelectField defaultValue="1" style={{ width: 100, verticalAlign: 'middle' }}>
              <Option value="1">모든권한</Option>
              <Option value="2">게시판 관리자</Option>
              <Option value="3">커뮤니티 멤버</Option>
              <Option value="4">준회원</Option>
            </SelectField>
          </div>
          <div className="item">
            <span className="element_text" style={{ marginLeft: 0 }}>
              댓글쓰기
            </span>
            <SelectField defaultValue="1" style={{ width: 100, verticalAlign: 'middle' }}>
              <Option value="1">모든권한</Option>
              <Option value="2">게시판 관리자</Option>
              <Option value="3">커뮤니티 멤버</Option>
              <Option value="4">준회원</Option>
            </SelectField>
          </div>
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="익명게시판 사용" isRequired={true} />
        <InfoContent>
          <div className="radio_box">
            <RadioButton label="미사용" name="radio1" value="" />
            <RadioButton label="사용" name="radio1" value="" style={{ marginLeft: 14 }} />
          </div>
          <HelperText defaultText="익명게시판으로 사용 시 게시글 및 댓글은 익명으로 등록됩니다." />
        </InfoContent>
      </InfoSection>
    </div>
  );
};

export default AuthBox;
