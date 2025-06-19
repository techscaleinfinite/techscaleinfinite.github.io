import React from 'react';

const RadicaleDeployment = () => {
  const images = [
    '/img/dwd3.jpg',
    '/img/jjh4.jpg',
    '/img/sder.jpg',
    '/img/swd.jpg',
    '/img/vsvs.jpg',
  ];

  return (
    <div style={styles.galleryWrapper}>
      {images.map((src, index) => (
        <div key={index} style={styles.card}>
          <img src={src} alt={`Image ${index + 1}`} style={styles.image} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  galleryWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '350px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
};

export default RadicaleDeployment;
