import React from 'react';
import logo from '../../assets/header/logo.png';
import {
    Box,
    Button,
    useMediaQuery,
    useTheme,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from 'react-router-dom';

const navigationItems = [
  // { name: "Business", link: "/business" },
  // { name: "About", link: "/about" },
  // // { name: "Service", link: "#" },
  // { name: "Advice", link: "/advice" },
  // { name: "FAQ", link: "/faq" },
  // { name: "Reviews", link: "#" },
  // { name: "Therapist jobs", link: "#" },
  // { name: "Contact", link: "/contact" },
];

function Header(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "darkGreen",
          p: "16px",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NavLink to={"/"}>
            <Box sx={{ width: "180px" }}>
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
            </Box>
          </NavLink>
          {isLgScreen ? (
            <Box sx={{ color: "white" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                  onKeyDown={handleDrawerToggle}
                >
                  <List>
                    {navigationItems.map((item, index) => (
                      <NavLink style={{color:"unset"}} to={item.link}>
                        <ListItem button key={index} sx={{ cursor: "pointer",color: "darkGreen", }}>
                          <ListItemText primary={item.name} />
                        </ListItem>
                      </NavLink>
                    ))}
                    <ListItem button>
                      {/*<Button*/}
                      {/*  sx={{*/}
                      {/*    // fontWeight: "600",*/}
                      {/*    border: "1px solid white",*/}
                      {/*    py: "5px",*/}
                      {/*    px: "16px",*/}
                      {/*    textTransform: "unset",*/}
                      {/*    fontSize: "17px",*/}
                      {/*    color: "darkgreen",*/}
                      {/*    borderRadius: "20px",*/}
                      {/*    width: "100%",*/}
                      {/*  }}*/}
                      {/*>*/}
                      {/*  */}
                      {/*</Button>*/}
                      {/*  <Button*/}
                      {/*      className="overpass"*/}
                      {/*      variant="outlined"*/}
                      {/*      sx={{*/}
                      {/*          fontSize: "20px",*/}
                      {/*          borderRadius: "30px",*/}
                      {/*          color: "darkGreen",*/}
                      {/*          borderColor: "darkGreen",*/}
                      {/*          padding: "5px 36px",*/}
                      {/*          textTransform: "inherit",*/}
                      {/*          "&:hover": {*/}
                      {/*              borderColor: "darkGreen",*/}
                      {/*              backgroundColor: "#F5FBF4",*/}
                      {/*          },*/}
                      {/*          // my: { xs: "40px", lg: "unset" },*/}
                      {/*          width:"100%",*/}
                      {/*      }}*/}
                      {/*  >*/}
                      {/*      Login*/}
                      {/*  </Button>*/}
                    </ListItem>
                    <ListItem button>
                        <NavLink to={'getStarted'} style={{width:"100%"}}>
                      {/*<Button*/}
                      {/*    variant="outlined"*/}
                      {/*  sx={{*/}
                      {/*    // fontWeight: "600",*/}
                      {/*    border: "1px solid white",*/}
                      {/*    background: "white",*/}
                      {/*    py: "5px",*/}
                      {/*    px: "16px",*/}
                      {/*    textTransform: "unset",*/}
                      {/*    fontSize: "17px",*/}
                      {/*    color: "green",*/}
                      {/*    borderRadius: "20px",*/}
                      {/*    width: "100%",*/}
                      {/*  }}*/}
                      {/*>*/}
                      {/*  */}
                      {/*</Button>*/}

                            <Button
                                className='overpass'
                                variant="contained"
                                sx={{
                                    width:"100% !important",
                                    borderRadius: "30px",
                                    backgroundColor: "#A6DE9B",
                                    padding: "8px 36px",
                                    color: "darkGreen",
                                    textTransform: "initial",
                                    fontSize: "20px",
                                    "&:hover": {
                                        backgroundColor: "green",
                                        color: "white",
                                    },
                                }}
                            >
                                Start Assessment
                            </Button>
                        </NavLink>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "12px", lg: "18px" },
                // fontWeight: "600",
                color: "white",
                fontSize: { lg: "16px", xs: "14px" },
              }}
            >
              {navigationItems.map((item, index) => (
                <NavLink to={item.link} style={{ color: "unset" }}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      key={index}
                      sx={{
                        "&:hover ~ .underline": { opacity: 1 },
                        cursor: "pointer",
                      }}
                    >
                      {item.name}
                    </Box>
                    <Box
                      className="underline"
                      sx={{
                        height: "4px",
                        width: "100%",
                        backgroundColor: "liteGreen",
                        position: "absolute",
                        bottom: "-16px",
                        opacity: 0,
                      }}
                    ></Box>
                  </Box>
                </NavLink>
              ))}
              {/*<Box>*/}
              {/*  <Button*/}
              {/*    sx={{*/}
              {/*      // fontWeight: "600",*/}
              {/*      border: "1px solid white",*/}
              {/*      py: "5px",*/}
              {/*      px: "16px",*/}
              {/*      textTransform: "unset",*/}
              {/*      fontSize: { lg: "16px", xs: "14px" },*/}
              {/*      color: "white",*/}
              {/*      borderRadius: "20px",*/}
              {/*      "&:hover": {*/}
              {/*        color: "liteGreen",*/}
              {/*        borderColor: "liteGreen",*/}
              {/*      },*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    Login*/}
              {/*  </Button>*/}
              {/*</Box>*/}
              <Box>
               <NavLink to={'getStarted'}>
                   <Button
                       sx={{
                           // fontWeight: "600",
                           background: "white",
                           py: "5px",
                           px: "16px",
                           textTransform: "unset",
                           fontSize: { lg: "16px", xs: "14px" },
                           color: "green",
                           borderRadius: "20px",
                           "&:hover": {
                               backgroundColor: "liteGreen",
                           },
                       }}
                   >
                      Start Assessment
                   </Button>
               </NavLink>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Header;
