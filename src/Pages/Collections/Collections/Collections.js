import React from 'react';
import { Typography } from '@mui/material';
import { Container, Grid} from '@mui/material';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const Collections = () => {
    const [products]=useProducts();

    return (
        <div>      
            <NavBar/>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',mt:2}}>Home / Collections /</Typography>
       
                <Typography variant="h4" sx={{ color: 'black', m:5,textAlign: 'center' }}>COLLECTION OF PRODUCTS</Typography>
                    <Container>
                        <Grid container spacing={1}>
                                {
                                products.map(
                                    product=>                  
                                        <ProductCard key={product._id} product={product}></ProductCard>
                                )  
                                } 
                        </Grid>
                    </Container>
            <Footer/>
        </div>
    );
};

export default Collections;

