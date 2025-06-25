import React from 'react'
import Layout from '@theme/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css' // for hover styles

const similarApps = [
  {
    name: "Moody Month: Hormone Tracker",
    rating: 4.4,
    image: "https://play-lh.googleusercontent.com/TScWCJH_Wockk87pasNCob2SN2f-340OvLA3SgG2Fv_MiNkQ3MNm2fmZKR_yyuGJQQY=s512-rw",
  },
  {
    name: "PulseLife ex 360 medics",
    rating: 4.4,
    image: "https://play-lh.googleusercontent.com/oXZAnN8IhyqajLSLWAx-IHL0La1h2GhaH37VVILXBpV_rGAhLwobWSMn9HqiN3lMkg=s512-rw",
  },
  {
    name: "CNH Care",
    rating: 4.5,
    image: "https://play-lh.googleusercontent.com/rO0mp7it8hTeXnhQJtIgU0yhwsy3ldXEZbTM028467_a_KukXHNASTf5Pyn4XRy_kw=s512-rw",
  },
  {
    name: "mySugr - Diabetes Tracker Log",
    rating: 4.6,
    image: "https://play-lh.googleusercontent.com/321VYA65rzYXqR_KYLofCaIobHHD18Asrdn4RgN6dLxlFd1LrOVNNhmc4Swx1SLL-SY=s512-rw",
  },
  {
    name: "ACL & Knee Physical Therapy",
    rating: 3.8,
    image: "https://play-lh.googleusercontent.com/sVoVpUslep9oLOrc_89zN2jwX_M6ZEW_XPFcabyFr8p-gJ9wAkJkY4DUj6BrChj_q0E8=s512-rw",
  },
  {
    name: "Red App",
    rating: 4.2,
    image: "https://play-lh.googleusercontent.com/gNy41I_elUmyoyoVA3VmFOgU4G4onYpoUeNtRrWbx_iaUCr7rdJ2Uzlqwp5eWt7C-OQ=s512-rw",
  },
  {
    name: "Drop Tracker",
    rating: 4.5,
    image: "https://play-lh.googleusercontent.com/7a_ICu5SaYI-nnAnnhVNGegYNiXNKvmXFW8arTN7xcLyqSV6GhshQHz43lEb5b5ksikw=s512-rw",
  },
  {
    name: "Livi",
    rating: 4.3,
    image: "https://play-lh.googleusercontent.com/OnL5UMSnbEd528CBo9jsY8J5tALp1Z74iUA9qqPRhbftg5A1av3644hKdbiYvjCD2W5u=s512-rw",
  },
  {
    name: "MyHealth",
    rating: 4.1,
    image: "https://play-lh.googleusercontent.com/42Jw7qpvgiHVf-fbQW6V-ZKZM6ugYdyZViD4dpCLvoJ9OU6CxL4GSbdYAfBKU2xEyQ=s512-rw",
  },
  {
    name: "MMP Tracker",
    rating: 4.0,
    image: "https://play-lh.googleusercontent.com/Zzk-S1StHZk_HFJwEjOREwr32_Igic0QVV3v4hqSs5QwjitDwfWI1Q5m88THdvY2cNE=s512-rw",
  },
    {
    name: "Fit bit",
    rating: 4.0,
    image: "https://play-lh.googleusercontent.com/QhMCymTyxJbzRiwMBA-GYooS-nVKm3fHg2CSRyKHvhmC-e5vOibfST73y1MmScvtPw=s512-rw",
  },
    {
    name: "Sleep Cycle",
    rating: 4.0,
    image: "https://play-lh.googleusercontent.com/dar3zPlTbJYfHtH0hG4WOOK28ujJTj5kz51SwDuZc-HrmSgjZyavEDY_k4jmiJ9QwFo=s512-rw",
  },
]
const categoryApps = [
  {
    logo: 'https://cdn.scaleinfinite.fr/app-images-webp/grafana_grafana.webp',
    name: 'Operating System',   
  },
  {
    logo: 'https://cdn.scaleinfinite.fr/app-images-webp/caddy.webp',
    name: 'Web Services',  
  },
   {
    logo: 'https://cdn.scaleinfinite.fr/app-images-webp/amazonlinux.webp',
    name: 'CMS',   
  },
  {
    logo: 'https://cdn.scaleinfinite.fr/app-images-webp/erlang.webp',
    name: 'DataBase',  
  },
];
export default function AppGrid() {
  return (
     <Layout title="Cloudfloat Apps" description="">
         <div className="container py-5">
      <div className="row">
        {/* Similar Apps Section */}
        <div className="col-md-8 mb-4">
          <h3 className="mb-4 custom-h3">Similar apps</h3>
          <div className="row g-3">            
                        {similarApps.map((app, idx) => (
                            <div key={idx} className="col-6 col-sm-4 col-md-3 custom-col-lg-4 text-center">
                            <div className="hover-zoom p-2 border rounded shadow-sm bg-white h-100">
                                <a href='#'>
                                <img
                                src={app.image}
                                alt={app.name}
                                className="img-fluid rounded"
                                />
                                <div className="mt-2 fw-semibold small text-truncate">{app.name}</div>
                                <div className="text-muted small">{app.rating} ★</div>
                                </a>
                            </div>
                            </div>
                        ))}
                        
            </div>
        </div>

        {/* Similar Category Section */}
        <div className="col-md-4 mb-4">
          <h3 className="mb-4 custom-h3">Similar Category</h3>
           {categoryApps.map((app, idx) => (
                <div 
                    key={idx}
                    className="category-hover d-flex align-items-center mb-3"
                >
                    <a href="#" className="d-flex align-items-center text-decoration-none text-dark w-100 ">
                    <img
                        src={app.logo}
                        alt={app.name}
                        style={{ width: '48px', height: '48px', borderRadius: '12px', marginRight: '1rem' }}
                    />
                    <div>
                        <div className='category-title' >{app.name}</div>
                       
                    </div>
                    </a>
                </div>
                ))}
        </div>
      </div>
    </div>
    
    </Layout>
  )
}
