import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';
import NavBar from '../../Shared/NavBar/NavBar'
import Footer from '../../Shared/Footer/Footer'

const theme = createTheme();

const Login = () => {

  const [loginData, setLoginData] = React.useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const history=useHistory();
  const location=useLocation();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      // console.log(field,value);
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password,location,history);
      e.preventDefault();
  }
      return (
        <>
        <NavBar/>
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
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Please Sign in
              </Typography>
              <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>

                <TextField
                  margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={handleOnChange}
                />

                <TextField
                  margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={handleOnChange}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>

                <Grid container>
                  <Grid item xs>
                    <NavLink to="/" style={{textDecoration:'none'}}>
                        <Button variant="text" sx={{textAlign:"left"}}>Forgot Password??</Button>
                    </NavLink>
                  </Grid>

                  <Grid item>
                  <NavLink to="/register" style={{textDecoration:'none'}}>
                        <Button variant="text">Don't have an account? Sign Up</Button>
                    </NavLink>                
                  </Grid>
                </Grid>

                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}

              </Box>
            </Box>
          </Container>
        </ThemeProvider>
        <Footer/>
      </>
      );
    }

export default Login;






  