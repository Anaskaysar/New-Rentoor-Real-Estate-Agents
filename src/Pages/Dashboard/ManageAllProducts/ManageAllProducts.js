import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import {Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const ManageAllProducts = () => {

    const [products, setproducts] = useState([]);
    const [deltedSuccess,setDeletedSucess]=React.useState(false);

    useEffect(() => {
        const url = `https://boiling-reef-11210.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setproducts(data));
    }, [])

    //delete  a product
    const handleDelteProduct=id=>{
       const proceed=window.confirm("Are You Sure Want To Delte This Item");
       if(proceed){
        fetch(`https://boiling-reef-11210.herokuapp.com/products/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                setDeletedSucess(true);
                const remainingproducts=products.filter(order=>order._id !==id);
                setproducts(remainingproducts);
            }
        })
       }
    }


    return (
        <div>         
                <Typography sx={{textAlign:'center'}}>Total  products Provided By You : {products.length}</Typography>
                <TableContainer component={Paper}>
                
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                         <TableRow>
                            <StyledTableCell align="left">Prduct Address </StyledTableCell>
                            <StyledTableCell align="left">Ratings</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {products.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                {row.address}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                {row.ratings}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                {row.price}
                                </StyledTableCell>
                                <StyledTableCell align="left"><Button onClick={()=>handleDelteProduct(row._id)}>Delete Product</Button></StyledTableCell>


                          </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {deltedSuccess && <Alert severity="success">Your Product Deleted successfully!</Alert> }          
          

            
        </div>
    );
};

export default ManageAllProducts;