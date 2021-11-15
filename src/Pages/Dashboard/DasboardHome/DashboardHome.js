import { Container, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
const DashboardHome = () => {
    const {user,admin}=useAuth();
    return (
        <div>      
            <Typography variant='h3' sx={{textAlign:'center',bgcolor:'lightgreen'}}>Hello Mr {user.displayName.toUpperCase()}</Typography>
            <Typography variant='h3' sx={{textAlign:'center',bgcolor:'lightgreen'}}>Welcome To Your Dashboard</Typography>

            <Container sx={{textAlign:'center',mt:10}}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                <PersonIcon sx={{bgcolor:'lightgreen',fontSize:300,}}></PersonIcon>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{textAlign:'left'}}>NAME : {user.displayName.toUpperCase()}</Typography>
                    <Typography sx={{textAlign:'left'}}>Email : {user.email.toUpperCase()}</Typography>
                    {admin?
                    <Typography sx={{textAlign:'left'}}>YOUR ROLE : ADMIN</Typography> 
                    :
                    <Typography sx={{textAlign:'left'}}> USER</Typography>
                    }
                </Grid>
            </Grid>
            </Container>

        </div>
    );
};

export default DashboardHome;