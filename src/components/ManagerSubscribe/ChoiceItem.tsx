import React from 'react';
import IconButton from './IconButton';
import { InputField } from '../InputField';

interface IChoiceItemProps {
  no: number;
  isParent?: boolean;
  isShowAddButton?: boolean;
  isShowMinusButton?: boolean;
  onClickDelete: (key: number) => void;
  onClickAdd: (key: number) => void;
}

const ChoiceItem = ({
  no,
  isParent = false,
  isShowAddButton = false,
  isShowMinusButton = true,
  onClickDelete,
  onClickAdd,
}: IChoiceItemProps): React.ReactElement => {
  return (
    <div className="in_box">
      <InputField
        type="text"
        name="input2"
        // onChange={handleChangeText}
        placeholder="입력하세요."
      />
      {isShowMinusButton && <IconButton type={isParent ? 'type_del' : 'type_minus'} onClick={() => onClickDelete(no)} />}
      {isShowAddButton && <IconButton type="type_add" onClick={() => onClickAdd(no)} />}
    </div>
  );
};

export default ChoiceItem;
