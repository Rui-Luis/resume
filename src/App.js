import React from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
