import React, { useState } from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import { InfoSection, InfoTitle, InfoContent } from '../InfoSection';
import FileUploader from '../FileUploader';
import TextArea from '../TextArea';
import { SelectField, Option } from '../SelectField';
import RadioButton from '../RadioButton';
import { TagField, TagChip } from '../TagField';
import SkinThumbnailBox from '../SkinThumnailBox';
import { InputField } from '../InputField';
import HelperText from '../HelperText';
import ImgBox from './ImgBox';
import Button from '../Button';
import { mainCategoryList, subCategoryList } from '../../data/Manager/information';

interface IFormData {
  communityName: string;
  introText: string;
  mainCategory: number | string;
  subCategory: number | string;
  tags: string[];
}

const ManagerCommunityInfo = (): React.ReactElement => {
  const [formData, setFormData] = useState<IFormData>({
    communityName: '',
    introText: '',
    mainCategory: 0,
    subCategory: 0,
    tags: [],
  });

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeMainCategory = (key: number | string, value: string) => {
    // console.log(e.target.name);
    console.log({ key, value });
    setFormData({
      ...formData,
      mainCategory: key,
    });
  };
  const handleChangeSubCategory = (key: number | string, value: string) => {
    // console.log(e.target.name);
    console.log({ key, value });
    setFormData({
      ...formData,
      subCategory: key,
    });
  };

  const handleKeyDownTagField = (value: string) => {
    console.log({ value });
    setFormData({
      ...formData,
      tags: [...formData.tags, value],
    });
  };

  const handleClickDelete = (value: string) => {
    const newTags = formData.tags.filter((tag) => tag !== value);
    setFormData({
      ...formData,
      tags: newTags,
    });
  };

  const { communityName, introText, tags } = formData;

  return (
    <ManagerContentTemplate title="기본정보">
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
          <InfoTitle title="커뮤니티 이름" isRequired={true} />
          <InfoContent className="type_text">
            <InputField
              type="text"
              name="community_name"
              value={communityName}
              onChange={handleChangeText}
              placeholder="커뮤니티 이름을 입력하세요."
              helperLeftText="수정 가능일: 2020.03.20"
              helperText="커뮤니티 이름은 생성 및 변경 후 90일 이후에 수정가능합니다."
              showCount
              maxLength={1}
            />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="대표 이미지" />
          <InfoContent>
            <div className="element_sub_title">
              <span>커뮤니티 대표 이미지</span>
              <span className="color_gray">(150px * 150px/10MB 미만)</span>
            </div>
            <ImgBox />
            <FileUploader />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="소개글" isRequired={true} />
          <InfoContent>
            <TextArea
              name="aaaa"
              rows={5}
              cols={1}
              placeholder="게시판 이름을 입력하세요."
              helperText="커뮤니티 메인, 검색결과 등 커뮤니티 리스트에 반영될 소개글을 입력하세요."
              showCount
              maxLength={15}
              value={introText}
              onChange={handleChangeText}
              // error
              // errorMessage="aaa"
            />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="카테고리" isRequired={true} />
          <InfoContent>
            <div className="category_box type_half">
              <div className="half_box">
                <SelectField placeholder="대분류를 선택하세요" onChange={handleChangeMainCategory}>
                  {mainCategoryList.map((category) => (
                    <Option key={category.no} value={category.no}>
                      {category.name}
                    </Option>
                  ))}
                </SelectField>
              </div>
              <div className="half_box">
                <SelectField placeholder="소분류를 선택하세요" onChange={handleChangeSubCategory}>
                  {subCategoryList.map((category) => (
                    <Option key={category.no} value={category.no}>
                      {category.name}
                    </Option>
                  ))}
                </SelectField>
              </div>
            </div>
            <HelperText leftText="수정 가능일: 2020.03.20" rightText="커뮤니티 카테고리는 생성 및 변경 후 90일 이후에 수정 가능합니다." />
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
          <InfoTitle title="커뮤니티 검색어" />
          <InfoContent>
            <TagField
              helperText="커뮤니티를 검색할 때 사용할 키워드를 등록하세요. (최대 10개의 키워드 동록이 가능합니다.)"
              onKeyDown={handleKeyDownTagField}
            >
              {tags &&
                tags.map((tag) => (
                  <li>
                    <TagChip key={tag} label={tag} onClickDelete={handleClickDelete} />
                  </li>
                ))}
            </TagField>
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
      <div className="section txtcnt">
        <Button className="c_blue">저장하기</Button>
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerCommunityInfo;
