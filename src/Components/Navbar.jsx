import React, { useState } from "react";
import logo from "../assets/Navbar/logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({
  scrollToSection,
  aboutRef,
  projectsRef,
  servicesRef,
  contactRef,
}) => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const navItems = [
    { title: "Home", ref: null },
    { title: "About", ref: aboutRef },
    { title: "Projects", ref: projectsRef },
    { title: "Services", ref: servicesRef }, // Update if you have a Services section
    { title: "Contact", ref: contactRef },
  ];

  return (
    <>
      <div className="w-full fixed top-0 left-0 lg:px-12 p-5 lg:h-24 h-20 border-b border-navBorder flex items-center justify-between bg-white shadow-md z-50 pl-1">
        <img className="w-[180px]" src={logo} alt="logo" />
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.title}
              onClick={() => item.ref && scrollToSection(item.ref)}
              className={`${
                item.ref ? "cursor-pointer" : ""
              } font-semibold text-lg`}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="lg:hidden flex items-center pr-5">
          {dropdown ? (
            <div
              onClick={showDropdown}
              className="text-[22px] cursor-pointer text-black"
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="text-[22px] cursor-pointer text-black"
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
      </div>
      <div
        className={`lg:hidden w-full fixed top-20 bg-gray-800 transition-all duration-300 ${
          dropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-full flex flex-col items-baseline gap-4">
          <ul className="flex flex-col justify-center w-full">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  onClick={() => {
                    if (item.ref) {
                      scrollToSection(item.ref);
                      showDropdown();
                    }
                  }}
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid cursor-pointer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
