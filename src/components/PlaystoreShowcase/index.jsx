import React from 'react';
import styles from './styles.module.css';

const PlaystoreShowcase = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/images/cloud-compute.jpg"
        alt="CloudFloat App Marketplace"
        className={styles.image}
        loading="eager"
      />
    </div>
  );
};

export default PlaystoreShowcase;
