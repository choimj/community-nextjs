import React, { useState } from 'react';
import _ from 'lodash';
import ManagerContentTemplate from '../ManagerContentTemplate';
import { InfoSection, InfoTitle, InfoContent } from '../InfoSection';
import RadioButton from '../RadioButton';
import TextArea from '../TextArea';
import { SelectField, Option } from '../SelectField';
import HelperText from '../HelperText';

import Button from '../Button';
import SubscribeQuestionItem from './SubscribeQuestionItem';

/**
 * NOTE 구독질문 type
 * 1. 주관식
 * 2. 객관식 단일
 * 3. 객관식 다수
 */

const ManagerSubscribe = (): React.ReactElement => {
  const [questions, setQuestions] = useState([{ no: 1, type: 1, title: '', choices: [{ no: 1, label: '' }] }]);

  const handleChangeGrade = (key: number | string, value: string) => {
    console.log({ key, value });
  };

  const handleChangeQuestionOption = (no: number, key: number | string) => {
    const _questions = questions.map((question) => {
      if (question.no === no) {
        return {
          ...question,
          type: key as number,
        };
      } else {
        return question;
      }
    });

    setQuestions([..._questions]);
  };

  // 항목추가
  const handleClickAddQuestion = (key: number) => {
    const _questions = questions;
    const maxNo = _.maxBy(questions, 'no')?.no ?? 0;
    const index = questions.findIndex((question) => question.no === key);
    _questions.splice(index + 1, 0, { no: maxNo + 1, type: 1, title: '', choices: [{ no: 1, label: '' }] });
    setQuestions([..._questions]);
  };

  // 항목삭제
  const handleClickDeleteQuestion = (key: number) => {
    setQuestions(questions.filter((question) => question.no !== key));
  };

  // 객관식 답안 추가
  const handleClickAddChoice = (parent: number, key: number) => {
    const selectedItem = questions.find((question) => question.no === parent);
    if (selectedItem) {
      const { no, choices } = selectedItem;
      const maxChoiceNo = _.maxBy(choices, 'no')?.no ?? 0;
      const index = choices.findIndex((question) => question.no === key);
      choices.splice(index + 1, 0, { no: maxChoiceNo + 1, label: '' });

      const newQuestions = questions.map((question) => {
        if (question.no === no) {
          return {
            ...question,
            choices,
          };
        } else {
          return question;
        }
      });
      setQuestions([...newQuestions]);
    }
  };
  // 객관식 답안 삭제
  const handleClickDeleteChoice = (parent: number, key: number) => {
    const selectedItem = questions.find((question) => question.no === parent);
    if (selectedItem) {
      const { no, choices } = selectedItem;
      const _newChoices = choices.filter((choice) => choice.no !== key);

      const newQuestions = questions.map((question) => {
        if (question.no === no) {
          return {
            ...question,
            choices: _newChoices,
          };
        } else {
          return question;
        }
      });
      setQuestions([...newQuestions]);
    }
  };

  return (
    <ManagerContentTemplate>
      <div className="section type_form">
        <InfoSection>
          <InfoTitle title="구독신청" isRequired={true} />
          <InfoContent>
            <div className="radio_box">
              <RadioButton label="구독신청 받기" name="radio1" value="" />
              <RadioButton label="바로 구독" name="radio1" value="" style={{ marginLeft: 14 }} />
            </div>
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="구독안내" isRequired={true} />
          <InfoContent>
            <TextArea
              name="textarea1"
              rows={5}
              cols={1}
              placeholder="구독안내 정보를 입력하세요."
              helperText="입력된 구독안내가 없는 경우 해당 정보는 표현되지 않습니다."
              showCount
              maxLength={100}
            />
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="구독질문" isRequired={true} />
          <InfoContent>
            <div className="radio_box">
              <RadioButton label="가입질문 사용" name="radio2" value="" />
              <RadioButton label="가입질문 미사용" name="radio2" value="" style={{ marginLeft: 14 }} />
            </div>
            <dl className="status_list">
              {questions.map((question) => {
                return (
                  <SubscribeQuestionItem
                    key={question.no}
                    question={question}
                    onChange={handleChangeQuestionOption}
                    onClickAddQuestion={handleClickAddQuestion}
                    onClickDeleteQuestion={handleClickDeleteQuestion}
                    onClickAddChoice={handleClickAddChoice}
                    onClickDeleteChoice={handleClickDeleteChoice}
                  />
                );
              })}
            </dl>
          </InfoContent>
        </InfoSection>
        <InfoSection>
          <InfoTitle title="구독 시 등급" isRequired={true} />
          <InfoContent>
            <SelectField defaultValue="1" onChange={handleChangeGrade} style={{ width: '200px' }}>
              <Option value="1">준회원</Option>
            </SelectField>
            <HelperText defaultText="커뮤니티 구독 시 자동부여될 멤버등급을 선택합니다." />
          </InfoContent>
        </InfoSection>
      </div>
      <div className="section txtcnt">
        <Button className="c_blue">저장하기</Button>
      </div>
    </ManagerContentTemplate>
  );
};

export default ManagerSubscribe;
