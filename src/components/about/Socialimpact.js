import React from 'react';
import {Box, Button, Container} from "@mui/material";
import logo1 from "../../assets/about/logo-1.png"
import logo2 from "../../assets/about/logo-2.png"
import logo3 from "../../assets/about/logo-3.png"
import logo4 from "../../assets/about/logo-4.png"
import divider1 from "../../assets/about/divider-social.jpg";

export default function Socialimpact() {
    return (
        <>
           <Box sx={{backgroundColor:'#FFFCF6',position:"relative"}}>

               <Container>
                   <Box>
                       <Box sx={{fontSize:  "32px",mb:"30px",textAlign:"center",pt:{md:"unset",xs:"30px"},color:"#252625"}} className="overpass">Our social impact</Box>
                       <Box sx={{display:"flex",justifyContent:"center",padding:"10px 0 50px",borderBottom:"1px solid #e7e7e7",alignItems:{xs:"center",md:"start"},flexDirection:{xs:"column",md:"unset"}}}>
                           <Box sx={{textAlign:"center",width: {md:"350px"},mx:"30px"}}>
                               <Box  sx={{ color: "green", fontWeight: "700", fontSize: { md: "32px", xs: "24px" }, letterSpacing: "-1.5px",my:"20px" }}>$65,697,925</Box>
                               <Box sx={{fontSize:"20px",color:"#444444"}}>Given in discounts and financial aid to cover therapy costs for low-income individuals</Box>
                           </Box>
                           <Box sx={{textAlign:"center",width: {md:"350px"},mx:"30px"}}>
                               <Box  sx={{ color: "green", fontWeight: "700", fontSize: { md: "32px", xs: "24px" }, letterSpacing: "-1.5px",my:"20px" }}>95,647</Box>
                               <Box sx={{fontSize:"20px",color:"#444444"}}>Free months of therapy donated to communities in need</Box>
                           </Box>
                       </Box>
                       <Box sx={{py:"50px",textAlign:"center",mx: {md:"120px"},color:"#444444"}}>We partner with 100+ impactful non-profit organizations to donate free therapy to under-resourced communities and break down barriers to accessing therapy.</Box>
                       <Box sx={{display:"flex",justifyContent:"space-around",alignItems:{xs:"center",md:"start"},flexDirection:{xs:"column",md:"unset"}}}>
                           <Box sx={{display:"flex",justifyContent:"space-around",width:"100%"}}><Box sx={{height:"47px",width:"150px"}}><img src={logo1} alt="logo 1" style={{objectFit:"contain"}}/></Box>
                               <Box sx={{height:"47px",width:"150px"}}><img src={logo2} alt="logo 1" style={{objectFit:"contain"}}/></Box></Box>
                           <Box sx={{display:"flex",justifyContent:"space-around",width:"100%",mt:{md:"0",xs:"30px"}}}><Box sx={{height:"47px",width:"150px"}}><img src={logo3} alt="logo 1" style={{objectFit:"contain"}}/></Box>
                               <Box sx={{height:"47px",width:"150px"}}><img src={logo4} alt="logo 1" style={{objectFit:"contain"}}/></Box></Box>
                       </Box>
                       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",py:"40px",}}>
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
                               See more
                           </Button>

                       </Box>
                   </Box>
               </Container>
               <Box sx={{position: "absolute", bottom: {md:"-30px",xs:"-10px"},height:"50px", width: "100%"}}><img src={divider1}
                                                                                     alt="design image"/></Box>
           </Box>
        </>
    );
}

