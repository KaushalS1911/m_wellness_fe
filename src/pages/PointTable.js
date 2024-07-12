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

    const per = ((id * 100)/60).toFixed(0)

    const desc = (data) => {
        switch (true) {
            case data >= 50 && data <= 60 :
                return {
                    desc: "You have demonstrated excellent stress management, emotional resilience, and decision-making skills, which are crucial for IAS preparation. Keep up the good work and continue refining your skills.",
                    desc1: "You have demonstrated excellent stress management, emotional resilience, decision-making, motivation, and interpersonal skills. Keep up the good work and continue refining your skills.",
                    color: "#325343"
                }
            case data >= 40 && data <= 49 :
                return {
                    desc: "You have good skills and behaviors, but there are some areas for improvement. Focus on enhancing your stress management techniques and decision-making strategies to be fully prepared for the IAS challenges.",
                    desc1: "You have good skills and behaviors, but there are some areas for improvement. Focus on enhancing the identified areas to be fully prepared for the challenges of IAS preparation.",
                    color: "green"
                };
            case data >= 30 && data <= 39 :
                return {
                    desc: "You show potential, but there are several areas that need significant improvement. Consider incorporating regular stress-relief techniques, emotional intelligence training, and structured decision-making practices into your routine.",
                    desc1: "You show potential but need significant improvement in multiple areas. Focus on stress management, emotional resilience, and decision-making skills.",
                    color: "#C6892C"
                };
            case data >= 20 && data <= 29 :
                return {
                    desc: "There are several areas of concern that need to be addressed. Focus on developing better stress management techniques, emotional resilience, and consistent study habits. Seek guidance and resources to improve in these areas.",
                    desc1: "You have several areas of concern that need to be addressed. It is important to work on stress management techniques, emotional resilience, and consistent study habits to improve your readiness.",
                    color: "#F76F00"
                };
            case data >= 0 && data <= 19 :
                return {
                    desc: "Your responses indicate major development is needed in almost all aspects. Focus on building a strong foundation in stress management, emotional intelligence, and disciplined study routines. It may be helpful to seek professional guidance or training to develop these crucial skills.",
                    desc1: "Your responses indicate major development is needed in almost all aspects. Focus on building a strong foundation in stress management, emotional intelligence, and disciplined study routines.",
                    color: "#ff0000"
                };
            default:
                return "Invalid data";

        }
    }

    return (
        <>
            <Box sx={{mt: 20 ,mb:5}}>
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
                    <Box sx={{display: "flex", justifyContent: "center",my:3}}>
                        <Gauge
                            {...settings}
                            value={per}
                            startAngle={-110}
                            endAngle={110}
                            sx={{
                                [`& .${gaugeClasses.valueText}`]: {
                                    fontSize: 40,
                                    transform: 'translate(0px, 0px)',
                                    fontWeight:700
                                },
                                "& .css-b9rdri-MuiGauge-referenceArc":{
                                    fill:"#325343 !important"
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
                        <Box sx={{width: "500px", backgroundColor: "#397a4a4a", my: "30px",padding:"20px",borderRadius:"15px"}}>
                            {desc(id).desc}
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Box sx={{width: "500px", backgroundColor: "#397a4a4a",padding:"20px",borderRadius:"15px"}}>
                            {desc(id).desc1}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default PointTable;
