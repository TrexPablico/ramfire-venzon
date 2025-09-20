import React from "react";
import brand1 from "../assets/Brand/1.png";
import brand2 from "../assets/Brand/2.png";
import brand3 from "../assets/Brand/3.png";
import brand4 from "../assets/Brand/4.png";
import brand5 from "../assets/Brand/5.png";
import brand6 from "../assets/Brand/6.png";
import brand7 from "../assets/Brand/7.png";
import brand8 from "../assets/Brand/8.png";
import brand9 from "../assets/Brand/9.png";

const Brand = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-16 lg:mt-33 mt-20 lg:px-80 p-6 relative z[-1]">
        <div className="flex flex-col gap-3 self-start z-[-1]">
          <div className="flex items-center gap-2">
            <span className="w-[24px] h-[2px] bg-red-600"></span>
            <span className="text-lg text-lightText uppercase">
              Our Essentials
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold ">Brand Partners</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full bg-gray-100 z-[-1]">
        <section className="w-full flex flex-wrap justify-around gap-[45px] px-2 py-24 bg-gray-400 min-h-[500px]">
          <img
            src={brand1}
            alt="1"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={brand2}
            alt="2"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={brand3}
            alt="3"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={brand4}
            alt="4"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={brand5}
            alt="5"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={brand6}
            alt="6"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={brand7}
            alt="7"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={brand8}
            alt="8"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={brand9}
            alt="9"
            className="w-[144px] object-contain transform transition duration-300 ease-in-out hover:scale-110"
          />
        </section>
      </div>
    </>
  );
};

export default Brand;
