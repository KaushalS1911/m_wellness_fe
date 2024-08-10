import React from 'react';
import {ToastContainer} from "react-toastify";
import {
    Box,
    Button,
    Container,
    FormControl, FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem, Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";
import {useNavigate} from "react-router-dom";
function FamilyInfo() {
    const navigate = useNavigate()
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
                            width: "700px",
                            backgroundColor: "#FFFFFF",
                            padding: "50px 30px 30px",
                            boxShadow: 2,
                        }} className={"overpass"}>
                            <form>


                                <FormControl fullWidth margin="normal">
                                    <InputLabel
                                        sx={{
                                            backgroundColor:  'white',
                                            px: 1,
                                            '&.Mui-focused': {
                                                backgroundColor: 'white',
                                            },
                                        }}
                                    >
                                        Family Type
                                    </InputLabel>
                                    <Select
                                        name="age"
                                        // value={formik.values.age}
                                        // onChange={formik.handleChange}
                                        // error={formik.touched.age && Boolean(formik.errors.age)}
                                    >
                                        {["Joint","Nuclear","Single Parent"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {/*{formik.touched.age && formik.errors.age ? (*/}
                                    {/*    <div style={{color:"red"}}>{formik.errors.age}</div>*/}
                                    {/*) : null}*/}
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel
                                        sx={{
                                            backgroundColor:  'white',
                                            px: 1,
                                            '&.Mui-focused': {
                                                backgroundColor: 'white',
                                            },
                                        }}
                                    >
                                        Reason for Being Single Parent
                                    </InputLabel>
                                    <Select
                                        name="age"
                                        // value={formik.values.age}
                                        // onChange={formik.handleChange}
                                        // error={formik.touched.age && Boolean(formik.errors.age)}
                                    >
                                        {["Widow","Widower","Divorced"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {/*{formik.touched.age && formik.errors.age ? (*/}
                                    {/*    <div style={{color:"red"}}>{formik.errors.age}</div>*/}
                                    {/*) : null}*/}
                                </FormControl>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Mother Age"
                                    name="fullName"
                                    // value={formik.values.fullName}
                                    // onChange={formik.handleChange}
                                    // error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    // helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Father Age"
                                    name="admissionId"
                                    // value={formik.values.admissionId}
                                    // onChange={formik.handleChange}
                                    // error={formik.touched.admissionId && Boolean(formik.errors.admissionId)}
                                    // helperText={formik.touched.admissionId && formik.errors.admissionId}
                                />

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Whether Single Childn"
                                    name="phone"
                                    // value={formik.values.phone}
                                    // onChange={formik.handleChange}
                                    // error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    // helperText={formik.touched.phone && formik.errors.phone}
                                />

                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="If No, Number of Siblings"
                                    name="email"
                                    // value={formik.values.email}
                                    // onChange={formik.handleChange}
                                    // error={formik.touched.email && Boolean(formik.errors.email)}
                                    // helperText={formik.touched.email && formik.errors.email}
                                />  <TextField
                                fullWidth
                                margin="normal"
                                label="Whether Parents into transferable Job"
                                name="email"
                                // value={formik.values.email}
                                // onChange={formik.handleChange}
                                // error={formik.touched.email && Boolean(formik.errors.email)}
                                // helperText={formik.touched.email && formik.errors.email}
                            />
                                <FormControl fullWidth margin="normal">
                                    <InputLabel
                                        sx={{
                                            backgroundColor:  'white',
                                            px: 1,
                                            '&.Mui-focused': {
                                                backgroundColor: 'white',
                                            },
                                        }}
                                    >
                                        Reason for Being Single Parent
                                    </InputLabel>
                                    <Select
                                        name="age"
                                        // value={formik.values.age}
                                        // onChange={formik.handleChange}
                                        // error={formik.touched.age && Boolean(formik.errors.age)}
                                    >
                                        {["Less than a Year","2-5 Years","Not Systematic(Can happen anytime)"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {/*{formik.touched.age && formik.errors.age ? (*/}
                                    {/*    <div style={{color:"red"}}>{formik.errors.age}</div>*/}
                                    {/*) : null}*/}
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel
                                        sx={{
                                            backgroundColor:  'white',
                                            px: 1,
                                            '&.Mui-focused': {
                                                backgroundColor: 'white',
                                            },
                                        }}
                                    >
                                        Whatsapp Number of
                                    </InputLabel>
                                    <Select
                                        name="age"
                                        // value={formik.values.age}
                                        // onChange={formik.handleChange}
                                        // error={formik.touched.age && Boolean(formik.errors.age)}
                                    >
                                        {["Father","Mother"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {/*{formik.touched.age && formik.errors.age ? (*/}
                                    {/*    <div style={{color:"red"}}>{formik.errors.age}</div>*/}
                                    {/*) : null}*/}
                                </FormControl>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel
                                        sx={{
                                            backgroundColor:  'white',
                                            px: 1,
                                            '&.Mui-focused': {
                                                backgroundColor: 'white',
                                            },
                                        }}
                                    >
                                        Email Id
                                    </InputLabel>
                                    <Select
                                        name="age"
                                        // value={formik.values.age}
                                        // onChange={formik.handleChange}
                                        // error={formik.touched.age && Boolean(formik.errors.age)}
                                    >
                                        {["Father","Mother"].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {/*{formik.touched.age && formik.errors.age ? (*/}
                                    {/*    <div style={{color:"red"}}>{formik.errors.age}</div>*/}
                                    {/*) : null}*/}
                                </FormControl>

                                <Box display={{ sm: "flex" }} mt={{ xs: 2, sm: "unset" }} alignItems="center" margin="normal">
                                    <FormLabel component="legend" sx={{ marginRight: '1rem' }}>Who is the working parent :</FormLabel>
                                    <RadioGroup
                                        name="gender"
                                        // value={formik.values.gender}
                                        // onChange={formik.handleChange}
                                        row
                                        // error={formik.touched.gender && Boolean(formik.errors.gender)}
                                    >
                                        <FormControlLabel sx={{ color: "#00000099" }} value="male" control={<Radio />} label="Mother" />
                                        <FormControlLabel sx={{ color: "#00000099" }} value="female" control={<Radio />} label="Father" />
                                        <FormControlLabel sx={{ color: "#00000099" }} value="other" control={<Radio />} label="Both" />
                                        <FormControlLabel sx={{ color: "#00000099" }} value="none" control={<Radio />} label="None" />
                                    </RadioGroup>
                                </Box>




                                <Box sx={{ mt: "20px", display: "flex", justifyContent: "end" }}>
                                    <Button
                                        className="overpass"
                                        type="submit"
                                        onClick={() => navigate("/shape-assessment")}
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

export default FamilyInfo;