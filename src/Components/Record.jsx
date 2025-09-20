import React from "react";

const items = [
  { title: "Projects done", count: 150 },
  { title: "Hospitals", count: 30 },
  { title: "Hotels", count: 45 },
  { title: "Kitchens", count: 25 },
  { title: "Schools", count: 10 },
  { title: "Commercial Bldg", count: 20 },
];

const Record = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-center justify-between  lg:px-60 px-5 lg:mt-44 mt-20 lg:space-x-6 lg:gap-1 gap-8">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col lg:items-start items-center"
        >
          <span className="font-bold font-serif text-[75px] text-red-500 lg:text-left text-center">
            {item.count}
          </span>
          <span className="uppercase text-lightText font-serif text-[17px] tracking-[0.2em] lg:text-left text-center">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Record;
