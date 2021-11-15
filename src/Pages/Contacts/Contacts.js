import * as React from 'react';
import NavBar from '../Shared/NavBar/NavBar'
import Footer from '../Shared/Footer/Footer'
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextareaAutosize } from '@mui/core';

const theme = createTheme();

const Contacts = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    return (
        <>
        <NavBar/>
        <div>
             <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',mt:2,mb:2}}>Home / Contact US </Typography> 

             <Typography variant="h3" sx={{textAlign:'center'}}>What can we help you with?</Typography>
         
             <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
             We're always here to help. If you have a question or query,
             </Typography>
         
             <Typography variant="body2" color="text.secondary" sx={{textAlign:'center' ,mb:4}}>
             please don't hesitate to contact us
             </Typography>
             <hr/>
             <Box>
             <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop:3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{bgcolor: 'secondary.main' }}>
                    <ContactMailIcon />
                </Avatar>
                <Typography component="h1" variant="h3">
                     Keep in touch
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <TextareaAutosize
                        margin="normal"
                        minRows={4}
                        label="Write A Message"
                        name="message" 
                        placeholder="Write Your Message "
                        style={{ width: 400 }}                     
                        />
                        </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Send
                        </Button>
                        </Box>
                </Box>           
            </Container>
        </ThemeProvider>
             </Box>
        </div>
        <Footer/>
    </>
    );
};

export default Contacts;

