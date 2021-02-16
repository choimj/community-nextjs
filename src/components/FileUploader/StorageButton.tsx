import React from 'react';

const StorageButton = (): React.ReactElement => {
  return (
    <button type="button" className="LUX_basic_btn Default basic" style={{marginLeft: '-1px'}}>
      <span className="sp_lux" style={{width: 17, height: 12, paddingRight: 3, verticalAlign: 'middle', backgroundPosition: '-253px -544px'}} />
      <span style={{verticalAlign: 'middle'}}>스토리지파일선택</span>
    </button>
  );
};

export default StorageButton;
