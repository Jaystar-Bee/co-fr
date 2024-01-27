import React from "react";

const socials = [
  {
    name: "twitter",
    url: "https://twitter.com",
  },
  {
    name: "instagram",
    url: "https://instagram.com",
  },
  {
    name: "Discord",
    url: "https://linkedin.com",
  },
];
const others = [
  {
    name: "Cookies",
    url: "https://twitter.com",
  },
  {
    name: "Licenses",
    url: "https://instagram.com",
  },
  {
    name: "Contact",
    url: "https://linkedin.com",
  },
];

function TheFooter() {
  return (
    <div>
      <div className="text-white flex flex-col sm:flex-row sm:justify-between sm:items-center py-10 sm:py-20">
        <div>
          <h1 className="text-xl md:text-2xl  font-bold pb-8">
            <span className="block">SHORT LINE ABOUT US</span>THREE WORDS HERE
          </h1>
          <p>Short sentence here</p>
        </div>
        <div className="font-semibold flex sm:items-center justify-between space-x-6 sm:space-x-10 lg:space-x-20 mt-10 sm:mt-0">
          <div className="text-xl md:text-2xl font-bold">
            <h2>CONNECT</h2>
            <h2>WITH</h2>
            <h2>US</h2>
          </div>
          <ul>
            {socials.map((social, index) => (
              <li
                key={index}
                className="mb-3 last:mb-0 text-xs xs:text-sm sm:text-base hover:text-neutral-200 duration-200"
              >
                <a
                  href={social.url}
                  className="flex items-center space-x-[3px]"
                >
                  <p>{social.name}</p>
                  <span className="-rotate-[20deg] text-xs">
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {others.map((other, index) => (
              <li
                key={index}
                className="mb-3 last:mb-0 text-xs xs:text-sm sm:text-base hover:text-neutral-200 duration-200"
              >
                <a href={other.url} className=" flex items-start space-x-[3px]">
                  <p>{other.name}</p>
                  <span className="-rotate-[20deg] text-xs">
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t text-[10px] xs:text-xs sm:text-sm lg:text-base border-neutral-200 text-neutral-200 pt-6 pb-12 flex flex-col xs:flex-row  items-center justify-between">
        <div className="flex items-center space-x-2 xs:space-x-6 sm:space-x-10">
          <div className="flex items-center space-x-[2px] xs:space-x-3 sm:space-x-5">
            <p>2022</p>
            <span className="w-1 h-1 bg-neutral-200 rounded-full"></span>
            <p> PLATFORM</p>
          </div>
          <p>2022</p>
        </div>

        <ul className="flex items-center space-x-5 sm:space-x-10">
          <li>TERMS & CONDITIONS</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </div>
    </div>
  );
}

export default TheFooter;
