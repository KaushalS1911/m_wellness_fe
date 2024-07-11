// import React from 'react';
// import {Box, Button, Container, Grid, Typography} from "@mui/material";
// import img1 from "../../assets/getstarted/professional.svg"
// import img2 from '../../assets/getstarted/pro-2.svg'
// import img3 from '../../assets/getstarted/pro-3.svg'
// import img4 from '../../assets/getstarted/pro-4.svg'
// import divider1 from "../../assets/getstarted/divider-get.jpg";
// import people from '../../assets/getstarted/people.png'
// import sml from "../../assets/gift/sml-logo.png";
// function GetStarted(props) {
//     return (
//         <Box sx={{position:"relative",mt:"200px",backgroundColor:"#FFFCF6",padding:"100px 0 20px 0"}}>
//             <Container>
//                 <Box>
//                     <Grid container spacing={3}>
//                         <Grid item lg={3} md={6} xs={12}>
//                             <Box sx={{height:"64px",width:"64px",borderRadius:"50%",overflow:"hidden"}}>
//                                 <img src={img1} alt="side image 1" />
//
//                             </Box>
//                             <Box sx={{fontSize:"20px",mt:"10px"}}>
//                                 <Typography variant='div' sx={{color:"black"}}>It's</Typography>
//                                 <Typography variant='div' sx={{display:"block",color:"green"}}>Professional.</Typography>
//                             </Box>
//                             <Box sx={{fontSize:"16px",color:"#4A4D4A",mt:"20px"}}>
//                                 All therapists are licensed, accredited professionals. BetterHelp allows you to connect with them in a safe and convenient online environment.
//                             </Box>
//                         </Grid><Grid item lg={3} md={6} xs={12}>
//                             <Box sx={{height:"64px",width:"64px",borderRadius:"50%",overflow:"hidden"}}>
//                                 <img src={img2} alt="side image 1" />
//
//                             </Box>
//                             <Box sx={{fontSize:"20px",mt:"10px"}}>
//                                 <Typography variant='div' sx={{color:"black"}}>It's</Typography>
//                                 <Typography variant='div' sx={{display:"block",color:"green"}}>Affordable.</Typography>
//                             </Box>
//                             <Box sx={{fontSize:"16px",color:"#4A4D4A",mt:"20px"}}>
//                                 Pay a low flat fee for both live sessions as well as messaging with your therapist. Therapy doesn't have to be expensive.
//                             </Box>
//                         </Grid><Grid item lg={3} md={6} xs={12}>
//                             <Box sx={{height:"64px",width:"64px",borderRadius:"50%",overflow:"hidden"}}>
//                                 <img src={img3} alt="side image 1" />
//
//                             </Box>
//                             <Box sx={{fontSize:"20px",mt:"10px"}}>
//                                 <Typography variant='div' sx={{color:"black"}}>It's</Typography>
//                                 <Typography variant='div' sx={{display:"block",color:"green"}}>Convenient.</Typography>
//                             </Box>
//                             <Box sx={{fontSize:"16px",color:"#4A4D4A",mt:"20px"}}>
//                                 Do it at your own time and at your own pace. Communicate with your therapist as often as you want and whenever you feel it's needed.
//                             </Box>
//                         </Grid><Grid item lg={3} md={6} xs={12}>
//                             <Box sx={{height:"64px",width:"64px",borderRadius:"50%",overflow:"hidden"}}>
//                                 <img src={img4} alt="side image 1" />
//
//                             </Box>
//                             <Box sx={{fontSize:"20px",mt:"10px"}}>
//                                 <Typography variant='div' sx={{color:"black"}}>It's</Typography>
//                                 <Typography variant='div' sx={{display:"block",color:"green"}}>Effective.</Typography>
//                             </Box>
//                             <Box sx={{fontSize:"16px",color:"#4A4D4A",mt:"20px"}}>
//                                 Thousands of people have benefited from therapy (just check out their reviews!) With BetterHelp, you can switch therapists at any point if you don't feel you are getting enough benefit.
//                             </Box>
//                         </Grid>
//                        <Box sx={{display: {md:"flex"},alignItems:"center",margin:"56px 0 0 "}}>
//                            <Grid>
//                                <Box sx={{fontSize:"32px",color:"#444444",textAlign:{xs:"center",md:"unset"}}} className="overpass">
//                                    Join over 4,800,000 people who decided to <Typography variant="span" sx={{color:"green"}}>get help and get happy</Typography> with BetterHelp.
//                                    <Box sx={{my:"20px"}}>
//                                        <Button
//                                            className="overpass"
//                                            sx={{
//                                                backgroundColor: "liteGreen",
//                                                py: "10px",
//                                                px: "28px",
//                                                textTransform: "unset",
//                                                fontSize: "20px",
//                                                color: "green",
//                                                borderRadius: "30px",
//                                                "&:hover": {
//                                                    backgroundColor: "green",
//                                                    color: "white",
//                                                },
//                                            }}
//                                        >
//                                            Get Started
//                                        </Button>
//                                    </Box>
//                                </Box>
//                            </Grid>
//                            <Grid sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//                                <Box sx={{width: {md:"485px",xs:"315px"},height: {md:"478px",xs:"325px"},overflow:"hidden",borderRadius:"10px",borderTopLeftRadius:"240px"}}>
//                                    <img src={people} alt="" />
//                                </Box>
//                            </Grid>
//                        </Box>
//                     </Grid>
//                 </Box>
//                 <Grid container>
//                     <Grid xs={12} md={6} mt={{ md: "15px", xs: "0px" }}>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 alignItems: "center",
//                                 py: "20px",
//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     fontSize: "15px",
//                                     color: "liteBlack",
//                                     fontWeight: "700",
//                                     lineHeight:1.5
//                                 }}
//                             >
//                                 If you are in a crisis or any other person may be in danger -
//                                 don't use this site. <br />
//                                 <Typography
//                                     variant="span"
//                                     sx={{ color: "green", textDecoration: "underline" }}
//                                 >
//                                     These resources
//                                 </Typography>{" "}
//                                 can provide you with immediate help.
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid xs={12} md={6} mt={{ md: "15px", xs: "32px" }}>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 justifyContent: {md:"end"},
//                                 alignItems: "center",
//                                 py: {md:"20px"},
//                                 opacity: ".5",
//                             }}
//                         >
//                             <Box sx={{ height: "40px", width: "115px" }}>
//                                 <img src={sml} alt="small logo" />
//                             </Box>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>
//             <Box sx={{position: "absolute", top: {md:"-50px",xs:"-10px"},height:"80px", width: "100%"}}><img src={divider1}
//                                                                                                                 alt="design image"/></Box>
//         </Box>
//     );
// }
//
// export default GetStarted;

import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import LookingFor from "./LookingFor";
import {Button, Container, MobileStepper, Typography} from "@mui/material";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

function GetStarted(props) {
    const [age,setAge] = useState([])
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };
  useEffect(() => {
      for (let i = 13; i <= 99; i++) {
          age.push(i);
      }
  },[])

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <LookingFor therapyTypes={[
                        { label: "Individual (for myself)" },
                        { label: "Couples (for myself and my partner)" },
                        { label: "Teen (for my child)" },
                    ]}
                                processMessage={"Let's walk through the process of finding the best therapist for you! We'll start off with some basic questions."}
                                therapyQuestion={"What type of therapy are you looking for?"}
                                handleNext={handleNext}
                    />
                );
            case 1:
                return (
                    <LookingFor therapyTypes={[
                        { label: "Woman " },
                        { label: "Man" },
                    ]}
                                link={"More options"}
                                processMessage={"Gender plays an important role in shaping personal identity and experiences. This information will help your therapist create a more personalized approach."}
                                therapyQuestion={"What is your gender identity?"}
                                handleNext={handleNext}
                    />
                );
            case 2:
                return (
                    <LookingFor therapyTypes={[
                        { label: "Straight" },
                        { label: "Gay" },
                        { label: "Lesbian" },
                        { label: "Bi or Pan" },
                        { label: "Prefer not to say" },
                    ]}
                                link={"More options"}
                                processMessage={"Your answer will help us match you to a suitable therapist as well as help your therapist create a treatment plan that respects your identity and experiences."}
                                therapyQuestion={"How do you identify?"}
                                handleNext={handleNext}
                    />
                );
            case 3:
                return (
                    <LookingFor therapyTypes={[
                        { label: "Single" },
                        { label: "In a relationship" },
                        { label: "Married" },
                        { label: "Divorced" },
                        { label: "Widowed" },
                        { label: "Other" },
                    ]}
                                // link={"More options"}
                                // processMessage={"Your answer will help us match you to a suitable therapist as well as help your therapist create a treatment plan that respects your identity and experiences."}
                                therapyQuestion={"What is your relationship status?"}
                                handleNext={handleNext}
                    />
                );
                case 4:
                return (
                    <LookingFor therapyTypes={[
                        { label: "Very important" },
                        { label: "Important" },
                        { label: "Somewhat important" },
                        { label: "Not important at all" },
                    ]}
                                // link={"More options"}
                                processMessage={"We ask questions about religion so we can match you to a therapist who can empathize with your background."}
                                therapyQuestion={"How important is religion in your life?"}
                                submit={true}
                                // handleNext={handleNext}
                    />
                );
            default:
                return "Unknown step";
        }
    };

    return (
        <>
            <Box  sx={{ width: '100%',pt:"150px",backgroundColor:"#FFFCF6",pb:"5px" }}>
              <Container>
                  <MobileStepper
                      className="main"
                      variant="dots"
                      steps={5}
                      position="static"
                      activeStep={activeStep}
                      sx={{ width:"100%", flexGrow: 1,backgroundColor:"#FFFCF6",display:"flex",justifyContent:"center" ,mb:"20px" ,"& .css-114p2tk-MuiMobileStepper-dot":{
                          width:"50px !important",
                          height: "5px !important",
                          borderRadius: "unset !important",
                          backgroundColor: "#DCE2DA !important",
                          },"& .css-26w9jf-MuiMobileStepper-dot":{
                              width:"50px !important",
                              borderRadius: "unset !important",
                          backgroundColor: "#325343 !important",
                          height: "5px !important",
                          }}}
                                      />
                  <Box>
                      <Box sx={{fontSize:"46px",color:"#444444",textAlign:'center'}} className="overpass">
                          Help us match you to the <Typography variant="span" sx={{color:"green"}}> right therapist</Typography>
                      </Box>
                      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <Box sx={{textAlign:"center",mt:"20px",width:{md:"850px"}}}>
                              It's important to have a therapist who you can establish a personal connection with. The following questions are designed to help match you to a licensed therapist based on your needs and personal preferences.
                          </Box>
                      </Box>
                  </Box>

                  <React.Fragment>
                      <Box>{getStepContent(activeStep)}</Box>

                  </React.Fragment>

              </Container>
            </Box>
        </>
    );
}

export default GetStarted;