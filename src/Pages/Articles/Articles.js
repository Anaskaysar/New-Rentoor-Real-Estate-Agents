import React from 'react';
import { Typography } from '@mui/material';
import ArticleCard from '../Home/ArticleCard/ArticleCard';
import useArticles from '../../hooks/useArticles';
import { Container, Grid} from '@mui/material';
import './Article.css'
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';

const Articles = () => {
    const [articles]=useArticles([]);
    return (
        <>
        <NavBar/>
            <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',mt:2}}>Home / Article/</Typography>
            <Container>
                <Typography variant="h4" sx={{ color: 'black', m:5,textAlign: 'center' }}>ALL OFF OUR ARTICLES</Typography>
                <Grid container spacing={1}>
                    {
                    articles.map(
                        article=>                  
                            <ArticleCard key={article._id} article={article}></ArticleCard>
                    )  
                    }
                </Grid>
            </Container>
        <Footer/>
        </>

    );
};

export default Articles;

