import React from 'react';
import { ToastContainer } from "react-toastify";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    InputLabel,
    MenuItem, OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

function FamilyInfo() {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        familyType: Yup.string().required('Family Type is required'),
        singleParentReason: Yup.string().required('Reason is required'),
        motherAge: Yup.number().required('Mother Age is required').min(18, 'Age must be at least 18'),
        fatherAge: Yup.number().required('Father Age is required').min(18, 'Age must be at least 18'),
        singleChild: Yup.boolean().required('Single Child Required'),
        sibling:Yup.number().required('Number of Siblings is required'),
        transferableJob: Yup.boolean().required('Required'),
        frequent: Yup.string().required('Frequent is the new transfer is required'),
        workingParent: Yup.string().required('Working Parent is required'),
        whatsappNumber: Yup.string().required('Whatsapp Number is required'),
        emailId: Yup.string().required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            familyType: '',
            singleParentReason: '',
            motherAge: '',
            fatherAge: '',
            singleChild: '',
            sibling: '',
            transferableJob: '',
            workingParent: '',
            frequent:"",
            whatsappNumber: '',
            emailId: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            navigate("/shape-assessment");
        },
    });
    return (
        <>
            <ToastContainer />
            <Box sx={{ width: '100%', pt: "150px", backgroundColor: "#FFFCF6", pb: { md: "100px", xs: "80px" } }}>
                <Container>
                    <Box sx={{ fontSize: "32px", color: "#444444", textAlign: 'center' }} className="overpass">
                        Family Information
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                        <Box sx={{
                            width: "100%",
                            maxWidth: "700px",
                            backgroundColor: "#FFFFFF",
                            padding: "50px 30px 30px",
                            boxShadow: 2,
                        }} className={"overpass"}>
                            <form onSubmit={formik.handleSubmit}>
                                <FormControl
                                    fullWidth
                                    margin="normal"
                                    error={formik.touched.familyType && Boolean(formik.errors.familyType)}
                                >
                                    <InputLabel>Family Type</InputLabel>
                                    <Select
                                        input={<OutlinedInput label="Family Type"/>}
                                        id="familyType"
                                        name="familyType"
                                        value={formik.values.familyType}
                                        onChange={formik.handleChange}
                                    >
                                        {["Joint", "Nuclear", "Single Parent"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>{formik.touched.familyType && formik.errors.familyType}</FormHelperText>
                                </FormControl>

                                <FormControl
                                    fullWidth
                                    margin="normal"
                                    error={formik.touched.singleParentReason && Boolean(formik.errors.singleParentReason)}
                                >
                                    <InputLabel>Reason for Being Single Parent</InputLabel>
                                    <Select
                                        input={<OutlinedInput label="Reason for Being Single Parent"/>}
                                        id="singleParentReason"
                                        name="singleParentReason"
                                        value={formik.values.singleParentReason}
                                        onChange={formik.handleChange}
                                    >
                                        {["Widow", "Widower", "Divorced"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>{formik.touched.singleParentReason && formik.errors.singleParentReason}</FormHelperText>
                                </FormControl>

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    id="motherAge"
                                    name="motherAge"
                                    label="Mother Age"
                                    value={formik.values.motherAge}
                                    onChange={formik.handleChange}
                                    error={formik.touched.motherAge && Boolean(formik.errors.motherAge)}
                                    helperText={formik.touched.motherAge && formik.errors.motherAge}
                                />

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    id="fatherAge"
                                    name="fatherAge"
                                    label="Father Age"
                                    value={formik.values.fatherAge}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fatherAge && Boolean(formik.errors.fatherAge)}
                                    helperText={formik.touched.fatherAge && formik.errors.fatherAge}
                                />    <TextField
                                fullWidth
                                margin="normal"
                                id="fatherAge"
                                name="singleChild"
                                label="Whether Single Child"
                                value={formik.values.singleChild}
                                onChange={formik.handleChange}
                                error={formik.touched.singleChild && Boolean(formik.errors.singleChild)}
                                helperText={formik.touched.singleChild && formik.errors.singleChild}
                            />    <TextField
                                fullWidth
                                margin="normal"
                                id="fatherAge"
                                name="sibling"
                                label="If No, Number of Siblings"
                                value={formik.values.sibling}
                                onChange={formik.handleChange}
                                error={formik.touched.sibling && Boolean(formik.errors.sibling)}
                                helperText={formik.touched.sibling && formik.errors.sibling}
                            />

                                {/*<FormControl*/}
                                {/*    fullWidth*/}
                                {/*    margin="normal"*/}
                                {/*    error={formik.touched.singleChild && Boolean(formik.errors.singleChild)}*/}
                                {/*>*/}
                                {/*    <InputLabel>Whether Single Child</InputLabel>*/}
                                {/*    <Select*/}
                                {/*        id="singleChild"*/}
                                {/*        name="singleChild"*/}
                                {/*        value={formik.values.singleChild}*/}
                                {/*        onChange={formik.handleChange}*/}
                                {/*    >*/}
                                {/*        {["Yes", "No"].map((option) => (*/}
                                {/*            <MenuItem key={option} value={option}>*/}
                                {/*                {option}*/}
                                {/*            </MenuItem>*/}
                                {/*        ))}*/}
                                {/*    </Select>*/}
                                {/*    <FormHelperText>{formik.touched.singleChild && formik.errors.singleChild}</FormHelperText>*/}
                                {/*</FormControl>*/}

                                {/*{formik.values.singleChild === "No" && (*/}
                                {/*    <TextField*/}
                                {/*        fullWidth*/}
                                {/*        margin="normal"*/}
                                {/*        id="siblingsCount"*/}
                                {/*        name="sibling"*/}
                                {/*        label="Number of Siblings"*/}
                                {/*        value={formik.values.sibling}*/}
                                {/*        onChange={formik.handleChange}*/}
                                {/*        error={formik.touched.sibling && Boolean(formik.errors.sibling)}*/}
                                {/*        helperText={formik.touched.sibling && formik.errors.sibling}*/}
                                {/*    />*/}
                                {/*)}*/}
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    id="fatherAge"
                                    name="transferableJob"
                                    label="Whether Parents into Transferable Job"
                                    value={formik.values.transferableJob}
                                    onChange={formik.handleChange}
                                    error={formik.touched.transferableJob && Boolean(formik.errors.transferableJob)}
                                    helperText={formik.touched.transferableJob && formik.errors.transferableJob}
                                />
                                {/*<FormControl*/}
                                {/*    fullWidth*/}
                                {/*    margin="normal"*/}
                                {/*    error={formik.touched.transferableJob && Boolean(formik.errors.transferableJob)}*/}
                                {/*>*/}
                                {/*    <InputLabel>Whether Parents into Transferable Job</InputLabel>*/}
                                {/*    <Select*/}
                                {/*        id="transferableJob"*/}
                                {/*        name="transferableJob"*/}
                                {/*        value={formik.values.transferableJob}*/}
                                {/*        onChange={formik.handleChange}*/}
                                {/*    >*/}
                                {/*        {["Yes", "No"].map((option) => (*/}
                                {/*            <MenuItem key={option} value={option}>*/}
                                {/*                {option}*/}
                                {/*            </MenuItem>*/}
                                {/*        ))}*/}
                                {/*    </Select>*/}
                                {/*    <FormHelperText>{formik.touched.transferableJob && formik.errors.transferableJob}</FormHelperText>*/}
                                {/*</FormControl>*/}

                                {/*{formik.values.transferableJob === "Yes" && (*/}
                                {/*    <FormControl*/}
                                {/*        fullWidth*/}
                                {/*        margin="normal"*/}
                                {/*        error={formik.touched.transferableJobReason && Boolean(formik.errors.transferableJobReason)}*/}
                                {/*    >*/}
                                {/*        <InputLabel>How Frequent is the new transfer</InputLabel>*/}
                                {/*        <Select*/}
                                {/*            id="transferableJobReason"*/}
                                {/*            name="transferableJobReason"*/}
                                {/*            value={formik.values.transferableJobReason}*/}
                                {/*            onChange={formik.handleChange}*/}
                                {/*        >*/}
                                {/*            {["Less than a Year", "2-5 Years", "Not Systematic (Can happen anytime)"].map((option) => (*/}
                                {/*                <MenuItem key={option} value={option}>*/}
                                {/*                    {option}*/}
                                {/*                </MenuItem>*/}
                                {/*            ))}*/}
                                {/*        </Select>*/}
                                {/*        <FormHelperText>{formik.touched.transferableJobReason && formik.errors.transferableJobReason}</FormHelperText>*/}
                                {/*    </FormControl>*/}
                                {/*)}*/}

                                <FormControl
                                    fullWidth
                                    margin="normal"
                                    error={formik.touched.frequent && Boolean(formik.errors.frequent)}
                                >
                                    <InputLabel>How Frequent is the new transfer</InputLabel>
                                    <Select
                                        input={<OutlinedInput label="How Frequent is the new transfer"/>}
                                        id="frequent"
                                        name="frequent"
                                        value={formik.values.frequent}
                                        onChange={formik.handleChange}
                                    >
                                        {["Less than a Year", "2-5 Years","Not Systematic(Can happen anytime)"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>{formik.touched.frequent && formik.errors.frequent}</FormHelperText>
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    margin="normal"
                                    error={formik.touched.whatsappNumber && Boolean(formik.errors.whatsappNumber)}
                                >
                                    <InputLabel>WhatsApp Number of</InputLabel>
                                    <Select
                                        input={<OutlinedInput label="WhatsApp Number of"/>}
                                        id="whatsappNumber"
                                        name="whatsappNumber"
                                        value={formik.values.whatsappNumber}
                                        onChange={formik.handleChange}
                                    >
                                        {["Father", "Mother"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>{formik.touched.whatsappNumber && formik.errors.whatsappNumber}</FormHelperText>
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    margin="normal"
                                    error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                                >
                                    <InputLabel>Email ID</InputLabel>
                                    <Select
                                        input={<OutlinedInput label="Email ID"/>}
                                        id="emailId"
                                        name="emailId"
                                        value={formik.values.emailId}
                                        onChange={formik.handleChange}
                                    >
                                        {["Father", "Mother"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>{formik.touched.emailId && formik.errors.emailId}</FormHelperText>
                                </FormControl>
                                <Box display={{ sm: "flex" }} mt={{ xs: 2, sm: "unset" }} alignItems="center" margin="normal">
                                    <FormLabel component="legend" sx={{ marginRight: '1rem' }}>Who is the Working Parent:</FormLabel>
                                    <RadioGroup
                                        name="workingParent"
                                        value={formik.values.workingParent}
                                        onChange={formik.handleChange}
                                        row
                                        error={formik.touched.workingParent && Boolean(formik.errors.workingParent)}
                                    >
                                        <FormControlLabel sx={{ color: "#00000099" }} value="Mother" control={<Radio />} label="Mother" />
                                        <FormControlLabel sx={{ color: "#00000099" }} value="Father" control={<Radio />} label="Father" />
                                        <FormControlLabel sx={{ color: "#00000099" }} value="Both" control={<Radio />} label="Both" />
                                        <FormControlLabel sx={{ color: "#00000099" }} value="None" control={<Radio />} label="None" />
                                    </RadioGroup>
                                </Box>
                                <FormHelperText sx={{color:"#d32f2f"}}>
                                    {formik.touched.workingParent && formik.errors.workingParent}
                                </FormHelperText>
                                {/*{formik.touched.workingParent && formik.errors.workingParent && (*/}
                                {/*    <div style={{ color: "red" }}>{formik.errors.workingParent}</div>*/}
                                {/*)}*/}
                                {/*<TextField*/}
                                {/*    fullWidth*/}
                                {/*    margin="normal"*/}
                                {/*    id="emailId"*/}
                                {/*    name="emailId"*/}
                                {/*    label="Email ID"*/}
                                {/*    value={formik.values.emailId}*/}
                                {/*    onChange={formik.handleChange}*/}
                                {/*    error={formik.touched.emailId && Boolean(formik.errors.emailId)}*/}
                                {/*    helperText={formik.touched.emailId && formik.errors.emailId}*/}
                                {/*/>*/}

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

export default FamilyInfo;
