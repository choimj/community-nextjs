import React from 'react';

interface ISkinThumbnailBoxProps {
  showButton?: boolean;  
  children?: React.ReactChild | React.ReactChild[];
}

const SkinThumbnailBox = ({showButton = false, children}: ISkinThumbnailBoxProps): React.ReactElement => {
  return (
    <div className="skin_box">
      <div className="img_box">
        <img src="//via.placeholder.com/278x160/ff0000" alt="ff0000" />
        {showButton && (
          <>
            <button type="button">스킨 변경하기</button>
            <div className="dim" />
          </>
        )}     
      </div>
      <div className="text_box">
        {children}
      </div>
    </div>
  );
};

export default SkinThumbnailBox;
