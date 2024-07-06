import React from 'react';
import logo from '../../assets/header/logo.png';
import resLogo from '../../assets/header/resLogo.png';
import {Box, Button, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const navigationItems = [
    {name: "Business", link: "#"},
    {name: "About", link: "#"},
    {name: "Service", link: "#"},
    {name: "Advice", link: "#"},
    {name: "FAQ", link: "#"},
    {name: "Reviews", link: "#"},
    {name: "Therapist jobs", link: "#"},
    {name: "Contact", link: "#"},
];

function Header(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <Box sx={{backgroundColor: "darkGreen", p: "16px",position: "fixed",top: "0",width: "100%",zIndex: 2}}>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Box sx={{width: "180px"}}>
                        <img src={logo} alt="logo"/>
                    </Box>
                    {isLgScreen ? (
                        <Box sx={{color: "white"}}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ml: 2}}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={drawerOpen}
                                onClose={handleDrawerToggle}
                            >
                                <Box
                                    sx={{width: 250}}
                                    role="presentation"
                                    onClick={handleDrawerToggle}
                                    onKeyDown={handleDrawerToggle}
                                >
                                    <List>
                                        {navigationItems.map((item, index) => (
                                            <ListItem button key={index}>
                                                <ListItemText primary={item.name}/>
                                            </ListItem>
                                        ))}
                                        <ListItem button>
                                            <Button
                                                sx={{
                                                    fontWeight: "600",
                                                    border: "1px solid white",
                                                    py: "5px",
                                                    px: "16px",
                                                    textTransform: "unset",
                                                    fontSize: "17px",
                                                    color: "white",
                                                    borderRadius: "20px",
                                                    width: "100%"
                                                }}
                                            >
                                                Login
                                            </Button>
                                        </ListItem>
                                        <ListItem button>
                                            <Button
                                                sx={{
                                                    fontWeight: "600",
                                                    border: "1px solid white",
                                                    background: "white",
                                                    py: "5px",
                                                    px: "16px",
                                                    textTransform: "unset",
                                                    fontSize: "17px",
                                                    color: "green",
                                                    borderRadius: "20px",
                                                    width: "100%"
                                                }}
                                            >
                                                Start assessment
                                            </Button>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    ) : (
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: {xs: "12px", lg: "18px"},
                            fontWeight: "600",
                            color: "white",
                            fontSize: {lg: "16px", xs: "14px"},

                        }}>
                            {navigationItems.map((item, index) => (
                                <Box sx={{position: "relative"}} >
                                    <Box key={index} sx={{'&:hover ~ .underline' : {opacity: 1}}}>{item.name}</Box>
                                    <Box className="underline" sx={{height: "4px",width: "100%",backgroundColor: "liteGreen",position: "absolute",bottom: "-16px",opacity: 0}}></Box>
                                </Box>
                            ))}
                            <Box>
                                <Button
                                    sx={{
                                        fontWeight: "600",
                                        border: "1px solid white",
                                        py: "5px",
                                        px: "16px",
                                        textTransform: "unset",
                                        fontSize: {lg: "16px", xs: "14px"},
                                        color: "white",
                                        borderRadius: "20px",
                                        '&:hover': {
                                            color: "liteGreen",
                                            borderColor: "liteGreen"
                                        }
                                    }}
                                >
                                    Login
                                </Button>
                            </Box>
                            <Box>
                                <Button
                                    sx={{
                                        fontWeight: "600",
                                        background: "white",
                                        py: "5px",
                                        px: "16px",
                                        textTransform: "unset",
                                        fontSize: {lg: "16px", xs: "14px"},
                                        color: "green",
                                        borderRadius: "20px",
                                        '&:hover': {
                                            backgroundColor: "liteGreen"
                                        }
                                    }}
                                >
                                    Start assessment
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
}

export default Header;
