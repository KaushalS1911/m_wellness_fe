import React from 'react';
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutHeroSection2 from "../components/about/AboutHeroSection2";
import Therapist from "../components/about/Therapist";
import LetestReviews from "../components/about/LetestReviews";
import Socialimpact from "../components/about/Socialimpact";
import OurTeam from "../components/about/OurTeam";

function About(props) {
    return (
        <div>
            <AboutHeroSection/>
            <AboutHeroSection2/>
            <Therapist/>
            <LetestReviews />
            <Socialimpact />
            <OurTeam />
        </div>
    );
}

export default About;