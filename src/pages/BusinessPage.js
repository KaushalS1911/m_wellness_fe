import React from "react";
import HeroSection from "../components/business/HeroSection";
import ClinicalApproach from "../components/business/Clinical-approach";
import Slider from "../components/business/Slider";
import StandardIndustry from "../components/business/StandardIndustry";
import { Box } from "@mui/material";
import HitrustCertified from "../components/business/HitrustCertified";
import Slider2 from "../components/business/Slider2";

function BusinessPage() {
  return (
    <>
      <Box sx={{ backgroundColor: "#FFFCF6" }}>
        <HeroSection />
        <Slider />
        <ClinicalApproach />
        <StandardIndustry />
        <HitrustCertified />
        <Slider2 />
      </Box>
    </>
  );
}

export default BusinessPage;
