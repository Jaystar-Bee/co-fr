import React, { useEffect, useRef } from "react";
import ImageOne from "../assets/images/quote/quote-image-1.png";
import ImageTwo from "../assets/images/quote/quote-image-2.png";
import ImageThree from "../assets/images/quote/quote-image-3.png";
import ImageOneWebp from "../assets/images/quote/quote-image-1.webp";
import ImageTwoWebp from "../assets/images/quote/quote-image-2.webp";
import ImageThreeWebp from "../assets/images/quote/quote-image-3.webp";

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
];

function QuoteSection() {
  const imageRef = useRef(null);
  const targetNode = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          imageRef.current.classList.add("translate-x-0");
        } else {
          imageRef.current.classList.remove("translate-x-0");
        }
      },
      {
        rootMargin: "20px",
        threshold: 1.0,
      }
    );
    observer.observe(targetNode.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative h-[22rem] xs:h-[32rem] sm:h-[70dvh] bg-[url('./assets/images/quote/aystar-quote.jpeg')] bg-cover overflow-hidden">
      <div className="absolute bottom-5 pl-3 xs:pl-6 sm:pl-12 lg:pl-20 w-full flex items-end xs:items-center justify-between">
        <div className="xs:flex-1 relative z-10">
          <h1 className="text-white text-lg xxs:text-xl xs:text-2xl sm:text-3xl xl:text-4xl font-bold xs:w-[75%] lg:w-[60%]">
            ‘‘WE HELP ARTISTS FIND THEIR FANS’’
          </h1>
          <p
            ref={targetNode}
            className="text-neutral-400 pt-2 xs:pt-10 xl:pt-16 sm:w-[75%] lg:w-[60%] text-xs xxs:text-sm xs:text-base"
          >
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced{" "}
          </p>
        </div>
        <div
          ref={imageRef}
          className="xs:flex-1 flex justify-end space-x-4 items-center translate-x-[500px] duration-500"
        >
          {images.map((item, index) => (
            <picture key={index}>
              <source srcSet={item.webp} type="image/webp" />
              <img src={item.image} alt="quote" className="" />
            </picture>
          ))}
        </div>
      </div>
      {/* Cover */}
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-black/40 to-black"></div>
    </div>
  );
}

export default QuoteSection;
