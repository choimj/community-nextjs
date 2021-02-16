import React from 'react';
import { InfoSection, InfoTitle, InfoContent } from '../InfoSection';
import RadioButton from '../RadioButton';
import { SelectField, Option } from '../SelectField';
import { mainCategoryList, subCategoryList } from '../../data/Manager/information';
import SkinThumbnailBox from '../SkinThumnailBox';
import HelperText from '../HelperText';

const CommunityPanel = (): React.ReactElement => {
  return (
    <div className="section type_form">
      <InfoSection>
        <InfoTitle title="커뮤니티 주소" isRequired={true} />
        <InfoContent>
          <p className="text">
            https://community.wehago.com/
            <span className="point_color">macusers</span>
          </p>
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="공개여부" isRequired={true} />
        <InfoContent>
          <div className="radio_box">
            <RadioButton label="공개" name="radio1" value="" />
            <RadioButton label="비공개" name="radio1" value="" style={{ marginLeft: 14 }} />
          </div>
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="구독방식" isRequired={true} />
        <InfoContent>
          <div className="radio_box">
            <RadioButton label="바로 구독" name="radio2" value="" />
            <RadioButton label="운영자 승인 후 구독" name="radio2" value="" style={{ marginLeft: 14 }} />
          </div>
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="맴버 공개여부" isRequired={true} />
        <InfoContent>
          <div className="radio_box">
            <RadioButton label="공개" name="radio3" value="" />
            <RadioButton label="가입한 멤버만 공개" name="radio3" value="" style={{ marginLeft: 14 }} />
          </div>
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="카테고리" isRequired={true} />
        <InfoContent>
          <div className="category_box type_half">
            <div className="half_box">
              <SelectField placeholder="대분류를 선택하세요">
                {mainCategoryList.map((category) => (
                  <Option key={category.no} value={category.no}>
                    {category.name}
                  </Option>
                ))}
              </SelectField>
            </div>
            <div className="half_box">
              <SelectField placeholder="소분류를 선택하세요">
                {subCategoryList.map((category) => (
                  <Option key={category.no} value={category.no}>
                    {category.name}
                  </Option>
                ))}
              </SelectField>
            </div>
          </div>
        </InfoContent>
      </InfoSection>
      <InfoSection>
        <InfoTitle title="스킨" />
        <InfoContent>
          <SkinThumbnailBox showButton>
            <strong>회사게시판</strong>
            <ul className="tag_list">
              <li>#기본형</li>
              <li>#반응형</li>
              <li>#위젯지원</li>
            </ul>
          </SkinThumbnailBox>
          <HelperText defaultText="원하는 스타일의 커뮤니티 스킨을 선택하세요. (선택한 스킨은 추후 커뮤니티관리를 통해 수정 가능합니다.)" />
        </InfoContent>
      </InfoSection>
    </div>
  );
};

export default CommunityPanel;
