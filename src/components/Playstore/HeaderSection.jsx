import React from 'react';
import PlayCard from './PlayCard';

const HeaderSection = () => {
  return (
    
    <div className="container-fluid py-2">
  <div className="row g-4">
    <div className="col-12 col-md-4">
      <PlayCard
        promoImage="images/headersection/nextcloud.jpg"
        logo="images/headersection/nextcloud.jpg"
        title="Nextcloud"
        rating="109"
        category="Opensource"
      />
    </div>
    <div className="col-12 col-md-4">
      <PlayCard
        promoImage="images/headersection/pdf.jpg"
        logo="images/headersection/pdf-logo.png"
        title="PDF Reader"
        rating="79"
        category="Tools"
      />
    </div>
    <div className="col-12 col-md-4">
      <PlayCard
        promoImage="images/headersection/wp.jpg"
        logo="images/headersection/wordpress-logo.png"
        title="WordPress"
        rating="25"
        category="CMS"
      />
    </div>
  </div>
</div>

  );
};

export default HeaderSection;
