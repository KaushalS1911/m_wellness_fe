import React, { useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { useTheme } from "@mui/material/styles";

function Slider2() {
  const theme = useTheme();
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sliderData = [
    {
      dec: "Jasmine is truly an amazing therapist. She has been amazing at holding space for all sorts of emotions I had to work through. She also consistently gave me tangible tools and action steps after each meeting. She taught me so much and is truly invaluable. All that I learned has significantly changed my life and relationships for the",
      tit: "Activision Blizzard Inc. Employee",
    },
    {
      dec: "Jasmine is truly an amazing therapist. She has been amazing at holding space for all sorts of emotions I had to work through. She also consistently gave me tangible tools and action steps after each meeting. She taught me so much and is truly invaluable. All that I learned has significantly changed my life and relationships for the",
      tit: "Activision Blizzard Inc. Employee",
    },
    {
      dec: "Jasmine is truly an amazing therapist. She has been amazing at holding space for all sorts of emotions I had to work through. She also consistently gave me tangible tools and action steps after each meeting. She taught me so much and is truly invaluable. All that I learned has significantly changed my life and relationships for the",
      tit: "Activision Blizzard Inc. Employee",
    },
    {
      dec: "Jasmine is truly an amazing therapist. She has been amazing at holding space for all sorts of emotions I had to work through. She also consistently gave me tangible tools and action steps after each meeting. She taught me so much and is truly invaluable. All that I learned has significantly changed my life and relationships for the",
      tit: "Activision Blizzard Inc. Employee",
    },
    {
      dec: "Jasmine is truly an amazing therapist. She has been amazing at holding space for all sorts of emotions I had to work through. She also consistently gave me tangible tools and action steps after each meeting. She taught me so much and is truly invaluable. All that I learned has significantly changed my life and relationships for the",
      tit: "Activision Blizzard Inc. Employee",
    },
    {
      dec: "Jasmine is truly an amazing therapist. She has been amazing at holding space for all sorts of emotions I had to work through. She also consistently gave me tangible tools and action steps after each meeting. She taught me so much and is truly invaluable. All that I learned has significantly changed my life and relationships for the",
      tit: "Activision Blizzard Inc. Employee",
    },
  ];

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
      <Box
        className={"businessSlider2"}
        sx={{ backgroundColor: "#FFFFFF", py: "100px" }}
        pt={5}
      >
        <Container sx={{ position: "relative" }}>
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
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "400px",
                      width: "302px",
                      borderRadius: "5px",
                      border: "1px solid black",
                      padding: "20px",
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          marginBottom: "10px",
                        }}
                      >
                        <i
                          style={{ color: "#4A4D4A", margin: "0px 1px" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "#4A4D4A", margin: "0px 1px" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "#4A4D4A", margin: "0px 1px" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "#4A4D4A", margin: "0px 1px" }}
                          className="fa-solid fa-star"
                        ></i>
                        <i
                          style={{ color: "#4A4D4A", margin: "0px 1px" }}
                          className="fa-solid fa-star"
                        ></i>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#6d706c",
                          textAlign: "justify",
                        }}
                      >
                        {item.dec}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#397a4a",
                        }}
                      >
                        {item.tit}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            className="swiper-button-prev"
            sx={{
              color: "green",
              transform: "translateX(35px)",
              display: { xs: "none", sm: "block" },
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
              display: { xs: "none", sm: "block" },
            }}
            onClick={handleNext}
          >
            <i
              className="absolutely-centered fas fa-chevron-right fa-fw"
              data-testid="next-slide-button"
            ></i>
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Slider2;
