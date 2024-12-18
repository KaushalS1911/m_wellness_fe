import React, {useState} from 'react';
import {Box, Card, Container, GlobalStyles} from '@mui/material';
import {Gauge, gaugeClasses} from '@mui/x-charts';
import {useParams} from "react-router-dom"
import Typography from "@mui/material/Typography";
import background from "../assets/score/pexels-photo-5699431-1-1024x682.jpeg.jpg"

function PointTable(props) {
    const language = sessionStorage.getItem("language");
    const {id} = useParams();
    const settings = {
        width: 350,
        height: 200,
    };

    const per = ((id * 100) / 15).toFixed(0);

    const descEng = (data) => {
        switch (true) {
            case data >= 13 && data <= 15:
                return {
                    desc: "You have demonstrated excellent stress management, emotional resilience, and decision-making skills, which are crucial for your exam preparation. Your ability to stay calm under pressure and maintain a positive mindset is commendable. These traits will serve you well not only in your exams but also in your future career. Keep up the good work, continue refining your skills, and remember that consistent effort and self-belief are key to achieving your goals.",
                    color: "#325343",
                    interpretation: "The child has a strong understanding of emotions and demonstrates effective emotional regulation skills.",
                    recommendations: "Encourage continued emotional development through positive reinforcement and activities that promote emotional intelligence. Engage the child in more complex emotional awareness activities to further enhance their skills.",
                    actionPlan: [
                        "Continue reinforcing positive emotional behaviours.",
                        "Introduce more advanced emotional intelligence activities.",
                        "Encourage peer mentoring or leadership in group activities."
                    ]
                };
            case data >= 10 && data <= 12:
                return {
                    desc: "You have demonstrated good skills and behaviors, but there are some areas that could benefit from improvement. Focus on enhancing your stress management techniques and decision-making strategies to be fully prepared for the challenges ahead. Developing a robust set of stress management skills will help you stay calm and focused under pressure, while refining your decision-making strategies will ensure you can navigate complex situations with confidence.",
                    color: "green",
                    interpretation: "The child has a good understanding of emotions and generally manages and expresses emotions appropriately, but there may be some areas needing slight improvement.",
                    recommendations: "Provide additional support through structured activities and discussions that focus on understanding and managing emotions. Reinforce positive behaviors and work on specific areas where the child showed some difficulty.",
                    actionPlan: [
                        "Identify specific areas for improvement and focus on those.",
                        "Use positive reinforcement to encourage appropriate emotional responses.",
                        "Engage the child in group activities that promote emotional sharing and empathy."
                    ]
                };
            case data >= 7 && data <= 9:
                return {
                    desc: "You show potential, but there are several areas that need significant improvement. Consider incorporating regular stress-relief techniques, emotional intelligence training, and structured decision-making practices into your routine. Practicing stress-relief techniques will help you stay calm under pressure and maintain a positive outlook. Emotional intelligence training will aid you in understanding your emotions and managing them effectively.",
                    color: "#C6892C",
                    interpretation: "The child has a basic understanding of emotions but shows inconsistencies in emotional regulation and expression.",
                    recommendations: "Engage the child in more frequent and varied emotional learning activities. Use role-playing, storytelling, and interactive games to help the child better recognize and manage emotions.",
                    actionPlan: [
                        "Increase the frequency of emotional learning activities.",
                        "Provide more opportunities for the child to practice emotional regulation.",
                        "Work closely with parents to ensure consistent emotional support at home."
                    ]
                };
            case data >= 4 && data <= 6:
                return {
                    desc: "There are several areas of concern that need to be addressed. It's crucial to prioritize the development of better stress management techniques, emotional resilience, and consistent study habits. Improving your stress management skills will empower you to handle pressure effectively; while enhancing emotional resilience will help you bounce back from setbacks with confidence. Developing consistent study habits will ensure you stay organized and focused on your goals.",
                    color: "#F76F00",
                    interpretation: "The child has significant difficulty in identifying and managing emotions, indicating a need for targeted emotional learning and support.",
                    recommendations: "Implement a structured emotional learning program with daily activities focused on identifying and managing emotions. Collaborate with teachers and parents to ensure consistent support across environments.",
                    actionPlan: [
                        "Develop a daily routine focused on emotional learning.",
                        "Implement specific strategies to address identified weaknesses.",
                        "Seek support from school counselors or child psychologists for targeted interventions."
                    ]
                };
            case data >= 0 && data <= 3:
                return {
                    desc: "Your responses indicate major development is needed in almost all aspects. It's essential to prioritize building a strong foundation in stress management, emotional intelligence, and disciplined study routines. These skills are crucial for navigating challenges effectively and achieving your goals. Seeking professional guidance or training can provide valuable insights and strategies to accelerate your growth in these areas.",
                    color: "#ff0000",
                    interpretation: "The child has major challenges in understanding and regulating emotions, which could impact their social interactions and overall well-being.",
                    recommendations: "Immediate intervention is recommended. Develop a comprehensive support plan involving teachers, parents, and mental health professionals.",
                    actionPlan: [
                        "Immediate and intensive emotional support and learning activities.",
                        "Close collaboration with mental health professionals to create a tailored intervention plan.",
                        "Frequent monitoring and adjustments to the support plan based on the child's progress."
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

                            <Box sx={{mb: 1.5}}>
                                <Box sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}>
                                    Interpretation:
                                </Box>
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography
                                    sx={{wordBreak: "break-word", width: "100%", fontSize: "16px", fontWeight: "400"}}>
                                    {descEng(id).interpretation}
                                </Typography>
                            </Box>

                            <Box sx={{mb: 2}}>
                                <Box sx={{fontSize: '18px', fontWeight: 'bold',}}>
                                    Recommendations:
                                </Box>
                            </Box>
                            <Box sx={{mb: 3}}>
                                <Typography
                                    sx={{textAlign: "justify", width: "86%", fontSize: "16px", fontWeight: "400"}}>
                                    {descEng(id).recommendations}
                                </Typography>
                            </Box>

                            <Box sx={{mb: 2}}>
                                <Box sx={{fontSize: '18px', fontWeight: 'bold'}}>
                                    Action Plan:
                                </Box>
                            </Box>
                            <Box sx={{mb: 3}}>
                                <ul>
                                    {descEng(id).actionPlan.map((action, index) => (
                                        <li key={index} style={{fontSize: "16px", fontWeight: "400"}}>{action}</li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default PointTable;
