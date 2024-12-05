import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import '../../../node_modules/swiper/swiper-bundle.min.css';
import { useMediaQuery} from "@mui/material";
import carousel1 from "../../assets/about/carousel-1.png";
import carousel2 from "../../assets/about/carousel-2.png";
import carousel3 from "../../assets/about/carousel-3.png";
import carousel4 from "../../assets/about/carousel-4.png";
import carousel5 from "../../assets/about/carousel-5.png";
import carousel6 from "../../assets/about/carousel-6.png";
import carousel7 from "../../assets/about/carousel-7.png";
import carousel8 from "../../assets/about/carousel-8.png";
import {useTheme} from "@mui/material/styles";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import sml from "../../assets/gift/sml-logo.png";

function OurTeam() {
    const swiperRef = useRef(null);
    const aboutSliderData = [carousel1,carousel2,carousel3,carousel4,carousel5,carousel6,carousel7,carousel8];

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <>
            <Box sx={{backgroundColor:"cream",pt:"90px",pb:{md:"0",xs:"50px"}}}>
                <Container>
                    <Box sx={{fontSize:"32px",color:"black",textAlign:"center",mb:"50px"}} className="title overpass">Our team</Box>
                    <Box sx={{textAlign:"center",color:"black",px:{xs:"0",md:"180px"}}}>We are passionate and compassionate professionals, driven by the mission of helping more people live a better and happier life every day.
                        We are growing fast and always looking for new talent. If you love people and like challenges - come and join us!</Box>
                </Container>


                    <Box sx={{mt: "90px",position: "relative"}} className={"aboutSlider"}>
                        <Swiper
                            ref={swiperRef}
                            modules={[Pagination]}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            pagination={false}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                640: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {aboutSliderData.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box sx={{height: {sm:"264px"}}}>
                                        <img src={item} alt="companies"/>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Button
                            className="swiper-button-prev"
                            sx={{
                                color: "white",
                                transform: "translateX(35px)",
                                display: {xs: "none", sm: "block"},
                            }}
                            onClick={handlePrev}
                        >
                            <i className="absolutely-centered fas fa-chevron-left fa-fw"
                               data-testid="previous-slide-button"></i>
                        </Button>
                        <Button
                            className="swiper-button-next"
                            sx={{
                                color: "white",
                                transform: "translateX(-35px)",
                                display: {xs: "none", sm: "block"},
                            }}
                            onClick={handleNext}
                        >
                            <i className="absolutely-centered fas fa-chevron-right fa-fw"
                               data-testid="next-slide-button"></i>
                        </Button>
                    </Box>
                <Container>
                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",py:"40px",}}>
                        <Button
                            className="overpass"
                            variant="outlined"
                            sx={{
                                fontSize: "20px",
                                borderRadius: "30px",
                                color: "darkGreen",
                                borderColor: "darkGreen",
                                padding: "10px 36px",
                                textTransform: "inherit",
                                "&:hover": {
                                    borderColor: "darkGreen",
                                    backgroundColor: "#F5FBF4",
                                },
                                my: { xs: "40px", lg: "unset" },
                            }}
                        >
                            Join our team
                        </Button>

                    </Box>
                   <Grid container>
                       <Grid xs={12} md={6} mt={{ md: "90px", xs: "0px" }}>
                           <Box
                               sx={{
                                   display: "flex",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   py: "20px",
                               }}
                           >
                               <Box
                                   sx={{
                                       fontSize: "15px",
                                       color: "liteBlack",
                                       fontWeight: "700",
                                       lineHeight:1.5
                                   }}
                               >
                                   If you are in a crisis or any other person may be in danger -
                                   don't use this site. <br />
                                   <Typography
                                       variant="span"
                                       sx={{ color: "green", textDecoration: "underline" }}
                                   >
                                       These resources
                                   </Typography>{" "}
                                   can provide you with immediate help.
                               </Box>
                           </Box>
                       </Grid>
                       <Grid xs={12} md={6} mt={{ md: "90px", xs: "32px" }}>
                           <Box
                               sx={{
                                   display: "flex",
                                   justifyContent: {md:"end"},
                                   alignItems: "center",
                                   py: {md:"20px"},
                                   opacity: ".5",
                               }}
                           >
                               <Box sx={{ height: "40px", width: "115px" }}>
                                   <img src={sml} alt="small logo" />
                               </Box>
                           </Box>
                       </Grid>
                   </Grid>
                </Container>
            </Box>
        </>
    );
}

export default OurTeam;
