import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import '../styles/splash.scss'

function Splash() {

  const navi = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [selectImg, setSelectImg] = useState("");

  const splashImgs = [
    "/imgs/splash01.svg",
    "/imgs/splash02.svg",
    "/imgs/splash03.svg"
  ];

  useEffect(()=>{
    const randomImg = Math.floor(Math.random()*splashImgs.length);
    setSelectImg(splashImgs[randomImg]);
    
    const timer = setTimeout(()=>{
      setFadeOut(true);
    }, 2500);
    return () => clearTimeout(timer);
  },[]);

  const animationComplete = ()=>{
    if(fadeOut){
      navi("/", {replace: true});
    }
  }

  return (
    <motion.div
      className="splash"
      initial={{ opacity: 0 }}
      animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={animationComplete}
    >
      <p className='splash-img'>
        {selectImg && (
          <img src={selectImg} alt="ripo온보딩01" />
        )}
      </p>
  </motion.div>
  )
}

export default Splash