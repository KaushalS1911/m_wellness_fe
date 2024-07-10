import React, {useEffect, useState} from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Grid, FormControl, InputLabel, Select, MenuItem,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {NavLink} from "react-router-dom";

const TherapyButton = ({ fullWidth, children, onClick }) => (
    <Grid item xs={12} textAlign="start">
        <Button
            fullWidth={fullWidth}
            onClick={onClick}
            sx={{
                backgroundColor: "#A6DE9B",
                color: "#325343",
                fontSize: "16px",
                fontWeight: "400",
                borderRadius: "50px",
                padding: "10px 0px",
                "&:hover": {
                    backgroundColor: "#325343",
                    color: "white",
                },
                textTransform:"capitalize",
            }}
        >
            {children}
        </Button>
    </Grid>
);

function LookingFor({ therapyQuestion, processMessage, therapyTypes, handleNext,link,submit }) {

    return (
        <Card style={{ maxWidth: 500, margin: "50px auto", padding: "20px" }}>
            <CardContent>
                <Typography
                    variant="h6"
                    sx={{ fontSize: "22px", color: "#252625" }}
                    gutterBottom
                    mb={4}
                >
                    {therapyQuestion}
                </Typography>
                <Box mb={2}>
                    <Grid container spacing={2}>
                        {therapyTypes?.map((therapy, index) => (
                            <TherapyButton
                                sx={{ textTransform: "unset" }}
                                key={index}
                                fullWidth
                                onClick={handleNext}
                            >
                                {therapy.label}
                            </TherapyButton>
                        ))}

                    </Grid>
                </Box>
                <Box>
                    <Box sx={{color:"green",textDecoration:"underline",fontWeight:"600",margin:"20px 0 0 20px",cursor:"pointer","&:hover":{color:"black"}}} className={"overpass"}>{link}</Box>
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
                            style={{ marginRight: "8px", color: "darkGreen" }}
                        />
                        <Typography variant="body2" style={{ color: "#325343" }}>
                            {processMessage}
                        </Typography>
                    </Box>
                )}
                {submit && <Box sx={{mt:"20px",display:"flex",justifyContent:"end"}}>
                    <NavLink to={'/'}>
                        <Button
                            className="overpass"
                            sx={{
                                backgroundColor: "liteGreen",
                                py: "5px",
                                px: "28px",
                                textTransform: "unset",
                                fontSize: "20px",
                                color: "green",
                                borderRadius: "30px",
                                "&:hover": {
                                    backgroundColor: "green",
                                    color: "white",
                                },
                            }}
                        >
                           Submit
                        </Button>
                    </NavLink>
                </Box>}
            </CardContent>
        </Card>
    );
}

export default LookingFor;
