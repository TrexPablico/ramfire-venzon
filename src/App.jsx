import React, { useRef } from "react";
import "./index.css";
import Header from "./Components/Header";
import bg from "../src/assets/Backgorund/bg.png";
import hero from "../src/assets/Backgorund/hero.png";
import Features from "./Components/Features";
import About from "./Components/About";
import Brand from "./Components/Brand";
import Projects from "./Components/Projects";
import Banner from "./Components/Banner";
import Record from "./Components/Record";
import Contact from "./Components/Contact";
import Questions from "./Components/Questions";

const App = () => {
  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null); // Update if you have a Services section
  const contactRef = useRef(null);

  // Function to scroll to the given section
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col lg:mt-5 mt-40">
      <Header
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />
      <img
        src={bg}
        alt="abstractOne"
        className="absolute top-0 right-0 w-full h-full object-cover z-[-1] lg:block hidden"
      />
      <div className="flex w-full lg:flex-row flex-col-reverse items-center justify-between lg:mt-36 mt-5 lg:px-80 px-5">
        <div className="flex flex-col gap-6">
          <span className="text-secondary font-serif text-6xl lg:max-w-[500px] max-w-[95%] font-bold">
            <a
              href="https://www.facebook.com/ramfireengineering"
              className="text-red-500 "
            >
              Ramfire
            </a>{" "}
            Engineering <br /> Systems
          </span>
        </div>
        <img src={hero} alt="hero" className="w-[600px] h-auto" />
      </div>
      <section ref={servicesRef} id="features"></section>
      <Features />
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <Brand />
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <Banner />
      <Record />
      <Questions />
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
