import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import divider1 from '../../assets/home/divider-main-1.png'

function AboutHeroSection2(props) {
    return (
        <div>

            <Box sx={{backgroundColor: "darkGreen", height: "98vh", position: "relative"}}>
                <Box sx={{display: "flex", alignItems: "center", height: "100%"}}>
                    <Container>
                        <Box sx={{textAlign: "center"}}>
                            <Box sx={{mb: "40px"}}>
                                <Box sx={{fontSize: {xs: "28px", sm: "38px", md: "48px", color: "#A6DE9B"}}}><strong>Find yourself in</strong> therapy </Box>
                                <Box sx={{fontSize: {xs: 14, sm: 19}, lineHeight: 1.5, fontWeight: 400, color: "#e9e9e9", mt: "20px", width: "80%", mx: "auto"}}>MWellness was founded in 2013 to remove the traditional barriers to therapy and make mental health care more accessible to everyone. Today, it is the world’s largest therapy service — providing professional, affordable, and personalized therapy in a convenient online format. MWellness’s network of over 30,000 licensed therapists has helped millions of people take ownership of their mental health and work towards their personal goals. As the unmet need for mental health services continues to grow, MWellness is committed to expanding access to therapy globally.</Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <Box sx={{position: "absolute", bottom: "-10px", width: "100%"}}><img src={divider1}
                                                                                      alt="design image"/></Box>
            </Box>
        </div>
    );
}

export default AboutHeroSection2;
