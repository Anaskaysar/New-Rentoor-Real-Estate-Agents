import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

    const [email,setEmail]=useState('');
    const [success,setSuccess]=useState(false);
    
    //const{user,admin}=useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user={email};
        console.log(user);
        fetch('https://boiling-reef-11210.herokuapp.com/users/admin',{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                setEmail('');
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <Container sx={{ml:30,mt:10}}>
            <Typography sx={{ml:25}}> Make An Admin Here</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert> Admin Created SucessFully</Alert>}
        </Container>
    );
};

export default MakeAdmin;