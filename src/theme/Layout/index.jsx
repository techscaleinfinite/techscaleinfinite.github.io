import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
  const location = useLocation();

  useEffect(() => {
    const loader = document.getElementById('global-loader');
    if (loader) loader.remove();
  }, [location.pathname]);

  return <Layout {...props} />;
}
