import React from "react";
import ChartImage from "../assets/images/chart-image.png";
import ChartWebp from "../assets/images/chart-image.webp";
import list from "../data/list";

function StartSection() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Text */}
      <div className="flex-1 bg-primary-300 bg-[url('./assets/images/drum-frame.svg')] py-12 xxs:py-20 sm:py-32">
        <div className="w-[90%] xs:w-[85%] sm:w-[75%] mx-auto">
          <h1 className="font-bold text-xl xxs:text-2xl xs:text-3xl sm:text-5xl">
            USE YOUR STATS TO MAKE MOVES
          </h1>
          <ul>
            {list.map((item) => (
              <li key={item.id} className="mt-4 xxs:mt-6 text-sm sm:text-base">
                <p>{item.title}</p>
              </li>
            ))}
          </ul>

          <p className="w-fit cursor-pointer hover:text-white duration-200 text-sm sm:text-base pt-3 xs:pt-8 flex items-center space-x-3">
            <span>Try it now</span> <i class="fa-solid fa-arrow-right "></i>
          </p>
        </div>
      </div>
      {/* picture section */}
      <div className="flex-1 bg-black py-20 sm:py-10 flex justify-center items-center">
        <div className="relative w-[60%] mx-auto">
          <picture className="relative z-10">
            <source srcSet={ChartWebp} type="image/webp" className="" />
            <img src={ChartImage} alt="chart" />
          </picture>
          <div className="absolute w-full h-full bg-primary-400 top-4 -left-4 "></div>
        </div>
      </div>
    </div>
  );
}

export default StartSection;
