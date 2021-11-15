import {  Typography } from '@mui/material';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './singleproduct.css'


const SingleProduct = () => {
    
    const {productId}=useParams();
    //console.log(productId);

    //single products details 
    const [SingleProduct,setSingleProduct]=React.useState({});
    React.useEffect(()=>{
        fetch(`https://boiling-reef-11210.herokuapp.com/products/${productId}`)
        .then(res=>res.json())
        .then(data =>setSingleProduct(data));
    },[productId])
   
    const {_id,img1,img2,img3,img4,address,productType,descriptionTitle,ratings,price,rooms,vendor,condition,dp1,dp2,dp3}=SingleProduct;
    return (

        <section>
            <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',mt:2}}>Products /{address}</Typography>   
            <div className="details-holder">
                <div className="image-container">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                    <div className="details-container">
                    <Typography sx={{textAlign:'left',fontSize:15,mt:2,ml:5,color:'#52bb6f'}} >{condition}</Typography>
                    <Typography sx={{textAlign:'left',fontSize:20,mt:1,ml:5,color:'Black'}} >{address}</Typography>
                    <Typography variant="h3" sx={{textAlign:'left',ml:4,mt:2,color:'#0f3c7c'}} >${price}.00</Typography>
                    <Typography sx={{textAlign:'left',fontSize:15,ml:5,mt:2,color:'gray'}} >{descriptionTitle}</Typography>
                    <Typography sx={{textAlign:'left',fontSize:15,ml:5,mt:2,color:'black'}} >Vendor : {vendor}</Typography>
                    <Typography sx={{textAlign:'left',fontSize:15,ml:5,mt:2,color:'black'}} >Product Type : {productType}</Typography>
                    <Typography sx={{textAlign:'left',fontSize:15,ml:5,mt:2,color:'black'}} >Rooms Available : {rooms}</Typography>
                    <Stack spacing={1} sx={{ml:5,mt:5}}>
                        <Rating name="half-rating" defaultValue={2.5} precision={ratings} />
                    </Stack>

                    <NavLink to={`/booking/${_id}`} style={{textDecoration:'none'}}> 
                        <button className="btn-buy">Book Now</button>
                    </NavLink>  


                </div>
            </div>

            <div className="more-details">
                <Typography sx={{textAlign:'center',fontSize:30,mt:5}}>Product Description</Typography>
                <Typography variant="body2" color="text.secondary" sx={{mt:3,}}>{descriptionTitle}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify',mt:2}}>{dp1}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify',mt:2}}>{dp2}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify',mt:2}}>{dp3}</Typography>

            </div>
        </section>
    );
};

export default SingleProduct;

       