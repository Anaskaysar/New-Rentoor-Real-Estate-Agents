import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {Alert } from '@mui/material';

const theme = createTheme();


const ReviewSubmissionForm = () => {

    const [reviewSucess,setreviewSucess]=React.useState(false);
    const {user} = useAuth();

    const initialInfo={
        name:user.displayName,
        email:user.email       
    }
    const [reviewInfo,setreviewInfo]=React.useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };       
        newInfo[field] = value;
        console.log(newInfo);
        setreviewInfo(newInfo);      
    }
    const handleBookingSubmit = e => {

      //collect data
      const reviewPlace={
        ...reviewInfo,
      }
 
     //send to the server
     fetch('https://boiling-reef-11210.herokuapp.com/review', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(reviewPlace)
  })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setreviewSucess(true);
        }
          console.log(data);
      });
        e.preventDefault();
        
    }
      return (
        <>
 <ThemeProvider theme={theme} >
          <Container component="main" maxWidth="xs" sx={{mb:5}}>
                  <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',mt:2}}>Review / Submission</Typography>  

                  <Box
                      sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Typography component="h1" variant="h5" sx={{textAlign:'center'}}>
                                Review Submission
                      </Typography>
                      
                      <Typography sx={{textAlign:'center',fontSize:10}}>
                        Default User Image Link: https://i.ibb.co/sPffP4J/defaultuser.png
                      </Typography>
                      

                      <Box component="form" onSubmit={handleBookingSubmit}>
                          <TextField
                            margin="normal" fullWidth name="name"
                            label="User Name"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                          />  

                          <TextField
                            margin="normal" fullWidth name="profession"
                            label="Your Profession"
                            onBlur={handleOnBlur}
                          />     
                        
                          <TextareaAutosize
                            margin="normal"
                            minRows={4}
                            label="Wtite a Review Of Minimum 10 word"
                            name="Review" 
                            placeholder="Review "
                            style={{ width: 400 }}
                            onBlur={handleOnBlur}
                            />
                          <TextField
                          margin="normal" required fullWidth name="Rating"
                          onBlur={handleOnBlur} label="Rate Us out of 5"                        
                          placeholder="Rating"                      
                          />
                          <TextField
                          margin="normal" required fullWidth name="date"
                          onBlur={handleOnBlur} label="Please Submit Date"                        
                          placeholder="Date"                      
                          />
                          <TextField
                          margin="normal" required fullWidth name="img"
                          onBlur={handleOnBlur} label="Image Link of 114px By 114px"                        
                          placeholder="Image" 
                                               
                          />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Submit Review
                        </Button>
                 </Box>      
              </Box>    
              {reviewSucess && <Alert severity="success">Your Order Placed successfully!</Alert> }          
          </Container>
        </ThemeProvider>
   
        </>
      );
    }

export default ReviewSubmissionForm;






  