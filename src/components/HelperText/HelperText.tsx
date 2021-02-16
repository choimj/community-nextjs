import React from 'react';
import classNames from 'classnames';

interface IHelperTextProps {
  leftText?: string | React.ReactElement;
  rightText?: string | React.ReactElement;
  defaultText?: string | React.ReactElement;
  error?: boolean;
}

const HelperText = ({leftText, rightText, defaultText, error = false}: IHelperTextProps): React.ReactElement => {
  let style = {};

  if (error) {
    style = {
      ...style,
      color: '#e73323',
    };
  }

  return (
    <div className="sub_text_box">
      <span className={classNames('sub_text', {fltlft: leftText})} style={style}>{leftText}</span>
      <span className={classNames('sub_text color_gray', {fltrgt: rightText})} style={style}>{defaultText ? defaultText : rightText}</span>
    </div>
  );
};

export default HelperText;
