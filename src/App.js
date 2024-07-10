import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/global/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import BusinessPage from "./pages/BusinessPage";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import GetStarted from "./pages/getStarted/GetStarted";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="business" element={<BusinessPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="getStarted" element={<GetStarted />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
