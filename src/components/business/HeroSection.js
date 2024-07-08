import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import back from "../../assets/business/homehero.png";

function HeroSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));

  const getFontSize = () => {
    if (isXs) return "24px";
    if (isSm) return "32px";
    if (isMd) return "40px";
    if (isLg) return "48px";
    return "48px";
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${back})`,
          minHeight: "850px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container display={"flex"} justifyContent={"center"}>
          <Grid item xl={7}>
            <Box sx={{ width: { md: "700px" }, padding: "0px 30px" }}>
              <Typography
                className="overpass title"
                variant="h5"
                pb={4}
                sx={{
                  fontSize: getFontSize(),
                  fontWeight: "300",
                  color: "white",
                }}
              >
                The #1 mental health <br /> benefit
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  lineHeight: "1.75rem",
                  color: "white",
                  display: "inline-block",
                }}
                pb={3.5}
              >
                As the largest mental health provider in the industry, with over
                750,000 sessions every month, we have more experience than
                anyone else in supporting your employees.
              </Typography>
              <Box>
                <Button
                  className="overpass"
                  sx={{
                    backgroundColor: "liteGreen",
                    py: "10px",
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
                  Request a demo
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HeroSection;
