import React, {useState} from "react";
import divider3 from "../../assets/home/divider-main-3.png"
import {
    Accordion,
    AccordionSummary,
    Box,
    Container,
    Typography,
    Collapse,
    Button,
    Grid,
    TableContainer,
    Paper,
    Tooltip,
    IconButton,
    Checkbox,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody, useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import divider from "../../assets/gift/divider-main-4.png";
import right from '../../assets/gift/quote-right.svg'
import left from '../../assets/gift/quote-left.svg'
import image from '../../assets/gift/img2.jpg'
import InfoIcon from "@mui/icons-material/Info";
import checkboxImg from "../../assets/home/checkboxImg.png";
import crossImg from "../../assets/home/cross.png";
import {useTheme} from "@mui/material/styles";
const Frequently = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    const createData = (feature, Mwellness, inOffice, info) => {
        return { feature, Mwellness, inOffice, info };
    };
    const rows = [
        createData(
            "Provided by a credentialed therapist",
            true,
            true,
            "Information about credentialed therapists"
        ),
        createData(
            "In-office visits",
            false,
            true,
            "Information about in-office visits"
        ),
        createData(
            "Messaging any time",
            true,
            false,
            "Information about messaging"
        ),
        createData("Chat sessions", true, false, "Information about chat sessions"),
        createData(
            "Phone sessions",
            true,
            true,
            "Information about phone sessions"
        ),
        createData(
            "Video sessions",
            true,
            true,
            "Information about video sessions"
        ),
        createData("Easy scheduling", true, false, "Information about scheduling"),
        createData(
            "Digital worksheets",
            true,
            false,
            "Information about worksheets"
        ),
        createData(
            "Group sessions",
            true,
            true,
            "Information about group sessions"
        ),
        createData(
            "Smart provider matching",
            true,
            false,
            "Information about provider matching"
        ),
        createData(
            "Easy to switch providers",
            true,
            false,
            "Information about switching providers"
        ),
        createData(
            "Access therapy from anywhere",
            true,
            false,
            "Information about access"
        ),
    ];
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const data = [
    {
      title: "Who are the therapists?",
      desc: "We require every therapist providing Therapist Services on the Platform to be a registered, trained, and experienced counsellor, psychologist, social worker, or therapist. Therapists must have a relevant academic degree in their field, at least 3 years of experience, and have to be qualified and credentialed by their respective professional organization after successfully completing the necessary education, exams, training, and practice requirements as applicable. For the avoidance of doubt, therapists are referred to on this site and related apps/sites by their title and U.S., U.K., or Australian credentials, whichever is applicable.",
    },
    {
      title: "Who will be helping me?",
      desc: "After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. Different therapists have different approaches and areas of focus, so it's important to find the right person who can achieve the best results for you. We have found that we are able to provide a successful match most of the time; however, if you start the process and you feel your therapist isn't a good fit for you, you may elect to be matched to a different therapist.",
    },
    {
      title: "Is MWellness right for me?",
      desc: "MWellness may be right for you if you're looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help. We also have therapists who specialize in specific issues such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, LGBT matters, grief, religion, self esteem, and more.",
    },
    {
      title: "How much does it cost?",
      desc: "The cost of therapy through MWellness ranges from $65 to $90 per week (billed every 4 weeks) and it is based on your location, source, preferences, and therapist availability. You can cancel your membership at any time, for any reason.",
    },
    {
      title: "After I sign up, how long until I'm matched with a therapist?",
      desc: "In most cases within 24 hours or less.",
    },
    {
      title: "How will I communicate with my therapist?",
      desc: "The cost of therapy through MWellness ranges from $65 to $90 per week (billed every 4 weeks) and it is based on your location, source, preferences, and therapist availability. You can cancel your membership at any time, for any reason.",
    },
    {
      title: "Can MWellness substitute for traditional face-to-face therapy?",
      desc: "The professionals who work through MWellness are licensed and credentialed therapists who were certified by their state's board to provide therapy and counseling. However, while the service may have similar benefits, it's not capable of substituting for traditional face-to-face therapy in every case. Please note that your provider won't be able to make any official diagnosis, to fulfill any court order or prescribe medication.",
    },
    {
      title: "How long can I use MWellness?",
      desc: "This depends on your needs and varies a lot from one person to another. Some people feel they get most of the value after just a few weeks, while others prefer to stick to the program for an extended period of time. This is completely up to you.",
    },
    {
      title: "How can I be sure that this is an effective form of therapy?",
      desc: 'There are many studies that confirm the effectiveness of the online medium for making life changes. For example, a study published by JMIR Publications and conducted by researchers from University of California - Berkeley, University of California - San Francisco, and the San Francisco General Hospital concluded that "users of MWellness experienced significantly reduced depression symptom severity after engaging with the platform." You can read the full study here. Our confidence in the platform comes primarily from the feedback and testimonials we receive from users. Every day, we are excited to hear from more people about the way this service helped them make a tremendous change in their lives.',
    },
  ];

  return (
    <>

            <Box sx={{backgroundColor: "#325343", pt: "120px", position: "relative"}}>
                <Box sx={{position: "absolute", top: -14, width: "100%"}}>
                    <img src={divider3} alt="divider image"/>
                </Box>
                <Box>
                    <Box sx={{display: "flex", justifyContent: "center"}} pb={5}>
                        <Typography className="overpass title" sx={{fontSize: 48, fontWeight: 350, color: "white", fontFamily: "Overpass"}}>
                            <Typography variant="span" sx={{color: "#A6DE9B"}}>
                                m
                            </Typography>
                            wellness vs. traditional in-office therapy
                        </Typography>
                    </Box>
                    <Box>
                        <Grid container display={"flex"} justifyContent={"center"}>
                            <Grid item md={5}>
                                <TableContainer>
                                    {/*{isMobile ? (*/}
                                    {/*    <Box sx={{color:"white"}}>*/}
                                    {/*        {rows.map((row) => (*/}
                                    {/*            <Box*/}
                                    {/*                key={row.feature}*/}
                                    {/*                sx={{*/}
                                    {/*                    padding: 2,*/}
                                    {/*                    borderBottom: "1px solid white",*/}
                                    {/*                }}*/}
                                    {/*            >*/}
                                    {/*                <Typography variant="h6">{row.feature}</Typography>*/}
                                    {/*                {row.info && (*/}
                                    {/*                    <Tooltip title={row.info}>*/}
                                    {/*                        <IconButton size="small">*/}
                                    {/*                            <InfoIcon fontSize="small" />*/}
                                    {/*                        </IconButton>*/}
                                    {/*                    </Tooltip>*/}
                                    {/*                )}*/}
                                    {/*                <Box*/}
                                    {/*                    sx={{*/}
                                    {/*                        display: "flex",*/}
                                    {/*                        justifyContent: "space-between",*/}
                                    {/*                        marginTop: 1,*/}
                                    {/*                    }}*/}
                                    {/*                >*/}
                                    {/*                    <Typography>MWellness</Typography>*/}
                                    {/*                    <Checkbox checked={row.Mwellness} disabled />*/}
                                    {/*                </Box>*/}
                                    {/*                <Box*/}
                                    {/*                    sx={{*/}
                                    {/*                        display: "flex",*/}
                                    {/*                        justifyContent: "space-between",*/}
                                    {/*                    }}*/}
                                    {/*                >*/}
                                    {/*                    <Typography>In-office</Typography>*/}
                                    {/*                    <Checkbox checked={row.inOffice} disabled />*/}
                                    {/*                </Box>*/}
                                    {/*            </Box>*/}
                                    {/*        ))}*/}
                                    {/*    </Box>*/}
                                    {/*) : (*/}
                                    <Table>
                                        <TableHead sx={{backgroundColor: "#325343"}}>
                                            <TableRow>
                                                <TableCell sx={{color: "white"}}></TableCell>
                                                <TableCell className="title overpass" align="center" sx={{
                                                    fontFamily: "Overpass",
                                                    fontSize: 22,
                                                    color: "white",
                                                    backgroundColor: "green",
                                                    borderTopLeftRadius: "10px",
                                                    borderTopRightRadius: "10px"
                                                }}>
                                                    mwellness
                                                </TableCell>
                                                <TableCell className="title overpass" align="center"
                                                           sx={{fontSize: 22, color: "white", fontFamily: "Overpass"}}>
                                                    In-office
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{backgroundColor: "#325343"}}>
                                            {rows.map((row) => (
                                                <TableRow key={row.feature}>
                                                    <TableCell
                                                        scope="row"
                                                        sx={{color: "white", fontFamily: "Overpass", fontSize: 18}}
                                                    >
                                                        {row.feature}
                                                        {row.info && (
                                                            <Tooltip title={row.info}>
                                                                <IconButton size="small">
                                                                    <InfoIcon
                                                                        fontSize="small"
                                                                        sx={{color: "white"}}
                                                                    />
                                                                </IconButton>
                                                            </Tooltip>
                                                        )}
                                                    </TableCell>
                                                    <TableCell
                                                        align="center"
                                                        sx={{backgroundColor: "white"}}
                                                    >
                                                        {/* <Checkbox
                                checked={row.Mwellness}
                                disabled
                              /> */}
                                                        <img
                                                            src={checkboxImg}
                                                            style={{objectFit: "contain", height: "35px"}}
                                                            alt="checkbox"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <img
                                                            src={crossImg}
                                                            style={{objectFit: "contain", height: "45px"}}
                                                            alt="checkbox"
                                                        />
                                                        {/* <Checkbox checked={row.inOffice} disabled /> */}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    {/*// )*/}
                                    {/*}*/}
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    // top: { sm: "-40px", xs: "-20px" },
                    // left: "0",
                    // width: "100%",
                    position: "relative",
                    backgroundColor: "darkGreen",
                    height: "800px"
                }}
            >
                {/*<Container>*/}
                {/*  <Box*/}
                {/*    sx={{*/}
                {/*      position: "absolute",*/}
                {/*      top: "10%",*/}
                {/*      left: "45%",*/}
                {/*      width: {md:"600px",xs:"100%"},*/}
                {/*      color: "white",*/}
                {/*      transform: "translateX(-50%)",*/}
                {/*      fontSize: "32px",*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    <Box sx={{ position: "relative" ,textAlign:"center"}}>*/}
                {/*        Susan is amazing in her insights and conversational approach. I am so glad and blessed to have found her and started healing with her guidance.*/}
                {/*      <Box sx={{ position: "absolute", top: "0", left: "-100px" }}>*/}
                {/*        {" "}*/}
                {/*        <img src={left} alt="left" />{" "}*/}
                {/*      </Box>*/}
                {/*      <Box sx={{ position: "absolute", top: "0", right: "-80px" }}>*/}
                {/*        {" "}*/}
                {/*        <img src={right} alt="right" />{" "}*/}
                {/*      </Box>*/}
                {/*      <Box*/}
                {/*        sx={{*/}
                {/*          display: "flex",*/}
                {/*          justifyContent: "center",*/}
                {/*          alignItems: "center",*/}
                {/*            width: { md: "350px", xs: "250px" },*/}
                {/*            mx:"auto",*/}
                {/*            my:"10px"*/}
                {/*        }}*/}
                {/*      >*/}
                {/*        <img*/}
                {/*          src={image}*/}
                {/*          alt="image"*/}
                {/*        />*/}
                {/*      </Box>*/}
                {/*      <Box*/}
                {/*        sx={{*/}
                {/*          display: "flex",*/}
                {/*          justifyContent: "center",*/}
                {/*          alignItems: "center",*/}
                {/*        }}*/}
                {/*      >*/}
                {/*        <Button*/}
                {/*          variant="outlined"*/}
                {/*          sx={{*/}
                {/*            color: "white",*/}
                {/*            padding: "10px 36px",*/}
                {/*            borderColor: "white",*/}
                {/*            borderRadius: "30px",*/}
                {/*            "&:hover": {*/}
                {/*              color: "lightGreen",*/}
                {/*              borderColor: "lightGreen",*/}
                {/*            },*/}
                {/*          }}*/}
                {/*        >*/}
                {/*          More success stories*/}
                {/*        </Button>*/}
                {/*      </Box>*/}
                {/*    </Box>*/}
                {/*  </Box>*/}
                {/*</Container>*/}
                <Container>
                    <Box
                        sx={{
                            position: "absolute",
                            top: {md: "14%", xs: "20%"},
                            left: "50%",
                            width: {md: "600px", xs: "90%"},
                            color: "white",
                            transform: "translateX(-50%)",
                            fontSize: {md: "32px", xs: "24px"},
                            textAlign: "center",
                            px: {xs: 2, md: 0},
                        }}
                    >
                        <Box className="overpass title" sx={{position: "relative", textAlign: "center"}}>
                            Susan is amazing in her insights and conversational approach. I am so glad and blessed to
                            have found her and started healing with her guidance.
                            <Box sx={{
                                position: "absolute",
                                top: "0",
                                left: {md: "-100px", xs: "-5px"},
                                height: {md: "40px", xs: "20px"}
                            }}>
                                <img src={left} alt="left"/>
                            </Box>
                            <Box sx={{
                                position: "absolute",
                                top: "0",
                                right: {md: "-80px", xs: "-5px"},
                                height: {md: "40px", xs: "20px"}
                            }}>
                                <img src={right} alt="right"/>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: {md: "350px", xs: "250px"},
                                    mx: "auto",
                                    my: 2,
                                }}
                            >
                                <img src={image} alt="image" style={{width: "100%", height: "auto"}}/>
                            </Box>
                            <Button
                                variant="outlined"
                              className="overpass"
                                sx={{
                                    color: "white",
                                    padding: {md: "12px 36px", xs: "8px 24px"},
                                    borderColor: "white",
                                    borderRadius: 30,
                                    fontFamily: "Overpass",
                                    "&:hover": {
                                        color: "lightGreen",
                                        borderColor: "lightGreen",
                                    },
                                }}
                            >
                                More success stories
                            </Button>
                        </Box>
                    </Box>
                </Container>

                <img src={divider} alt="divider image"/>
            </Box>

            <Box sx={{
                py: "30px", position: "relative", '&::before': {
                    content: '""',
                    height: '72px',
                    // zIndex: -1,
                    background: '#fffcf6',
                    borderRadius: '40% 40% 0 0 / 50% 50% 0 0',
                    position: 'absolute',
                    top: '-70px',
                    left: 0,
                    width: "100%",
                    // transform: 'scaleX(1.15)'
                }
            }}>
                <Container>
                    <Box sx={{px: {lg: "160px", md: "50px"}}}>
                        <Box
                            sx={{
                                fontSize: "36px",
                                color: "black",
                                margin: "40px 0 20px",
                                textAlign: "center",
                            }}
                        >
                            Frequently asked questions
                        </Box>
                        {data.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === index}
                                onChange={handleExpansion(index)}
                                TransitionComponent={Fade}
                                transitionDuration={400}
                                sx={{
                                    marginBottom: "10px",
                                    backgroundColor: "liteCream",
                                    boxShadow: "unset",
                                    fontFamily:"Overpass",
                                    py: "6px",
                                    "& div": {paddingInline: "0px !important"},
                                    "& p": {fontSize: "20px"},
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={{
                                        fontFamily: "Overpass",
                                        minHeight: "48px",
                                        "& .MuiAccordionSummary-content": {
                                            margin: "12px 0",
                                        },
                                    }}
                                >
                                    <Typography>{item.title}</Typography>
                                </AccordionSummary>
                                <Collapse in={expanded === index}>
                                    <Box
                                        sx={{
                                            padding: "16px",
                                            backgroundColor: "liteCream",
                                            "& p": {fontSize: "16px", color: "liteBlack"},
                                        }}
                                    >
                                        <Typography>{item.desc}</Typography>
                                    </Box>
                                </Collapse>
                            </Accordion>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            fontSize: "18px",
                            cursor: "pointer",
                            color: "green",
                            textDecoration: "underline",
                            textAlign: "center",
                            fontWeight: "600",
                            mt: "15px",
                            mb: "32px",
                        }}
                    >
                        More frequently asked questions
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            className='overpass'
                            sx={{
                                borderRadius: "30px",
                                backgroundColor: "lightGreen",
                                padding: "10px 36px",
                                color: "darkGreen",
                                textTransform: "initial",
                                fontSize: "20px",
                                "&:hover": {
                                    backgroundColor: "green",
                                    color: "white",
                                },
                            }}
                        >
                            Get started
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Frequently;
