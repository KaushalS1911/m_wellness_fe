import React, {useState} from 'react';
import {Box, Card, Container, GlobalStyles} from '@mui/material';
import {Gauge, gaugeClasses} from '@mui/x-charts';
import {useParams} from "react-router-dom"
import Typography from "@mui/material/Typography";
import background from "../assets/score/pexels-photo-5699431-1-1024x682.jpeg.jpg"

function AcademicStressPointTable(props) {
    const language = sessionStorage.getItem("language");
    const {id} = useParams();
    const settings = {
        width: 350,
        height: 200,
    };

    const per = ((id * 100) / 80).toFixed(0);

    const descEng = (data) => {
        switch (true) {
            case data >= 61 && data <= 80:
                return {
                    desc: "The student experiences high levels of academic stress but has developed effective coping strategies to manage it. This indicates a strong ability to handle pressure while maintaining mental and emotional balance.",
                    color: "#325343",
                    listHeader : [
                        "Maintain Current Strategies:",
                        "Share Techniques:",
                        "Balance Life:"
                    ],
                    actionPlan: [
                        "Encourage the student to continue using and refining their current coping strategies to ensure they remain effective.",
                        "Suggest that the student share their successful coping techniques with peers, which can help reinforce their own strategies and provide support to others.",
                        "Advise maintaining a balanced lifestyle, incorporating academic responsibilities and personal well-being activities to sustain mental and emotional health."
                    ]

                };
            case data >= 41 && data <= 60:
                return {
                    desc: "The student experiences moderate to high levels of academic stress and uses some effective coping strategies but may need improvement in certain areas. While they have some good techniques in place, there is room to enhance their ability to manage stress.",
                    color: "green",
                    listHeader : [
                        "Develop Targeted Strategies:",
                        "Engage in Workshops:",
                        "Time Management & Self-Care:"
                    ],
                    actionPlan: [
                        "Identify specific areas of stress and develop targeted coping strategies to address them effectively.",
                        "Encourage participation in stress management workshops or seeking guidance from academic advisors or counselors to improve coping skills.",
                        "Focus on enhancing time management and self-care routines to better handle academic pressures."
                    ]

                };
            case data >= 21 && data <= 40:
                return {
                    desc: "The student experiences moderate levels of academic stress and has inconsistent coping strategies. They may sometimes manage stress well but struggle at other times.",
                    color: "#C6892C",
                    listHeader : [
                        "Increase Effective Strategies:",
                        "Stress Reduction Programs:",
                        "Structured Plan:"
                    ],
                    actionPlan: [
                        "Promote the use of effective coping strategies such as time management, relaxation techniques, and seeking support from friends, family, or professionals.",
                        "Encourage participation in stress reduction programs to learn and implement new coping methods.",
                        "Help the student create a structured study and relaxation plan to manage their academic workload more effectively."
                    ]

                };
            case data >= 11 && data <= 20:
                return {
                    desc: "The student experiences low to moderate levels of academic stress but has limited or ineffective coping strategies. This suggests that while stress levels are not very high, the strategies in place to manage stress are not sufficiently effective.",
                    color: "#F76F00",
                    listHeader : [
                        "Develop New Strategies:",
                        "Seek Support:",
                        "Build a Routine:"
                    ],
                    actionPlan: ["Work on developing and practicing new coping strategies that can help manage stress better.", "Advise seeking regular support from peers, professors, or counsellors to gain different perspectives and coping methods.", "Focus on building a routine that includes regular breaks, physical activity, and adequate sleep to maintain overall well-being."]

                };
            case data >= 0 && data <= 10:
                return {
                    desc: "The student experiences low levels of academic stress but may still benefit from improved coping strategies. Even though the stress is currently low, having robust coping mechanisms in place can help prevent future stress buildup.",
                    color: "#ff0000",
                    listHeader : [
                        "Proactive Coping",
                        "Well-Being Activities:",
                        "Monitor Stress Levels:"
                    ],
                    actionPlan: [
                        "Encourage the adoption of proactive coping strategies to maintain low stress levels and prevent future stress buildup.",
                        "Promote participation in activities that support overall well-being and help in preventing stress.",
                        "Stay vigilant about any potential increase in stress levels and address them promptly to ensure they do not escalate."
                    ]
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
                                        }
                                    }}
                                />
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Box sx={{
                                    textAlign: "center",
                                    width: "100%",
                                    mb: 2,
                                    fontSize: "18px",
                                    letterSpacing: -0.25
                                }}
                                     className={"overpass"}>
                                    Interpretation and feedback based on your inputs</Box>
                            </Box>
                            <Box className={"overpass"} sx={{
                                backgroundColor: "rgba(215, 215, 215, 0.5)",
                                backdropFilter: "blur(100px)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                my: "30px",
                                padding: "20px",
                                borderRadius: "15px",
                                textAlign:"justify",
                                fontSize:"17px"
                            }}>
                                <Typography> Namaste,
                                </Typography> <Box sx={{my:2}}> Basis the answers provided by you, we are sharing the feedback with you.
                            </Box>
                                <Box sx={{mb: 2}}  className={'overpass'}>
                                    <Typography
                                       >
                                        {descEng(id).desc}
                                    </Typography>
                                </Box>

                                <Box sx={{mb: 3}}>
                                    <ul>
                                        {descEng(id).actionPlan?.map((action, index) => (
                                            <Box>
                                                <Box sx={{mb: 0.5}}>
                                                    <Box sx={{
                                                        fontSize: '17px',
                                                        fontWeight: 'bold',
                                                    }}>
                                                        {descEng(id).listHeader[index]}
                                                    </Box>
                                                </Box>
                                                <Box sx={{mb: 2}}>
                                                    <Typography
                                                       >
                                                        {action}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default AcademicStressPointTable;
