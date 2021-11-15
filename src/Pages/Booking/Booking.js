import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import {Alert } from '@mui/material';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';

const theme = createTheme();
const Booking = () => {


  const [bookingSucess,setBookingSucess]=React.useState(false);
    const {productID}=useParams();
    //console.log(productID);    
    // single products details 
    const [singleProduct,setSingleProduct]=React.useState([]);
    //console.log(singleProduct.address);
    React.useEffect(()=>{
        fetch(`https://boiling-reef-11210.herokuapp.com/products/${productID}`)
        .then(res=>res.json())
        .then(data =>setSingleProduct(data));
    },[productID])

    const {address,price}=singleProduct;
    const {user} = useAuth();
    const initialInfo={
        username:user.displayName,
        email:user.email,
        phone:'',
        Orderstatus:"pending"
    }
    const [bookingInfo,setBookingInfo]=React.useState(initialInfo);
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };       
        newInfo[field] = value;
       console.log(newInfo);
        setBookingInfo(newInfo);
        
    }
    const handleBookingSubmit = e => {

      //collect data
      const orderPlace={
        ...bookingInfo,
        product:address,
        productPrice:price,
      }
 
     //send to the server
     fetch('https://boiling-reef-11210.herokuapp.com/orders', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(orderPlace)
  })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setBookingSucess(true);
        }

          console.log(data);
      });
        e.preventDefault();
        
    }
      return (
        <>
        <NavBar/>
        <ThemeProvider theme={theme} >
          <Container component="main" maxWidth="xs" sx={{mb:5}}>
                  <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',mt:2}}>Products / Booking</Typography>  

                  <Box  sx={{bgcolor:'lightgreen'}}>
                        <Typography sx={{fontSizeL:15,mt:5}}> Hello MR. {user.displayName} Welcome To Booking Page</Typography>
                  </Box>
                  <Box
                      sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Typography component="h1" variant="h5" sx={{textAlign:'center'}}>
                                Please Fill The Details For Placing Order 
                      </Typography>
                      <Box sx={{
                        w:100,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor:'lightgreen'
                      }}>
                        <Typography component="h4"  sx={{textAlign:'center'}}>
                                  Product: {address}
                        </Typography>
                        <Typography component="h4"sx={{textAlign:'center'}}>
                              Price: {price}
                        </Typography>
                      </Box>

                      <Box component="form" onSubmit={handleBookingSubmit}>
                          <TextField
                            margin="normal" fullWidth name="username"
                            label="User Name"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            onChange={handleOnBlur}
                          />
                          <TextField
                            margin="normal" disabled required fullWidth id="email" label="Email Address" name="email" 
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                        />      
                          <TextField
                          margin="normal" required fullWidth name="deliveryAddress"
                          onBlur={handleOnBlur} label="Address" 
                          placeholder="Delivery Address"                      
                          />
                          <TextField
                          margin="normal" required fullWidth name="phone"
                          onBlur={handleOnBlur} label="Phone"
                          placeholder="Phone Number"                      
                          />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Place Order
                        </Button>
                 </Box>      
              </Box>    
              {bookingSucess && <Alert severity="success">Your Order Placed successfully!</Alert> }          
          </Container>
        </ThemeProvider>
        <Footer/>
        </>
      );
    }


export default Booking;












  