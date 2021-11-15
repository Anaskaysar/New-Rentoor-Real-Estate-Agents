import React, { useEffect, useState } from 'react';
import './Home.css'
import useArticles from '../../../hooks/useArticles';
import ArticleCard from '../ArticleCard/ArticleCard';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import ReactPlayer from 'react-player';
import OurBenifits from '../OurBenifits/OurBenifits';
import Banner from '../Banner/Banner';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../../Collections/ProductCard/ProductCard'
import CustomerReview from '../../CustomerReview/CustomerReview';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const Home = () => {
    const [articles]=useArticles([]);
    const [products]=useProducts([]);

    const [featuredArticles,setFeaturedarticles]=useState([]);
    const [featuredProducts,setFeaturedProducts]=useState([]);
  
    useEffect(()=>{  
      const matchedArticles=articles.filter(article=>article.feature==="front");
      setFeaturedarticles(matchedArticles);
  },[articles])

  //showing some of products
    useEffect(()=>{  
      const matchedProducts=products.filter(product=>product.ratings>=4);
      setFeaturedProducts(matchedProducts);
  },[products])

    
    return (
        <div>
            {/* Navbar Section */}
            <NavBar/>

            {/* Banner Section Starts  */}
            <Banner/>
            {/* Banner Section Ends  */}

            
            {/* Benifit Section Starts  */}
            <OurBenifits/>
            {/* Benifit Section Starts  */}

            {/* Product Showcase Section  */}
            <section>
            <Typography variant="h3" sx={{ml:18,pt:4}} >Our Best Products</Typography>
                <div className="home-articles-container">
                    <Grid container spacing={1}>
                        {
                    featuredProducts.map(
                            product=>                  
                                 <ProductCard key={product._id} product={product}></ProductCard>

                        )  
                        }
                    </Grid>
                </div>
            </section>

            {/* Video Section Starts  */}
            <section >
               <div>
                <Typography variant="h5" sx={{mt:3,p:1,textAlign: 'center' ,color:'#f8c27d'}} >Featured Products</Typography>
                    <Typography variant="h2" sx={{textAlign: 'center'}} >Video Tour</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{p:1,textAlign: 'center'}} >Watch this video to learn more about the villa, its location,</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center',mb:5}} >surroundings as well as amazing.</Typography>
               </div>
                <div className="video">
                    <ReactPlayer  
                    playing  
                    url='https://youtu.be/6GThJp0x7xA' /> 
                </div>
            </section>
            {/* Video Section Starts  */}


            {/* The Articles Section  */}
            <section>
                <Typography variant="h3" sx={{ml:18,pt:4}} >Latest Articles</Typography>
                <div className="home-articles-container">
                    <Grid container spacing={1}>
                        {
                        featuredArticles.map(
                            article=>                  
                                <ArticleCard key={article._id} article={article}></ArticleCard>
                        )  
                        }
                    </Grid>
                </div>
                <div className="more-articles">
                <NavLink to="/articles" style={{
                    textDecoration:'none'
                    
                }}>   
                    <Button sx={{bgcolor:'#f8c27d',color:'black', ml:1,mb:5}}>Find Out More Articles
                    </Button> 
                </NavLink>
                </div>
            </section>
                {/* Customer Review Section  */}
            <section>
                    <Typography variant="h6" sx={{ml:18,pt:4,color:"#f8c27d",textAlign:'center'}} >Find Out Our Customer Review</Typography>
                    <Typography variant="h3" sx={{ml:18,pt:2,mb:3,textAlign:'center'}} >What Our Customers Say About us</Typography>
                    <CustomerReview/>
                    <Typography variant="h6" sx={{ml:18,pt:2,mb:3,textAlign:'center'}} >Want To Share Your Experience With Us??</Typography>
                    <div className="more-articles">
                        <NavLink to="/submitreview" style={{textDecoration:'none'}}> 
                            <Button sx={{bgcolor:'#f8c27d',color:'black', ml:5,mb:5}}>Submit Your Review Here</Button> 
                        </NavLink>
                    </div>
            </section>
                
            <Footer/>
        </div>
    );
};

export default Home;