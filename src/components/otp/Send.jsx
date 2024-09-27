import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { addPhoneNumber, addUser, changeStateFalse } from "../../feature/otpSlice";
import toast from "react-hot-toast";
import {Box, Button, Container} from "@mui/material";

const Send = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [recaptcha, setRecaptcha] = useState(null);

  const [showCaptcha, setShowCaptcha] = useState(true);

  useEffect(() => {
    let recaptchaVerifier;
    recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
    });
    setRecaptcha(recaptchaVerifier);
  }, []);

  const sendOTP = async () => {
    if (phone == "") {
      toast.error("please enter a phone number");
      return;
    }

    if (isButtonDisabled) {
      return;
    }

    try {
        console.log(phone)
      setIsButtonDisabled(true);
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+" + phone,
        recaptcha
      );

      toast.success("otp sended successfully");
      dispatch(addUser(confirmation));
      dispatch(addPhoneNumber(phone));
      dispatch(changeStateFalse());
      setShowCaptcha(false);
    } catch (error) {
      switch (error.code) {
        case "auth/too-many-requests":
          toast.error("Too many requests. Please try again later.");
          break;
        case "auth/invalid-phone-number":
          toast.error("The phone number is invalid.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.log(error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div>
        {/*<ToastContainer />*/}
        <Box sx={{
                width: '100%',
                pt: "150px",
                height: "85vh",
                backgroundColor: "#FFFCF6",
                pb: {md: "100px", xs: "80px"},display:"flex",justifyContent:"center",alignItems:'center'
            }}>
      <Container>
                           <Box>
                               <Box>
                               <Box sx={{fontSize: "32px", color: "#444444", textAlign: 'center'}} className="overpass">
                                  Verification Form
                              </Box>

                               <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                                   <Box sx={{
                              width: "700px",
                              backgroundColor: "#FFFFFF",
                              padding: "50px 30px 30px",
                              boxShadow: 2,
                          }} className={"overpass"}>


                              {/*<TextField*/}
                              {/*    sx={{width: "100%"}}*/}
                              {/*    label="Verify OTP"*/}
                              {/*    placeholder="Enter your OTP"*/}
                              {/*    variant="outlined"*/}
                              {/*    value={otp}*/}
                              {/*    onChange={(e) => setOtp(e.target.value)}*/}
                              {/*/>*/}
                                       <Box sx={{ width: '100%' }}>  {/* Ensures full width */}
                                           <PhoneInput
                                               country={"in"}
                                               value={phone}
                                               onChange={setPhone}
                                               placeholder="+91 xxxxx-xxxxx"
                                               style={{ width: '100% !important'}}
                                           />
                                       </Box>

                              <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
                                  <Button
                                      className="overpass"
                                      onClick={() => sendOTP()}
                                      sx={{
                                          backgroundColor: "#A6DE9B",
                                          py: "5px",
                                          px: "28px",
                                          textTransform: "unset",
                                          fontSize: "20px",
                                          color: "#325343",
                                          borderRadius: "30px",
                                          "&:hover": {
                                              backgroundColor: "darkGreen",
                                              color: "#fff",
                                          },
                                          mt: "10px",
                                          marginRight: 1,
                                      }}
                                  >
                                    {isButtonDisabled ? "Sending..." : "Send OTP"}
                                  </Button>
                              </Box>

                          </Box>
                      </Box>
                  </Box>
                  </Box>
                </Container>

      {showCaptcha && <div id="recaptcha"></div>}
        </Box>
    </div>
  );
};

export default Send;
