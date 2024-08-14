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
    MenuItem, Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";
import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function PsyConnectDrishtiForm(props) {
    const navigate = useNavigate();
    const [age, setAge] = useState([]);
    useEffect(() => {
        const ages = [];
        for (let i = 16; i <= 100; i++) {
            ages.push(i);
        }
        setAge(ages);

    }, []);
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            gender: '',
            branch: '',
            addmissionNumber: '',
            contact: '',
            email: '',
            discuss: [],
            problem:'',
            time:null
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            age: Yup.number().required('Age is required'),
            gender: Yup.string().required('Gender is required'),
            branch: Yup.string().required('Branch is required'),
            admissionNumber: Yup.string().required('Admission number is required'),
            contact: Yup.string().required('Contact number is required'),
            problem: Yup.string().required('Please explain your problem'),
            time: Yup.date().nullable().required('Time is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            discuss: Yup.array().min(1, 'Please select topics to discuss').required('Please select topics to discuss'),
        }),
        onSubmit: (values) => {
            alert("jj")
            console.log(values)
        }})
    const branch = ["Karol Bagh","Nehru Vihar","Jaipur","Prayagraj","Lucknow","Indor"]
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
            <Box sx={{ width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: { md: "100px", xs: "80px" } }}>
                <Container>

                    <Box sx={{ fontSize: "32px", color: "#444444", textAlign: 'center' }} className="overpass">
                        PsyConnect-Drishti Form
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                        <Box sx={{
                            width: "700px",
                            backgroundColor: "#FFFFFF",
                            padding: "50px 30px 30px",
                            boxShadow: 2,
                        }} className={"overpass"}>
                            <form onSubmit={formik.handleSubmit}>
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
                                            backgroundColor: formik.values.age ? 'white' : 'white',
                                            px: 1,
                                            '&.Mui-focused': {
                                                backgroundColor: 'white',
                                            },
                                        }}
                                    >
                                        Age
                                    </InputLabel>
                                    <Select
                                        name="age"
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
                                        <div style={{color:"red"}}>{formik.errors.age}</div>
                                    ) : null}
                                </FormControl>

                                <Box display={{ sm: "flex" }} mt={{ xs: 2, sm: "unset" }} alignItems="center" margin="normal">
                                    <FormLabel component="legend" sx={{ marginRight: '1rem' }}>Gender :</FormLabel>
                                    <RadioGroup
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                        row
                                        error={formik.touched.gender && Boolean(formik.errors.gender)}
                                    >
                                        <FormControlLabel sx={{ color: "#00000099" }} value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel sx={{ color: "#00000099" }} value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel sx={{ color: "#00000099" }} value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </Box>
                                {formik.touched.gender && formik.errors.gender ? (
                                    <div style={{color:"red"}}>{formik.errors.gender}</div>
                                ) : null}
                                <FormControl fullWidth margin="normal">
                                    <InputLabel
                                        sx={{
                                            backgroundColor: formik.values.age ? 'white' : 'white',
                                            px: 1,
                                            '&.Mui-focused': {
                                                backgroundColor: 'white',
                                            },
                                        }}
                                    >
                                        Drishti IAS Branch
                                    </InputLabel>
                                    <Select
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
                                        <div style={{color:"red"}}>{formik.errors.branch}</div>
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
                                                        checked={formik.values.discuss.includes(option)}
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
                                    margin="normal"
                                    label="Briefly explain your problem"
                                    name="problem"
                                    value={formik.values.problem}
                                    onChange={formik.handleChange}
                                    error={formik.touched.problem && Boolean(formik.errors.problem)}
                                    helperText={formik.touched.problem && formik.errors.problem}
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker
                                        sx={{width:"100%",mt:2}}
                                        label="Preferred time to Call (Between Morning 9 till Evening 9)"
                                        value={formik.values.time}
                                        onChange={(value) => formik.setFieldValue('time', value)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                error={formik.touched.time && Boolean(formik.errors.time)}
                                                helperText={formik.touched.time && formik.errors.time}
                                            />
                                        )}
                                        viewRenderers={{
                                            hours: renderTimeViewClock,
                                            minutes: renderTimeViewClock,
                                            seconds: renderTimeViewClock,
                                        }}
                                    />
                                </LocalizationProvider>
                                <Box sx={{ mt: "20px", display: "flex", justifyContent: "end" }}>
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
            </Box>
        </>
    );
}

