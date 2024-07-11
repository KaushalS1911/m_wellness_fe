import React from 'react';
import {Box, Button, Container, Divider, Grid} from "@mui/material";
import image1 from "../../assets/advice/ends-divider.jpg";
import paint1 from "../../assets/advice/paint-1.svg"
import paint3 from "../../assets/advice/paint-2.svg"
import paint2 from "../../assets/advice/paint-3.svg"
import meet1 from "../../assets/advice/meet-1.jpg"
import meet2 from "../../assets/advice/meet-2.jpg"
import meet3 from "../../assets/advice/meet-3.jpg"
import meet4 from "../../assets/advice/meet-4.jpg"
import meet5 from "../../assets/advice/meet-5.jpg"
import meet6 from "../../assets/advice/meet-6.jpg"

function AdviceReview(props) {
    const paint = [
        {
            img:paint1,
            desc:"Our writers are researchers and advocates in the mental health space."
        },{
            img:paint2,
            desc:"Each article is medically reviewed by a licensed therapist."
        },{
            img:paint3,
            desc:"Articles are updated to reflect the latest health information."
        },
    ]
    const meet = [
        {
            img:meet1,
            title:"Aaron Dutil",
            des:"LMHC, LPC"
        },{
            img:meet2,
            title:"Lauren Fawley",
            des:"LPC"
        },{
            img:meet3,
            title:"Majesty Purvis",
            des:"LCMHC"
        },{
            img:meet4,
            title:"Arianna Williams",
            des:"LPC, CCTP"
        },{
            img:meet5,
            title:"Elizabeth Erban",
            des:"LMFT, IMH-E"
        },{
            img:meet6,
            title:"Karen Foster",
            des:"LPC"
        },
    ]




    return (
        <>
            <Box sx={{position:"relative",mt:"60px",backgroundColor:"cream"}}>
                <Box sx={{ position: "absolute", top: {md:"-8%",xs:"-5%"}, width: "100%",height:"100px" }}>
                    <img src={image1} alt={image1} />
                </Box>
                <Container >
                    <Box sx={{fontSize:{xs:"28px",md:"42px",color:"#444444"},textAlign:"center",position:"relative",zIndex:11,}}>
                        The review process
                    </Box>
                    <Box>
                        <Grid container>
                            {paint?.map((data) =>(
                                <Grid xs={12} md={4} px={{md:10}}>
                                    <Box sx={{display:"flex",justifyContent: {md:"center"},alignItems:"center",flexDirection: {md:"column"},py:"30px"}}>
                                        <Box><Box sx={{width:"161px",height:"128px"}}>
                                            <img src={data?.img} alt="paint 1" style={{objectFit:"contain"}}/>
                                        </Box></Box>
                                        <Box sx={{textAlign: {md:"center"},color:"liteBlack",py:"20px",marginLeft: {xs:"20px",md:"unset"}}}>
                                            {data?.desc}
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}

                        </Grid>
                        <Box>
                            <Divider />
                        </Box>
                        <Box sx={{padding:"64px 0"}}>
                                <Box sx={{fontSize:{xs:"28px",md:"42px",color:"#444444"},textAlign:"center"}}>
                                    Meet the editorial team
                            </Box>
                            <Grid container my={4}>
                                {meet?.map((data) => (
                                    <Grid lg={2} sm={4} xs={6} sx={{"&:hover":{
                                            "& .img":{
                                                transform:"scale(1.1)"                                    }
                                        },mb:{xs:"15px",lg:"unset"}}}>
                                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
                                            <Box sx={{height:"128px",width:"128px",borderRadius:"50%",overflow:"hidden"}}><img className={"img"} src={data?.img} alt="team-1" /></Box>
                                        </Box>
                                        <Box sx={{color:"darkGreen","&:hover":{
                                                textDecoration:"underline"
                                            },cursor:"pointer",textAlign:"center",my:"8px",fontSize:"18px"}}>{data?.title}</Box>
                                        <Box sx={{color:"liteBlack",cursor:"pointer",textAlign:"center",fontSize:"14px"
                                        }}>{data?.des}</Box>
                                    </Grid>
                                ))}
                                <Grid xs={12}>
                                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:"30px"}}>
                                        <Button
                                            className="overpass"
                                            variant="outlined"
                                            sx={{
                                                fontSize: "20px",
                                                borderRadius: "30px",
                                                color: "darkGreen",
                                                borderColor: "darkGreen",
                                                padding: "10px 36px",
                                                textTransform: "inherit",
                                                "&:hover": {
                                                    borderColor: "darkGreen",
                                                    backgroundColor: "#F5FBF4",
                                                },
                                                my: { xs: "40px", lg: "unset" },
                                                width:{xs:"100%",sm:"unset"}
                                            }}
                                        >
                                            See all
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </>
    );
}

export default AdviceReview;