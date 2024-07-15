import React, {useState} from 'react';
import {Box, Container} from '@mui/material';
import {Gauge, gaugeClasses} from '@mui/x-charts';
import {useParams} from "react-router-dom"

function PointTable(props) {
    const [points, setPoints] = useState(75);
    const {id} = useParams()
    const settings = {
        width: 350,
        height: 200,
        // value: 60,
    };

    const per = ((id * 100) / 60).toFixed(0)

    const desc = (data) => {
        switch (true) {
            case data >= 50 && data <= 60 :
                return {
                    desc: "You have demonstrated excellent stress management, emotional resilience, and decision - making skills, which are crucial for your exam preparation.Your ability to stay calm under pressure and maintain a positive mindset is commendable, and these traits will serve you well not only in your exams but also in your future career.Keep up the good work, continue refining your skills, and remember that consistent effort and self - belief are key to achieving your goals.With your determination and resilience, you are well-equipped to overcome any challenges that come your way.",
                    color: "#325343"
                }
            case data >= 40 && data <= 49 :
                return {
                    desc: "You have demonstrated good skills and behaviors, but there are some areas that could benefit from improvement.Focus on enhancing your stress management techniques and decision-making strategies to be fully prepared for the challenges ahead.Developing a robust set of stress management skills will help you stay calm and focused under pressure, while refining your decision-making strategies will ensure you can navigate complex situations with confidence. By addressing these areas, you'll be better equipped to tackle any obstacles and achieve your goals more effectively.",
                    color: "green"
                };
            case data >= 30 && data <= 39 :
                return {
                    desc: "You show potential, but there are several areas that need significant improvement. Consider incorporating regular stress-relief techniques, emotional intelligence training, and structured decision-making practices into your routine. Practicing stress-relief techniques will help you stay calm under pressure and maintain a positive outlook. Emotional intelligence training will aid you in understanding your emotions and managing them effectively. Structured decision-making practices will assist you in comprehending and resolving complex situations. By adopting these measures, you can enhance your abilities and make progress towards your goals.",
                    color: "#C6892C"
                };
            case data >= 20 && data <= 29 :
                return {
                    desc: "There are several areas of concern that need to be addressed. It's crucial to prioritize the development of better stress management techniques, emotional resilience, and consistent study habits. Improving your stress management skills will empower you to handle pressure effectively; while enhancing emotional resilience will help you bounce back from setbacks with confidence. Developing consistent study habits will ensure you stay organized and focused on your goals.Don't hesitate to seek guidance from mentors and utilize resources that can support you in these areas of growth. By actively working on these aspects, you'll build a strong foundation for achieving success in your endeavours.",
                    color: "#F76F00"
                };
            case data >= 0 && data <= 19 :
                return {
                    desc: "Your responses indicate major development is needed in almost all aspects. It's essential to prioritize building a strong foundation in stress management, emotional intelligence, and disciplined study routines. These skills are crucial for navigating challenges effectively and achieving your goals. Seeking professional guidance or training can provide valuable insights and strategies to accelerate your growth in these areas. By committing to improving these foundational skills, you'll enhance your readiness and capability to succeed in your endeavours.",
                    color: "#ff0000"
                };
            default:
                return "Invalid data";

        }
    }

    return (
        <>
            <Box sx={{mt: 20, mb: 5}}>
                <Container>
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
                            sx={{
                                [`& .${gaugeClasses.valueText}`]: {
                                    fontSize: 40,
                                    transform: 'translate(0px, 0px)',
                                    fontWeight: 700
                                },
                                "& .css-b9rdri-MuiGauge-referenceArc": {
                                    fill: "#325343 !important"
                                }
                            }}
                            text={id}
                        />
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Box sx={{textAlign: "center", width: "250px", fontSize: "18px"}} className={"overpass"}>
                            Interpretation and feedback based on your inputs</Box>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Box sx={{
                            width: {sm:"500px",xs:"100%"},
                            backgroundColor: "#397a4a4a",
                            my: "30px",
                            padding: "20px",
                            borderRadius: "15px"
                        }}>
                            {desc(id).desc}
                        </Box>
                    </Box>

                </Container>
            </Box>
        </>
    );
}

export default PointTable;
