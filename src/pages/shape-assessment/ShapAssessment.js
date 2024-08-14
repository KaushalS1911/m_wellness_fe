import React, { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function ShapAssessment(props) {
    const navigate = useNavigate();
    const [age, setAge] = useState([]);

    useEffect(() => {
        const ages = [];
        for (let i = 16; i <= 100; i++) {
            ages.push(i);
        }
        setAge(ages);
    }, []);

    const validationSchema = Yup.object({
        admissionId: Yup.string().required("Child's Name is required"),
        age: Yup.number().required('Age is required').min(16, 'Age must be 16 or older'),
        fullName: Yup.string().required('Standard is required'),
        phone: Yup.string().required('Contact Information is required'),
        height: Yup.number().required('Height is required').min(1, 'Height must be greater than 0'),
        weight: Yup.number().required('Weight is required').min(1, 'Weight must be greater than 0'),
    });

    const formik = useFormik({
        initialValues: {
            admissionId: '',
            age: '',
            fullName: '',
            phone: '',
            height: '',
            weight: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            navigate("/shape-femaly");
        },
    });

    return (
        <>
        <ToastContainer />
        <Box sx={{ width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: { md: "100px", xs: "80px" } }}>
            <Container>
                <Box sx={{ fontSize: "32px", color: "#444444", textAlign: 'center' }} className="overpass">
                    Child's Information
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
                                label="Child's Name"
                                name="admissionId"
                                value={formik.values.admissionId}
                                onChange={formik.handleChange}
                                error={formik.touched.admissionId && Boolean(formik.errors.admissionId)}
                                helperText={formik.touched.admissionId && formik.errors.admissionId}
                            />

                            <FormControl
                                fullWidth
                                margin="normal"
                                error={formik.touched.age && Boolean(formik.errors.age)}
                            >
                                <InputLabel
                                    sx={{
                                        backgroundColor: '#fff',
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
                                    value={formik.values.age}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Age' }}
                                >
                                    {/*<MenuItem value="" disabled>Select Age</MenuItem>*/}
                                    {age.map(option => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>
                                    {formik.touched.age && formik.errors.age}
                                </FormHelperText>
                            </FormControl>

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Standard"
                                name="fullName"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Contact Information"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Height in CMs"
                                name="height"
                                value={formik.values.height}
                                onChange={formik.handleChange}
                                error={formik.touched.height && Boolean(formik.errors.height)}
                                helperText={formik.touched.height && formik.errors.height}
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Weight in KGs"
                                name="weight"
                                value={formik.values.weight}
                                onChange={formik.handleChange}
                                error={formik.touched.weight && Boolean(formik.errors.weight)}
                                helperText={formik.touched.weight && formik.errors.weight}
                            />

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
                    </Box>
                </Box>
            </Container>
                {/*<Modal*/}
                {/*    open={open}*/}
                {/*    onClose={handleClose}*/}
                {/*    aria-labelledby="keep-mounted-modal-title"*/}
                {/*    aria-describedby="keep-mounted-modal-description"*/}
                {/*>*/}
                {/*    <Box*/}
                {/*        sx={{*/}
                {/*            borderRadius: '10px',*/}
                {/*            width: '90%',*/}
                {/*            maxWidth: '500px',*/}
                {/*            bgcolor: 'background.paper',*/}
                {/*            boxShadow: 24,*/}
                {/*            pb: 2,*/}
                {/*            pt: 1,*/}
                {/*            position: 'absolute',*/}
                {/*            top: '50%',*/}
                {/*            left: '50%',*/}
                {/*            transform: 'translate(-50%, -50%)',*/}
                {/*            overflow: "hidden",*/}
                {/*            outline: 'none',*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <Typography id="modal-title" variant="h6" component="h2" sx={{paddingLeft:2,paddingTop:2}}>*/}
                {/*            {message}*/}
                {/*        </Typography>*/}
                {/*        /!*<Typography id="modal-description" sx={{ mt: 2 }}>*!/*/}
                {/*        /!*    This is a responsive modal without a border. Resize the window to see the responsiveness.*!/*/}
                {/*        /!*</Typography>*!/*/}

                {/*        <Box sx={{display:"flex",justifyContent:"flex-end"}}><Button*/}
                {/*            className="overpass"*/}
                {/*            onClick={() => setOpen(false)}*/}
                {/*            sx={{*/}
                {/*                backgroundColor: "darkGreen",*/}
                {/*                py: "2px",*/}
                {/*                px: "28px",*/}
                {/*                textTransform: "unset",*/}
                {/*                fontSize: "20px",*/}
                {/*                color: "white",*/}
                {/*                borderRadius: "10px",*/}
                {/*                "&:hover": {*/}
                {/*                    backgroundColor: "green",*/}
                {/*                    color: "white",*/}
                {/*                },*/}
                {/*                mt: "10px",*/}
                {/*                marginRight:2*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            OK*/}
                {/*        </Button></Box>*/}
                {/*    </Box>*/}
                {/*</Modal>*/}
            </Box>
        </>
    );
}

export default ShapAssessment;