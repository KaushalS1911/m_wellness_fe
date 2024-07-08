import React from 'react';
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutHeroSection2 from "../components/about/AboutHeroSection2";
import Therapist from "../components/about/Therapist";

function About(props) {
    return (
        <div>
            <AboutHeroSection/>
            <Therapist/>
            <AboutHeroSection2/>
        </div>
    );
}

export default About;