import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData.js";
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur p-blur"></div>
      <div className="blur R-blur"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START </span>
        <span>YOUR JOURNEY </span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="Plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
                {plan.features.map((feature,i)=>(
                 <div className="feature" key={i} >
                 <img src={whiteTick} alt="" />
                 <span key={i}>{feature}</span>
                 </div>
                    ))
                }
            </div>
            <div className="rj">
              <span>See more benefits {'->'} </span>
              <button className="btn">Join Now</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
