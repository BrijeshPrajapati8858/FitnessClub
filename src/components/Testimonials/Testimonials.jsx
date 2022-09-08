import React, {useState} from 'react'
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = {type:'spring', duration:3}





  return (
    <div className="Testimonials">
      <div className="left-t">
          <span>Testimonials</span>
          <span className="stoke-text">What they</span>
          <span>say about us</span>
          <span>
            {
              testimonialsData[selected].review
            }
          </span>
          <span>
            <span style={{color:'var(--orange)'}}>
              {testimonialsData[selected].name}
            </span>{" "}
              - {testimonialsData[selected].status}
          </span>
      </div>
      <div className="right-t">
      
     
            <motion.img src={testimonialsData[selected].image} alt="" 
            key={selected}
            transition={transition}
                 whileInView={{left:'5.4rem'}}
                 initial={{right:'-1rem'}}/>

            <div className='arrows'>

              <img 
              onClick={()=>{
                selected===0?setSelected(tLength - 1):setSelected((prev)=> prev-1)

              }
            }
              src={leftArrow} alt="" />
              <img 
              
              onClick={()=>{
                selected===tLength-1?setSelected(0):setSelected((prev)=> prev+1)

              }
            }src={rightArrow} alt="" />

            </div>
      </div>


    </div>
  )
}

export default Testimonials