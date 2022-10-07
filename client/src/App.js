import React from "react";
// First we import our Hello component from our components folder.
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Main />;
      break;
    case "/projects":
      component = <Projects />;
      break;
    case "/contact":
      // component = <ContactMe/>;
      break;
    case "/resume":
      component = <Resume />;
      break;
  }
  return (
    <>
      <NavBar />
      {component}
      <Footer />
    </>
  );
}

export default App;
