import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Data from "./components/data";
import BatteryStatus from "./components/battery";
import DisplayData from "./components/DisplayData";
import Det from "./components/det";

import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <DisplayData/>
      <BatteryStatus/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data" element={<Data />} />
          <Route path="/det" element={<Det/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
