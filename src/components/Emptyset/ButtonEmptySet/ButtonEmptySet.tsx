import React from 'react';

interface EmptysetProps {
  boldText: string;
  text: string;
  buttonText: string;
}

const ButtonEmptySet = ({ boldText, text, buttonText }: EmptysetProps): React.ReactElement => {
  return (
    <div className="bigdoor_empty">
      <div className="empty_area" style={{ margin: '90px 0' }}>
        <span className="ico bg">
          <img src="https://static.wehago.com/imgs/common/ico_nodata66.png" alt="EmptyImage" />
        </span>
        <strong className="bigdoor_empty_txt_v1">{boldText}</strong>
        <p className="bigdoor_empty_txt_v2">{text}</p>
        <button type="button" className="LD_btn c_blue">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ButtonEmptySet;
