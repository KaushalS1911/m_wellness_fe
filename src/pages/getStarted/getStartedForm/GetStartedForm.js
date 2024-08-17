// import React, {useEffect, useState} from 'react';
// import Box from "@mui/material/Box";
// import {
//     Button,
//     Checkbox,
//     Container,
//     FormControl,
//     FormControlLabel, FormLabel,
//     InputLabel,
//     MenuItem, Radio, RadioGroup,
//     Select,
//     TextField
// } from "@mui/material";
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import GetStartedReview from "../../../components/ getstarted/GetStartedReview";
// import {useNavigate} from "react-router-dom";
// import axios from "axios";
//
// function GetStartedForm(props) {
//     const navigate = useNavigate()
//     const [age, setAge] = useState([])
//     const [organization, setOrganization] = useState([])
//
//
//     const organizations = [
//         {value: 'optum', label: 'Optum'},
//         {value: 'teamhealth', label: 'Teamhealth'},
//         {value: 'labcorp', label: 'Labcorp'},
//         {value: 'omega', label: 'Omega'},
//         {value: 'Nhs', label: 'Nhs'},
//     ];
//
//     useEffect(() => {
//         for (let i = 16; i <= 100; i++) {
//             age.push(i)
//         }
//         axios.get("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/mahadevasth/organization").then((res) => setOrganization(res?.data?.data)).catch((err) => console.log(err))
//     }, [])
//
//
//     const [formValues, setFormValues] = React.useState({
//         organization: '',
//         fullName: '',
//         admissionId: '',
//         phone: '',
//         gender: false,
//         age: '',
//         email: '',
//     });
//     const handleChange = (event) => {
//         const {name, value, type, checked} = event.target;
//         setFormValues({
//             ...formValues,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };
//
//     const handleSubmit = (event) => {
//         console.log({
//             organization_id: formValues?.organization,
//             admission_id: formValues?.admissionId,
//             name: formValues?.fullName,
//             phone: formValues?.phone
//         });
//         try {
//             axios.post("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/mahadevasth/organization/student/validate",
//                 {
//                     organization_id: formValues?.organization,
//                     admission_id: formValues?.admissionId,
//                     name: formValues?.fullName,
//                     phone: formValues?.phone
//                 }).then((res) => {
//                 toast.success('Data uploaded successfully', {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                 });
//                 sessionStorage.setItem("student", JSON.stringify(res?.data?.data))
//                 navigate("/start-assessment")
//             }).catch((err) => console.log(err))
//         } catch (err) {
//             console.log(err)
//         }
//     };
//     return (
//         <>
//             <ToastContainer/>
//             <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: {md: "100px", xs: "80px"}}}>
//                 <Container>
//
//                     <Box sx={{fontSize: "32px", color: "#444444", textAlign: 'center'}} className="overpass">
//                         Assessment Form
//                     </Box>
//
//                     <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
//                         <Box sx={{
//                             width: "700px",
//                             backgroundColor: "#FFFFFF",
//                             // height: "400px",
//                             padding: "50px 30px 30px",
//                             boxShadow: 2,
//
//                         }} className={"overpass"}>
//                             <form onSubmit={handleSubmit}>
//                                 <FormControl fullWidth margin="normal">
//                                     <InputLabel sx={{
//                                         backgroundColor: formValues.organization ? '#fff' : '#fff',
//                                         px: 1,
//                                         '&.Mui-focused': {
//                                             backgroundColor: '#fff',
//                                         },
//                                     }}>Organization</InputLabel>
//                                     <Select
//                                         name="organization"
//                                         value={formValues.organization}
//                                         onChange={handleChange}
//                                     >
//                                         {organization.map((option) => (
//                                             <MenuItem key={option?.id} value={option?.id}>
//                                                 {option?.name}
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//
//                                 <TextField
//                                     fullWidth
//                                     margin="normal"
//                                     label="Admission ID"
//                                     name="admissionId"
//                                     value={formValues.admissionId}
//                                     onChange={handleChange}
//                                 />
//
//                                 <TextField
//                                     fullWidth
//                                     margin="normal"
//                                     label="Full Name"
//                                     name="fullName"
//                                     value={formValues.fullName}
//                                     onChange={handleChange}
//                                 />
//
//
//                                 <TextField
//                                     fullWidth
//                                     margin="normal"
//                                     label="Phone"
//                                     name="phone"
//                                     value={formValues.phone}
//                                     onChange={handleChange}
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     margin="normal"
//                                     label="Email"
//                                     name="email"
//                                     value={formValues.email}
//                                     onChange={handleChange}
//                                 />
//
//
//                                 <FormControl fullWidth margin="normal">
//                                     <InputLabel sx={{
//                                         backgroundColor: formValues.organization ? '#fff' : '#fff',
//                                         px: 1,
//                                         '&.Mui-focused': {
//                                             backgroundColor: '#fff',
//                                         },
//                                     }}>Age</InputLabel>
//                                     <Select
//                                         name="age"
//                                         value={formValues.age}
//                                         onChange={handleChange}
//                                     >
//                                         {age.map((option) => (
//                                             <MenuItem key={option} value={option}>
//                                                 {option}
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//                                 {/*<TextField*/}
//                                 {/*    fullWidth*/}
//                                 {/*    margin="normal"*/}
//                                 {/*    label="Age"*/}
//                                 {/*    name="age"*/}
//                                 {/*    value={formValues.age}*/}
//                                 {/*    onChange={handleChange}*/}
//                                 {/*/>*/}
//                                 <Box display={{sm: "flex"}} mt={{xs: 2, sm: "unset"}} alignItems="center"
//                                      margin="normal">
//                                     <FormLabel component="legend" sx={{marginRight: '1rem'}}>Gender :</FormLabel>
//                                     <RadioGroup
//                                         name="gender"
//                                         value={formValues.gender}
//                                         onChange={handleChange}
//                                         row
//                                     >
//                                         <FormControlLabel sx={{color: "#00000099"}} value="male" control={<Radio/>}
//                                                           label="Male"/>
//                                         <FormControlLabel sx={{color: "#00000099"}} value="female" control={<Radio/>}
//                                                           label="Female"/>
//                                         <FormControlLabel sx={{color: "#00000099"}} value="other" control={<Radio/>}
//                                                           label="Other"/>
//                                     </RadioGroup>
//                                 </Box>
//                                 <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
//
//                                     <Button
//                                         className="overpass"
//                                         onClick={() => navigate("/start-assessment")}
//                                         sx={{
//                                             backgroundColor: "#A6DE9B",
//                                             py: "5px",
//                                             px: "28px",
//                                             textTransform: "unset",
//                                             fontSize: "20px",
//                                             color: "#325343",
//                                             borderRadius: "30px",
//                                             "&:hover": {
//                                                 backgroundColor: "darkGreen",
//                                                 color: "#fff",
//                                             },
//                                             mt: "10px", marginRight: 1
//                                         }}
//                                     >
//                                         Submit
//                                     </Button>
//
//                                 </Box>
//                             </form>
//                         </Box>
//                     </Box>
//
//
//                 </Container>
//             </Box>
//
//             {/*<GetStartedReview/>*/}
//         </>
//     );
// }
//
// export default GetStartedForm;

import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Modal,
    Typography,
    TextField, OutlinedInput
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function GetStartedForm(props) {
    const navigate = useNavigate();
    const [age, setAge] = useState([]);
    const [organization, setOrganization] = useState([]);
    const [open, setOpen] = useState(false);
    const [message,setMessage] = useState("")
    useEffect(() => {
        const ages = [];
        for (let i = 16; i <= 100; i++) {
            ages.push(i);
        }
        setAge(ages);
        axios.get("https://interactapiverse.com/mahadevasth/organization")
            .then((res) => setOrganization(res?.data?.data))
            .catch((err) => console.log(err));
    }, []);

    const formik = useFormik({
        initialValues: {
            organization: '',
            fullName: '',
            admissionId: '',
            phone: '',
            gender: '',
            age: '',
            email: '',
        },
        validationSchema: Yup.object({
            organization: Yup.string().required('Organization is required'),
            fullName: Yup.string().required('Full name is required'),
            admissionId: Yup.string().required('Admission ID is required'),
            phone: Yup.string().required('Phone is required'),
            gender: Yup.string().required('Gender is required'),
                   age: Yup.number().required('Age is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit: (values) => {
            try {
                axios.post("https://interactapiverse.com/mahadevasth/organization/student/validate", {
                    organization_id: values.organization,
                    admission_id: values.admissionId,
                    name: values.fullName,
                    phone: values.phone
                }).then(async (res) => {
                    if(res?.data?.status == "200"){
                    //     await setOpen(true)
                    //     setMessage("Data uploaded successfully")
                    //     setTimeout(() => {
                            navigate("/start-assessment");
                    //     }, 3000);
                    // toast.success('Data uploaded successfully', {
                    //     position: "top-center",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "light",
                    //                         });

                    }
                    else {
                        setMessage("Student record not found")
                        setOpen(true)
                        // toast.error('Student record not found', {
                        //     position: "top-center",
                        //     autoClose: 5000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        //     theme: "light",
                        // });
                    }
                    sessionStorage.setItem("student", JSON.stringify(res?.data?.data));
                }).catch((err) => {
                    // toast.error('Something want wrong', {
                    //     position: "top-center",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "light",
                    // });
                    setMessage("Something want wrong")
                    setOpen(true)
                    console.log(err)
                });
            } catch (err) {
                console.log(err);
            }
        },
    });
    const handleClose = () => setOpen(false);

    return (
        <>
            <ToastContainer />
            <Box sx={{ width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: { md: "100px", xs: "80px" } }}>
                <Container>
                    <Box sx={{ fontSize: "32px", color: "#444444", textAlign: 'center' }} className="overpass">
                        Assessment Form
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                        <Box sx={{
                            width: "700px",
                            backgroundColor: "#FFFFFF",
                            padding: "50px 30px 30px",
                            boxShadow: 2,
                        }} className={"overpass"}>
                            <form onSubmit={formik.handleSubmit}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel
                                        sx={{
                                            backgroundColor: formik.values.organization ? '#fff' : '#fff',
                                            px: 1,
                                            '&.Mui-focused': {
                                                backgroundColor: '#fff',
                                            },
                                        }}
                                    >
                                        Organization
                                    </InputLabel>
                                    <Select
                                        input={<OutlinedInput label="Organization"/>}
                                        name="organization"
                                        value={formik.values.organization}
                                        onChange={formik.handleChange}
                                        error={formik.touched.organization && Boolean(formik.errors.organization)}
                                    >
                                        {organization.map((option) => (
                                            <MenuItem key={option?.id} value={option?.id}>
                                                {option?.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {formik.touched.organization && formik.errors.organization ? (
                                        <div style={{color:"red"}}>{formik.errors.organization}</div>
                                    ) : null}
                                </FormControl>

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Admission ID"
                                    name="admissionId"
                                    value={formik.values.admissionId}
                                    onChange={formik.handleChange}
                                    error={formik.touched.admissionId && Boolean(formik.errors.admissionId)}
                                    helperText={formik.touched.admissionId && formik.errors.admissionId}
                                />

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Full Name"
                                    name="fullName"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                />

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
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
                        <Typography id="modal-title" variant="h6" component="h2" sx={{paddingLeft:2,paddingTop:2}}>
                            {message}
                        </Typography>
                        {/*<Typography id="modal-description" sx={{ mt: 2 }}>*/}
                        {/*    This is a responsive modal without a border. Resize the window to see the responsiveness.*/}
                        {/*</Typography>*/}

                        <Box sx={{display:"flex",justifyContent:"flex-end"}}><Button
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
                                marginRight:2
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

export default GetStartedForm;
