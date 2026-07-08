import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import CategoryTemplate from '../templates/CategoryTemplate';
import AppTemplate from '../templates/AppTemplate';
import PlaystoreTemplate from '../templates/PlaystoreTemplate';

export default function ExampleRouter() {
  const location = useLocation();

  const segments = location.pathname.split('/').filter(Boolean);

useEffect(() => {
  const loader = document.getElementById('global-loader');
  if (loader) {
    loader.style.display = 'none';
  }
}, []);


  const renderTemplate = () => {
     if (segments.length === 2) {
      return <CategoryTemplate slug={segments[1]} />;
    } else if (segments.length === 3) {
      return <AppTemplate group={segments[0]} categoryname={segments[1]} slug={segments[2]} />;
    } else if (segments.length === 1) {
      return <PlaystoreTemplate   category={segments[1]} slug={segments[2]} />;
    } else {
      return <div>404 - No matching template for this path</div>;
    }
  };

  return (
    <Layout title="" description="">
      <div style={{ padding: '2rem' }}>
        {renderTemplate()}
      </div>
    </Layout>
  );
}
