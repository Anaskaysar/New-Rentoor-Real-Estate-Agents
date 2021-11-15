import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/pagenotfound.jpg'
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './404.css'

const NotFound = () => {
    return (
        <>
        <NavBar/>
        <div className="page-404 mb-10">
            <img src={img} alt="" />
            <Link to="/">
               <button className="">Go TO Home</button>
            </Link>
        </div>
        <Footer/>
        </>
    );
};

export default NotFound;