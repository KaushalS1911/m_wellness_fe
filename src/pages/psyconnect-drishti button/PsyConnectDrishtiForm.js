import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {
    Box, Button, Checkbox,
    Container,
    FormControl, FormControlLabel, FormGroup, FormHelperText,
    FormLabel,
    InputLabel,
    MenuItem, Modal, OutlinedInput, Radio,
    RadioGroup,
    Select,
    TextField, Typography
} from "@mui/material";
import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {renderTimeViewClock} from '@mui/x-date-pickers/timeViewRenderers';
import moment from 'moment';
import "react-phone-input-2/lib/style.css";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
// import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber,getAuth } from "firebase/auth";
import {app} from "../../firebase.config";

export default function PsyConnectDrishtiForm(props) {
    const navigate = useNavigate();
    const [age, setAge] = useState([]);
    const [error, setError] = useState(false)
    const [varified,setVarified] = useState("")
    const [varify,setVarify] = useState({addmissionNumber:'',email:""})
const auth = getAuth(app)
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false);
    useEffect(() => {
        const ages = [];
        for (let i = 16; i <= 100; i++) {
            ages.push(i);
        }
        setAge(ages);

    }, []);
    function onCaptchVerify() {
        window.recaptchaVerifier = new RecaptchaVerifier( auth,
            'recaptcha-container',
            {
                'size': 'invisible',
                'callback': (response) => {
                    console.log("reCAPTCHA Verified", response);
                },
                'expired-callback': () => {
                    console.log("reCAPTCHA expired, resetting...");
                    window.recaptchaVerifier.reset();
                }
            }
        );

        // Render the reCAPTCHA widget
        window.recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        });
    }

    function onSignup(ph) {
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, `+91${ph}`, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                toast.success("OTP sent successfully!");
                navigate("/auth-form")
                // setShowOTP(true);
                // setLoading(false);
            })
            .catch((error) => {
                console.error("Error during OTP send:", error);
                toast.error("Failed to send OTP. Try again!");
                // setLoading(false);
            });
    }
    const defaultValues = varified === "" ?  {
        addmissionNumber: '',
        email: '',
    }:{
        name: '',
        age: '',
        gender: '',
        branch: '',
        addmissionNumber: varify.addmissionNumber || '',
        email:varify.email || '',
        contact: '',
        discuss: [],
        problem: '',
        startTime: dayjs().hour(9).minute(0),
    }
    const schema1= Yup.object({
        addmissionNumber: Yup.string().required('Admission number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
    })
    const schema2 = Yup.object({
        // The same schema here, so you may adjust it if `varified` is `false`
        name: Yup.string().required('Name is required'),
        age: Yup.number().required('Age is required'),
        gender: Yup.string().required('Gender is required'),
        branch: Yup.string().required('Branch is required'),
        addmissionNumber: Yup.string().required('Admission number is required'),
        contact: Yup.string()
            .required('Contact number is required')
            .min(10, 'Contact number must be exactly 10 digits')
            .max(10, 'Contact number must be exactly 10 digits')
            .matches(/^\d+$/, 'Contact number must be numeric'),
        problem: Yup.string().required('Please explain your problem'),
        startTime: Yup.date()
            .nullable()
            .required('Call time is required')
            .test(
                'is-within-range',
                'Call time must be between 9 AM to 9 PM',
                (value) => {
                    if (!value) return false;

                    const selectedTime = moment(value);
                    const start = moment().hour(9).minute(0).second(0);
                    const end = moment().hour(21).minute(0).second(0);

                    return selectedTime.isBetween(start, end, 'minute', '[]');
                }
            ),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        discuss: Yup.array().min(1, 'Please select topics to discuss').required('Please select topics to discuss'),
    })
    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: (varified === "" ? schema1 : schema2),
        onSubmit: (values, action) => {
            if(varified === ""){
            setVarify({addmissionNumber: values.addmissionNumber,email: values.email})
                setVarified("hello")
                action.resetForm({
                    values: {
                        ...values,
                        name: '',
                        age: '',
                        gender: '',
                        branch: '',
                        contact: '',
                        discuss: [],
                        problem: '',
                        startTime: dayjs().hour(9).minute(0),
                    },
                    errors: {},
                    touched: {},
                });
            }else{
            const time = values?.startTime.hour()
            const payload = {
                student_name: values?.name,
                age: String(values?.age),
                gender: values?.gender,
                batch: values?.branch,
                admission_number: values?.addmissionNumber,
                mobile_number: values?.contact,
                email: values?.email,
                category: (values?.discuss).join(","),
                statement: values?.problem,
                call_time: String(time),
            }
            onSignup(values.contact);
                axios.post("https://interactapiverse.com/mahadevasth/drishti/pyconnects", payload).then((res) => {
                if (res.data.status === "201") {
                    setError(false)
                    setOpen(true)
                    alert('hello');
                    navigate("/auth-form")
                    action.resetForm()
                } else {
                    setOpen(true)
                    setError(true)


                }
            }).catch((err) => {

                setError(true)
                setOpen(true)
            })
        }
        //     const time = values?.startTime.hour()
        //     const payload = {
        //         student_name: values?.name,
        //         age: values?.age,
        //         gender: values?.gender,
        //         batch: values?.branch,
        //         admission_number: values?.addmissionNumber,
        //         mobile_number: values?.contact,
        //         email: values?.email,
        //         category: values?.discuss,
        //         statement: values?.problem,
        //         call_time: time,
        //     }
        //     axios.post("https://interactapiverse.com/mahadevasth/drishti/pyconnect", payload).then((res) => {
        //         if (res.data.status === "201") {
        //             setError(false)
        //             setOpen(true)
        //             navigate("/psyconnect-drishti-form")
        //             action.resetForm()
        //         } else {
        //             setOpen(true)
        //             setError(true)
        //
        //         }
        //     }).catch((err) => {
        //
        //         setError(true)
        //         setOpen(true)
        //     })
        // }
        }

    })
    const branch = ["Karol Bagh", "Nehru Vihar", "Jaipur", "Prayagraj", "Lucknow", "Indor"]
    const options = [
        'Exam Stress',
        'Family Problems',
        'Relationship Issues',
        'Concentration or Focus Issues',
        'Anxiety',
        'Feeling Low or Depressed',
        'Other',
    ];

    return (
        <>
            <Box sx={{minHeight:"88VH",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor: "#FFFCF6", py: {md: "110px", xs: "80px"}}}>
                <Box sx={{width: '100%',}}>
                    <ToastContainer/>
                    <Container>
                        <div id="recaptcha-container" />
                        <Box sx={{fontSize: "32px", color: "#444444", textAlign: 'center'}} className="overpass">
                            PsyConnect-Drishti Form
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                            <Box sx={{
                                width: "700px",
                                backgroundColor: "#FFFFFF",
                                padding: "50px 30px 30px",
                                boxShadow: 2,
                            }} className={"overpass"}>
                                <form onSubmit={formik.handleSubmit}>
                                    {varified === "" ? <>
                                            <TextField
                                                fullWidth
                                                margin="normal"
                                                label="Admission Number"
                                                name="addmissionNumber"
                                                value={formik.values.addmissionNumber}
                                                onChange={formik.handleChange}
                                                error={formik.touched.addmissionNumber && Boolean(formik.errors.addmissionNumber)}
                                                helperText={formik.touched.addmissionNumber && formik.errors.addmissionNumber}
                                            />
                                            <TextField
                                                fullWidth
                                                margin="normal"
                                                label="Email ID"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                            />
                                        </> :
                                        <>
                                            <TextField
                                                fullWidth
                                                margin="normal"
                                                label="Name of the Student"
                                                name="name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                helperText={formik.touched.name && formik.errors.name}
                                            />
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel
                                                    sx={{
                                                        backgroundColor: formik.values.age ? '#fff' : '#fff',
                                                        px: 1,
                                                        '&.Mui-focused': {
                                                            backgroundColor: '#fff',
                                                        },
                                                    }}
                                                >
                                                    Age
                                                </InputLabel>
                                                <Select
                                                    name="age"
                                                    input={<OutlinedInput label="Age"/>}
                                                    value={formik.values.age}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.age && Boolean(formik.errors.age)}
                                                >
                                                    {age.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                {formik.touched.age && formik.errors.age ? (
                                                    <div style={{
                                                        color: "#d32f2f",
                                                        fontSize: "13px",
                                                        fontWeight: 400
                                                    }}>{formik.errors.age}</div>
                                                ) : null}
                                            </FormControl>

                                            <Box display={{sm: "flex"}} mt={{xs: 2, sm: "unset"}} alignItems="center"
                                                 margin="normal">
                                                <FormLabel component="legend" sx={{marginRight: '1rem'}}>Gender :</FormLabel>
                                                <RadioGroup
                                                    name="gender"
                                                    value={formik.values.gender}
                                                    onChange={formik.handleChange}
                                                    row
                                                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                                                >
                                                    <FormControlLabel sx={{color: "#00000099"}} value="male" control={<Radio/>}
                                                                      label="Male"/>
                                                    <FormControlLabel sx={{color: "#00000099"}} value="female" control={<Radio/>}
                                                                      label="Female"/>
                                                    <FormControlLabel sx={{color: "#00000099"}} value="other" control={<Radio/>}
                                                                      label="Other"/>
                                                </RadioGroup>
                                            </Box>
                                            {formik.touched.gender && formik.errors.gender ? (
                                                <div style={{
                                                    color: "#d32f2f",
                                                    fontSize: "13px",
                                                    fontWeight: 400
                                                }}>{formik.errors.gender}</div>
                                            ) : null}
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel
                                                    sx={{
                                                        backgroundColor: formik.values.age ? '#fff' : '#fff',
                                                        px: 1,
                                                        '&.Mui-focused': {
                                                            backgroundColor: '#fff',
                                                        },
                                                    }}
                                                >
                                                    Drishti IAS Branch
                                                </InputLabel>
                                                <Select
                                                    input={<OutlinedInput label="Drishti IAS Branch"/>}
                                                    name="branch"
                                                    value={formik.values.branch}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.branch && Boolean(formik.errors.branch)}
                                                >
                                                    {branch.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                                {formik.touched.branch && formik.errors.branch ? (
                                                    <div style={{
                                                        color: "#d32f2f",
                                                        fontSize: "13px",
                                                        fontWeight: 400
                                                    }}>{formik.errors.branch}</div>
                                                ) : null}
                                            </FormControl>
                                            <TextField
                                                fullWidth
                                                margin="normal"
                                                label="Admission Number"
                                                name="addmissionNumber"
                                                value={formik.values.addmissionNumber}
                                                onChange={formik.handleChange}
                                                error={formik.touched.addmissionNumber && Boolean(formik.errors.addmissionNumber)}
                                                helperText={formik.touched.addmissionNumber && formik.errors.addmissionNumber}
                                            />

                                            <TextField
                                                fullWidth
                                                margin="normal"
                                                label="Mobile Number"
                                                name="contact"
                                                value={formik.values.contact}
                                                onChange={formik.handleChange}
                                                error={formik.touched.contact && Boolean(formik.errors.contact)}
                                                helperText={formik.touched.contact && formik.errors.contact}
                                            />
                                            <TextField
                                                fullWidth
                                                margin="normal"
                                                label="Email ID"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                            />
                                            <FormControl
                                                component="fieldset"
                                                error={formik.touched.discuss && Boolean(formik.errors.discuss)}
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                            >
                                                <FormLabel component="legend">What do you like to discuss?</FormLabel>
                                                <FormGroup>
                                                    {options.map((option, index) => (
                                                        <FormControlLabel
                                                            key={index}
                                                            control={
                                                                <Checkbox
                                                                    name="discuss"
                                                                    value={option}
                                                                    checked={formik.values.discuss?.includes(option)}
                                                                    onChange={formik.handleChange}
                                                                />
                                                            }
                                                            label={option}
                                                        />
                                                    ))}
                                                </FormGroup>
                                                {formik.touched.discuss && formik.errors.discuss ? (
                                                    <FormHelperText>{formik.errors.discuss}</FormHelperText>
                                                ) : null}
                                            </FormControl>
                                            <TextField
                                                fullWidth
                                                multiline={true}
                                                rows={4}
                                                margin="normal"
                                                label="Briefly explain your problem"
                                                name="problem"
                                                value={formik.values.problem}
                                                onChange={formik.handleChange}
                                                error={formik.touched.problem && Boolean(formik.errors.problem)}
                                                helperText={formik.touched.problem && formik.errors.problem}
                                            />
                                            <FormLabel sx={{my: 2}} component="legend">Preferred time to Call (Between Morning 9
                                                till Evening 9)</FormLabel>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <Box display="flex" justifyContent="space-evenly" mt={2} width={"100%"}>
                                                    <Box mx={2} width={"100%"}>
                                                        <TimePicker
                                                            label="Call Time"
                                                            sx={{width:"100%"}}
                                                            value={formik.values.startTime}
                                                            onChange={(value) => formik.setFieldValue('startTime', value)}
                                                            renderInput={(params) => (
                                                                <TextField
                                                                    {...params}
                                                                    fullWidth
                                                                    error={formik.touched.startTime && Boolean(formik.errors.startTime)}
                                                                    helperText={formik.touched.startTime && formik.errors.startTime}
                                                                />
                                                            )}
                                                            viewRenderers={{
                                                                hours: renderTimeViewClock,
                                                                minutes: renderTimeViewClock,
                                                                seconds: renderTimeViewClock,
                                                            }}
                                                        />
                                                        {/*<TimePicker*/}
                                                        {/*    label="End Time"*/}
                                                        {/*    value={formik.values.endTime}*/}
                                                        {/*    onChange={(value) => formik.setFieldValue('endTime', value)}*/}
                                                        {/*    renderInput={(params) => (*/}
                                                        {/*        <TextField*/}
                                                        {/*            {...params}*/}
                                                        {/*            fullWidth*/}
                                                        {/*            error={formik.touched.endTime && Boolean(formik.errors.endTime)}*/}
                                                        {/*            helperText={formik.touched.endTime && formik.errors.endTime}*/}
                                                        {/*        />*/}
                                                        {/*    )}*/}
                                                        {/*    viewRenderers={{*/}
                                                        {/*        hours: renderTimeViewClock,*/}
                                                        {/*        minutes: renderTimeViewClock,*/}
                                                        {/*        seconds: renderTimeViewClock,*/}
                                                        {/*    }}*/}
                                                        {/*/>*/}
                                                        {formik.touched.startTime && formik.errors.startTime ? (
                                                            <FormHelperText sx={{
                                                                color: "#d32f2f",
                                                                fontSize: "13px",
                                                                fontWeight: 400
                                                            }}>{formik.errors.startTime}</FormHelperText>
                                                        ) : null}
                                                    </Box>
                                                </Box>
                                            </LocalizationProvider>
                                           </>
                                    }
                                    <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
                                        <Button
                                            className="overpass"
                                            type="submit"
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
                                                    color: "white",
                                                },
                                                mt: "10px",
                                                marginRight: 1,
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </form>
                            </Box></Box>
                    </Container>
                    <Modal
                        open={open}
                        onClose={handleClose}
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
                                {error ? "Something went wrong, student record not created" : "Thank you for contacting us. We will get back to you soon"}
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
            </Box>
        </>
    );
}