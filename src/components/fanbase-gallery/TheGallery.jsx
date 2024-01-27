import React from "react";
import style from "./TheGallery.module.css";

import ImageOne from "../../assets/images/fanbase/star-image-1.png";
import ImageTwo from "../../assets/images/fanbase/star-image-2.png";
import ImageThree from "../../assets/images/fanbase/star-image-3.png";
import ImageFour from "../../assets/images/fanbase/star-image-4.png";
import ImageFive from "../../assets/images/fanbase/star-image-5.png";
import ImageOneWebp from "../../assets/images/fanbase/star-image-1.webp";
import ImageTwoWebp from "../../assets/images/fanbase/star-image-2.webp";
import ImageThreeWebp from "../../assets/images/fanbase/star-image-3.webp";
import ImageFourWebp from "../../assets/images/fanbase/star-image-4.webp";
import ImageFiveWebp from "../../assets/images/fanbase/star-image-5.webp";

function TheGallery() {
  const images = [
    {
      image: ImageOne,
      webp: ImageOneWebp,
    },
    {
      image: ImageTwo,
      webp: ImageTwoWebp,
    },
    {
      image: ImageThree,
      webp: ImageThreeWebp,
    },
    {
      image: ImageFour,
      webp: ImageFourWebp,
    },
    {
      image: ImageFive,
      webp: ImageFiveWebp,
    },
  ];
  return (
    <div className="relative">
      <div className="grid grid-cols-5 gap-4 h-24 xs:h-60 lg:h-80">
        {images.map((item, index) => (
          <picture key={index} className="relative flex justify-center">
            <source srcSet={item.webp} type="image/webp" />
            <img
              src={item.image}
              alt="star"
              className={`absolute h-10 xs:h-20 sm:h-[120px] lg:h-40 ${
                index % 2 === 0
                  ? "top-0 " + style.up__down_animation
                  : "bottom-0 " + style.down__up_animation
              }`}
            />
          </picture>
        ))}
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-black/80  via-transparent to-black/80 top-0"></div>
    </div>
  );
}

export default TheGallery;
