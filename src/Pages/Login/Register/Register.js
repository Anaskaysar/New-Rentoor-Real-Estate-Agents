import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Alert, CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


  
const theme = createTheme();

const Register = () => {


  const [loginData, setLoginData] = React.useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
      return (
        <ThemeProvider theme={theme} >
          <Container component="main" maxWidth="xs" sx={{mb:5}}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, p:2, bgcolor: 'secondary.main' }}>
                    <i class="fas fa-user-plus" sx={{ml:2}}></i>
              </Avatar>
              <Typography component="h1" variant="h5">
                Please Register
              </Typography>
              {!isLoading && <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>

                <TextField
                  margin="normal" required fullWidth id="email" label="Your Name" name="name"   onChange={handleOnBlur}
                />
                <TextField
                  margin="normal" required fullWidth id="email" label="Email Address" name="email"  onChange={handleOnBlur}
                />

                <TextField
                  margin="normal" required fullWidth name="password" label="Password" type="password" id="password"  onChange={handleOnBlur}
                />
                
                <TextField
                  margin="normal" required fullWidth name="password2" label="Retype Password" type="password" id="password" onChange={handleOnBlur}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Register
                </Button>

                <Grid container>
                  <Grid item>
                    <NavLink to="/login" style={{textDecoration:'none'}}>
                        <Button variant="text">Already Registered ? Sign In Now</Button>
                    </NavLink>               
                  </Grid>
                </Grid>
              </Box>}
              {isLoading && <CircularProgress />}
              {user?.email && <Alert severity="success">User Created successfully!</Alert>}
              {authError && <Alert variant="filled" severity="error">{authError}</Alert>}
            </Box>
          </Container>
        </ThemeProvider>
      );
    }

export default Register;






  