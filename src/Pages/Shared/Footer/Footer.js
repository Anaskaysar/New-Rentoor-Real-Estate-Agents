import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logos and Icons/logo white.png';

import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
                <div>
                    <h4>Our News Teller</h4>
                    <p>Enjoy <span>15% OFF</span>On Your First Order When You Join Our Mailing List.</p>
                </div>
                <div className="input-areas">
                    <form action="">
                        <input type="email" placeholder="Email Address" />
                        <button className='btn'>Submit</button>
                    </form>
                </div>
      </section>

        
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h4>COMPANY</h4>
                <Link to="/sign-up">About Us</Link>
                <Link to="/">Contact Us</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Privacy Policy</Link>
            </div>         
            <div className="footer-link-items">
                <h4>INFORMATION</h4>
                <Link to="/">FAQ’s</Link>
                <Link to="/">Terms</Link>
                <Link to="/">Delivery Info</Link>
                <Link to="/">Refund policy</Link>
            </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h4>FOLLOW US</h4>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Linkedin</Link>
          </div>
          <div className="footer-link-items">
                <i className="fas fa-phone-alt"><span>01836062305</span> </i>
                <i className="far fa-clock"> AM to PM <br />         
                    <span>Mon: 9:00 - 6:00</span><br /> 
                    <span>Sat: 9:00 - 4:00</span> <br /> 
                    <span>Sun: 9:00 - 2:00</span> 
                </i>
               
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div>
                 <img src={logo} alt="" />
          </div>
          <small className="website-rights">Copyright © 2021 Rentoor - Real Estate Agents</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
