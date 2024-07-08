import React, { useRef } from "react";
import { Box, Button, Container, Grid, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { useTheme } from "@mui/material/styles";
import B1 from "../../assets/business/asset 0.png";
import B2 from "../../assets/business/asset 1.png";
import B3 from "../../assets/business/asset 2.png";
import B4 from "../../assets/business/asset 3.png";
import B5 from "../../assets/business/asset 4.png";
import B6 from "../../assets/business/asset 5.png";
import B7 from "../../assets/business/asset 6.png";
import B8 from "../../assets/business/asset 7.png";
import B9 from "../../assets/business/asset 8.png";
import B10 from "../../assets/business/asset 9.png";
import B11 from "../../assets/business/asset 10.png";
import B12 from "../../assets/business/asset 11.png";
import B13 from "../../assets/business/asset 12.png";
import B14 from "../../assets/business/asset 13.png";
import B15 from "../../assets/business/asset 14.png";
import B16 from "../../assets/business/asset 15.png";
import B17 from "../../assets/business/asset 16.png";
import B18 from "../../assets/business/asset 17.png";
import B19 from "../../assets/business/asset 18.png";
import B20 from "../../assets/business/asset 19.png";
import B21 from "../../assets/business/asset 20.png";
import B22 from "../../assets/business/asset 21.png";
import B23 from "../../assets/business/asset 22.png";
import B24 from "../../assets/business/asset 23.png";
import B25 from "../../assets/business/asset 24.png";
import B26 from "../../assets/business/asset 26.png";
import B27 from "../../assets/business/asset 27.png";
import B28 from "../../assets/business/asset 28.png";
import B29 from "../../assets/business/asset 29.png";
import B30 from "../../assets/business/asset 30.png";
import B31 from "../../assets/business/asset 31.png";
import B32 from "../../assets/business/asset 32.png";
import B33 from "../../assets/business/asset 33.png";
import B34 from "../../assets/business/asset 34.png";

function Slider() {
  const theme = useTheme();
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sliderData = [
    B1,
    B2,
    B3,
    B4,
    B5,
    B6,
    B7,
    B8,
    B9,
    B10,
    B11,
    B12,
    B13,
    B14,
    B15,
    B16,
    B17,
    B18,
    B19,
    B20,
    B21,
    B22,
    B23,
    B24,
    B25,
    B26,
    B27,
    B28,
    B29,
    B30,
    B31,
    B32,
    B33,
    B34,
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
      <Box position={"relative"} >
        <Box
          className={"businessSlider"}
          sx={{ backgroundColor: "#F5F5F5" }}
          py={5}
          position={"relative"}
        >
          <Container>
            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              slidesPerGroup={6}
              pagination={true}
              loop={true}
              spaceBetween={isMobile ? 50 : 70}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                640: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
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
                  <Box sx={{ height: "120px" }}>
                    <img
                      src={item}
                      alt="companies"
                      style={{ objectFit: "contain" }}
                    />
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
      </Box>
    </>
  );
}
export default Slider;
