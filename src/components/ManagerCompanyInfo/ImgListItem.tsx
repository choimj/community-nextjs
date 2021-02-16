import React from 'react';

interface IImgListItemProps {
  type?: string;
  src?: string;
}

const ImgListItem = ({ type = 'button', src }: IImgListItemProps): React.ReactElement => {
  return (
    <>
      {type === 'img' && <img src={src} alt="img" />}
      <button type="button">
        <span className="btn_img" />
      </button>
    </>
  );
};

export default ImgListItem;
