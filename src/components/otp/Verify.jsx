import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPhoneNumber,
  addUser,
  changeStateFalse,
  successTrue,
} from "../../feature/otpSlice";
import toast from "react-hot-toast";
import OtpInput from "otp-input-react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../services/firebase";
import {Box, Button, Container, TextField} from "@mui/material";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import {useFormik} from "formik";
const Verify = () => {
  const dispatch = useDispatch();
  const { user, phoneNumber } = useSelector((state) => state.otp);
  const [otp, setOtp] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isVerifyButtonDisabled, setIsVerifyButtonDisabled] = useState(false);
  const [otpTime, setOtpTime] = useState(40);
  const [verify, setVerify] = useState(false)
  const [recaptcha, setRecaptcha] = useState(null);
const navigate = useNavigate()

  useEffect(() => {
    let recaptchaVerifier;
    recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
    });
    setRecaptcha(recaptchaVerifier);
  }, []);

  useEffect(() => {
    if (otpTime > 0) {
      const intervalId = setInterval(() => {
        setOtpTime(otpTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [otpTime]);

  const resendOTP = async () => {
    if (phoneNumber == null) {
      toast.error("something wrong try to again send otp");
      return;
    }

    if (isButtonDisabled) {
      return;
    }

    try {
      setIsButtonDisabled(true);
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+" + phoneNumber,
        recaptcha
      );
      toast.success("otp sended successfully");
      dispatch(addUser(confirmation));
      dispatch(addPhoneNumber(phoneNumber));
      dispatch(changeStateFalse());
      setOtpTime(40);
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

  const verifyOTP = async () => {
    if (isVerifyButtonDisabled) {
      return;
    }

    setIsVerifyButtonDisabled(true);
    try {
      const data = await user.confirm(otp);
      // dispatch(successTrue());
      if (data) setVerify(true)
      console.log(data);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-verification-code":
          toast.error("The verification code is invalid.");
          break;
        case "auth/code-expired":
          toast.error("The verification code is expired.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.log(error);
    } finally {
      setIsVerifyButtonDisabled(false);
    }
  };
  const defaultValues = {
        setPin: '',
        confirmPin: '',
    }
      const schema = Yup.object({

        confirmPin: Yup.string()
            .oneOf([Yup.ref('setPin'), null], 'Passwords must match')
            .required('Confirm password is required'),
        setPin: Yup.string()
            .oneOf([Yup.ref('setPin'), null], 'Passwords must match')
            .required('Confirm password is required'),
    })
    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            localStorage.setItem('setPin', values.setPin);
            localStorage.setItem('confirmPin', values.confirmPin);

            localStorage.setItem('formValues', JSON.stringify(values));
            navigate("/start-assessment");
        }

    })

  return (
    <div>

        <Box sx={{
            width: '100%',
            pt: "150px",
            height: "85vh",
            backgroundColor: "#FFFCF6",
            pb: {md: "100px", xs: "80px"},display:"flex",justifyContent:"center",alignItems:'center'
        }}>
            {!verify && <Container>
                           <Box>
                               <Box>
                               <Box sx={{fontSize: "32px", color: "#444444", textAlign: 'center'}} className="overpass">
                                   Verify OTP
                               </Box>

                               <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                                   <Box sx={{
                              width: "700px",
                              backgroundColor: "#FFFFFF",
                              padding: "50px 30px 30px",
                              boxShadow: 2
                          }} className={"overpass custom-otp-input"}>

                                      <Box sx={{display: "flex", justifyContent: "center"}}>

                                     <OtpInput
                                         value={otp}
                                         onChange={setOtp}
                                         OTPLength={6}
                                         otpType="number"
                                         disabled={false}
                                         autoFocus

                                     />
                                      </Box>

                              <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
                                  <Button
                                      className="overpass"
                                      // onClick={handleVerifyOTP}
                                      onClick={() => verifyOTP()}
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
                                    {isButtonDisabled ? "Sending..." : "Verify"}
                                  </Button>
                              </Box>

                          </Box>
                      </Box>
                  </Box>
                  </Box>
                </Container> }
            {verify && <Container>
                                     <Box sx={{fontSize: "32px", color: "#444444", textAlign: 'center'}} className="overpass">
                                         Generate PIN
                                     </Box>

                                     <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                                         <Box sx={{
                            width: "700px",
                            backgroundColor: "#FFFFFF",
                            padding: "50px 30px 30px",
                            boxShadow: 2,
                        }} className={"overpass"}>
                            <form onSubmit={formik.handleSubmit}>

                                {/*<TextField*/}
                                {/*    label="Phone Number"*/}
                                {/*    type="tel"*/}
                                {/*    placeholder="Enter your phone number"*/}
                                {/*    variant="outlined"*/}
                                {/*    value={contact}*/}
                                {/*    onChange={(e) => setContact(e.target.value)}*/}
                                {/*/>*/}
                                {/*<Button onClick={handleSendOTP}>Send OTP</Button>*/}
                                <TextField
                                    fullWidth
                                    name={"setPin"}
                                    label="Set PIN"
                                    variant="outlined"
                                    value={formik.values.setPin}
                                    onChange={formik.handleChange}
                                    error={formik.touched.setPin && Boolean(formik.errors.setPin)}
                                    helperText={formik.touched.setPin && formik.errors.setPin}
                                />
                                <TextField
                                    sx={{marginTop: "20px"}}
                                    fullWidth
                                    name='confirmPin'
                                    label="Confirm PIN"
                                    variant="outlined"
                                    value={formik.values.confirmPin}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmPin && Boolean(formik.errors.confirmPin)}
                                    helperText={formik.touched.confirmPin && formik.errors.confirmPin}
                                />

                                <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
                                    <Button
                                        className="overpass"
                                        type='submit'
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
                                        Submit
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Container>}

      <div id="recaptcha"></div>
        </Box>
    </div>
  );
};

export default Verify;
