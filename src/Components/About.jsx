import React from "react";
import aboutImg1 from "../assets/About/about1.jpg";
import aboutImg2 from "../assets/About/about2.jpg";

const About = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-16 lg:mt-44 mt-20 lg:px-80 p-6 relative about z-[-1]">
        <div className="flex flex-col gap-3 self-start">
          <div className="flex items-center gap-2">
            <span className="w-[24px] h-[2px] bg-red-600"></span>
            <span className="text-lg text-lightText uppercase">About us</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold ">
              Learn more about our company
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-start flex-col md:flex-col lg:flex-row gap-12 mx-10">
        <img
          src={aboutImg1}
          alt="aboutImg1"
          className="w-full lg:w-[600px] h-[600px] object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium text-xl text-black mt-12">
            RAMFIRE ENGINEERING SYSTEM started out by offering plumbing,
            sanitary and mechanical services. Over time, the company expanded
            its offerings to include a wider range of construction services.
            Today, the company is capable of providing a variety of
            electro-mechanical specialty works, such as fire protection and
            suppression, plumbing and sanitation, and mechanical and
            air-conditioning systems. In fact, RAMFIRE ENGINEERING SYSTEM has
            even partnered with one of the largest construction firms in the
            country to provide top-quality plumbing and sanitary works.
          </span>
          <span className="text-lg text-disabled mt-6">
            RamFire Engineering System supplies fire protection and suppression
            equipment in the Philippines. Our products include gas suppression
            systems, fire alarm systems, sprinklers, valves, and control
            equipment for hotels, commercial and industrial buildings, and
            facilities. We also provide high-quality kitchen protection
            equipment for commercial food chains and industrial kitchens.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
