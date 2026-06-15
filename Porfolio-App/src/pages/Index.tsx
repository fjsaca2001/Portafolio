import Home from "./Home";
import AboutMe from "./AboutMe";
import WhatIDo from "./WhatIDo";
import Project from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Cv from "./Cv";
import Footer from "./Footer";
import { Box } from "@mui/material";

function Index() {
  return (
    <>
      <Box id="Home">
        <Home />
      </Box>
      <Box id="AboutMe" className="seccion">
        <AboutMe />
      </Box>
      <Box id="WhatIDo" className="seccion">
        <WhatIDo />
      </Box>
      <Box id="Skills" className="seccion">
        <Skills />
      </Box>
      <Box id="Cv">
        <Cv />
      </Box>
     <Box id="Project" className="section">
        <Project />
      </Box>
      <Box id="Contact" className="section">
        <Contact />
      </Box>
      <Box id="Footer">
        <Footer />
      </Box>
    </>
  );
}

export default Index;
