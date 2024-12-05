import React from 'react';
import {Box, Button, Container, Divider, Grid} from "@mui/material";
import clock from "../../assets/advice/clock.jpg"
import heart from "../../assets/advice/heart.jpg"
import card1 from "../../assets/advice/card-1.jpg"
import card2 from "../../assets/advice/card-2.jpg"
import card3 from "../../assets/advice/card-3.jpg"
import card4 from "../../assets/advice/slide-4.jpg"
import card5 from "../../assets/advice/slide-5.jpg"
import card6 from "../../assets/advice/slide-6.jpg"
import hand from "../../assets/advice/hand-shap.png"
import d1 from "../../assets/advice/depression-1.jpg"
import d2 from "../../assets/advice/depression-2.jpg"
import d3 from "../../assets/advice/depression-12.jpg"
import d4 from "../../assets/advice/depression-4.jpg"
import d5 from "../../assets/advice/depression-5.jpg"
import d6 from "../../assets/advice/depression-6.jpeg"
import d7 from "../../assets/advice/depression-7.jpg"
import d8 from "../../assets/advice/depression-8.jpg"
import d9 from "../../assets/advice/depression-9.jpg"
import d10 from "../../assets/advice/depression-10.jpg"
import d11 from "../../assets/advice/depression-11.jpg"
import d12 from "../../assets/advice/depression-12.jpg"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function AdviceRecent(props) {
    const row1 = [
        {
            img:card1,
            title:"Family Mental Health And Systemic Racism: The Impact Racial Discrimination Can Have On Mental Health Outcomes",
            des:"Medically reviewed by April Justice"
        },{
            img:card2,
            title:"Mental Health Services And Mental Health Promotion In Diverse Communities",
            des:"Medically reviewed by Melissa Guarnaccia LCSW"
        },{
            img:card3,
            title:"Anticipating And Addressing Mental Health Challenges In Multicultural Families",
            des:"Medically reviewed by Julie Dodson MA"
        },
    ]
    const row2 = [
        {
            img:card4,
            title:"How Harnessing Willpower To Meet Your Goals Can Change Your Life",
            des:"Medically reviewed by April Justice LICSW"
        },{
            img:card5,
            title:"How to harness ambition in life for positive outcomes",
            des:"Medically reviewed by April Justice LICSW"
        },{
            img:card6,
            title:"Does Insurance Cover Therapy?",
            des:"Medically reviewed by Elizabeth Erban LMFT, IMH-E"
        },
    ]
    const row3 = [
        {
                img:d1,
            title: "Why Am I So Depressed After Working Out?",
                dec: "Medically reviewed by Julie Dodson"
        },
        {
                img:d2,
            title:" How Do People With Autism Spectrum Disorder Experience Depression? Signs And Symptoms",
            dec: "Medically reviewed by Corey Pitts,MA, LCMHC, LCAS, CCS"
        },
        {
                img:d3,
            title: "Why Can't I Cry? Exploring The Unexpected Symptoms Of Depression",
            dec: "Medically reviewed by Nikki Ciletti,M.Ed, LPC"
        },
        {
                img:d4,
            title: "The Benefits Of A Therapist Specializing In Depression During Healing And Recovery",
            dec:" Medically reviewed by Nikki Ciletti,M.Ed, LPC"
        },


    ]
    const row4 =[
        {
            img:d5,
            title: "How Do I Stop Feeling Overwhelmed And Anxious?",
            dec: "Medically reviewed by Melissa Guarnaccia,LCSW"
        },
        {
            img:d6,
            title: "Ways To Cope With Overwhelming Anxiety",
            dec: "Medically reviewed by Melissa Guarnaccia,LCSW"
        },
        {
            img:d7,
            title: "Why Do Athletes Experience Sports Anxiety? How To Minimize Stress Before A Game",
            dec: "Medically reviewed by Julie Dodson, MA"
        },
        {
            img:d8,
            title: "The Power Of Stretches To Help Reduce Anxiety",
            dec: "Medically reviewed by Julie Dodson, MA"
        },
    ]

    const row5 = [
        {
            img:d9,
            title: "The Evolution Of Therapy In Media: Global Media And The",
            dec: "Medically reviewed by Julie Dodson, MA"
        },
        {
            img:d10,
            title: "Mindfulness-Based Cognitive Therapy: Practicing Mindfulness With A Professional",
            dec: "Medically reviewed by Melissa Guarnaccia,LCSW"
        },
        {
            img:d11,
            title: "Understanding And Countering Cognitive Distortions In CBT",
            dec: "Medically reviewed by Melissa Guarnaccia,LCSW"
        },
        {
            img:d12,
            title: "What Is Rational Emotive Behavior Therapy, And How Can It Support Me?",
            dec:"Medically reviewed by Melissa Guarnaccia,LCSW"
        }
    ]
    return (
        <>
<Box className={"container"}>
    <Container>
        <Grid container >
            <Grid xs={12} md={9} >
            <Grid xs={12}>
                <Box sx={{fontSize:"24px",color:"#444444",display:"flex",alignItems:"center"}}>
                    <Box ><img src={clock} alt="clock image" style={{height:"50px",width:"50px",objectFit:"contain",marginRight:"20px"}} /></Box>
                    <Box>
                        Recent
                    </Box>
                </Box>
            </Grid>
                <Box sx={{display:"flex",overflowX:"scroll"}}>
                    {row1?.map((item) =>(
                        <Grid xs={4} sx={{
                            minWidth: {xs:"270px",md:"unset"},
                            cursor:"pointer",
                            "&:hover": {
                                "& .bhover": {
                                    color: "white",
                                    backgroundColor: "darkGreen"
                                },
                                "& .bimg": {
                                    transform:"scale(1.1)"
                                }
                            }
                        }}>
                            <Box sx={{backgroundColor:"#F5F7F5",padding:"10px",borderRadius:"13px",mx:"10px",height:"100%"}}>
                                <Box sx={{borderRadius:"10px",overflow:"hidden"}}><img src={item?.img} className="bimg" alt="card-1" /></Box>
                                <Box sx={{fontSize:"15px",color:"black",my:"10px",cursor:"pointer"}}>
                                    {item?.title}
                                </Box>
                                <Box sx={{fontSize:"12px" ,color:"liteBlack",cursor:"pointer"}}>
                                    {item?.des}
                                </Box>
                                <Box>
                                    <Box >
                                        <ArrowForwardIcon className="bhover" sx={{border:"1px solid #325343",borderRadius:"50%",mt:"20px",color:"darkGreen"}}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Box>
                <Grid xs={12}>
                <Box sx={{fontSize:"24px",color:"#444444",display:"flex",alignItems:"center",margin:"30px 0 10px 0"}}>
                    <Box ><img src={heart} alt="clock image" style={{height:"40px",width:"40px",objectFit:"contain",marginRight:"20px"}} /></Box>
                    <Box>
                        Popular
                    </Box>
                </Box>
            </Grid>
                <Box sx={{display:"flex",overflowX:"scroll"}}>
                    {row2?.map((item) =>(
                        <Grid xs={4} sx={{
                            minWidth: {xs:"270px",md:"unset"},
                            cursor:"pointer",
                            "&:hover": {
                                "& .bimg": {
                                    transform:"scale(1.1)"
                                },
                                "& .bhover": {
                                    color: "white",
                                    backgroundColor: "darkGreen"
                                },
                            }
                        }}>
                            <Box sx={{backgroundColor:"#F5F7F5",padding:"10px",borderRadius:"13px",mx:"10px",height:"100%"}}>
                                <Box sx={{borderRadius:"10px",overflow:"hidden"}}><img src={item?.img} className="bimg" alt="card-1" /></Box>
                                <Box sx={{fontSize:"15px",color:"black",my:"10px",cursor:"pointer"}}>
                                    {item?.title}
                                </Box>
                                <Box sx={{fontSize:"12px" ,color:"liteBlack",cursor:"pointer"}}>
                                    {item?.des}
                                </Box>
                                <Box>
                                    <Box >
                                        <ArrowForwardIcon className="bhover" sx={{border:"1px solid #325343",borderRadius:"50%",mt:"20px",color:"darkGreen"}}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Box>
                <Box sx={{mt:"50px"}}>
                    <Divider />
                </Box>
                <Box mb={5}>
                    <Box>
                        <Box sx={{fontSize:"24px",color:"#444444",py:"30px"}}>Depression</Box>
                        <Grid container>
                            {row3?.map((data) => (
                                <Grid xs={12} lg={6} p={1}>
                                    <Box sx={{backgroundColor:"#F5F7F5",cursor:"pointer",display:"flex",padding:"16px",borderRadius:"10px",
                                        "&:hover": {
                                            "& .bimg": {
                                                transform:"scale(1.1)"
                                            }
                                            },
                                    }}>
                                        <Box><Box sx={{borderRadius:"10px",overflow:"hidden",height:"120px",width:"120px"}}><img src={data?.img}  className="bimg" alt="card-1" /></Box></Box>
                                        <Box sx={{marginLeft:"10px"}}>
                                            <Box sx={{fontSize:"15px",color:"black",my:"10px",cursor:"pointer",width: {lg:"230px"}}}>
                                                {data?.title}
                                            </Box>
                                            <Box sx={{fontSize:"12px" ,color:"liteBlack",cursor:"pointer",width: {lg:"230px"}}}>
                                                {data?.dec}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                            <Grid xs={12}>
                                <Box sx={{display:"flex",justifyContent:"end",alignItems:"center",mt:"10px"}}>
                                    <Button
                                        className="overpass"
                                        variant="outlined"
                                        sx={{
                                            fontSize: "16px",
                                            borderRadius: "30px",
                                            color: "darkGreen",
                                            borderColor: "darkGreen",
                                            padding: "5px 16px",
                                            textTransform: "inherit",
                                            "&:hover": {
                                                borderColor: "darkGreen",
                                                backgroundColor: "#F5FBF4",
                                            },
                                            margin: { xs: "5px 0 30px", lg: "unset" },
                                            width:{xs:"100%",md:"unset"}
                                        }}
                                    >
                                        See more
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Box sx={{fontSize:"24px",color:"#444444",py:"30px"}}>Anxiety</Box>
                        <Grid container>
                            {row4?.map((data) => (
                                <Grid xs={12} lg={6} p={1}>
                                    <Box sx={{backgroundColor:"#F5F7F5",cursor:"pointer",display:"flex",padding:"16px",borderRadius:"10px",
                                        "&:hover": {
                                            "& .bimg": {
                                                transform:"scale(1.1)"
                                            }
                                        },
                                    }}>
                                        <Box><Box sx={{borderRadius:"10px",overflow:"hidden",height:"120px",width:"120px"}}><img src={data?.img}  className="bimg" alt="card-1" /></Box></Box>
                                        <Box sx={{marginLeft:"10px"}}>
                                            <Box sx={{fontSize:"15px",color:"black",my:"10px",cursor:"pointer",width: {lg:"230px"}}}>
                                                {data?.title}
                                            </Box>
                                            <Box sx={{fontSize:"12px" ,color:"liteBlack",cursor:"pointer",width: {lg:"230px"}}}>
                                                {data?.dec}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                            <Grid xs={12}>
                                <Box sx={{display:"flex",justifyContent:"end",alignItems:"center",mt:"10px"}}>
                                    <Button
                                        className="overpass"
                                        variant="outlined"
                                        sx={{
                                            fontSize: "16px",
                                            borderRadius: "30px",
                                            color: "darkGreen",
                                            borderColor: "darkGreen",
                                            padding: "5px 16px",
                                            textTransform: "inherit",
                                            "&:hover": {
                                                borderColor: "darkGreen",
                                                backgroundColor: "#F5FBF4",
                                            },
                                            margin: { xs: "5px 0 30px", lg: "unset" },
                                            width:{xs:"100%",md:"unset"}
                                        }}
                                    >
                                        See more
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Box sx={{fontSize:"24px",color:"#444444",py:"30px"}}>Therapy</Box>
                        <Grid container>
                            {row5?.map((data) => (
                                <Grid xs={12} lg={6} p={1}>
                                    <Box sx={{backgroundColor:"#F5F7F5",cursor:"pointer",display:"flex",padding:"16px",borderRadius:"10px",
                                        "&:hover": {
                                            "& .bimg": {
                                                transform:"scale(1.1)"
                                            }
                                        },
                                    }}>
                                        <Box><Box sx={{borderRadius:"10px",overflow:"hidden",height:"120px",width:"120px"}}><img src={data?.img}  className="bimg" alt="card-1" /></Box></Box>
                                        <Box sx={{marginLeft:"10px"}}>
                                            <Box sx={{fontSize:"15px",color:"black",my:"10px",cursor:"pointer",width: {lg:"230px"}}}>
                                                {data?.title}
                                            </Box>
                                            <Box sx={{fontSize:"12px" ,color:"liteBlack",cursor:"pointer",width: {lg:"230px"}}}>
                                                {data?.dec}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                            <Grid xs={12}>
                                <Box sx={{display:"flex",justifyContent:"end",alignItems:"center",mt:"10px"}}>
                                    <Button
                                        className="overpass"
                                        variant="outlined"
                                        sx={{
                                            fontSize: "16px",
                                            borderRadius: "30px",
                                            color: "darkGreen",
                                            borderColor: "darkGreen",
                                            padding: "5px 16px",
                                            textTransform: "inherit",
                                            "&:hover": {
                                                borderColor: "darkGreen",
                                                backgroundColor: "#F5FBF4",
                                            },
                                            margin: { xs: "5px 0 30px", lg: "unset" },
                                            width:{xs:"100%",md:"unset"}
                                        }}
                                    >
                                        See more
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>



            <Grid xs={3}  sx={{display: {md:"flex",xs:"none"},justifyContent:"center",}}>
                <Box sx={{mx:"20px"}}>
                   <Box sx={{mt:"55px"}}> <TextField
                       variant="outlined"
                       placeholder="Search..."
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <SearchIcon />
                               </InputAdornment>
                           ),
                       }}
                   />
                   </Box>
                       <Box sx={{height: {lg:"260px",xs:"200px"},width: {lg:"260px",xs:"200px"},my:"20px"}}><img src={hand} alt="hand" /></Box>
                    <Box sx={{textAlign:"center",color:"black",lineHeight:1.6}}>Get the support you need from one of our therapists</Box>
                    <Box
                        sx={{mt:"20px"}}
                    >
                        <Button
                            className='overpass'
                            sx={{
                                borderRadius: "30px",
                                backgroundColor: "#A6DE9B",
                                padding: "8px 36px",
                                color: "darkGreen",
                                textTransform: "initial",
                                fontSize: "20px",
                                "&:hover": {
                                    backgroundColor: "green",
                                    color: "white",
                                },
                                width:"100%"
                            }}
                        >
                            Get started
                        </Button>
                    </Box>
                   <Box sx={{my:"20px"}}>
                       <Divider />
                   </Box>
                    <Box className={"overpass"}>
                        <Box  sx={{fontSize:"19px",color:"liteBlack"}}>TOP CATEGORIES</Box>
                        <Box sx={{color:"green",textDecoration:"underline",cursor:"pointer",mt:"20px",fontWeight:"600","&:hover":{color:"darkGreen"}}}>
                            General
                        </Box><Box sx={{color:"green",textDecoration:"underline",cursor:"pointer",mt:"10px",fontWeight:"600","&:hover":{color:"darkGreen"}}}>
                        Therapy
                        </Box><Box sx={{color:"green",textDecoration:"underline",cursor:"pointer",mt:"10px",fontWeight:"600","&:hover":{color:"darkGreen"}}}>
                        Relationships and Relations
                        </Box><Box sx={{color:"green",textDecoration:"underline",cursor:"pointer",mt:"10px",fontWeight:"600","&:hover":{color:"darkGreen"}}}>
                        Depression
                        </Box><Box sx={{color:"green",textDecoration:"underline",cursor:"pointer",mt:"10px",fontWeight:"600","&:hover":{color:"darkGreen"}}}>
                        Love
                        </Box><Box sx={{fontSize:"17px",color:"darkGreen",cursor:"pointer",mt:"20px",fontWeight:"600","&:hover":{
                            textDecoration:"underline",
                        }}}>
                        See all categories
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>

    </Container>

</Box>
        </>
    );
}

export default AdviceRecent;