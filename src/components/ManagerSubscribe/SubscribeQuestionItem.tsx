import React from 'react';
import { SelectField, Option } from '../SelectField';
import ChoiceItem from './ChoiceItem';
import ChoiceHelperText from './ChoiceHelperText';
import { Question } from '../../types_old/Subscribe';

interface ISubscribeQuestionItemProps {
  question: Question;
  onChange: (no: number, key: number | string, value: string) => void;
  onClickDeleteQuestion: (key: number) => void;
  onClickAddQuestion: (key: number) => void;
  onClickAddChoice: (parent: number, key: number) => void;
  onClickDeleteChoice: (parent: number, key: number) => void;
}

const SubscribeQuestionItem = ({
  question,
  onChange,
  onClickDeleteQuestion,
  onClickAddQuestion,
  onClickAddChoice,
  onClickDeleteChoice,
}: ISubscribeQuestionItemProps): React.ReactElement => {
  const { no, type, choices } = question;

  const handleChange = (key: number | string, value: string) => {
    onChange(no, key, value);
  };

  const handleClickAddChoice = (key: number) => {
    if (onClickAddChoice) {
      onClickAddChoice(no, key);
    }
  };

  const handleClickDeleteChoice = (key: number) => {
    if (onClickDeleteChoice) {
      onClickDeleteChoice(no, key);
    }
  };

  return (
    <div>
      <dt>
        <SelectField defaultValue={1} onChange={handleChange}>
          <Option value={1}>주관식</Option>
          <Option value={2}>객관식(단일)</Option>
          <Option value={3}>객관식(다수)</Option>
        </SelectField>
      </dt>
      <dd>
        <ChoiceItem no={no} isParent isShowAddButton onClickAdd={onClickAddQuestion} onClickDelete={onClickDeleteQuestion} />
        {type !== 1 && choices && (
          <>
            {choices.map((choice, index) => {
              const { no } = choice;
              return (
                <ChoiceItem
                  key={no}
                  no={no}
                  onClickAdd={handleClickAddChoice}
                  onClickDelete={handleClickDeleteChoice}
                  isShowAddButton
                  isShowMinusButton={index !== 0}
                />
              );
            })}
            <ChoiceHelperText value={choices.length} total={5} />
          </>
        )}
      </dd>
    </div>
  );
};

export default SubscribeQuestionItem;
