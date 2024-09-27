import React, {useContext, useState} from 'react';
import {
    Box,
    Button,
    Container,
    Modal,
    TextField,
    Typography
} from "@mui/material";
import {toast, ToastContainer} from "react-toastify";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import {useFormik} from "formik";

function Auth({onOtpVerified}) {
    const [message, setMessage] = useState("");
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [verify, setVerify] = useState(false)
    const navigate = useNavigate();

    const defaultValues = {
        setPin: '',
        confirmPin: '',
    }
    const [varificationCode, setVarificationCode] = useState('')
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

    const handleVerifyOTP = () => {
        window.confirmationResult
            .confirm(otp)
            .then((result) => {
                onOtpVerified(result.user);
            })
            .catch((error) => {
                setError('Invalid OTP, please try again.');
            });
    }
    return (
        <>
            <ToastContainer/>
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
                          Verification Form
                      </Box>

                      <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                          <Box sx={{
                              width: "700px",
                              backgroundColor: "#FFFFFF",
                              padding: "50px 30px 30px",
                              boxShadow: 2,
                          }} className={"overpass"}>


                              <TextField
                                  sx={{width: "100%"}}
                                  label="Verify OTP"
                                  placeholder="Enter your OTP"
                                  variant="outlined"
                                  value={otp}
                                  onChange={(e) => setOtp(e.target.value)}
                              />

                              <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
                                  <Button
                                      className="overpass"
                                      onClick={handleVerifyOTP}
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
                                      Verify
                                  </Button>
                              </Box>

                          </Box>
                      </Box>
                  </Box>
                  </Box>
                </Container>}
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
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box
                        sx={{
                            borderRadius: '10px',
                            width: '90%',
                            maxWidth: '500px',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            pb: 2,
                            pt: 1,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            overflow: "hidden",
                            outline: 'none',
                        }}
                    >
                        <Typography id="modal-title" variant="h6" component="h2" sx={{paddingLeft: 2, paddingTop: 2}}>
                            {message}
                        </Typography>
                        {/*<Typography id="modal-description" sx={{ mt: 2 }}>*/}
                        {/*    This is a responsive modal without a border. Resize the window to see the responsiveness.*/}
                        {/*</Typography>*/}

                        <Box sx={{display: "flex", justifyContent: "flex-end"}}><Button
                            className="overpass"
                            onClick={() => setOpen(false)}
                            sx={{
                                backgroundColor: "darkGreen",
                                py: "2px",
                                px: "28px",
                                textTransform: "unset",
                                fontSize: "20px",
                                color: "#fff",
                                borderRadius: "10px",
                                "&:hover": {
                                    backgroundColor: "green",
                                    color: "#fff",
                                },
                                mt: "10px",
                                marginRight: 2
                            }}
                        >
                            OK
                        </Button></Box>
                    </Box>
                </Modal>
            </Box>
        </>
    );
}

export default Auth;