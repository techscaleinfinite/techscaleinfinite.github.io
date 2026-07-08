import React from 'react';
import './cardStyle.css';

const PlayCard = ({ promoImage, rating, title, category, logo }) => {
  return (
    <div className="play-hero-card">
      <img src={promoImage} alt={title} className="play-hero-bg" />
      <div className="play-hero-overlay" />
      <div className="play-hero-category">{category}</div>
      <div className="play-hero-logo">
        <img src={logo} alt={`${title} logo`} />
      </div>
      <div className="play-hero-info">
        <p className="play-hero-title">{title}</p>
        <p className="play-hero-rating">{rating}</p>
      </div>
      <div className="play-hero-btn">
        <span>Explore</span>
      </div>
    </div>
  );
};

export default PlayCard;
