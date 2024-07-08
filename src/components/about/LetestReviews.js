import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import divider1 from '../../assets/home/divider-main-1.png'
import l1 from  '../../assets/about/l-1.jpg'
import l2 from  '../../assets/about/l-2.jpg'
import l3 from  '../../assets/about/l-3.jpg'
import {Button} from "@mui/material";
function LetestReviews() {
    return (
        <>
            <Box sx={{pt:"96px",backgroundColor:"#FFFCF6"}}>

                <Box sx={{backgroundColor: "darkGreen", height: "100%",minHeight:"60vh", position: "relative", "&::after" :{
                        content:"''",
                        position:"absolute",
                        top:"-100px",
                        left:"0",
                        backgroundColor:"darkGreen",
                        width:"100%",
                        height:"100px",
                        borderRadius:"50% 50% 0 0/50% 50% 0 0"
                    }
                }}>
                    <Box sx={{display: "flex", height: "100%"}}>
                        <Container>
                            <Box >
                                <Box sx={{mb: "40px"}}>
                                    <Box sx={{fontSize:  "32px",mb:"30px", color: "#e9e9e9",textAlign:"center" }} className="overpass">Our latest reviews </Box>
                                    <Box sx={{display: "flex",justifyContent:"space-between",textAlign:"center",alignItems:{xs:"center",md:"start"},flexDirection:{xs:"column",md:"unset"}}}>
                                        <Box  sx={{width: {md:"300px"}}}>
                                            <Box >
                                                <img src={l1} alt="image 1" style={{height:"76px",width:"76px",borderRadius:"50%",overflow:"hidden",outline:"2px solid #e9e9e9"}} />
                                            </Box>
                                            <Box sx={{color:"#e9e9e9",my:"20px"}}>
                                                "Diane is an amazing listener and has the ability to understand what I'm expressing and give me insightful feedback."
                                            </Box>
                                            <Box sx={{color:"liteGreen"}}>
                                                - Written 1 day ago for Shane Lopez (LPC)
                                            </Box>
                                        </Box>
                                        <Box  sx={{width: {md:"300px"},my:{xs:"30px",md:"unset"}}} >
                                            <Box >
                                                <img src={l2} alt="image 1" style={{height:"76px",width:"76px",borderRadius:"50%",overflow:"hidden",outline:"2px solid #e9e9e9"}} />
                                            </Box>
                                            <Box sx={{color:"#e9e9e9",my:"20px"}}>
                                                "Diane is an amazing listener and has the ability to understand what I'm expressing and give me insightful feedback."
                                            </Box>
                                            <Box sx={{color:"liteGreen"}}>
                                                - Written 1 day ago for Diane Cullen (LCSW)
                                            </Box>
                                        </Box>
                                        <Box  sx={{width: {md:"300px"}}} >
                                            <Box >
                                                <img src={l3} alt="image 1" style={{height:"76px",width:"76px",borderRadius:"50%",overflow:"hidden",outline:"2px solid #e9e9e9"}} />
                                            </Box>
                                            <Box sx={{color:"#e9e9e9",my:"20px"}}>
                                                "She is a gift to our relationship"
                                            </Box>
                                            <Box sx={{color:"liteGreen"}}>
                                                - Written 1 day ago for Cynthia Kruk (LMFT)
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            mt:"30px"
                                        }}
                                    >
                                        <Button
                                            className="overpass"
                                            variant="outlined"
                                            sx={{
                                                color: "white",
                                                padding: { md: "10px 36px", xs: "8px 24px" },
                                                borderColor: "white",
                                                borderRadius: "30px",
                                                fontSize:"18px",
                                                "&:hover": {
                                                    color: "liteGreen",
                                                    borderColor: "liteGreen",
                                                },
                                                textTransform:"inherit"
                                            }}
                                        >
                                            See more reviews
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                    <Box sx={{position: "absolute", bottom: "-10px", width: "100%"}}><img src={divider1}
                                                                                          alt="design image"/></Box>
                </Box>
            </Box>
        </>
    );
}

export default LetestReviews;