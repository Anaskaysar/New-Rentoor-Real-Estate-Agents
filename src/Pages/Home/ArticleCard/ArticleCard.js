import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';


const ArticleCard = (props) => {
    const {_id,img,title,publish_date,descriptionTitle}=props.article;
    return (
        <Card sx={{ maxWidth: 350,maxheight:300, m:1 }}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="259"
            width="436"
            position="relative"
            image={img}
            alt="aricles-image"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 226,
              width: '20%',
              bgcolor: '#0f3c7c',
              color: 'white',
              padding: '10px',
            }}
          >
            <Typography sx={{fontSize:8}} >{publish_date}</Typography>
            
          </Box>
        </Box>
        <CardContent>
        <Typography gutterBottom sx={{fontSize: 18,color:'#0f3c7c'}} component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {descriptionTitle}
            </Typography>
        </CardContent>
        
        <CardActions>
            <NavLink to={`/article/${_id}`} style={{textDecoration:'none'}}> 
              <Button sx={{bgcolor:'#f8c27d',color:'black', ml:1}}>Read More</Button> 
            </NavLink>    
        </CardActions>
      </Card>
  
        
    );
};

export default ArticleCard;

  
                  
