import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Home from "../src/Components/Home/Home.jsx";
import About from "../src/Components/About/About.jsx";
import Team from "../src/Components/Team/Team.jsx";
import Department from "../src/Components/Department/Department.jsx";
import Events from "../src/Components/Events/Events.jsx";
import Contact from "../src/Components/Contact/Contact.jsx";
import Footer from "../src/Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/team"} element={<Team />} />
          <Route path={"/department"} element={<Department />} />
          <Route path={"/events"} element={<Events />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
