import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Button, ImageList, ImageListItem, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const itemData = [
    {
        img: 'https://assets.betterhelp.com/about/counselors/dca89d519abf9e373d93ed562a521ca4.jpg?v=f4959109d99e',
        title: 'Breakfast',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/f1424e37acbaac10619a7fe7c38adda5.jpg?v=f4959109d99e',
        title: 'Burger',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/b4bad3ce6ac40c8024a839b7c105de28.jpg?v=f4959109d99e',
        title: 'Camera',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/1c641d91c16ef3f4dd479a7a8f1fbe83.jpg?v=f4959109d99e',
        title: 'Coffee',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/0db4dae3eadbb824e1a72401ec594c1f.jpg?v=f4959109d99e',
        title: 'Hats',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/3f81debbb3fb9dc4a642b789af656133.jpg?v=f4959109d99e',
        title: 'Honey',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/8c6830bb46988faf7ffe0d8facea38e4.jpg?v=f4959109d99e',
        title: 'Basketball',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/5b460df29a91d28fe857d40d80cecf51.jpg?v=f4959109d99e',
        title: 'Fern',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/46c9783627018b958a1957083b46ce5c.jpg?v=f4959109d99e',
        title: 'Mushrooms',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/df3d39b9e9ebd303bb6e5dbd0901f6ad.jpg?v=f4959109d99e',
        title: 'Tomato basil',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/cfcc4a387b2f8e1719a1d912f327a1ed.jpg?v=f4959109d99e',
        title: 'Sea star',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/e6ae059352f9e6d36e46af66ab0ae6b4.jpg?v=f4959109d99e',
        title: 'Bike',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/0e0ddf50996ae717b7a67eeb8f651325.jpg?v=f4959109d99e',
        title: 'Fern',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/46552fd795b247053e41a5b0138819f4.jpg?v=f4959109d99e',
        title: 'Mushrooms',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/f9f7d2fee1b37a12ca56908e9e7f6d31.jpg?v=f4959109d99e',
        title: 'Tomato basil',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/0925488931a87d096cad9d615e313734.jpg?v=f4959109d99e',
        title: 'Sea star',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/2bbd85aee65c02d7c04651252ff0694a.jpg?v=f4959109d99e',
        title: 'Bike',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/1b016d0f45c8288124ab4398b3af3386.jpg?v=f4959109d99e',
        title: 'Mushrooms',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/d20a14f96943cb890a776ff40f60f1b3.jpg?v=f4959109d99e',
        title: 'Tomato basil',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/b87949556dacbe1546794c73f1a336db.jpg?v=f4959109d99e',
        title: 'Sea star',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/f92cbd7a7b12a5a9ad0e7ba5008eb013.jpg?v=f4959109d99e',
        title: 'Bike',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/441eda74e746df3b50d37219891ccb4a.jpg?v=f4959109d99e',
        title: 'Bike',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/1504d36f7f1ccd4a2d863f7c1e24e87d.jpg?v=f4959109d99e',
        title: 'Bike',
    },
    {
        img: 'https://assets.betterhelp.com/about/counselors/c8e626e7eab122c273bef125e745fea8.jpg?v=f4959109d99e',
        title: 'Bike',
    },
];

function Therapist(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box sx={{backgroundColor: "#FFFCF6"}}>
            <Container>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10, py: 10, flexDirection: "column"}}>
                    <Box sx={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Typography variant="h4" className="overpass title" sx={{color:"#252625"}}>
                            Our Therapists
                        </Typography>
                        <Typography variant="subtitle1" className='title overpass' fontSize={18} fontWeight={300} textAlign='center'>
                            mwellness offers access to registered, trained, and experienced Practitioner Psychologists,
                            Counsellors, and similar applicable recognized professional certifications.
                        </Typography>
                    </Box>
                    <Box >
                        <ImageList cols={isMobile ? isXs ? 2 : 4 :8} rowHeight={146}  >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} sx={{margin:0.5,borderRadius:"10px",overflow:"hidden"}}>
                                    <img
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:"30px"}}>
                            <Button
                                className="overpass"
                                variant="outlined"
                                sx={{
                                    fontSize: "20px",
                                    borderRadius: "30px",
                                    color: "darkGreen",
                                    borderColor: "darkGreen",
                                    padding: "10px 36px",
                                    textTransform: "inherit",
                                    "&:hover": {
                                        borderColor: "darkGreen",
                                        backgroundColor: "#F5FBF4",
                                    },
                                    my: { xs: "40px", lg: "unset" },
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
        ;
}

export default Therapist;