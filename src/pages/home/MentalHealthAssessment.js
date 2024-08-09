import React from 'react';
import {Box, Container} from "@mui/material";
import home1 from "../../assets/home/home1.jpg"
import home2 from "../../assets/home/home2.jpeg"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {useNavigate} from "react-router-dom";

function MentalHealthAssessment(props) {
    const navigate = useNavigate()
    return (
        <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: "60px",minHeight:"88vh",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>

            <Container>
                <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                    Assessments
                </Box>
                <Box sx={{fontSize: "18px", color: "#444444", mt: 4}}>
                    Gain insight into your mental and emotional health and find ways to support yourself
                </Box>

               <Box sx={{display: {md:"flex"}}}>
                   <Box sx={{mt: 5,marginRight:4}}>
                       <Box sx={{
                           minHeight: "422px",
                           width: {sm:"400px",xs:"100%"},
                           backgroundColor: "#fff",
                           borderRadius: 8,
                           padding: "24px"
                       }}>
                           <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                               Exam Stress Gauage Test (18-21)
                           </Box>
                           <Box sx={{fontSize: "18px", color: "#444444", mt: 4}}>
                               The Adult ADHD Self-Report Scale (ASRS-v1.1) Symptom Checklist was developed in conjunction
                               with the World Health Organization (WHO), and the Wor
                           </Box>
                           <Box sx={{display: {sm:"flex"}, justifyContent: "space-between", mt: 5}}>
                               <Box sx={{height: "140px", width: "140px", borderRadius: 5, overflow: "hidden"}}>
                                   <img src={home1} alt="first"/>
                               </Box>
                               <Box sx={{display:"flex",alignItems:"end"}}>
                                   <Box>
                                       <Box sx={{color:"#a7a7a7",display:"flex",alignItems:"center"}}>
                                           <CalendarTodayIcon /> <Box sx={{marginLeft:1}}>5 mins quiz</Box>
                                           {/*<i className="fa-regular fa-calendar" ></i>*/}
                                       </Box>
                                       <Box sx={{color:"darkGreen" ,mt:4,textDecoration:"underline",fontWeight:600,cursor:"pointer"}} onClick={() => {
                                           sessionStorage.setItem("data","hello")
                                           navigate("/emotional")
                                       }}>
                                           TAKE ASSESSMENT
                                       </Box>
                                   </Box>
                               </Box>
                           </Box>
                       </Box>
                   </Box>
                   <Box sx={{mt: 5}}>
                       <Box sx={{
                           minHeight: "422px",
                           width: {sm:"400px",xs:"100%"},
                           backgroundColor: "#fff",
                           borderRadius: 8,
                           padding: "24px"
                       }}>
                           <Box sx={{fontSize: "32px", color: "#444444"}} className="overpass">
                               SHAPE K-12 Assessment Test
                           </Box>
                           <Box sx={{fontSize: "18px", color: "#444444", mt: 4}}>
                               OCD, or Obsessive Compulsive Disorder, is a common mental health concern that many people struggle with. However, it
                           </Box>
                           <Box sx={{display: {sm:"flex"}, justifyContent: "space-between", mt: 7}}>
                               <Box sx={{height: "140px", width: "140px", borderRadius: 5, overflow: "hidden"}}>
                                   <img src={home2} alt="first"/>
                               </Box>
                               <Box sx={{display:"flex",alignItems:"end"}}>
                                   <Box>
                                       <Box sx={{color:"#a7a7a7",display:"flex",alignItems:"center"}}>
                                           <CalendarTodayIcon /> <Box sx={{marginLeft:1}}>5 mins quiz</Box>
                                           {/*<i className="fa-regular fa-calendar" ></i>*/}
                                       </Box>
                                       <Box sx={{color:"darkGreen" ,mt:4,textDecoration:"underline",fontWeight:600,cursor:"pointer"}} onClick={() => {
                                           sessionStorage.clear()
                                           navigate("/emotional")
                                       }}>
                                           TAKE ASSESSMENT
                                       </Box>
                                   </Box>
                               </Box>
                           </Box>
                       </Box>
                   </Box>
               </Box>
            </Container>
        </Box>
    );
}

export default MentalHealthAssessment;