import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {Alert, Grid } from '@mui/material';


const theme = createTheme();


const AddProducts = () => {

    const [sucess,setSucess]=React.useState(false);

    const initialInfo={       
        vendor:"Rentoor-Real State Agents",
        productType:"Waterfront Homes",
        condition:"new",
        img1:"https://i.ibb.co/RcZH3K8/P-7-1.png",
        img2:"https://i.ibb.co/FxVBFwD/P-7-2.png",
        img3:"https://i.ibb.co/4FpWhdD/P-7-3.png",
        img4:"https://i.ibb.co/QPsGmCs/P-7-4.png"      
    }
    const [productInfo,setproductInfo]=React.useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };       
        newInfo[field] = value;
        console.log(newInfo);
        setproductInfo(newInfo);      
    }
    const handleBookingSubmit = e => {

      //collect data
      const addproduct={
        ...productInfo,
      }

      console.log(addproduct)
 
     //send to the server
     fetch('https://boiling-reef-11210.herokuapp.com/products', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(addproduct)
  })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setSucess(true);
        }
          console.log(data);
      });
        e.preventDefault();
        
    }
      return (
        <>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
             <Grid item xs={6} >
                 <Typography sx={{textAlign:"center",bgcolor:'red',mb:10,mt:10}}>Important Notice </Typography>
                 <Typography>For Adding Product I Have Set Some Images As Default Value Because In My Product It need to add multple images there.
                So To Reduce hastle i set some values default.</Typography>
  
             </Grid>
             <Grid item xs={6}>
                 <ThemeProvider theme={theme} >
                    <Container component="main" maxWidth="xs" sx={{mb:5}}>
                            <Box
                                sx={{
                                    marginTop: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                                >
                                <Typography component="h1" variant="h5" sx={{textAlign:'center'}}>
                                            Add Product
                                </Typography>
            
                                

                                <Box component="form" onSubmit={handleBookingSubmit}>
                                    <TextField
                                        margin="normal" fullWidth name="address"
                                        label="Address"
                                        onBlur={handleOnBlur}
                                    />  

                                    <TextField
                                        margin="normal" fullWidth name="price"
                                        label="Price"
                                        onBlur={handleOnBlur}
                                    />  

                                    <TextField
                                    margin="normal" required fullWidth name="ratings"
                                    onBlur={handleOnBlur} label="Rate Us out of 5"                        
                                    placeholder="Rating"                      
                                    />  

                                    <TextField
                                        margin="normal" fullWidth name="salesVariant"
                                        label="Sales Variant "
                                        defaultValue='forsale'
                                        onBlur={handleOnBlur}
                                    />     
                                    
                                    <TextareaAutosize
                                        margin="normal"
                                        minRows={4}
                                        label="Description Title"
                                        name="descriptionTitle" 
                                        placeholder="Description Title "
                                        style={{ width: 400 }}
                                        onBlur={handleOnBlur}
                                        />
                                    <TextareaAutosize
                                        margin="normal"
                                        minRows={4}
                                        label="Wtite a Review Of Minimum 10 word"
                                        name="dp1" 
                                        placeholder="Description Row1  "
                                        style={{ width: 400 }}
                                        onBlur={handleOnBlur}
                                        />
                                    <TextareaAutosize
                                        margin="normal"
                                        minRows={4}
                                        label="Wtite a Review Of Minimum 10 word"
                                        name="dp2" 
                                        placeholder="Description Row2 "
                                        style={{ width: 400 }}
                                        onBlur={handleOnBlur}
                                        />

                                    <TextareaAutosize
                                        margin="normal"
                                        minRows={4}
                                        label="Wtite a Review Of Minimum 10 word"
                                        name="dp3" 
                                        placeholder="Description Row3 "
                                        style={{ width: 400 }}
                                        onBlur={handleOnBlur}
                                        />

                                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                        Submit Review
                                    </Button>
                            </Box>      
                        </Box>    
                        {sucess && <Alert severity="success">Your Prduct Added successfully!</Alert> }          
                    </Container>
                    </ThemeProvider>
             </Grid>
         </Grid>
        </>
      );
    }

export default AddProducts;

      
