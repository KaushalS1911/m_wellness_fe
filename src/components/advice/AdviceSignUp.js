import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import l1 from "../../assets/about/l-1.jpg";
import l2 from "../../assets/about/l-2.jpg";
import l3 from "../../assets/about/l-3.jpg";
import {Button, TextField} from "@mui/material";
import divider1 from "../../assets/home/divider-main-1.png";

function AdviceSignUp(props) {
    return (
        <>
            <Box sx={{pt:"96px",backgroundColor:"#FFFCF6"}}>

                <Box sx={{backgroundColor: "darkGreen", height: "100%",minHeight:"30vh", position: "relative", "&::after" :{
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
                                <Box >
                                    <Box sx={{fontSize: {sm:"32px",xs:"24px"}, color: "#e9e9e9",textAlign:"center" }} className="overpass">
                                        Helpful mental health resources delivered to your inbox</Box>

                                    <Box
                                        sx={{
                                            display: {sm:"flex"},
                                            justifyContent: "center",
                                            alignItems: "center",
                                            mt:"30px"
                                        }}
                                    >
                                        <TextField id="outlined-basic"  label="Email" variant="outlined" sx={{backgroundColor:"white",color:"white",borderRadius:"5px",width: {xs:"100%",sm:"320px"}}} />
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
                                                textTransform:"inherit",
                                                margin: {sm:"0 0 0 15px",xs:"20px 0 0 0"},
                                                width:{xs:"100%",sm:"unset"}
                                            }}
                                        >
                                            Sign up
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

export default AdviceSignUp;