import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Competences from "./pages/about/competences/Competences";
import Diplomes from "./pages/about/diplomes/Diplomes";
import Contact from "./pages/Contact";
import Experiences from "./pages/experiences/Experiences";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import Portfolio from "../src/pages/portfolio/Portfolio";
import ExpProf from "../src/pages/experiences/ExpProf";
import ExpDescription from "./pages/experiences/ExpDescription";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/competences" element={<Competences />} />
          <Route path="/about/diplomes" element={<Diplomes />} />
        </Route>
        <Route path="/experiences" element={<Experiences />}>
          <Route index element={<ExpProf />} />
          <Route path="/experiences/professionnelles" element={<ExpProf />} />
          <Route path="/experiences/description" element={<ExpDescription />} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
