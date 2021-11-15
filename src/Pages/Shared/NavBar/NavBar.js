import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from '../../../Images/logos and Icons/Logo.png'
import { Button} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { Box } from "@mui/system";

function NavBar() {
  const [click, setClick] = useState(false);

  const{user}=useAuth();


  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
          
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="" />          
          </NavLink>
        
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/collections"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Collections
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/articles"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Articles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contacts"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icons">
          {
              user?.email ? 
              <NavLink to='/dashboard' style={{textDecoration:'none',color:'black',mr:2}}>
                  <Button>Go To DashBoard</Button>
              </NavLink>          
                           
              :
              <Box>
              <NavLink to='/'>
                  <i className="fas fa-shopping-cart"></i>
              </NavLink>
              <NavLink to='/login' style={{textDecoration:'none',color:'black',mr:2}}>
                <Button color="inherit">Login</Button>
              </NavLink>
              </Box>
            }

             
          </div>
          <div className="nav-icon" onClick={handleClick}>
            
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
