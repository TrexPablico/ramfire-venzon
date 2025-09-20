import React from "react";
import banner from "../assets/Banner/banner1.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="w-full lg:mt-44 mt-20 h-[500px] bg-black relative flex items-center justify-center z-[-1]">
      <img
        src={banner}
        alt="banner"
        className="absolute object-cover top-0 left-0 w-full h-full z-[10]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[60]"></div>
      <div className="relative z-[70] flex flex-col gap-8 items-center">
        <span className="text-white primary-font max-w-[1200px] px-12 text-[45px]">
          "Ensure Fire Safety, Save Life, Save Property"
        </span>
        <span className="text-white font-medium text-lg z-[100] flex">
          <a
            href="https://www.facebook.com/RicardoCarl.Venzon"
            className="text-red-500 ml-2 mr-1"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Carl Venzon - CEO",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Ramon Carlito Venzon - Founder",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddinLeft: "5px" }}
              repeat={Infinity}
            />
          </a>{" "}
          |{" "}
          <a
            href="https://www.facebook.com/ramfireengineering"
            className=" ml-1"
          >
            Ramfire Protection Systems Corporation
          </a>
        </span>
      </div>
    </div>
  );
};

export default Banner;
