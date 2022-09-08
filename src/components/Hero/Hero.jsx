import React from 'react';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion';


import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {

    const transition = {type:'spring', duration:3}
  return (
    
    <div className="hero">
         {/* <h1>{user.name}</h1> */}
        <div className=' blur blur-w'></div>
        <div className="left-h">
        
         



            <div className="hero-text">
                <div>
                <span className='stoke-text'>Shape</span>
                <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape adn build your ideal body and live up your live to fullest</span>
                    
                    </div>
            </div>

            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>experts coaches</span>

                </div>
                <div>
                    <span>+1524</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness Programs</span></div>
            </div>
            <div className="hero-buttons">
           <Link to='/plans' className="btn btn-h">Get Started</Link> 
            <Link to='/testimonials' className="btn btn-h">Learn More</Link>
        </div>
        <div className="the-best-ad">
                
                <motion.div
                initial={{left:'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}
                >
                    


                </motion.div>
                <span>
                ⏲️ <b>Timing</b>&#x2192; <b>5:30am -  10:00pm</b> 
                </span>
            
        </div>
        </div>
        

      

        
        <div className="right-h">
                <a href="https://www.justdial.com/Gorakhpur/Fitness-Passion-Beside-Chaudhary-Golghar/9999PX551-X551-140926161159-Z4S5_BZDET" className="btn">Rating :- + 4.5 ⭐</a>

                <motion.div className="heart-rate"
                transition={transition}
                whileInView={{right:'4rem'}}
                initial={{right:'-1rem'}}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                     <span>116 bpm</span>
                </motion.div>


                <img src={hero_image} alt="" className='hero-image'/>
                <motion.img src={hero_image_back} alt="" className='hero-image-back'
                 transition={transition}
                 whileInView={{right:'19.5rem'}}
                 initial={{right:'-1rem'}}/>




                <motion.div className="calories"
                  initial={{right:'37rem'}}
                  whileInView={{right:'28rem'}}
                  transition={transition}>
                <img src={Calories} alt="" />
                <span>calories Burned</span>
                <span>200 kcal</span>
               </motion.div>

         </div>





       
    </div>
  )
}

export default Hero