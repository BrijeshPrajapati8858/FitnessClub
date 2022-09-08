import React from 'react';
import "./Programs.css";
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import { useNavigate} from 'react-router-dom';


const Programs = () => {
 

    const navigate = useNavigate();

    const navigateTo= () => {
        // 👇️ navigate to /
        navigate('/join');
      };
    

  return (
   <div className="Programs"  id="programs">
<div className=' blur blur-w'></div>
    <div className="programs-header">
        
        <span className='stoke-text'>Explore Our</span>
        <span>Programs</span>
        
        <span className='stoke-text'> To shape You</span>
    </div>
    
    <div className="program-categories">
    <div className=' blur blur-w'></div>
        {
        programsData.map((program, i) => (
            <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
            <span onClick={() => navigateTo()}>Join Now</span>
                <img src={RightArrow} alt="" />
            </div>
            </div>
        ))
        }
    </div>

   </div>
  )
}

export default Programs