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


const Orders = () => {
    const {user}=useAuth();
    const [orders, setOrders] = useState([]);
    const [deltedSuccess,setDeletedSucess]=React.useState(false);

    useEffect(() => {
        const url = `https://boiling-reef-11210.herokuapp.com/orders?email=${user.email}`

        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    //delete  an orders
    const handleDeleteOrder=id=>{
       const proceed=window.confirm("Are You Sure Want To Delte This Item");
       if(proceed){
        fetch(`https://boiling-reef-11210.herokuapp.com/orders/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                setDeletedSucess(true);
                const remainingOrders=orders.filter(order=>order._id !==id);
                setOrders(remainingOrders);
            }
        })
       }
    }


    return (
        <div>         
                <Typography sx={{textAlign:'center'}}>Total  Orders Provided By You : {orders.length}</Typography>
                <TableContainer component={Paper}>
                
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                         <TableRow>
                            <StyledTableCell>User Email</StyledTableCell>
                            <StyledTableCell>Product</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Address</StyledTableCell>
                            <StyledTableCell align="left">Order Status</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {orders.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                {user.email}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                {row.product}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.productPrice}</StyledTableCell>
                                <StyledTableCell align="left">{row.deliveryAddress}</StyledTableCell>
                                <StyledTableCell align="left">{row.Orderstatus}</StyledTableCell>
                                <StyledTableCell align="left"><Button onClick={()=>handleDeleteOrder(row._id)}>Delete Order</Button></StyledTableCell>
                          </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {deltedSuccess && <Alert severity="success">Your Order Deleted successfully!</Alert> }          
          

            
        </div>
    );
};

export default Orders;