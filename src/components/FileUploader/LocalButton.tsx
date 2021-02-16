import React from 'react';

const LocalButton = (): React.ReactElement => {
  return (
    <button type="button" className="LUX_basic_btn Default basic">
      <span className="sp_lux" style={{width: 11, height: 12, paddingRight: 3, verticalAlign: 'middle', backgroundPosition: '-232px -544px'}} />
      <span style={{verticalAlign: 'middle'}}>로컬파일업로드</span>
    </button>
  );
};

export default LocalButton;
