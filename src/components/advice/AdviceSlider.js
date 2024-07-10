import React, {useRef} from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    useMediaQuery, Avatar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import "../../node_modules/swiper/swiper-bundle.min.css";
import { useTheme } from "@mui/material/styles";
import back from "../../assets/faq/bg-gradient-texture.png"
import divider1 from "../../assets/advice/down-divider.jpg"
import slide1 from "../../assets/advice/slide-1.jpg"
import slide2 from "../../assets/advice/slide-2.jpg"
import slide3 from "../../assets/advice/Slideshow-2.jpg"
function AdviceSlider(props) {
    const theme = useTheme();
    const swiperRef = useRef(null);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const sliderData = [{name:"If you're looking for support in your area, see how a nearby therapist can help.",img:slide1},{name:"Learn how depression quotes can help during tough times.",img:slide2},{name:"Learn how to choose between a psychologist and a therapist.",img:slide3}];

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
        <Box sx={{textAlign:"center",py:"10px",mt:"89px",color:"darkGreen"}}>
            Articles & Advice About Mental Health
        </Box>
            <Box sx={{position:"relative"}}>
                <Box sx={{backgroundImage:`url(${back})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"70vh",height:"100%"}}>
                    <Box
                        className={"reviewBoxes"}
                        sx={{ position: "relative"}}
                        pt={5}
                    >
                        <Box sx={{position: "relative"}} id={"mainSwiper"}>
                            <Swiper
                                ref={swiperRef}
                                modules={[Pagination]}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                slidesPerGroup={3}
                                pagination={true}
                                loop={true}
                                spaceBetween={isMobile ? 50 : 75}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                    },
                                    724: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                    },
                                }}
                            >
                                {sliderData.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                       <Container sx={{pb:{xs:"50px",md:"unset"}}}>
                                           <Box sx={{display: "flex",justifyContent: {md:"space-around",xs:"center"},alignItems:"center",textAlign:{xs:"center",md:"unset"},flexDirection: {xs:"column",md:"unset"}}}>
                                               <Box order={{xs: 2,md:"unset"}}>
                                                   <Box sx={{fontSize: {lg:"42px",xs:"24px"},color:"#444444",fontWeight:"300",mt:{xs:"10px",md:"unset"}}}>
                                                       {item?.name}
                                                   </Box>

                                                   <Box
                                                       sx={{mt:"20px"}}
                                                   >
                                                       <Button
                                                           className='overpass'
                                                           sx={{
                                                               borderRadius: "30px",
                                                               backgroundColor: "#A6DE9B",
                                                               padding: "8px 36px",
                                                               color: "darkGreen",
                                                               textTransform: "initial",
                                                               fontSize: "20px",
                                                               "&:hover": {
                                                                   backgroundColor: "green",
                                                                   color: "white",
                                                               },
                                                           }}
                                                       >
                                                           Read more
                                                       </Button>
                                                   </Box>
                                               </Box>
                                               <Box order={{xs: 1,md:"unset"}} sx={{display:"flex",justifyContent:"center",alignItems:"center",
                                               //     "&::after":{
                                               //     content:"''",
                                               //     position:"absolute",
                                               //     bottom:'-10px',
                                               //     right:"12%",
                                               //     height:"140px",
                                               //     width:"140px",
                                               //     backgroundColor:"#A0CFCE",
                                               //         borderTopLeftRadius:"160px"
                                               //
                                               // }
                                                   }}>
                                                   <Box sx={{width: {lg:"448px",xs:"300px"},height: {lg:"364px",xs:"264px"},borderTopLeftRadius:"160px",overflow:"hidden"}}>
                                                       <img src={item?.img} alt="slide1"  />

                                                   </Box>
                                               </Box>
                                           </Box>
                                       </Container>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Button
                                className="swiper-button-prev"
                                sx={{
                                    color: "green",
                                    transform: "translateX(35px)",
                                    display:{xs:"none",md:"block"}
                                }}
                                onClick={handlePrev}
                            >
                                <i
                                    className="absolutely-centered fas fa-chevron-left fa-fw"
                                    data-testid="previous-slide-button"
                                ></i>
                            </Button>
                            <Button
                                className="swiper-button-next"
                                sx={{
                                    color: "green",
                                    transform: "translateX(-35px)",
                                    display:{xs:"none",md:"block"}
                                }}
                                onClick={handleNext}
                            >
                                <i
                                    className="absolutely-centered fas fa-chevron-right fa-fw"
                                    data-testid="next-slide-button"
                                ></i>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{position: "absolute", bottom: "-10px", width: "100%",}}><img src={divider1}
                                                                                      alt="design image"/></Box>
            </Box>
        </>
    );
}

export default AdviceSlider;