import React from 'react';
import {plansData} from '../../data/plansData';
import './Plans.css';
import whiteTick from "../../assets/whiteTick.png";
import { useNavigate} from 'react-router-dom';

const Plans = () => {
    const navigate = useNavigate();

    const navigateTo= () => {
        // 👇️ navigate to /
        navigate('/join');
      };
  return (
    <div className="plans-container">


        <div className="programs-header">
        <span className='stoke-text'>ready to start</span>
        <span>your journey</span>
        <span className='stoke-text'> now with us</span>
        </div>

        <div className="plans">
            {
                plansData.map((plan, i)=>(
                    <div key={i} className="plan" >
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>₹{plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i)=>(
                                <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}> {feature}</span>

                              </div>


                            ))}
                        </div>
                        <div className=' blur blur-w'></div>
                        <div><span>See more benefits --</span></div>
                        <button className="btn" onClick={() => navigateTo()}>
                            join Now
                        </button>

                    </div>
                ))
            }

        </div>


    </div>
  )
}

export default Plans