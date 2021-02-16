import React from 'react';

const MoreButton = (): React.ReactElement => {
  return (
    <button type="button" className="LD_btn d_image d_round">
      <span className="imgtext">더보기</span>
      <span className="imgitem sp_diana" style={{ width: 8, height: 4, backgroundPosition: '-55px -98px' }} />
    </button>
  );
};

export default MoreButton;
