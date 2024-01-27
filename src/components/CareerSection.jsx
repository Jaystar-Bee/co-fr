import React, { useState } from "react";
import CareerPeopleImage from "../assets/images/career-people.png";
import CareerPeopleWebp from "../assets/images/career-people.webp";
import list from "../data/list";

function CareerSection() {
  //   const [list, _] = useState();

  return (
    <div className="flex flex-col-reverse lg:flex-row  items-center gap-5 text-neutral">
      <div className="flex-1 mt-6 lg:mt-0">
        <picture>
          <source srcSet={CareerPeopleWebp} type="image/webp" />
          <img
            src={CareerPeopleImage}
            alt="career"
            className="w-[80%] mx-auto lg:mx-0"
          />
        </picture>
      </div>
      <div className="flex-1">
        <div className="lg:w-[90%] xl:w-[80%] mx-auto sm:text-balance text-center lg:text-left xl:text-normal">
          <h1 className="font-bold text-xl xxs:text-2xl xs:text-3xl sm:text-5xl">
            YOUR CAREER IS IN YOUR HANDS
          </h1>
          <ul className="text-sm sm:text-base">
            {list.map((item) => (
              <li key={item.id} className="mt-6">
                <p>{item.title}</p>
              </li>
            ))}
          </ul>

          <p className="w-fit text-sm sm:text-base mx-auto lg:mx-0 cursor-pointer hover:text-primary-700 duration-200 pt-8 flex items-center space-x-3">
            <span>Try it now</span> <i class="fa-solid fa-arrow-right "></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerSection;
