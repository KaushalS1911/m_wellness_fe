import React, {useEffect, useState} from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Grid, FormControl, InputLabel, Select, MenuItem, Modal, TextField,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {useNavigate} from "react-router-dom"
import {NavLink} from "react-router-dom";


const style = {
    borderRadius: '10px',
    width: '90%',
    maxWidth:'500px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pb: 4,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow:"hidden",
};

function LookingFor({
                        therapyQuestion,
                        processMessage,
                        therapyTypes,
                        handleNext,
                        link,
                        submit,
                        mainHandleNext,
                        last,
                        handleClean
                    }) {
    const [points, setPoints] = useState(0)
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [disable, setDisable] = useState(false)
    const handlePoints = (e) => {
        const string = e.target.value
        const data = string.substr(0, 1)
        if (data == "A") {
            setPoints(points + 3)
        } else if (data == "B") {
            setPoints(points + 2)
        } else if (data == "C") {
            setPoints(points + 1)
        } else {
            setPoints(points + 0)
        }

        if (mainHandleNext) {
            mainHandleNext()
        }
        if (handleNext) {
            handleNext()
        }
        if (last) {
            setDisable(true)

        }
    }
    const handleSubmit = () => {
        handleOpen()
    }
    const TherapyButton = ({fullWidth, children, onClick, value}) => (
        <Grid item xs={12} >
            <Button
                style={{display: "flex", justifyContent: "flex-start"}}
                value={value}
                fullWidth={fullWidth}
                onClick={onClick}
                disabled={disable}
                sx={{
                    backgroundColor: "#A6DE9B",
                    color: "#325343",
                    fontSize: "16px",
                    fontWeight: "500",
                    borderRadius: "50px",
                    padding: "10px 24px",
                    "&:hover": {
                        backgroundColor: "#325343",
                        color: "white",
                    },
                    textTransform: "capitalize",

                }}
            >
                {children}
            </Button>
        </Grid>
    );



    return (
        <Card style={{maxWidth: 700, margin: "50px auto", padding: "20px"}}>
            <CardContent>
                <Typography
                    variant="h6"
                    sx={{fontSize: "22px", color: "#252625"}}
                    gutterBottom
                    mb={4}
                >
                    {therapyQuestion}
                </Typography>
                <Box mb={2}>
                    <Grid container spacing={2}>
                        {therapyTypes?.map((therapy, index) => (
                            <TherapyButton
                                className={"overpass"}
                                sx={{textTransform: "unset"}}
                                key={index}
                                fullWidth
                                onClick={(e) => handlePoints(e)}
                                value={therapy?.label}
                            >
                                {therapy?.label}
                            </TherapyButton>
                        ))}

                    </Grid>
                </Box>
                <Box>
                    <Box sx={{
                        color: "green",
                        textDecoration: "underline",
                        fontWeight: "600",
                        margin: "20px 0 0 20px",
                        cursor: "pointer",
                        "&:hover": {color: "black"}
                    }} className={"overpass"}>{link}</Box>
                </Box>
                {processMessage && (
                    <Box
                        mt={5}
                        display="flex"
                        style={{
                            backgroundColor: "#DEF6D9",
                            padding: "14px 10px",
                            borderRadius: "8px",
                        }}
                    >
                        <InfoOutlinedIcon
                            style={{marginRight: "8px", color: "darkGreen"}}
                        />
                        <Typography variant="body2" style={{color: "#325343"}}>
                            {processMessage}
                        </Typography>
                    </Box>
                )}
                {submit && <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
                    {/*<NavLink to={'/'}>*/}
                    <Button
                        className="overpass"
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: "darkGreen",
                            py: "5px",
                            px: "28px",
                            textTransform: "unset",
                            fontSize: "20px",
                            color: "white",
                            borderRadius: "30px",
                            "&:hover": {
                                backgroundColor: "green",
                                color: "white",
                            },
                            mt: "10px"
                        }}
                    >
                        Submit
                    </Button>
                    {/*</NavLink>*/}
                </Box>}

                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h5"
                                    sx={{fontWeight: "600", fontSize: "21px",textAlign:"center",py:3,backgroundColor:"darkGreen",color:"white"}} className={"overpass title"}
                                    component="h2">
                           Great! You have answered all the questions.
                        </Typography><Typography id="keep-mounted-modal-title"
                                    sx={{ fontSize: "18px",textAlign:"center",my:3}} className={"overpass "}
                                    component="h2">
                           Enter your email below to get a copy of your result
                         </Typography>
                        <Box sx={{display: "flex", justifyContent: "center",px:1}}>

                            <TextField id="outlined-basic" label="Enter email address" variant="outlined" sx={{width:"400px",borderRadius:"10px" ,'& .MuiOutlinedInput-root': {

                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'green',
                                },
                                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                                    color: 'green',
                                }
                            }}/>
                        </Box>
                        <Typography id="keep-mounted-modal-description" sx={{mt: 2, fontSize: "17px",px:4}}
                                    className={"overpass"}>
                            {/*{desc(points)?.desc}*/}
                            The information you share with us is 100% confidentiol. Your details will not be misused or shared with anybody else
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <Button
                                className="overpass"
                                onClick={() => {
                                    setPoints(0)
                                    navigate(`/getStarted/${points}`)
                                }}
                                sx={{
                                    backgroundColor: "#219f2175",
                                    py: "10px",
                                    px: "28px",
                                    textTransform: "unset",
                                    fontSize: "20px",
                                    color: "white",
                                    borderRadius: "30px",
                                    "&:hover": {
                                        backgroundColor: "green",
                                        color: "white",
                                    },
                                    mt: "10px"
                                }}
                            >
                                Sure show me my results
                            </Button>
                        </Box>
                        <Box  onClick={() => {
                            setPoints(0)
                            navigate(`/getStarted/${points}`)
                        }} sx={{textDecoration:"underline",my:"20px",textAlign:"center",color:"darkgreen",cursor:"pointer"}}>NO THANKS SHOW ME MY RESULT</Box>
                    </Box>
                </Modal>
            </CardContent>
        </Card>
    );
}

export default LookingFor;
