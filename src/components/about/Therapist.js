import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {ImageList, ImageListItem} from "@mui/material";

const therapists = [
    "https://assets.betterhelp.com/about/counselors/dca89d519abf9e373d93ed562a521ca4.jpg?v=f4959109d99e",
    "https://assets.betterhelp.com/about/counselors/f1424e37acbaac10619a7fe7c38adda5.jpg?v=f4959109d99e",
    "https://assets.betterhelp.com/about/counselors/b4bad3ce6ac40c8024a839b7c105de28.jpg?v=f4959109d99e",
    "https://assets.betterhelp.com/about/counselors/1c641d91c16ef3f4dd479a7a8f1fbe83.jpg?v=f4959109d99e",
    "https://assets.betterhelp.com/about/counselors/0db4dae3eadbb824e1a72401ec594c1f.jpg?v=f4959109d99e",
    "https://assets.betterhelp.com/about/counselors/3f81debbb3fb9dc4a642b789af656133.jpg?v=f4959109d99e",
    "https://assets.betterhelp.com/about/counselors/8c6830bb46988faf7ffe0d8facea38e4.jpg?v=f4959109d99e",
    "https://assets.betterhelp.com/about/counselors/5b460df29a91d28fe857d40d80cecf51.jpg?v=f4959109d99e"
]

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

function Therapist(props) {
    return (
        <Box>
            <Container>
                <Box sx={{
                    width: "80%",
                    py: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography variant={"h4"}>
                        Our Therapists
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        BetterHelp offers access to registered, trained, and experienced Practitioner Psychologists,
                        Counsellors, and similar applicable recognized professional certifications.
                    </Typography>
                </Box>
                <Box >

                    <ImageList cols={7} rowHeight={164}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>

                </Box>
            </Container>
        </Box>
    )
        ;
}

export default Therapist;