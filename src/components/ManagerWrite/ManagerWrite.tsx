import React from 'react';
import ManagerContentTemplate from '../ManagerContentTemplate';
import RowItem from './RowItem';
import { SelectField, Option } from '../SelectField';
import { TagChip } from '../TagField';
import RadioButton from '../RadioButton';
import Button from '../Button';
import { InputField } from '../InputField';

interface IManagerWriteProps {
  type: string | string[];
}

const ManagerWrite = ({ type }: IManagerWriteProps): React.ReactElement => {
  const _type = Array.isArray(type) ? type[0] : type;
  const getTitle = (param: string) => {
    switch (param) {
      case 'mail':
        return '메일';
      case 'message':
        return '쪽지';
      default:
        return '메일';
    }
  };

  const title = `${getTitle(_type)}보내기`;

  return (
    <ManagerContentTemplate title={title}>
      <div className="section mail_edit">
        <div className="item type_half">
          <RowItem title="대상맴버">
            <SelectField defaultValue="all" style={{ width: 102 }}>
              <Option value="all">전체멤버</Option>
              <Option value="community">커뮤니티관리자</Option>
              <Option value="board">게시판관리자</Option>
              <Option value="member">멤버선택</Option>
              <Option value="grade">등급</Option>
            </SelectField>
            <span className="sub_text">메일은 WEHAGO를 통해 발송됩니다.</span>
          </RowItem>
          <RowItem title="맴버검색">
            <SelectField defaultValue="all" style={{ width: 170 }}>
              <Option value="all">김더존</Option>
              <Option value="community">더존</Option>
              <Option value="board">김기획</Option>
              <Option value="member">최기획</Option>
              <Option value="grade">성기획</Option>
            </SelectField>
          </RowItem>
        </div>
        <div className="item">
          <RowItem title="선택맴버">
            <div className="in_box">
              <TagChip label="김더존" />
              <TagChip label="성기획" />
            </div>
          </RowItem>
        </div>
        <div className="item" style={{ marginTop: 20 }}>
          <RowItem title="예약메세지">
            <div className="in_box">
              <RadioButton label="미사용" name="radio1" value="" />
              <RadioButton label="사용" name="radio1" value="" checked />
            </div>
          </RowItem>
        </div>
        <div className="item">
          <RowItem title="첨부파일">
            <Button className="s_medium">내 PC</Button>
            <Button className="s_medium" style={{ marginLeft: 4 }}>
              WE드라이브
            </Button>
          </RowItem>
        </div>
        <div className="item">
          <RowItem title="제목">
            <div className="in_box" style={{ width: 'calc(100% - 112px)' }}>
              <InputField
                type="text"
                placeholder="제목을 입력하세요."
                wrapperStyle={{ width: '100%' }}
                wrapperClass="LD_input"
                inputClass="textinput"
              />
            </div>
          </RowItem>
        </div>
        <div className="item">
          <div className="edit_wrap" style={{ border: '1px solid red', boxSizing: 'border-box' }}>
            메일 에디터가 들어가는 영역입니다.
          </div>
        </div>
      </div>
      <div className="section txtcnt">
        <Button className="c_blue">{title}</Button>
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerWrite;
