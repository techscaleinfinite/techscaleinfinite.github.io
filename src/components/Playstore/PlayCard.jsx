import React from 'react';
import {  StarIcon, ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import './cardStyle.css';
const PlayCard = ({ promoImage, rating, title, category, logo }) => {
  return (

    <div className="first hero ">
      {/* Background Image */}
      <img src={promoImage} alt={title} className="image " />
      {/* Optional overlay text block */}
      <div className="text "></div>
      {/* Logo on top */}
      <div className="logo ">
        <img src={logo} alt="Logo" />
      </div>
      {/* Main Text */}
      <div className="main-text ">
        <p >{title}</p>
    
     
        {/* <p className="text-white-50 small">{subtitle}</p> */}
      </div>
          <div className='category'>{category}</div>

      {/* Date */}
      <div className="rating d-flex">
        {rating} 
        {/* <StarIcon style={{ width: "1.3rem", height: "1.3rem", color: "#fff" }} /> */}
      </div>
      {/* Button */}
     <div className="hero-btn d-flex align-items-center gap-2">
  <a href="#" className="d-flex align-items-center text-white text-decoration-none">
    Access 
    {/* <ArrowDownTrayIcon
      style={{ width: "20px", height: "20px", marginLeft: "6px", color: "#fff" }}
    /> */}
  </a>
</div>
    </div>
   
  );
};

export default PlayCard;
