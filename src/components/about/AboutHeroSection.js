import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Grid, Typography} from "@mui/material";
import divider1 from "../../assets/home/divider-main-1.png";

function AboutHeroSection(props) {
    return (
        <Box sx={{mt: 9, background: "linear-gradient(90deg, rgba(255,252,246,1) 0%, rgba(255,252,246,1) 43%, rgba(241,227,200,1) 78%)", height: "30vh", position: "relative",display: "flex", alignItems: "center",justifyContent:"center"}}>
            <Box sx={{display: "flex", alignItems: "center", height: "100%",justifyContent:"center",pb:{md:"100px",xs:"50px"}}}>
                <Container>
                    <Box sx={{textAlign: "center"}}>
                            <Box sx={{fontSize: {xs: 28, sm: 38, md: 44, color: "#444444", letterSpacing: -0.5}}} className="overpass">About us</Box>
                    </Box>
                </Container>
            </Box>
        </Box>

    );
}

export default AboutHeroSection;