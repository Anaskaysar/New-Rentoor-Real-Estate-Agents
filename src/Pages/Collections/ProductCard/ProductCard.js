import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './ProductCard.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ProductCard = (props) => {
    const {_id,img1,address,ratings,price,salesVariant,condition}=props.product;
    return (
        <Card sx={{ maxWidth: 350,maxheight:300, m:1 }}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="259"
            width="436"
            position="relative"
            image={img1}
            alt="aricles-image"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 226,
              width: '18%',
              bgcolor: '#f8c27d',
              color: 'black',
              padding: '10px',
            }}
          >
              <Typography sx={{fontSize:10}}>{condition}</Typography>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: 190,
              width: '18%',
              bgcolor: '#FF7F7F',
              color: 'white',
              padding: '10px',
            }}
          >
               <Typography sx={{fontSize:10}}>{salesVariant}</Typography> 
          </Box>
        </Box>


        <CardContent>
            <Stack spacing={1} sx={{mb:1}}>
                <Rating name="half-rating" defaultValue={2.5} precision={ratings} />
            </Stack>
            <Typography variant="body2" color="text.secondary" >
              {address}
            </Typography>
            <Typography  sx={{fontSize: 18,color:'#0f3c7c',mt:1}}>
             $ {price}.00
            </Typography>
        </CardContent>
        
        <CardActions>
            <NavLink to={`/collection/${_id}`} style={{textDecoration:'none'}}> 
              <Button sx={{bgcolor:'#f8c27d',color:'black', ml:1}}>See More Details</Button> 
            </NavLink>    
        </CardActions>
      </Card>
  
        
    );
};

export default ProductCard;