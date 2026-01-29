import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
//import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <CssBaseline /> {/* eliminar bordes*/}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
