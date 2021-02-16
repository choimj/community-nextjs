import React from 'react';

const ImgBox = (): React.ReactElement => {
  return (
    <div className="represent_img_box">
      <img src="//via.placeholder.com/150x150/ff0000" alt="ff0000"/>
      <button type="button" className="btn_del"><span className="blind">삭제</span></button>
      <button type="button" className="btn_change">이미지 변경하기</button>
    </div>
  );
};

export default ImgBox;
