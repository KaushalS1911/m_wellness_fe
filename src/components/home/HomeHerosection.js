import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import divider1 from '../../assets/home/divider-main-1.png'
import img1 from '../../assets/home/img1.png';
import img2 from '../../assets/home/img2.png';
import img3 from '../../assets/home/img3.png';

function HomeHerosection(props) {
    const happyImg = [
        {title: "Individual", subTitle: "For myself", color: "#397A4A", img: img1},
        {title: "Couples", subTitle: "For me and my partner", color: "#457777", img: img2},
        {title: "Teen", subTitle: "For my child", color: "#a75d00", img: img3},
    ];
    return (
        <>
            <Box sx={{backgroundColor: "darkGreen", height: "98vh", position: "relative", color: 'white'}}>
                <Box sx={{display: "flex", alignItems: "center", height: "100%"}}>
                    <Container>
                        <Box sx={{textAlign: "center"}}>
                            <Box sx={{mb: "40px"}}>
                                <Box sx={{fontSize: {xs:"28px",sm:"38px" , md:"48px"}}}>You deserve to be happy.</Box>
                                <Box sx={{fontSize: {xs:"14px",sm:"20px"}, mt: "20px"}}>What type of therapy are you looking for?</Box>
                            </Box>
                            <Grid container spacing={{xs: 2,md:3 ,lg: 5}}>
                                {happyImg.map((item, index) => (
                                    <Grid item xs={12} key={index} lg={4}>
                                        <Box sx={{
                                            overflow: "hidden",
                                            height: {lg: "auto", xs: "120px"},
                                            position: "relative",
                                            '&:hover .rightArr': {backgroundColor: "white", color: "black"},
                                            '&:hover .beHappyImg': {borderColor: "white !important"}
                                        }}>
                                            <Box sx={{position: "absolute", px: "30px", top: "30px"}}>
                                                <Box sx={{color: "white", fontSize: "32px",textAlign: "start"}}>{item.title}</Box>
                                                <Box sx={{textAlign: "start", mt: "10px"}}>{item.subTitle}
                                                    <Typography className={"rightArr"} component={"span"} sx={{
                                                        ml: "10px",
                                                        display: "inline-block",
                                                        border: "1px solid white",
                                                        px: "5px",
                                                        borderRadius: "50%",
                                                        transition: "0.4s"
                                                    }}>
                                                        <i className="arrow-inner fa fa-arrow-right"
                                                           style={{marginBottom: "-10px", display: "inline-block"}}/>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{height: "100%"}}>
                                                <img className={"beHappyImg"} src={item.img} alt="You deserve to be happy"
                                                     style={{
                                                         backgroundColor: item.color,
                                                         borderRadius: "10px",
                                                         border: "1px solid #397A4A",
                                                         transition: "0.4s",
                                                         objectFit: "center"
                                                     }}/>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
                <Box sx={{position: "absolute", bottom: "-10px", width: "100%"}}><img src={divider1}
                                                                                      alt="design image"/></Box>
            </Box>
        </>
    )
        ;
}

export default HomeHerosection;