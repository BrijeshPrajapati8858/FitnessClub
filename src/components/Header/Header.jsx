import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink  to="/" >
          <img src={Logo} alt="" className="logo"/>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
               
                to="/"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
             
                to="/programs"
               
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Programs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              
                to="/reasons"
              
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Reasons
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              
                to="/plans"
               
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Plans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               
                to="/testimonials"
              
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
           
                to="/join"
              
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Join Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" >
            {/* <i className={click ? "fa fa-times" : "fa fa-bars"}></i> */}
            <img src={Bars} alt="" onClick={handleClick} />
          </div>
        </div>
      </nav>
    </ div>
  );
  }



     



  

export default Header;