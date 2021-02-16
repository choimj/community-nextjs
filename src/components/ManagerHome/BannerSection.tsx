import React from 'react';
import Slider from 'react-slick';
import {bannerList} from '../../data/Manager/dashboard';

const BannerSection = (): React.ReactElement => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  return (
    <div className="inner_box type_slick">
      <strong>
        코로나 19
        <br />
        WEHAGO와 함께 이겨내세요!
      </strong>
      <ul className="img_slick_box slick-initialized slick-slider">
        <Slider {...settings}>
          {bannerList.map(banner => {
            const {no, thumbnail, url} = banner;
            return (
              <li key={no}>
                <a href={url} >
                  <img src={thumbnail} alt={thumbnail}/>
                </a>
              </li>
            );
          })}
        </Slider>
      </ul>
    </div>
  );
};

export default BannerSection;
