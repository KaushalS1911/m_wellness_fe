import React, {useState} from 'react';
import {Accordion, AccordionSummary, Box, Button, Collapse, Container, Grid, Typography} from "@mui/material";
import bac from '../../assets/faq/bg-gradient-texture.png'
import Fade from "@mui/material/Fade";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sml from "../../assets/gift/sml-logo.png";
function Faqs(props) {
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const data = [
        {
            title: "What is Mwellness?",
            desc: "Mwellness is the largest therapy platform in the world and it's 100% online. We change the way people approach their mental health and help them tackle life's challenges by providing accessible and affordable care. With Mwellness, you can message a professional therapist anytime, anywhere.",
        },
        {
            title: "Who will be helping me?",
            desc:"After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. Different therapists have different approaches and areas of focus, so it's important to find the right person who can achieve the best results for you. We have found that we are able to provide a successful match most of the time; however, if you start the process and you feel your therapist isn't a good fit for you, you may elect to be matched to a different therapist."
        },{
            title: "Who are the therapists?",
            desc:"We require every therapist providing Therapist Services on the Platform to be a registered, trained, and experienced counsellor, psychologist, social worker, or therapist. Therapists must have a relevant academic degree in their field, at least 3 years of experience, and have to be qualified and credentialed by their respective professional organization after successfully completing the necessary education, exams, training, and practice requirements as applicable. For the avoidance of doubt, therapists are referred to on this site and related apps/sites by their title and U.S., U.K., or Australian credentials, whichever is applicable."
        },{
            title: "How are the therapists verified?",
            desc:(<div>
                <p>Our team ensures that every provider we bring to the platform is credentialed and in good standing. Providers who apply are required to provide proper professional documentation and proof of identity. We then cross-check their credential information with their respective organization.</p>
                <p style={{marginBlock:"20px"}}>In addition to these checks, potential providers must also complete a case study graded by a clinician and undergo a background report. The result of this rigorous process is that less than a third of applicants who apply to work as therapists through Mwellness are accepted to the platform.</p>
                <p>We also show the full credential information for each provider to make it easy for you to do your own due diligence on your therapist.</p>
            </div>)
        },{
            title: "Is Mwellness right for me?",
            desc:"Mwellness may be right for you if you're looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help. We also have therapists who specialize in specific issues such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, LGBT matters, grief, religion, self esteem, and more."
        },{
            title: "How much does it cost?",
            desc:"The cost of therapy through Mwellness ranges from $65 to $90 per week (billed every 4 weeks) and it is based on your location, source, preferences, and therapist availability. You can cancel your membership at any time, for any reason."
        },{
            title: "Can Mwellness substitute for traditional face-to-face therapy?",
            desc:"The professionals who work through Mwellness are registered therapists who hold the proper credentials to provide therapy. However, while the service may have similar benefits, it's not capable of substituting for traditional face-to-face therapy in every case. Please note that your therapist won't be able to make any official diagnosis, to fulfill any court order or prescribe medication."
        },{
            title: "I signed up. How long until I'm matched with a therapist?",
            desc:"This process can take a few hours or a few days, depending on therapist availability."
        },{
            title: "How will I communicate with my therapist?",
            desc:"You can get therapy in four ways:\n" +
                "Exchanging messages with your therapist\n" +
                "Chatting live with your therapist\n" +
                "Speaking over the phone with your therapist\n" +
                "Video conferencing with your therapist\n" +
                "You can use different ways at different times as you wish, based on your needs, availability, and convenience."
        },{
            title: "How do live video sessions work?",
            desc:(<div>
                <p>You can also have a video session with your therapist where you see each other and talk with each other in a virtual face-to-face setting (similar to Zoom or FaceTime).</p>
                <p style={{marginTop:"20px"}}>To talk with your therapist via video, you will need to schedule a time with your therapist and log in at that time. Your therapist will then prompt you to start the video session. After you confirm, you will immediately begin video chatting with your therapist.</p>
            </div>)
        },{
            title: "How do live phone sessions work?",
            desc:(<div>
                <p>Phone sessions are a great way to conveniently speak with your therapist by simply using your landline or cell phone, no matter where you are.</p>
                <p style={{marginTop:"20px"}}>To talk with your therapist over the phone, you will need to schedule a time with your therapist and log in to your Therapy tab at that time. The therapist will prompt you to start the phone session and the system will ask you for your phone number. The system will then call you at that number and connect you with your therapist to start the phone session. Please note that the phone number you enter will not be shared with the therapist.</p>
            </div>)
        },{
            title: "How do live chat sessions work?",
            desc:(<div>
                <p>You will sometimes want to have a text conversation with your therapist in real-time. This way you can still enjoy the convenience of messaging but also enjoy a "live" interaction that allows instant response and feedback from your therapist.</p>
                <p style={{marginTop:"20px"}}>To have a live chat session, you will first need to schedule a time with your therapist. At the scheduled time, log in to your account to start typing and chatting with your therapist.</p>
            </div>)
        },{
            title: "How does messaging work?",
            desc:(<div>
                <p>Once you are matched to a therapist you can start messaging them. You can message about yourself, the things going on in your life, ask questions and discuss the issues that trouble you. Your therapist will then read your messages, and respond with questions, feedback, insights, and guidance.</p>
                <p style={{marginTop:"20px"}}>You can send messages to your therapist at any time, from any location, using any Internet-connected device. You can log in at any time and since messaging is not in real-time it doesn't require scheduling. Instead, you can choose whenever you want to write or respond to your therapist. You will get a notification by email when the therapist has sent you a message.</p>
            </div>)

        },{
            title: "Can I go back and read the therapist's previous messages?",
            desc:"Yes. You can always login to your account and read all the therapist's messages to you. This may help you in reflecting and remembering some of the guidance and input that you received. This is one of the main advantages of e-therapy."
        },{
            title: "How long can I use Mwellness?",
            desc:"This depends on your needs and varies a lot from one person to another. Some people feel they get most of the value after just a few weeks, while others prefer to stick to the program for an extended period of time. This is completely up to you."
        },{
            title: "Is Mwellness web accessible for disabled users?",
            desc:"We strive to deliver a web experience that is aligned with the most recent Web Content Accessibility Guidelines (WCAG) at the AA level, published by World Wide Web Consortium (W3C)."
        },{
            title: "How will I pay for my Mwellness membership?",
            desc:"Your membership payments will be charged to a credit card or PayPal on a recurring basis. If you accomplish your goals or if you find therapy with Mwellness to no longer be helpful for any reason, you can simply cancel the subscription."
        },{
            title: "Can I be reimbursed by my insurance?",
            desc:"Neither Mwellness nor Therapists on the Mwellness Platform submit claims to Medicare, Medicaid or health insurers. Services offered using this site are generally not covered by health insurance, Medicare or Medicaid.\n"
        },{
            title: "Can I stay anonymous?",
            desc:"When you sign up we do not ask you for your full name or contact information but rather a \"nickname\" created by you that will be used to identify you in the system. When you decide to start the therapy process, we will ask you for your contact information for emergency situations, such as if your therapist believes that you or someone else might be in danger. Your therapist may also request additional information about you when it is required by their licensing board guidelines. All of this data is protected by the confidentiality requirements of the therapist’s board and licensure, similar to in-office therapy."
        },{
            title: "How can I get started with Mwellness?",
            desc:"Click here to get started."
        },{
            title: "I'm a registered therapist. How can I provide services using Mwellness?",
            desc:"Please start the application process by clicking here."
        },
    ];
    return (
        <>
          <Box >
              <Box sx={{backgroundImage:`url(${bac})`,width:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <Box sx={{fontSize: {md:"48px",xs:"28px"},color:"black",}} className={"overpass"} >
                      Frequently asked questions
                  </Box>
              </Box>
              <Box sx={{
                  py: "30px", position: "relative", '&::before': {
                      content: '""',
                      height: '72px',
                      // zIndex: -1,
                      background: 'white',
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
                          {/*<Box*/}
                          {/*    sx={{*/}
                          {/*        fontSize: "36px",*/}
                          {/*        color: "black",*/}
                          {/*        margin: "40px 0 20px",*/}
                          {/*        textAlign: "center",*/}
                          {/*    }}*/}
                          {/*>*/}
                          {/*    Frequently asked questions*/}
                          {/*</Box>*/}
                          {data.map((item, index) => (
                              <Accordion
                                  key={index}
                                  expanded={expanded === index}
                                  onChange={handleExpansion(index)}
                                  TransitionComponent={Fade}
                                  transitionDuration={400}
                                  sx={{
                                      // marginBottom: "10px",
                                      // backgroundColor: "liteCream",
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
                                              // backgroundColor: "liteCream",
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
                              fontSize: "32px",
                              color: "#252625",
                              textAlign: "center",
                              mt: "15px",
                              mb: "32px",
                              fontWeight:"300"
                          }}
                      >
                          Ready to get started?
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
                                  backgroundColor: "#A6DE9B",
                                  padding: "8px 36px",
                                  color: "darkGreen",
                                  textTransform: "initial",
                                  fontSize: "20px",
                                  "&:hover": {
                                      backgroundColor: "green",
                                      color: "white",
                                  },
                              }}
                          >
                              Get matched with a therapist
                          </Button>
                      </Box>
                  </Container>
              </Box>
              <Box sx={{
                  mt:"80px",
                  position: "relative",backgroundColor:"cream", '&::before': {
                      content: '""',
                      height: '72px',
                      zIndex: -1,
                      backgroundColor: 'cream',
                      borderRadius: '40% 40% 0 0 / 50% 50% 0 0',
                      position: 'absolute',
                      top: '-40px',
                      left: 0,
                      width: "100%",
                      // transform: 'scaleX(1.15)'
                  }
              }}>
                  <Container>
                      <Grid container>
                          <Grid xs={12} md={6} mt={{ md: "40px", xs: "0px" }}>
                              <Box
                                  sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      py: "20px",
                                  }}
                              >
                                  <Box
                                      sx={{
                                          fontSize: "15px",
                                          color: "liteBlack",
                                          fontWeight: "700",
                                          lineHeight:1.5
                                      }}
                                  >
                                      If you are in a crisis or any other person may be in danger -
                                      don't use this site. <br />
                                      <Typography
                                          variant="span"
                                          sx={{ color: "green", textDecoration: "underline" }}
                                      >
                                          These resources
                                      </Typography>{" "}
                                      can provide you with immediate help.
                                  </Box>
                              </Box>
                          </Grid>
                          <Grid xs={12} md={6} mt={{ md: "40px", xs: "32px" }}>
                              <Box
                                  sx={{
                                      display: "flex",
                                      justifyContent: {md:"end"},
                                      alignItems: "center",
                                      py: {md:"20px"},
                                      opacity: ".5",
                                  }}
                              >
                                  <Box sx={{ height: "40px", width: "115px" }}>
                                      <img src={sml} alt="small logo" />
                                  </Box>
                              </Box>
                          </Grid>
                      </Grid>
                  </Container>
              </Box>
          </Box>
        </>
    );
}

export default Faqs;