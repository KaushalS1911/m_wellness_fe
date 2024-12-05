import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import divider1 from '../../assets/about/divider-about.jpg'

function AboutHeroSection2(props) {
    return (
        <div>

            <Box sx={{backgroundColor: "darkGreen", minHeight: "45vh",height:"100%" ,position: "relative", "&::after" :{
                content:"''",
                    position:"absolute",
                    top: {md:"-100px",xs:"-45px"},
                    left:"0",
                    backgroundColor:"darkGreen",
                    width:"100%",
                    height: {md:"100px",xs:"50px"},
                    borderRadius:"50% 50% 0 0/50% 50% 0 0",

            }
            }}>
                <Box sx={{display: "flex", alignItems: "center", height: "100%"}}>
                    <Container>
                        <Box sx={{textAlign: "center"}}>
                            <Box  >
                                <Box sx={{fontSize: {xs: 28, sm: 38, md: 48, color: "#A6DE9B", fontWeight: 300}}} className="overpass title"><span style={{fontWeight: 500}}>Find yourself in</span> therapy </Box>
                                <Box sx={{width:"70%", mx:"auto", fontSize: {xs: 14, sm: 16}, lineHeight: 1.5, fontWeight: 400, color: "#e9e9e9", mt: "20px"}}>mwellness was founded in 2013 to remove the traditional barriers to therapy and make mental health care more accessible to everyone. Today, it is the world’s largest therapy service — providing professional, affordable, and personalized therapy in a convenient online format. MWellness’s network of over 30,000 licensed therapists has helped millions of people take ownership of their mental health and work towards their personal goals. As the unmet need for mental health services continues to grow, MWellness is committed to expanding access to therapy globally.</Box>
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
