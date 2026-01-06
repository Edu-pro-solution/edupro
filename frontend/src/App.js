import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Services from "./pages/Services";

import Innovate from "./pages/Innovate";
import PageTitleSetter from "./pages/PageTitleSetter";
import Pin from "./pages/Pin";
import Mobile from "./pages/Mobile";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PageTitleSetter />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/services" element={<Services />} />
          <Route path="/download" element={<Download />} />
          <Route path="/mobile-app" element={<Mobile />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/innovation" element={<Innovate />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
