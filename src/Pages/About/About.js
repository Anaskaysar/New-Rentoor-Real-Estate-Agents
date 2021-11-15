import {Typography } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './About.css'
import img3 from '../../Images/Aboutus-3.png'
import { NavLink } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
const About = () => {
    return (
        <>
        <NavBar/>
            <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',mt:2,mb:2}}>Home / About US </Typography> 
          
            <Box sx={{ width: '100%',bgcolor:'#0f3c7c',p:5 }}>
                <Typography variant="h2" sx={{color:"white",textAlign:"center"}}>Who We Are</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography sx={{color:"white",textAlign:"justify",fontWeight: 'regular',pl:10}}>We know that search for a suitable house and its purchase can't be compared with everyday shopping. First of all, it is more expensive and requires a more careful attitude. If you are going to find a new home, then you are looking for a place where you can just forget about all your problems and relax </Typography>
                    </Grid>
                    <Grid item xs={6}  >
                    <Typography sx={{color:"white",textAlign:"justify",fontWeight: 'regular', pr:10}}>If you are looking for a place to buy or rent, we know what to offer you. Taking into consideration all your demands and wishes we will find an ideal solution: neighbors, area, number of rooms, floor, condo or house - an individual approach to each client is our most important principle.</Typography>
                    </Grid>   
                </Grid>
            </Box>   
            <Grid container rowSpacing={1} sx={{ml:5}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <img className="about-img"src={img3} alt=""/>
                    </Grid>
                    <Grid item xs={6}  >
                        <Typography variant="h3" sx={{mt:10}}>
                                Why choose us?
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontWeight: 'regular', pr:10}}>
                             We have a long list of multitude propositions. Homes for sale, homes for rent, professional recommendations what to pay attention at, price scale for various budget solutions. Trust our experience and we will help you make the right choice.
                        </Typography>
                        <Typography sx={{textAlign:"justify",fontWeight: 'regular', pr:10}}>
                             Our website is made to become your reliable guide being organized in a simple manner, so you can easily find the needed proposition.
                        </Typography>
                        <NavLink to="/contact">
                            <button className="btn-contact">Contact Us</button>
                        </NavLink>
                    </Grid>   
            </Grid>
        <Footer/>
        </>
    );
};

export default About;