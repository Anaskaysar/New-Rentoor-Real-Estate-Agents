import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import useAuth from '../../../hooks/useAuth';
import { Button, Typography } from '@mui/material';
import Orders from '../Orders/Orders';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import DashboardHome from '../DasboardHome/DashboardHome';
import Payments from '../Payments/Payments';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllorders from '../ManageAllOrders/ManageAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';


const drawerWidth = 240;

function Dashboard(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const {user,logout,admin}=useAuth();
    console.log(admin);
  
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <Typography sx={{mt:2,textAlign:'center',fontSize:20}}>Dashboard </Typography> 
      <Divider/>     
      <Toolbar />
        <NavLink to="/collections" style={{textDecoration:'none'}}>
            <Button variant="contained" sx={{ml:4,mt:3}}>Return To Home</Button>
        </NavLink> 

        {!admin &&
           <Box>
                <NavLink to={`${url}`} style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{ml:4,mt:3,pl:5,pr:4}}>DASHBOARD</Button>
                </NavLink> 
                
                <NavLink to={`${url}/orders`} style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{ml:4,mt:3,pl:5,pr:5}}>MY ORDERS</Button>
                </NavLink>
                <NavLink to={`${url}/makePayment`} style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{ml:4,mt:3,pl:3,pr:3}}>MAKE PAYMENTS</Button>
                </NavLink>
           </Box>
        }


        {admin && 
            <Box>
                        
                <NavLink to={`${url}/makeadmin`}  style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{ml:4,mt:3}}>Make An Admin</Button>
                </NavLink> 

                <NavLink to={`${url}/addaproduct`}  style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{ml:4,mt:4,pr:1}}>Add A Product</Button>
                </NavLink>

                <NavLink to={`${url}/manageallproducts`}  style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{ml:4,mt:4,pr:1}}>Manage All Products</Button>
                </NavLink>                 
                <NavLink to={`${url}/manageallorders`}  style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{ml:4,mt:4,pr:1}}>Manage All Orders</Button>
                </NavLink>                 
            </Box>
        }

            <Button  sx={{ml:4,mt:3, bgcolor:'red',color:'black',pl:5,pr:5}} onClick={logout}>Log Out</Button>
        
    </div>
    );
  const container = window !== undefined ? () => window().document.body : undefined;

 
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Welcome Mr <span>{user.displayName}</span>
            </Typography>
        </Toolbar>
    </AppBar>
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox fold ers"
    >
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            {drawer}
        </Drawer>
    </Box>
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
        <Toolbar /> 
        <Switch>
                <Route exact path={path}>
                    <DashboardHome/>
                </Route>
                
                <Route path={`${path}/orders`}>
                    <Orders/>
                </Route>
                
                <Route exact  path={`${path}/makePayment`}>
                    <Payments/>
                </Route>
                
                <AdminRoute exact  path={`${path}/makeadmin`}>
                    <MakeAdmin/>
                </AdminRoute>

                <AdminRoute exact  path={`${path}/manageallorders`}>
                    <ManageAllorders/>
                </AdminRoute>
                <AdminRoute exact  path={`${path}/manageallproducts`}>
                    <ManageAllProducts/>
                </AdminRoute>

                <AdminRoute exact  path={`${path}/addaproduct`}>
                    <AddProducts/>
                </AdminRoute>

        </Switch>
                 
    </Box>
</Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
