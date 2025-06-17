import React from 'react'

const AlphineCard = ({ name, logo, rating, stars, reviews, downloads, ratedFor, installLink }) => {
  return (
    <div className="app-card">
      <img
        className="app-card__logo"
        src={logo}
        alt={name}
      />

      <div className="app-card__content">
        <div className="app-card__title">{name}</div>

        <div className="app-card__rating">
          <strong>{rating}</strong>
          <span className="stars">{stars}</span>
          <span className="reviews">({reviews})</span>
        </div>

        <div className="app-card__meta">
          <strong>{downloads}</strong> Downloads
        </div>
        <div className="app-card__meta">
          <strong>Rated for</strong> <span className="age">{ratedFor}</span>
        </div>

        <a href={installLink} className="app-card__install-btn">Install App</a>
      </div>
    </div>
  )
}

export default AlphineCard
