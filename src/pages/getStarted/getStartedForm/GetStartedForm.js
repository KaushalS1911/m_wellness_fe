import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel, FormLabel,
    InputLabel,
    MenuItem, Radio, RadioGroup,
    Select,
    TextField
} from "@mui/material";
import GetStartedReview from "../../../components/ getstarted/GetStartedReview";
import {useNavigate} from "react-router-dom";

function GetStartedForm(props) {
    const navigate = useNavigate()
    const [age,setAge] = useState([])
    const organizations = [
        { value: 'optum', label: 'Optum' },
        { value: 'teamhealth', label: 'Teamhealth' },
        { value: 'labcorp', label: 'Labcorp' },
        { value: 'omega', label: 'Omega' },
        { value: 'Nhs', label: 'Nhs' },
    ];

      for (let i=16;i<=100;i++){
          age.push(i)
      }

        const [formValues, setFormValues] = React.useState({
            organization: '',
            fullName: '',
            admissionId: '',
            phone: '',
            gender: false,
            age: '',
            email:'',
        });

        const handleChange = (event) => {
            const { name, value, type, checked } = event.target;
            setFormValues({
                ...formValues,
                [name]: type === 'checkbox' ? checked : value,
            });
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formValues);
        };
    return (
        <>
            <Box sx={{width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: {md:"100px",xs:"80px"}}}>
                <Container>

                    <Box sx={{fontSize: "32px", color: "#444444", textAlign: 'center'}} className="overpass">
                        Assessment Form
                            </Box>

                    <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                        <Box sx={{
                            width: "700px",
                            backgroundColor: "#FFFFFF",
                            // height: "400px",
                            padding: "50px 30px 30px",
                            boxShadow: 2,

                        }} className={"overpass"}>
                            <form onSubmit={handleSubmit}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel  sx={{
                                    backgroundColor: formValues.organization ? 'white' : 'white',
                                    px: 1,
                                    '&.Mui-focused': {
                                        backgroundColor: 'white',
                                    },
                                }}>Organization</InputLabel>
                                <Select
                                    name="organization"
                                    value={formValues.organization}
                                    onChange={handleChange}
                                >
                                    {organizations.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Admission ID"
                                    name="admissionId"
                                    value={formValues.admissionId}
                                    onChange={handleChange}
                                />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Full Name"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleChange}
                            />



                            <TextField
                                fullWidth
                                margin="normal"
                                label="Phone"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                                <TextField
                                fullWidth
                                margin="normal"
                                label="Email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />


                                <FormControl fullWidth margin="normal">
                                    <InputLabel  sx={{
                                        backgroundColor: formValues.organization ? 'white' : 'white',
                                        px: 1,
                                        '&.Mui-focused': {
                                            backgroundColor: 'white',
                                        },
                                    }}>Age</InputLabel>
                                    <Select
                                        name="age"
                                        value={formValues.age}
                                        onChange={handleChange}
                                    >
                                        {age.map((option) => (
                                            <MenuItem key={option} value={option} >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            {/*<TextField*/}
                            {/*    fullWidth*/}
                            {/*    margin="normal"*/}
                            {/*    label="Age"*/}
                            {/*    name="age"*/}
                            {/*    value={formValues.age}*/}
                            {/*    onChange={handleChange}*/}
                            {/*/>*/}
                                <Box display={{sm: "flex"}} mt={{xs:2,sm:"unset"}} alignItems="center" margin="normal">
                                    <FormLabel component="legend" sx={{ marginRight: '1rem'}}>Gender :</FormLabel>
                                    <RadioGroup
                                        name="gender"
                                        value={formValues.gender}
                                        onChange={handleChange}
                                        row
                                    >
                                        <FormControlLabel sx={{color:"#00000099"}} value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel sx={{color:"#00000099"}} value="female" control={<Radio />} label="Female" />
                                    </RadioGroup>
                                </Box>
                            <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>

                                <Button
                                    className="overpass"
                                    onClick={() => navigate("/start-assessment")}
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
                                        mt: "10px",marginRight:1
                                    }}
                                >
                                    Submit
                                </Button>

                            </Box>
                        </form>
                        </Box>
                    </Box>


                </Container>
            </Box>

            {/*<GetStartedReview/>*/}
        </>
    );
}

export default GetStartedForm;