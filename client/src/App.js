import React from "react";
// First we import our Hello component from our components folder.
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import ContactMe from "./components/contact/ContactMe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
