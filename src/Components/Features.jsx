import React from "react";
import Alarm from "../assets/Features/alarm.png";
import Gadget from "../assets/Features/gadget.png";
import Plumbing from "../assets/Features/plumbing.png";
import Sprinkler from "../assets/Features/sprinkler.png";

const Features = () => {
  const features = [
    {
      icon: Alarm,
      title: "Fire Detection & Alarm System",
      description:
        "Early fire detection and warning are crucial for fire safety. Fire detection and alarm systems play a vital role in this process.",
    },
    {
      icon: Gadget,
      title: "Ansul Kitchen Fire Suppression System",
      description:
        "The R-102 fire suppression system incorporates a flexible design with an extremely effective ANSULEX Low pH Liquid Agent.",
    },
    {
      icon: Plumbing,
      title: "Plumbing & Sanitary System",
      description:
        "Plumbing systems efficiently transport potable water to various building fixtures like kitchens and toilets through a robust network of pipes, ensuring seamless distribution.",
    },
    {
      icon: Sprinkler,
      title: "Fire Sprinkler System",
      description:
        "Installed in ceilings or walls, the system includes a water supply, piping, and sprinkler heads. It automatically discharges water upon detecting a fire, controlling or extinguishing it.",
    },
  ];
  return (
    <div className="w-full flex lg:flex-row md:flex-col flex-col items-center justify-between lg:px-[20px] px-5 lg:gap-2  gap-12 services xl:mt-[350px] lg:mt-[500px] md:mt-[300px] mt-[200px]">
      {features.map((feature) => (
        <div key={feature.title} className="flex flex-col items-center gap-3">
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-[71px] justify-center"
          />
          <span className="text-black text-[22px] font-bold text-center">
            {feature.title}
          </span>
          <p className="text-gray-600 text-lg max-w-[400px] lg:text-left text-center">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
