import React from "react";
import Navbar from "./Navbar";

const Header = ({
  scrollToSection,
  aboutRef,
  projectsRef,
  servicesRef,
  contactRef,
}) => {
  return (
    <div className="relative w-full">
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default Header;
