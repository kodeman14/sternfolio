import React from "react";

import AboutMe from "./meatybones/AboutMe";
import Resume from "./meatybones/Resume";
import Skills from "./meatybones/Skills";
import Projects from "./meatybones/Projects";

import {
  personalData,
  projectData,
  resumeData,
  skillsData,
} from "../data/index";

function Home() {
  return (
    <>
      <AboutMe jsonData={personalData} />
      <Resume jsonData={resumeData} />
      <Skills jsonData={skillsData} />
      <Projects jsonData={projectData} />
    </>
  );
}

export default Home;
