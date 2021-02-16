import React from 'react';
import Button from '../Button';
import FileUploader from '../FileUploader';
import HelperText from '../HelperText';
import { InfoSection, InfoTitle, InfoContent } from '../InfoSection';
import { InputField } from '../InputField';
import { Option, SelectField } from '../SelectField';
import { TagChip, TagField } from '../TagField';
import TextArea from '../TextArea';
import ImgBox from './ImgBox';
import { SwitchButton } from '../Button';
import ImgListItem from './ImgListItem';
import PlusButton from './PlusButton';
import DeleteButton from './DeleteButton';

const CompanyPanel = (): React.ReactElement => {
  return (
    <>
      <div className="section type_title">
        <div className="in_box">
          <strong>기본정보</strong>
        </div>
      </div>
      <div className="section type_form">
        <InfoSection>
          <InfoTitle title="커뮤니티 주소" isRequired={true} />
          <InfoContent>
            <SelectField defaultValue="c" style={{ width: 200 }}>
              <Option value="c">회사</Option>
              <Option value="g">단체</Option>
              <Option value="t">팀</Option>
            </SelectField>
            <HelperText defaultText="회사, 단체, 팀 등의 구분을 선택합니다." />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="회사명" isRequired={true} />
          <InfoContent>
            <p className="text">(주)더존물산</p>
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="대표전화" isRequired={true} />
          <InfoContent>
            <InputField type="text" placeholder="대표 전화번호를 입력하세요." />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="주소" isRequired={true} />
          <InfoContent className="type_addr">
            <InputField type="text" wrapperClass="has_addrbtn" placeholder="주소를 입력하세요.">
              <Button className="s_medium">주소검색</Button>
            </InputField>
            <InputField type="text" placeholder="나머지 주소를 입력하세요." />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="소개글" isRequired={true} />
          <InfoContent>
            <TextArea
              placeholder="게시판 이름을 입력하세요."
              helperText="커뮤니티 메인, 검색결과 등 커뮤니티 리스트에 반영될 소개글을 입력하세요."
              showCount
              maxLength={15}
            />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="업종" isRequired={true} />
          <InfoContent>
            <span className="point_text">농수산업</span>
            <Button className="s_medium">업종선택</Button>
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
          <InfoTitle title="대표 웹페이지" />
          <InfoContent>
            <InputField type="text" placeholder="대표 웹페이지 주소를 입력하세요." />
            <HelperText defaultText="웹페이지 형식에 맞게 입력하세요." />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="커뮤니티 검색어" />
          <InfoContent>
            <TagField helperText="커뮤니티를 검색할 때 사용할 키워드를 등록하세요. (최대 10개의 키워드 동록이 가능합니다.)">
              <TagChip label="태그" />
            </TagField>
          </InfoContent>
        </InfoSection>
      </div>
      <div className="section type_title">
        <div className="in_box">
          <strong>선택항목</strong>
        </div>
      </div>
      <div className="section type_form">
        <InfoSection>
          <InfoTitle title="오시는 길" />
          <InfoContent>
            <SwitchButton />
            <span className="element_text type_gray">회사/단체의 위치 및 오시는 길 정보를 커뮤니티 메인화면에 표현합니다.</span>
            <dl className="status_list">
              <div>
                <dt style={{ width: 107 }}>
                  <SelectField defaultValue="1">
                    <Option value="1">자동차</Option>
                    <Option value="2">지하철</Option>
                    <Option value="3">버스</Option>
                  </SelectField>
                </dt>
                <dd>
                  <div className="in_box">
                    <InputField type="text" placeholder="텍스트입력" />
                  </div>
                </dd>
              </div>
            </dl>
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="업체 이미지" />
          <InfoContent>
            <SwitchButton />
            <span className="element_text type_gray">회사/단체의 이미지 정보를 커뮤니티 메인화면에 표현합니다.</span>
            <ul className="img_add_list">
              <li className="type_img">
                <ImgListItem type="img" src="//via.placeholder.com/108x108" />
              </li>
              <li>
                <ImgListItem />
              </li>
            </ul>
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="제품정보" />
          <InfoContent>
            <SwitchButton />
            <span className="element_text type_gray">
              회사/단체의 제품정보를 커뮤니티 메인화면에 표현합니다.
              <br />
              - 카테고리: 카테고리별로 제품정보를 표현할 수 있습니다.
              <br />- 제품정보: 이미지외 제품 설명(제목, 상세정보)을 표현합니다.
            </span>
            <p className="element_sub_title" style={{ marginTop: 10 }}>
              <span>제품 카테고리</span>
            </p>
            <div className="categoty_box">
              <div className="left_box">
                <ul className="large_category_list">
                  <li className="active">
                    <button type="button">카테고리1</button>
                  </li>
                  <li>
                    <button type="button">카테고리2</button>
                  </li>
                </ul>
                <PlusButton label="카테고리 추가" />
              </div>
              <div className="right_box">
                <ul className="middle_category_list">
                  <li className="type_img">
                    <div className="division_box">
                      <div className="img_box">
                        <ImgListItem type="img" src="//via.placeholder.com/64x64" />
                      </div>
                      <div className="input_box">
                        <InputField type="text" placeholder="제목을 입력하세요." />
                        <InputField type="text" placeholder="제목을 입력하세요." />
                      </div>
                      <DeleteButton />
                    </div>
                  </li>
                  <li>
                    <div className="division_box">
                      <div className="img_box">
                        <ImgListItem />
                      </div>
                      <div className="input_box">
                        <InputField type="text" placeholder="제목을 입력하세요." />
                        <InputField type="text" placeholder="제목을 입력하세요." />
                      </div>
                      <DeleteButton />
                    </div>
                  </li>
                  <li>
                    <button type="button" className="btn_list_add">
                      <span>상품 추가</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="담당자" />
          <InfoContent>
            <SwitchButton />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="소개자료" />
          <InfoContent>
            <SwitchButton />
            <span className="element_text type_gray">
              회사/단체의 소개자료를 등록하여 커뮤니티 메인화면에 표현합니다.
              <br />
              (방문자는 소개자료를 다운로드 할 수 있습니다.)
            </span>
            <ul className="img_add_list">
              <li className="type_img">
                <ImgListItem type="img" src="//via.placeholder.com/108x108" />
              </li>
              <li>
                <ImgListItem />
              </li>
            </ul>
            <ul className="sub_info_list">
              <li>- 저작권 등 다른사람의 권리를 침해하는 사진은 이용약관 및 관련 법률에 의해 제재를 받으실 수 있습니다.</li>
            </ul>
          </InfoContent>
        </InfoSection>
      </div>
    </>
  );
};

export default CompanyPanel;
