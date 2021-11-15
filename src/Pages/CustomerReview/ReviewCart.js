import { Typography } from '@mui/material';
import React from 'react';
import "./ReviewCart.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const ReviewCart = (props) => {
    const {name,profession,img,Review,Ratings}=props.review ||{}
    return (
        <div className="review-card">
            <div className="card-image">
                <img src={img} className="img-fluid" alt="" />
            </div>
           
            <div className="flex flex-col items-center ">
                <Typography sx={{pl:2,fontSize:20,mt:2,fontWeight:'regular'}}>{name}</Typography>
                <Stack spacing={1} sx={{ml:5,mt:1}}>
                        <Rating name="half-rating" defaultValue={2.5} precision={Ratings} />
                    </Stack>
                <Typography variant='body2' sx={{pl:2,fontSize:15,mt:1}}>{profession}</Typography>
                <Typography sx={{pl:2,fontSize:15,mt:1,fontWeight:'regular'}}>{Review.slice(0,50)}</Typography>
            </div>
        </div>
    );
}

export default ReviewCart;