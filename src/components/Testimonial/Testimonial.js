import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData.js";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const transition = { type: "spring", duration: 3 };
  const tLength = testimonialsData.length;
//   function left(){
//           // tLength--;
//           if(selected===0){
//             setSelected(tLength-1);
//           }else{
//             setSelected((prev)=>prev-1);
//           }
           
//   }
//   function right(){
//    // tLength++;
//      //setSelected(tLength);
//      if(selected===tLength-1){
//         setSelected(0);
//       }else{
//         setSelected((prev)=>prev+1);
//       }
//   }
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={transition}
        exit={{opacity:0,x:-100}} >{testimonialsData[selected].review}</motion.span>
        <span style={{color:'white'}}>
          <span style={{color:'var(--orange)'}}> {testimonialsData[selected].name} </span>{" "}-
          {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <motion.div
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{...transition,duration:2}}
          ></motion.div>
        <motion.div
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{...transition,duration:2}}
        
        
        ></motion.div>
        <motion.img
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={transition}
        exit={{opacity:0,x:-100}}
        src={testimonialsData[selected].image} alt="" />
        <div className="Arrows">
            <img src={leftArrow} alt=""  onClick={()=>{selected===0? setSelected(tLength-1):setSelected((prev)=>prev-1);}}/>
            <img src={rightArrow} alt="" onClick={()=>{selected===tLength-1? setSelected(0):setSelected((prev)=>prev+1);}}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
