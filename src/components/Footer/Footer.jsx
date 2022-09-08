import React from 'react';
import './footer.css';
import GitHub from '../../assets/github.png';
import Instagram from '../../assets/linkedin.png';
import LinkedIn from '../../assets/instagram.png';
import Logo from '../../assets/logo.png';



const Footer = () => {
  return (
    <div className='footer-container'>

        <hr />
        <div className="footer">
            <div className=' blur blur-w'></div>
            <div className="social-links">
            <img src={GitHub} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />

            </div>

            <div className='developer'>
             <p>Developed By: <b>Brijesh Prajapati </b></p>
            </div>


            <div className="logo-f">
            <img src={Logo} alt="" />

        
            </div>
           


        </div>
        
    </div>
  )
}

export default Footer