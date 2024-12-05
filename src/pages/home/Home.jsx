import React from 'react';
import HomeHerosection from "../../components/home/HomeHerosection";
import Counter from "../../components/home/Counter";
import Professional from "../../components/professional/Professional";
import GiftMembership from "../../components/gift/GiftMembership";
import Frequently from "../../components/frequently/Frequently";
import {Box} from "@mui/material";
import HowItWorks from "../../components/home/HowItWorks";

function Home(props) {
    return (
        <>
            <HomeHerosection />
            <Counter />
            <Professional />
            <HowItWorks />
            <Box sx={{ pb: "100px", backgroundColor: "#FFFCF6" }}>
                <Frequently />
            </Box>
            <GiftMembership />
        </>
    );
}

export default Home;