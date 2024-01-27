import React from "react";
import DavidoWebp from "../assets/images/davido-hero.webp";
import DavidoImage from "../assets/images/davido-hero.png";
import WomanWebp from "../assets/images/woman-hero.webp";
import WomanImage from "../assets/images/woman-hero.png";

function HeroSection() {
  return (
    <section className="relative mt-6 xxs:mt-10 xs:mt-16 px-3 xs:px-6 sm:px-12 lg:px-20 flex space-y-12 lg:space-y-0 flex-col lg:flex-row">
      {/* Text section */}
      <div className="lg:w-[60%] xl:w-auto xl:flex-1 text-center lg:text-left text-balance">
        <div className="">
          <h1 className="text-white font-bold text-xl xs:text-2xl sm:text-5xl lg:text-7xl  xl:w-auto">
            AN INNOVATIVE PLATFORM THAT
          </h1>
          <h1 className="text-primary font-bold text-xl xs:text-2xl sm:text-5xl lg:text-7xl xl:w-[90%]">
            SUPPORTS ARTISTS.
          </h1>
        </div>
        <p className="text-white pt-5 lg:w-[80%] xl:w-[70%] text-xs xs:text-base">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are{" "}
        </p>
        <p className="text-primary hover:text-white duration-200 cursor-pointer pt-6 w-fit mx-auto lg:mx-0 flex items-center space-x-3">
          <span>Try it now</span> <i class="fa-solid fa-arrow-right "></i>
        </p>
        {/* Image section */}
      </div>
      <div className="relative lg:static lg:flex-1 min-h-[20rem] xs:min-h-[34rem] lg:min-h-0">
        <picture className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:left-auto  lg:translate-x-0 lg:top-0 lg:right-0 w-[12rem] xs:w-[16rem]">
          <source srcSet={DavidoWebp} />
          <img src={DavidoImage} alt="Davido" />
        </picture>
        <div className="absolute top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:left-auto  lg:translate-x-0 lg:top-1/3 sm:mt-10 sm:-ml-16 w-[12rem] xs:w-[16rem] sm:w-[20rem]">
          <picture>
            <source srcSet={WomanWebp} />
            <img src={WomanImage} alt="Davido" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
