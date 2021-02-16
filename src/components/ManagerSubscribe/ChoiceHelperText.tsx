import React from 'react';

interface IMultipleChoiceHelperTextProps {
  value: number;
  total: number;
}

const MultipleChoiceHelperText = ({ value, total }: IMultipleChoiceHelperTextProps): React.ReactElement => {
  return (
    <div className="sub_text_box">
      <span className="sub_text color_gray fltrgt">
        객관식 보기는 최대 {total}
        건까지 등록가능합니다.
        <em>
          ({value}/{total})
        </em>
      </span>
    </div>
  );
};

export default MultipleChoiceHelperText;
