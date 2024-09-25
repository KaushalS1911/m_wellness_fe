import React, {useContext, useState} from 'react';
import firebase from '../../firebase'
import {
    Box,
    Button,
    Container,
    Modal,
    TextField,
    Typography
} from "@mui/material";
import {ToastContainer} from "react-toastify";
import {OtpContext} from "../../context/otpcontext";

function Auth() {
    const {varification} = useContext(OtpContext);
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);


    const [varificationCode, setVarificationCode] = useState('')

    const handleVerifyOTP = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(varification, varificationCode)
        firebase.auth().signInWithCredential(credential).then((data) => console.log(data.user)).catch((err) => console.log(err))
    }
    return (
        <>
            <ToastContainer/>
            <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: {md: "100px", xs: "80px"}}}>
                <Container>
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
                            {/*    label="Phone Number"*/}
                            {/*    type="tel"*/}
                            {/*    placeholder="Enter your phone number"*/}
                            {/*    variant="outlined"*/}
                            {/*    value={contact}*/}
                            {/*    onChange={(e) => setContact(e.target.value)}*/}
                            {/*/>*/}
                            {/*<Button onClick={handleSendOTP}>Send OTP</Button>*/}
                            <TextField
                                sx={{width: "100%"}}
                                label="Verify OTP"
                                placeholder="Enter your OTP"
                                variant="outlined"
                                value={varificationCode}
                                onChange={(e) => setVarificationCode(e.target.value)}
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
                </Container>
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