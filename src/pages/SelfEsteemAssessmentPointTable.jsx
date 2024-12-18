import React, {useState} from 'react';
import {Box, Card, Container, GlobalStyles} from '@mui/material';
import {Gauge, gaugeClasses} from '@mui/x-charts';
import {useParams} from "react-router-dom"
import Typography from "@mui/material/Typography";
import background from "../assets/score/pexels-photo-5699431-1-1024x682.jpeg.jpg"

function SelfEsteemAssessmentPointTable(props) {
    const language = sessionStorage.getItem("language");
    const {id} = useParams();
    const settings = {
        width: 350,
        height: 200,
    };

    const per = ((id * 100) / 80).toFixed(0);

    const descEng = (data) => {
        switch (true) {
            case data >= 61 && data <= 80 :
                return {
                    desc: "Interpretation and Recommendations: The student has a very positive self-image and high self-esteem. They demonstrate a strong sense of self-worth and confidence in their abilities. To maintain and further enhance this positive self-perception, it is crucial to encourage continued self-affirmation and support. Recognize and celebrate their achievements and strengths regularly. Provide an environment that fosters self-confidence and reinforces their positive self-image. Engage them in activities that challenge and help them grow, while also acknowledging their successes.",
                    color: "#325343"
                }
            case data >= 41 && data <= 69 :
                return {
                    desc: "Interpretation and Recommendations: The student generally feels good about themselves but may have some areas where they feel less confident. It is important to identify these specific areas for improvement and focus on targeted self-affirmation exercises. Encourage their participation in activities that build confidence and self-worth. Offer constructive feedback that highlights both their strengths and areas for growth. Create opportunities for them to succeed and feel competent, reinforcing their overall positive self-image.",
                    color: "green"
                };
            case data >= 21 && data <= 40 :
                return {
                    desc: "Interpretation and Recommendations: The student has an average self-image with some positive feelings about themselves but also experiences areas of self-doubt. Providing support and encouragement is essential to boost their self-esteem. Engage them in regular self-affirmation and positive self-talk exercises. Focus on building their strengths and recognizing their achievements, no matter how small. Help them set realistic goals and celebrate their progress, fostering a sense of accomplishment and improved self-worth.",
                    color: "#C6892C"
                };
            case data >= 11 && data <= 20 :
                return {
                    desc: "Interpretation and Recommendations: The student may struggle with self-esteem and has significant areas of self-doubt and negative self-perception. Consistent support and encouragement are vital. Work on self-esteem-building activities, such as positive affirmations and goal setting. Provide frequent opportunities to highlight and celebrate their strengths and achievements. Encourage them to participate in activities where they can experience success and feel valued. Gradually help them build a more positive self-image by focusing on their unique qualities and capabilities.",
                    color: "#F76F00"
                };
            case data >= 0 && data <= 10 :
                return {
                    desc: "Interpretation and Recommendations: The student has a very low self-image and struggles significantly with self-esteem. Intensive support and intervention may be needed to help them develop a more positive self-perception. Encourage their participation in counselling or group activities focused on building self-esteem. Consistently reinforce their value and worth through positive affirmations and supportive feedback. Help them set small, achievable goals and celebrate every success, no matter how minor. Provide a safe and nurturing environment where they feel accepted and valued, gradually helping them build a stronger sense of self-worth and confidence.",
                    color: "#ff0000"
                };
            default:
                return "Invalid data";
        }
    }

    return (
        <>
            <Box sx={{
                pt: 20, mb: 5, background: `linear-gradient(
            rgba(000, 0, 0, 0.5), 
            rgba(000, 0, 0, 0.5) 
          ), url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}>
                <Container>
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                        <Box sx={{
                            backgroundColor: "#fff",
                            width: {sm: "550px", xs: "100%"},
                            my: "30px",
                            borderRadius: "15px",
                            padding: "40px 30px",
                        }}>
                            <Box
                                sx={{fontSize: '28px', fontWeight: '700', textAlign: 'center'}}
                                className="overpass title"
                            >
                                Assessment Score
                            </Box>
                            <Box sx={{textAlign: 'center', color: 'gray'}}>
                                Here are your results
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "center", my: 3}}>
                                <Gauge
                                    {...settings}
                                    value={per}
                                    startAngle={-110}
                                    endAngle={110}
                                    text={id}
                                    sx={{
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 40,
                                            transform: 'translate(0px, 0px)',
                                            fontWeight: 700,
                                            color: 'red',
                                        },
                                        "&.MuiGauge-root .MuiGauge-valueArc": {
                                            fill: id >= 50 ? "#1A5319" : id >= 40 ? "#508D4E" : id >= 30 ? "#FFB200" : id >= 20 ? "#EB5B00" : "#C80036"
                                        },
                                        "&.css-nxtzjj": {
                                            fill: id >= 50 ? "" : ""
                                        }
                                    }}
                                />
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Box sx={{textAlign: "center", width: "250px", fontSize: "18px", letterSpacing: -0.25}}
                                     className={"overpass"}>
                                    Interpretation and feedback based on your inputs</Box>
                            </Box>

                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Box sx={{
                                    width: {sm: "550px", xs: "100%"},
                                    backgroundColor: "rgba(215, 215, 215, 0.5)",
                                    backdropFilter: "blur(100px)",
                                    border: "1px solid rgba(255, 255, 255, 0.3)",
                                    my: "30px",
                                    padding: "20px",
                                    borderRadius: "15px",
                                    textAlign: "justify",
                                    fontSize: "17px"
                                }}>
                                    <Typography> Namaste,
                                    </Typography> <Box sx={{my: 2}}> Basis the answers provided by you, we are sharing
                                    the feedback with you.
                                </Box>
                                    {descEng(id).desc}
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default SelfEsteemAssessmentPointTable;
