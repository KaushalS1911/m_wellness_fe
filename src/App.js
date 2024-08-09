import React, {useEffect} from "react";
import Home from "./pages/home/Home";
import Header from "./components/global/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import BusinessPage from "./pages/BusinessPage";
import { Route, Routes,useLocation } from "react-router-dom";
import Contact from "./components/contact/Contact";
import GetStarted from "./pages/getStarted/GetStarted";
import MainFaqs from "./pages/faqs/MainFaqs";
import Advice from "./pages/advice/Advice";
import PointTable from "./pages/PointTable";
import GetStartedHome from "./pages/getStarted/getStartedHome/GetStartedHome";
import GetStartedForm from "./pages/getStarted/getStartedForm/GetStartedForm";
import StartAssessment from "./pages/getStarted/startAssessment/StartAssessment";
import {Box} from "@mui/material";
import MentalHealthAssessment from "./pages/home/MentalHealthAssessment";

export default function App() {
    function ScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }
  return (
    <>
      <Header />
        <ScrollToTop />
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/" element={<MentalHealthAssessment />} />
        <Route path="/emotional" element={<GetStartedHome />} />
        <Route path="/assessment/:id" element={<PointTable />} />
        {/*<Route path="about" element={<About />} />*/}
        {/*<Route path="business" element={<BusinessPage />} />*/}
        {/*<Route path="contact" element={<Contact />} />*/}
        <Route path="assessment" element={<GetStarted />} />
        <Route path="consent-form" element={<GetStartedHome />} />
        <Route path="assessment-form" element={<GetStartedForm />} />
        <Route path="start-assessment" element={<StartAssessment />} />

        {/*<Route path="faq" element={<MainFaqs />} />*/}
        {/*<Route path="advice" element={<Advice />} />*/}
      </Routes>

      {/*<Footer />*/}
        <Box sx={{fontSize:"20px",py:5,textAlign:"center",fontWeight:"600",px: {md:5,xs:1}}} className={"overpass"}>Mahadevasth Technologies or any of their employees and associates are not into providing any Suicide Prevention. For any such emergency or help, kindly connect with National Suicide Helpline/TeleManas: 1-800-8914416</Box>
    </>
  );
}

