import React, { useState } from "react";
import proj1 from "../assets/Projects/proj1.png";
import proj2 from "../assets/Projects/proj2.png";
import proj3 from "../assets/Projects/proj3.png";
import proj4 from "../assets/Projects/proj4.png";
import proj5 from "../assets/Projects/proj5.png";
import proj6 from "../assets/Projects/proj6.png";
import proj7 from "../assets/Projects/proj7.png";
import proj8 from "../assets/Projects/proj8.png";
import proj9 from "../assets/Projects/proj9.png";
import proj10 from "../assets/Projects/proj10.png";
import proj11 from "../assets/Projects/proj11.png";
import proj12 from "../assets/Projects/proj12.png";
import proj13 from "../assets/Projects/proj13.png";
import proj14 from "../assets/Projects/proj14.png";
import proj15 from "../assets/Projects/proj15.png";
import proj16 from "../assets/Projects/proj16.png";
import proj17 from "../assets/Projects/proj17.png";
import proj18 from "../assets/Projects/proj18.png";
import proj19 from "../assets/Projects/proj19.png";
import proj20 from "../assets/Projects/proj20.png";
import proj21 from "../assets/Projects/proj21.png";
import proj22 from "../assets/Projects/proj22.png";
import proj23 from "../assets/Projects/proj23.png";
import proj24 from "../assets/Projects/proj24.png";
import proj25 from "../assets/Projects/proj25.png";
import proj26 from "../assets/Projects/proj26.png";
import proj27 from "../assets/Projects/proj27.png";
import proj28 from "../assets/Projects/proj28.png";
import proj29 from "../assets/Projects/proj29.png";
import proj30 from "../assets/Projects/proj30.png";
import proj31 from "../assets/Projects/proj31.png";
import proj32 from "../assets/Projects/proj32.png";
import proj33 from "../assets/Projects/proj33.png";
import proj34 from "../assets/Projects/proj34.png";
import proj35 from "../assets/Projects/proj35.png";
import proj36 from "../assets/Projects/proj36.png";
import proj38 from "../assets/Projects/proj38.png";

const Projects = () => {
  const [categories, setCategories] = useState([
    { title: "All", active: true },
    { title: "Automatic Fire Sprinkler System", active: false },
    { title: "Plumbing and Sanitary", active: false },
    { title: "Electrical Works", active: false },
    { title: "Mechanical and Ducting Works", active: false },
    { title: "FM200 Fire Suppression System", active: false },
    { title: "Ansul R-102 Kitchen Fire Suppression System", active: false },
    { title: "Fire Detection and Alarm System", active: false },
    { title: "Co2 Fire Suppression System", active: false },
  ]);

  const projects = [
    {
      project: "Philippine Children’s Medical Center, Diliman, Quezon City",
      title: "FM200 Fire Suppression System",
      image: proj1,
    },
    {
      project:
        "St. Cabrini Medical Center & Cancer Institute, Sto Thomas, Batangas",
      title:
        "Sprinkler System, Plumbing and Sanitary, Fire Detection and Alarm System",
      image: proj2,
    },
    {
      project: "St. Lukes Medical Center, BGC Taguig",
      title: "Plumbing and Sanitary",
      image: proj3,
    },
    {
      project: "Allied Care Experts Medical Center, Malolos, Bulacan",
      title: "FM200 Fire Suppression System",
      image: proj4,
    },
    {
      project: "Allied Care Experts Medical Center, Puerto Princesa, Palawan",
      title: "FM200 Fire Suppression System",
      image: proj5,
    },
    {
      project: "Citystate Asrturias Hotel Palawan",
      title: "Automatic Fire Sprinkler System, Fire Detection and Alarm System",
      image: proj6,
    },
    {
      project: "San Juan City Hall of Justice",
      title: "Automatic Fire Sprinkler System, Fire Detection and Alarm System",
      image: proj7,
    },
    {
      project: "Herra Hotel Boracay",
      title: "Plumbing and Sanitary",
      image: proj8,
    },
    {
      project: "The Stadium Shopping Strip, Naic, Cavite",
      title: "Plumbing and Sanitary",
      image: proj9,
    },
    {
      project: "Filinvest MIMOSA Plus (Retail & Strip)",
      title: "Plumbing and Sanitary",
      image: proj10,
    },
    {
      project: "Studio City (tower 4 & 5) | Aspire by Filinvest",
      title: "Plumbing and Sanitary, : Mechanical and Ducting Works",
      image: proj11,
    },
    {
      project: "Citadines Roces 27 Storey Service Apartment, Quezon City",
      title: "Automatic Fire Sprinkler System, Plumbing and Sanitary",
      image: proj12,
    },
    {
      project: "Fibrefill Manufacturing Inc. Garments Warehouse, Taytay, Rizal",
      title: "Automatic Fire Sprinkler System, Plumbing and Sanitary",
      image: proj13,
    },
    {
      project: "StoneCraft - 18 Storey Building, Quezon City",
      title: "Automatic Fire Sprinkler System, Plumbing and Sanitary",
      image: proj14,
    },
    {
      project:
        "Professional Regulation Comission Bldg. 10 Storey Building, Pasay City",
      title: "Automatic Fire Sprinkler System",
      image: proj15,
    },
    {
      project: "Ace Medical Center Sta. Maria",
      title:
        "Electrical Works, Plumbing and Sanitary, Automatic Fire Sprinkler System",
      image: proj16,
    },
    {
      project: "Westin Sonata, Ortigas Center, Pasig",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj17,
    },
    {
      project: "Twin Lakes Hotel, Tagaytay",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj18,
    },
    {
      project: "Admiral Hotel, Manila",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj19,
    },
    {
      project: "Seda Vertis North, Quezon City",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj20,
    },
    {
      project: "Seda Hotel, BGC",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj21,
    },
    {
      project: "Seda Lio, Palawan",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj22,
    },
    {
      project: "Shangri-La, BGC",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj23,
    },
    {
      project: "Shangri-La, Makati",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj24,
    },
    {
      project: "Dusit Thani, Davao",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj25,
    },
    {
      project: "Crimson Hotel, Cebu",
      title: "Ansul R-102 Kitchen Fire Suppression System",
      image: proj26,
    },
    {
      project: "Lind Hotel, Boracay",
      title: "Automatic Fire Sprinkler System, Fire Detection and Alarm System",
      image: proj27,
    },
    {
      project: "11/88 Shopping Mall, Binondo Manila",
      title: "Automatic Fire Sprinkler System, Fire Detection and Alarm System",
      image: proj28,
    },
    {
      project: "Ferra Hotel 2, Boracay",
      title: "Automatic Fire Sprinkler System, Fire Detection and Alarm System",
      image: proj29,
    },
    {
      project: "Quad Aero Park - Tower 1 & 2, Clark Pampanga",
      title: "Automatic Fire Sprinkler System, Fire Detection and Alarm System",
      image: proj30,
    },
    {
      project: "Maxx Hotel",
      title: "Automatic Fire Sprinkler System, Fire Detection and Alarm System",
      image: proj31,
    },
    {
      project: "Isuzu Philippines Corp.",
      title: "Co2 Fire Suppression System",
      image: proj32,
    },
    {
      project: "Kawasaki Motors",
      title: "Co2 Fire Suppression System",
      image: proj33,
    },
    {
      project: "Traders Hotel",
      title: "Co2 Fire Suppression System",
      image: proj34,
    },
    {
      project: "Pacific Star Bldg.",
      title: "Co2 Fire Suppression System",
      image: proj35,
    },
    {
      project: "Edsa Shangri-La",
      title: "Co2 Fire Suppression System",
      image: proj36,
    },
    {
      project: "Makati Shangri-La",
      title: "Co2 Fire Suppression System",
      image: proj24,
    },
    {
      project: "CEM, Inc. Bldg.",
      title: "Co2 Fire Suppression System",
      image: proj38,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projectsToShow, setProjectsToShow] = useState(3);

  const handleClick = (title) => {
    setSelectedCategory(title);
    setProjectsToShow(3); // Reset projectsToShow when category is changed
  };

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.title.includes(selectedCategory));

  // Function to incrementally show more projects
  const showMoreProjects = () => {
    setProjectsToShow((prev) => prev + 3);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 lg:mt-44 mt-20 lg:px-80 p-5">
      <div className="flex flex-col gap-3 self-start">
        <div className="flex items-center gap-2">
          <span className="w-[24px] h-[2px] bg-red-600"></span>
          <span className="text-lg text-lightText uppercase">Our Projects</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold ">Explore our work</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-between overflow-x-auto">
        <div className="flex items-center gap-11 lg:pb-0 pb-3">
          {categories.map((item) => (
            <div
              key={item.title}
              onClick={() => handleClick(item.title)}
              className={`${
                item.title === selectedCategory
                  ? "text-red-600"
                  : "text-disabled"
              } text-lg font-medium cursor-pointer whitespace-nowrap`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {filteredProjects.slice(0, projectsToShow).map((project) => (
          <div key={project.project} className="max-w-xs">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover"
            />
            <p className="text-lg font-medium mt-2">{project.project}</p>
            <p className="text-sm">{project.title}</p>
          </div>
        ))}
      </div>
      {filteredProjects.length > projectsToShow && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreProjects}
            className="text-lg font-medium text-red-600 cursor-pointer"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
