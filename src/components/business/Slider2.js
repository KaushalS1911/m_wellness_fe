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
      tit: "Teach For America Employee",
    },
    {
      dec: "Lauren has helped me address issues that I have been struggling with for a long time. In the months that I have been working with her she has helped me find tools to cope with stress and my negative inner voice. I have experienced a tangible shift in my daily thoughts and feelings towards myself through the work we have done",
      tit: "City Harvest Employee",
    },
    {
      dec: "Barbara is the best therapist I have ever had. We've been working together for a while now. I trust her and love how non judgemental and supportive she is. She is a diamond in the rough type of therapist and really knows what she's doing.",
      tit: "RMU Employee",
    },
    {
      dec: "Working with Candace has been fantastic - she's honest and authentic while still providing an empathetic space to process all of life's many curveballs. She isn't afraid to speak hard truths & was a strong advocate for self-love and self-care. It's clear that she wants her clients to get the most out of therapy. Working with her from",
      tit: "Noom Employee",
    },
    {
      dec: "Kira is so bright and wonderful. She brings joy (but not superficial joy!) to hard conversations, and I always feel heard around her. She truly takes the time to listen, ask questions, and deduce what is important to her patients.",
      tit: "Principal Employee",
    },
    {
      dec: "Nikki is amazing. I didn't fully connect with my first therapist, so I switched, and I am so happy that I found someone who is right for me! I can fully be myself with her and that is very important for me. I am so thankful for her and for the Mwellness platform overall.",
      tit: "Lowes Employee",
    },
    {
      dec: "Charles is kind, compassionate, and non-judgemental. He is well versed in LGBTQIA+ issues, and is a good listener.",
      tit: "Activision Blizzard Inc. Employee",
    },
    {
      dec: "Noel has been a breath of fresh air, it's nice to be able to open up to someone and know that it's a safe space. I'm looking forward to continuing my journey with Noel.",
      tit: "American Express Employee",
    },
    {
      dec: "She truly lives her profession and is always happy to provide additional information and resources. Working with Shawnean has been a great.",
      tit: "Citi Group Employee",
    },
    {
      dec: "Fernanda has been great with my all over the place kinda questions. I've been to normal in person therapy before and feel like I get a bit more from the text format with her.",
      tit: "Salesforce Employee",
    },
    {
      dec: "Great therapist. He responded in a very timely matter and shows compassion every time he [talks to me ]",
      tit: "Dollar General Corporation Employee",
    },
    {
      dec: "After my sessions with Alicia I feel hopeful and confident in the path I’m following. She gives me plenty of space to explore my feelings and always has sensitive and constructive input.",
      tit: "Netflix Employee",
    },
    {
      dec: "I started my Mwellness journey with Michelle a couple of weeks ago and couldnt be happier with the support I have recieved. Michelle is already helping me to feel better and giving me action steps to move forward on my journey. I am feeling optimistic.",
      tit: "Ross Stores Employee",
    },
    {
      dec: "Susan was extremely attentive to my needs and made sure to bring her full self to my sessions. She was very intentional about listening to my needs and asking the right questions; so much so that she has continually followed up to check in on my current status. Susan is an invaluable counselor and I would recommend her to anyone needing",
      tit: "SAP Employee",
    },
    {
      dec: "Robin has been extremely helpful in helping me with my anxiety and was able to point out things to me that I didn't even notice when it came to my mental health. I find her very easy to talk to and has given me many helpful techniques and methods of dealing with my anxiety which I am very grateful for.",
      tit: "Texas Instruments Employee",
    },
    {
      dec: "Jeff gave me confidence from our very first session that he had the right knowledge and tools to help me cope with some debilitating 24/7 anxiety I was experiencing. Before connecting with Jeff, I felt like I didn't have a single second of my day where I wasn't in fight/flight/freeze mode.",
      tit: "Robert Half International Employee",
    },
    {
      dec: "He really listens to me, gives me great feedback. he makes me feel heard and understood. he is so nice and supportive.",
      tit: "Kroger Employee",
    },
    {
      dec: "Brian is a thoughtful, insightful, and caring therapist who is always respectful and encouraging. He has made a great difference in my journey this year.",
      tit: "Akamai Employee",
    },
    {
      dec: "Shannon is absolutely wonderful. I always feel like I'm talking to one of my girl friends. I never feel like she's judging me or thinks I'm doing something wrong. She is always just there to support me in whatever I choose to do while also providing guidance with compassion and intention. She acknowledges that I'm an adult wh",
      tit: "Zillow Employee",
    },
    {
      dec: "Dr. Bill is an excellent therapist. I made progress with his help from the very first session. I feel he gives me the tools I need to help myself each day and is also there to support me when I get a little stuck.",
      tit: "Mozilla Employee",
    },
    {
      dec: "Amanda is one of the best therapist I have ever had. She really listens and encourages me to be the best version of myself, through hard work, understanding and recognizing traits that can be detrimental to my growth. I love how easy she is to talk to and I am loving my time with her.",
      tit: "SVB Employee",
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
        sx={{ backgroundColor: "#FFFFFF", py: "100px", position: "relative" }}
        pt={5}
      >
        <Container>
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
                        className="title overpass"
                        sx={{
                          fontSize: "18px",
                          // fontWeight: "500",
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
