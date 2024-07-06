import React, { useState } from "react";
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
    const createData = (feature, betterHelp, inOffice, info) => {
        return { feature, betterHelp, inOffice, info };
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
      title: "Is BetterHelp right for me?",
      desc: "BetterHelp may be right for you if you're looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help. We also have therapists who specialize in specific issues such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, LGBT matters, grief, religion, self esteem, and more.",
    },
    {
      title: "How much does it cost?",
      desc: "The cost of therapy through BetterHelp ranges from $65 to $90 per week (billed every 4 weeks) and it is based on your location, source, preferences, and therapist availability. You can cancel your membership at any time, for any reason.",
    },
    {
      title: "After I sign up, how long until I'm matched with a therapist?",
      desc: "In most cases within 24 hours or less.",
    },
    {
      title: "How will I communicate with my therapist?",
      desc: "The cost of therapy through BetterHelp ranges from $65 to $90 per week (billed every 4 weeks) and it is based on your location, source, preferences, and therapist availability. You can cancel your membership at any time, for any reason.",
    },
    {
      title: "Can BetterHelp substitute for traditional face-to-face therapy?",
      desc: "The professionals who work through BetterHelp are licensed and credentialed therapists who were certified by their state's board to provide therapy and counseling. However, while the service may have similar benefits, it's not capable of substituting for traditional face-to-face therapy in every case. Please note that your provider won't be able to make any official diagnosis, to fulfill any court order or prescribe medication.",
    },
    {
      title: "How long can I use BetterHelp?",
      desc: "This depends on your needs and varies a lot from one person to another. Some people feel they get most of the value after just a few weeks, while others prefer to stick to the program for an extended period of time. This is completely up to you.",
    },
    {
      title: "How can I be sure that this is an effective form of therapy?",
      desc: 'There are many studies that confirm the effectiveness of the online medium for making life changes. For example, a study published by JMIR Publications and conducted by researchers from University of California - Berkeley, University of California - San Francisco, and the San Francisco General Hospital concluded that "users of BetterHelp experienced significantly reduced depression symptom severity after engaging with the platform." You can read the full study here. Our confidence in the platform comes primarily from the feedback and testimonials we receive from users. Every day, we are excited to hear from more people about the way this service helped them make a tremendous change in their lives.',
    },
  ];

  return (
    <>

        <Box sx={{ backgroundColor: "#325343",pt:"120px" }}>
            <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }} pb={5}>
                    <Typography sx={{ fontSize: "44px", color: "white" }}>
                        <Typography variant="span" sx={{ color: "#A6DE9B" }}>
                            Better
                        </Typography>
                        Help vs. traditional in-office therapy
                    </Typography>
                </Box>
                <Box>
                    <Grid container display={"flex"} justifyContent={"center"}>
                        <Grid item md={5}>
                            <TableContainer component={Paper}>
                                {isMobile ? (
                                    <Box>
                                        {rows.map((row) => (
                                            <Box
                                                key={row.feature}
                                                sx={{
                                                    padding: 2,
                                                    borderBottom: "1px solid white",
                                                }}
                                            >
                                                <Typography variant="h6">{row.feature}</Typography>
                                                {row.info && (
                                                    <Tooltip title={row.info}>
                                                        <IconButton size="small">
                                                            <InfoIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                )}
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        marginTop: 1,
                                                    }}
                                                >
                                                    <Typography>BetterHelp</Typography>
                                                    <Checkbox checked={row.betterHelp} disabled />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <Typography>In-office</Typography>
                                                    <Checkbox checked={row.inOffice} disabled />
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                ) : (
                                    <Table>
                                        <TableHead sx={{ backgroundColor: "#325343" }}>
                                            <TableRow>
                                                <TableCell sx={{ color: "white" }}></TableCell>
                                                <TableCell align="center" sx={{ fontSize:"20px", color: "white" ,backgroundColor:"green",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
                                                    BetterHelp
                                                </TableCell>
                                                <TableCell align="center" sx={{fontSize:"20px",  color: "white" }}>
                                                    In-office
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody sx={{ backgroundColor: "#325343" }}>
                                            {rows.map((row) => (
                                                <TableRow key={row.feature}>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        sx={{ color: "white" }}
                                                    >
                                                        {row.feature}
                                                        {row.info && (
                                                            <Tooltip title={row.info}>
                                                                <IconButton size="small">
                                                                    <InfoIcon
                                                                        fontSize="small"
                                                                        sx={{ color: "white" }}
                                                                    />
                                                                </IconButton>
                                                            </Tooltip>
                                                        )}
                                                    </TableCell>
                                                    <TableCell
                                                        align="center"
                                                        sx={{ backgroundColor: "white" }}
                                                    >
                                                        {/* <Checkbox
                                checked={row.betterHelp}
                                disabled
                              /> */}
                                                        <img
                                                            src={checkboxImg}
                                                            style={{ objectFit: "contain", height: "35px" }}
                                                            alt="checkbox"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <img
                                                            src={crossImg}
                                                            style={{ objectFit: "contain", height: "45px" }}
                                                            alt="checkbox"
                                                        />
                                                        {/* <Checkbox checked={row.inOffice} disabled /> */}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
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
        }}
      >
        <Container>
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "45%",
              width: "500px",
              color: "white",
              transform: "translateX(-50%)",
              fontSize: "32px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              <Box sx={{ position: "absolute", top: "0", left: "-100px" }}>
                {" "}
                <img src={left} alt="left" />{" "}
              </Box>
              <Box sx={{ position: "absolute", top: "0", right: "-100px" }}>
                {" "}
                <img src={right} alt="right" />{" "}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={image}
                  alt="image"
                  style={{
                    width: { md: "400px", xs: "250px" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    padding: "10px 36px",
                    borderColor: "white",
                    borderRadius: "30px",
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
          </Box>
        </Container>
        <img src={divider} alt="divider image" />
      </Box>

      <Box sx={{ py: "30px" }}>
        <Container>
          <Box sx={{ px: { lg: "160px", md: "50px" } }}>
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
                  py: "6px",
                  marginBottom: "0",
                  "& div": { paddingInline: "0px !important" },
                  "& p": { fontSize: "20px" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
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
                      "& p": { fontSize: "16px", color: "liteBlack" },
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
              sx={{
                borderRadius: "30px",
                backgroundColor: "lightGreen",
                padding: "10px 36px",
                color: "darkGreen",
                textTransform: "initial",
                fontWeight: "500",
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
