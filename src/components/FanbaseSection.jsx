import React from "react";
import TheGallery from "./fanbase-gallery/TheGallery";
function FanbaseSection() {
  return (
    <div className="xs:text-balance">
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] mx-auto text-center">
        <h1 className="text-white font-bold text-xl xxs:text-2xl xs:text-3xl sm:text-5xl">
          JOIN TOP ARTISTS, BUILD YOUR{" "}
          <span className="text-primary">FANBASE</span>
        </h1>
        <p className="text-neutral-400 pt-4 xs:pt-6 xs:leading-7 text-sm sm:text-base">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced
        </p>
      </div>
      <div className="py-10 sm:py-20">
        <TheGallery />
      </div>
    </div>
  );
}

export default FanbaseSection;
