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
import sml from "../../assets/gift/sml-logo.png";
// import {SwiperSlide} from "swiper/swiper-vue";
import r1 from "../../assets/getstarted/r-1.jpg"
import r2 from "../../assets/getstarted/r-2.jpg"
import r3 from "../../assets/getstarted/r-3.jpg"
import r4 from "../../assets/getstarted/r-4.jpg"
import r5 from "../../assets/getstarted/r-5.jpg"
import r6 from "../../assets/getstarted/r-6.jpg"
import r7 from "../../assets/getstarted/r-7.jpg"
import r8 from "../../assets/getstarted/r-8.jpg"
function GetStartedReview(props) {
    const theme = useTheme();
    const swiperRef = useRef(null);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const sliderData = [{
        img:r1,
        name:"JUDITH WILSON",
        nicname:"(M. ED.,LPC,SC)",
        day:"E.M. wrote 1 day ago:",
        des:"I love Mrs. Judith!! She is wonderful, kind and caring and really listens! "
    },{
        img:r2,
        name:"MELISSA AVERETT",
        nicname:"(M.ED,LPC)",
        day:"J.O. wrote 1 day ago:",
        des:"Melissa is kind, patient, and knowledgeable. She helps me to process certain emotions and feelings by bringing new perspectives to my situations."
    },{
        img:r3,
        name:"CARRIE FOLLMAR",
        nicname:"",
        day:"K.A. wrote 2 days ago:",
        des:"I've only had a couple sessions, but I've really enjoyed meeting with Carrie Follmar so far. She's been patient, kind, thoughtful, helpful, and professional. I find her easy to talk to and I appreciate her insights."
    },{
        img:r4,
        name:"EVA JONES",
        nicname:"(LCMHC,LCAS-A)",
        day:"S.A. wrote 2 days ago:",
        des:"Eva is highly skilled, deeply compassionate, consistently encouraging, and warm. I am so grateful for her positive impact on my life!"
    },{
        img:r5,
        name:"NEIL HALL",
        nicname:" (DIPLOMA IN THERAPE ...",
        day:"K.R. wrote 2 days ago:",
        des:"Neil is very kind, considerate, professional and knowledgeable. Responds quickly and is always ready to discuss alternative time appointments if there is nothing available."
    },{
        img:r6,
        name:"JULIE RIDER",
        nicname:"",
        day:"J.O. wrote 3 days ago:",
        des:"I’m so grateful to have Julie as my personal and family therapist. She is knowledgeable, honest, and considerate. I’m so grateful for her each and every time we meet. Thanks Julie!"
    },{
        img:r7,
        name:"SANDRA TERIFAJ",
        nicname:"",
        day:"B.O. wrote 7 days ago:",
        des:"Sandra entirely focuses on me. Totally understands my situations and needs. Knowledgeable/empathetic/proactive."
    },{
        img:r8,
        name:"DAWN SWEETEN",
        nicname:"",
        day:"E.R. wrote 7 days ago:",
        des:"Dawn is knowledgeable, sweet and understanding. Her approach is gentle but makes you think. Highly recommend. "
    },
    ];

    // const handleNext = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slideNext();
    //     }
    // };
    //
    // const handlePrev = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slidePrev();
    //     }
    // };
    return (
        <>
            <Box
                className={"reviewBoxes"}
                sx={{display: isMobile ? "none" : "block", backgroundColor: "cream",mt: "100px", py: "10px", position: "relative" ,'&:before' : {content: "''",position: "absolute",bottom: "100%",backgroundColor: "cream",left: "0",borderRadius: "50% 50% 0 0 / 100% 100% 0 0",height: "140px",width: "100%"}}}
                pt={5}
            >
                <Container sx={{position: "relative"}}>
                    <Swiper
                        ref={swiperRef}
                        modules={[Pagination]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        slidesPerView={2}
                        slidesPerGroup={2}
                        pagination={true}
                        loop={true}
                        spaceBetween={isMobile ? 50 : 75}
                    >
                        {sliderData.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    // alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Box sx={{display: "flex",borderBottom: "1px solid #e0e0e0"}}>
                                        <Avatar
                                            src={item?.img}
                                            alt="Julie Bailey"
                                            sx={{ width: 50, height: 50, mb: 2 }}
                                        />
                                        <Box sx={{ml: "14px"}}>
                                            <Typography sx={{color: "liteBlack",fontSize: {xs:"12px",md:"14px"},letterSpacing: 1.5,fontWeight: "600"}}>LATEST REVIEW FOR:</Typography>
                                            <Typography sx={{fontSize: {xs:"18px",md:"24px"},color: "green",letterSpacing: 1.5,fontWeight: "300"}}>{item?.name} <Typography sx={{color: "textGray",fontSize: "24px"}} component={"span"}>{item?.nicname}</Typography></Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{color: "liteBlack",fontSize: "14px",fontWeight: "600",my: {xs:"10px",sm:"15px"}}}>{item?.day}</Typography>
                                        <Typography sx={{color: "liteBlack",fontSize: '14px'}}>{item?.des}</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Grid container>
                        <Grid xs={12} md={6} mt={{ md: "40px", xs: "0px" }}>
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
                        <Grid xs={12} md={6} mt={{ md: "40px", xs: "32px" }}>
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

export default GetStartedReview;