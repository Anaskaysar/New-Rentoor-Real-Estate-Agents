import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { NavLink } from 'react-router-dom';


const images = [
  {
    label:"banner-1",
    label1:"Find Your",
    label2:"Perfect",
    label3:"place.",
    label4:"Interior Design",
    label5:"If You Are looking Fora place to buy or rent",
    label6:"We know what to offer you",
    imgPath:
      'https://i.ibb.co/9wzRpbt/Slider-1.png',
  },
  {    
      label:"banner-2",
      label1:"Modern Homes",
      label2:"With Great",
      label3:"Modern Homes",
      label4:"Interior Design",
      label5:"If You Are looking Fora place to buy or rent",
      label6:"We know what to offer you",
      imgPath:
      'https://i.ibb.co/S3NV32Z/Slider-2.png',
  },
];

const Banner = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    return (
      <Box sx={{width:1}}>    
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 650,
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
               <Box sx={{position: 'absolute',bottom: 150,width: "50%",color: 'gray',paddingLeft: '40px',}}>
                    <Typography variant='h1'>{step.label1}</Typography>
                    <Typography variant='h1'>{step.label2}</Typography>
                    <Typography variant='h1' >{step.label4}</Typography>
                    <Typography sx={{fontSize:15}}>{step.label5}</Typography>
                    <Typography sx={{fontSize:15}}>{step.label6}</Typography>
                    <NavLink to='/collections' style={{textDecoration:'none'}}> 
                      <Button sx={{bgcolor:'#f8c27d',color:'black',pl:5,pr:5,mt:3,fontSize:30}}>Discover Now</Button>                     
                    </NavLink>             
                </Box>
            </div>
          ))}
         
        </SwipeableViews>
        <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
        
          </Button>
        }
      />
       
      </Box>
    );
  }

export default Banner;

