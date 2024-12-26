import React from 'react';
import {useParams} from "react-router-dom";
import {Box, Container} from "@mui/material";
import background from "../assets/score/pexels-photo-5699431-1-1024x682.jpeg.jpg";
import {Gauge, gaugeClasses} from "@mui/x-charts";
import Typography from "@mui/material/Typography";

function WorkLifeAssessmentPoint(props) {
    const language = sessionStorage.getItem("language");
    const {id} = useParams();
    const settings = {
        width: 350,
        height: 200,
    };

    const per = ((id * 100) / 80).toFixed(0);

    const descEng = (data) => {
        switch (true) {
            case data >= 60 && data <= 75 :
                return {
                    desc: "Your responses reflect a strong ability to balance work and personal life effectively. You set clear boundaries, prioritize self-care, and manage your time well, which leads to both professional success and personal satisfaction. Continue practicing these healthy habits and remain mindful of maintaining this balance even during challenging times.",
                    subDesc: "This Self-Assessment shows an indicative result based on your responses. These are not Psychometric Tests. For accurate and scientific approach, you should consult professional psychology practitioners.",
                    color: "#325343"
                }
            case data >= 45 && data <= 59 :
                return {
                    desc: "You have a fair degree of balance between your work and personal life, but some areas may need attention. Consider focusing on improving specific aspects such as stress management, setting clearer boundaries, or dedicating more time to personal well-being. By addressing these areas, you can elevate your overall sense of harmony and satisfaction.",
                    subDesc: "This Self-Assessment shows an indicative result based on your responses. These are not Psychometric Tests. For accurate and scientific approach, you should consult professional psychology practitioners.",
                    color: "green"
                };
            case data >= 0 && data <= 45 :
                return {
                    desc: "Your score indicates significant challenges in maintaining a healthy work-life balance. You may experience stress, burnout, or dissatisfaction due to a lack of boundaries or insufficient time for personal needs. It's essential to reevaluate your priorities, develop better time management strategies, and incorporate regular self-care practices into your routine. Seeking guidance from a mentor, counselor, or professional may also be beneficial in helping you regain balance and improve your overall well-being.",
                    subDesc: "This Self-Assessment shows an indicative result based on your responses. These are not Psychometric Tests. For accurate and scientific approach, you should consult professional psychology practitioners.",
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
                                    <Box sx={{my: 2}}> {descEng(id).desc}
                                    </Box>
                                    <Box sx={{my: 2}}> {descEng(id).subDesc}
                                    </Box>
                                </Box>

                            </Box>

                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default WorkLifeAssessmentPoint;