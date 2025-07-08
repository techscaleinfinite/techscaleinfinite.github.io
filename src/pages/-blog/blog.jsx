import React from 'react'
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout'

const UnderConstruction = () => {
    return (
    <Layout title="Welcome" description="This is my custom landing page">
      <main className={styles.landing}>
     <div style={styles.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
        alt="Under Construction"
        style={styles.image}
      />
      <h1 style={styles.title}>Blog - Page Under Construction</h1>
      <p style={styles.text}>We're working hard to bring this page to life. Please check back soon!</p>
    </div>
      </main>
    </Layout>
  )
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  image: {
    width: '150px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1.1rem',
    maxWidth: '500px',
  }
};

export default UnderConstruction;