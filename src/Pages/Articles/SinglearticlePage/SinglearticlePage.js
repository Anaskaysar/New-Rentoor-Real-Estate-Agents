import * as React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography } from '@mui/material';
import './Single.css'
import useArticles from '../../../hooks/useArticles';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const SinglearticlePage = () => {
    const [articles]=useArticles([]);

    const {articleId}=useParams();
    console.log(articleId);
    //single articles details 
    const [singleArticle,setSinglearticle]=React.useState({});
    React.useEffect(()=>{
        fetch(`https://boiling-reef-11210.herokuapp.com/articles/${articleId}`)
        .then(res=>res.json())
        .then(data =>setSinglearticle(data));
    },[articleId])
   
    const{title,author,img,publish_date,descriptionTitle,dp1,dp2,dp3}=singleArticle;

    return (
        <>
            <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',mt:2}}>Article / {title}</Typography>

            <Box sx={{ flexGrow: 1,mt:6 }}>
                <div className="gridContainer">
                    <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>           
                        <Grid item  xs={8} sm={4} md={8}>
                            <Typography variant="h5" sx={{textAlign:'center',letterSpacing: 6 }}>{title}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',  fontWeight: 'regular'}}>By {author} on {publish_date} </Typography>                  
                            <img className="singleImage" src={img} width="70%" height="30%" alt=""/> 
                            <Typography variant="body2" color="text.secondary" sx={{mt:3,}}>{descriptionTitle}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify',mt:2}}>{dp1}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify',mt:2}}>{dp2}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify',mt:2}}>{dp3}</Typography>
                        </Grid>                 
                            <Grid item xs={4} sm={6} md={4}>
                                <Typography sx={{textAlign:'center'}}>Recent Posts</Typography>
                                {
                                    articles.map(article=>
                                        <Item key={article._id} sx={{m:2}}>
                                            <NavLink to={`/article/${article._id}`}  style={{textDecoration:'none'}}>
                                                <Typography variant="body2">{article.title}</Typography> 
                                            </NavLink>
                                            <Typography variant="body2" color="text.secondary">By {author} on {article.publish_date} </Typography>
                                            
                                        </Item>  
                                         )
                                }
                                
                            </Grid>
                    </Grid>
                </div>
            </Box>
       </>
      );
};

export default SinglearticlePage;