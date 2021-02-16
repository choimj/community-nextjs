import React from 'react';
import classNames from 'classnames';

interface Text {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

const DefaultEmptySet = ({ text, style = {}, className = 'v7' }:Text): React.ReactElement => {
  return (
    <div className="empty_area">
      <span className="ico bg">
        <img src="https://static.wehago.com/imgs/common/ico_nodata66.png" alt="EmptyImage" style={style}/>
      </span>
      <p className={classNames('empty_txt', className)}>{text}</p>
    </div>
  );
};

export default DefaultEmptySet;
