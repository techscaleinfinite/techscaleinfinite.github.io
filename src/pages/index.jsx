import React from 'react'
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout'
import styles from './index.module.css'
import './style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';

 const settings = {
    centerMode: true,          // Equivalent to `center: true`
    centerPadding: '0px',      // No padding for centered slide
    slidesToShow: 3,           // Display 3 items (default)
    autoplay: true,
    autoplaySpeed: 5000,       // Same as `autoplayTimeout`
    speed: 450,                // Same as `smartSpeed`
    dots: true,
    arrows: false,             // Same as `nav: false`
    infinite: true,            // Same as `loop: true`
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

 const showTab = (name) => {
  //  alert(`Hello, ${name}!`);
  $('.storage_btn').removeClass('gh lk');
  $('.compute_btn').removeClass('gh lk');
  $('.dashboard_btn').removeClass('gh lk');
  $('.storage').hide();
  $('.compute').hide();
  $('.dashboard').hide();
  if(name=='storage')
  {
    $('.storage_btn').addClass('gh lk');
    $('.storage').show();
  }
  else if(name=='compute')
  {
    $('.compute_btn').addClass('gh lk');
    $('.compute').show();
  }
  else if(name=='dashboard')
  {
    $('.dashboard_btn').addClass('gh lk');
    $('.dashboard').show();
  }
  
  };



export default function Home() {
  return (
    <Layout title="Welcome" description="This is my custom landing page">
  <section className="gj do ir hj sp  i pg">         
  <div className="bb ze ki xn 2xl:ud-px-0">
   <div className="tc _o">
               <div className="animate_left jn/2" data-sr-id="25" >
                  <h1 className="fk vj zp or kk wm wb">Self-Driving Cloud Applications</h1>
                  <p className="fq">
                  Put your applications on autopilot mode in our AI managed environment
                  </p>
                  <div className="tc tf yo zf mb aitm-center"  style={{alignItems:"center"}}>
                     <a href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google" className="ek jk lk gi hi rg ml il vc _d _l " style={{background:"#040564"}}>Get Started Now</a>
                  </div>
               </div>
            </div>
  </div>
  <div>
    <div className="animate_right xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 po-ab q r">
      <img 
        src="/images/kubernetes-docker-services.png" 
        alt="kubernetes-docker-services" 
        className="q r ua mt-5 mr-2 bf" 
      />
    </div>
  </div>
</section>       
     
  <section id="features">
  <div className="bb ze ki yn 2xl:ud-px-12.5">
    <div className="tc uf zo xf ap zf bp mq">
      <div className="animate_top kn to/3 tc cg oq">
        <div className="tc wf xf cf ae cd rg mh">
          <img src="images/icon-01.svg" alt="Icon" />
        </div>
        <div>
          <h4 className="ek yj go kk wm xb">24/7 Availability</h4>
          <p>Round-the-Clock Support for Seamless Operations</p>
        </div>
      </div>
      <div className="animate_top kn to/3 tc cg oq">
        <div className="tc wf xf cf ae cd rg nh">
          <img src="images/icon-02.svg" alt="Icon" />
        </div>
        <div>
          <h4 className="ek yj go kk wm xb">Proactive Solutions</h4>
          <p>Quick resolutions to keep you moving forward</p>
        </div>
      </div>
      <div className="animate_top kn to/3 tc cg oq">
        <div className="tc wf xf cf ae cd rg oh">
          <img src="images/icon-03.svg" alt="Icon" />
        </div>
        <div>
          <h4 className="ek yj go kk wm xb">Experienced Team</h4>
          <p>Skilled professionals ready to assist</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="gj do ir hj sp jr i pg ">
  <div className="bb ye i z-10 ki xn dr">
    <div className="bb ze ki xn wq">
      <div className="tc_display wf gg qq">
        <div className="animate_left xc_cstm gn gg xc/2 i">
          <div>
            <img
              src="images/shape-05.svg"
              alt="Shape"
              className="h -ud-left-5 x"
            />
            <img src="images/image-creator.png" alt="About" />
          </div>
        </div>
        <div className="animate_right xc_cstm xc/2 i">
          <h2 className="fk vj zp pr kk wm qb">What is Cloudfloat</h2>
          <p className="uo">
            Instantly install Apps. Easily deploy production ready apps. No more
            tinkering with Dockerfiles and manually provisioning databases.
          </p>
          <div className="tc tf yo zf mb">
            <a
              href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google"
              className="ek jk lk gh gi hi rg ml il vc _d _l"
              style={{
                background: "#fff",
                border: "1px solid #e6e2e2",
                color: "#000"
              }}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Flash card Slider */}
  <div className="container">
    <div x-data="{ sectionTitle: `We Offer Great Affordable Premium Prices.`}">
      <div className="animate_top bb ze rj ki xn vq">
        <h2 x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b" >We Offer Great Affordable Premium Prices.</h2>
        <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" />
      </div>
    </div>
    <Slider {...settings}>
      <div className="item">
    <div className="shadow-effect">
      <img className="img-circle" src="images/cards/mangodb.jpg" />
    </div>
  </div>
  <div className="item">
    <div className="shadow-effect">
      <img className="img-circle" src="images/cards/mariadb.jpg" />
    </div>
  </div>
  <div className="item">
    <div className="shadow-effect">
      <img className="img-circle" src="images/cards/emby.jpg" />
    </div>
  </div>
  <div className="item">
    <div className="shadow-effect">
      <img className="img-circle" src="images/cards/etherpad.jpg" />
    </div>
  </div>
  <div className="item">
    <div className="shadow-effect">
      <img className="img-circle" src="images/cards/octobot.jpg" />
    </div>
  </div>
    </Slider>
    
  </div>
  
</section>


<section className="pg pj vp mr oj wp nr">
  <div x-data="{ sectionTitle: `We Offer Great Affordable Premium Prices.`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
    <div className="animate_top bb ze rj ki xn vq">
          <h2 x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b" >We Offer Great Affordable Premium Prices.</h2>
      <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
  
    </div>
  </div>
  <div className="bb ze ki xn 2xl:ud-px-0 jb">
    <div className="projects-tab _e bb tc uf wf xf cg rg hh rm vk xm si ti fc">
      <button
       
        className="project-tab-btn ek rg ml il vi mi gh lk storage_btn" onClick={() => showTab('storage')}
      >
        Storage
      </button>
      <button
        className="project-tab-btn ek rg ml il vi mi compute_btn" onClick={() => showTab('compute')}
      >
        Compute
      </button>
      <button
        className="project-tab-btn ek rg ml il vi mi dashboard_btn" onClick={() => showTab('dashboard')}
      >
        Dashboard
      </button>
    </div>
    <div className="projects-wrapper tc -ud-mx-5" style={{ position: "relative", height: "499px" }}>
      <div className="project-sizer" />
      <div className="project-item bj  storage" style={{ position:"absolute" , 'left': "0px" ,'top': "0px" }}>
        <div className="bb ye i z-10 ki xn dr">
          <div className="bb ze ki xn wq">
            <div className="tc_display wf gg qq">
              <div className="animate_left xc_cstm gn gg xc/2 i">
                <img
                  src="images/shape-06.svg"
                  alt="Shape"
                  className="h p s"
                  style={{ transform: "scaleX(-1)", opacity: "0.5" }}
                />
                <div>
                  <img src="images/storage.png" alt="About" />
                </div>
              </div>
              <div className="animate_right xc_cstm xc/2 i">
                <h2 className="fk vj zp pr kk wm qb">About File Storage</h2>
                <p className="uo">
                  Instantly install Apps. Easily deploy production ready apps.
                  No more tinkering with Dockerfiles and manually provisioning
                  databases.
                </p>
                <div className="tc tf yo zf mb">
                  <a
                    href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google"
                    className="ek jk lk gh gi hi rg ml il vc _d _l"
                    style={{
                      background: "#fff",
                      border: "1px solid #e6e2e2",
                      color: "#000"
                    }}
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item bj compute" style={{ display: "none" , position:"absolute" , 'left': "0px" ,'top': "0px" }}>
        <div className="bb ye i z-10 ki xn dr">
          <div className="bb ze ki xn wq">
            <div className="tc_display wf gg qq">
              <div className="animate_right xc_cstm xc/2 i">
                <h2 className="fk vj zp pr kk wm qb">About Compute</h2>
                <p className="uo">
                  Instantly install Apps. Easily deploy production ready apps.
                  No more tinkering with Dockerfiles and manually provisioning
                  databases.
                </p>
                <div className="tc tf yo zf mb">
                  <a
                    href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google"
                    className="ek jk lk gh gi hi rg ml il vc _d _l"
                    style={{
                      background: "#fff",
                      border: "1px solid #e6e2e2",
                      color: "#000"
                    }}
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
              <div className="animate_left xc_cstm gn gg xc/2 i">
                <div>
                  <img
                    src="images/shape-05.svg"
                    alt="Shape"
                    className="h -ud-left-5 x"
                  />
                  <img src="images/compute2.png" alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item bj dashboard" style={{ display: "none" , position:"absolute" , 'left': "0px" ,'top': "0px" }}>
        <div className="bb ye i z-10 ki xn dr">
          <div className="bb ze ki xn wq">
            <div className="tc_display wf gg qq">
              <div className="animate_left xc_cstm gn gg xc/2 i">
                <div>
                  <img
                    src="images/shape-05.svg"
                    alt="Shape"
                    className="h -ud-left-5 x"
                  />
                  <img src="images/dashboard.png" alt="About" />
                </div>
              </div>
              <div className="animate_right xc_cstm xc/2 i">
                <h2 className="fk vj zp pr kk wm qb">About Cloud Float</h2>
                <p className="uo">
                  Instantly install Apps. Easily deploy production ready apps.
                  No more tinkering with Dockerfiles and manually provisioning
                  databases.
                </p>
                <div className="tc tf yo zf mb">
                  <a
                    href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google"
                    className="ek jk lk gh gi hi rg ml il vc _d _l"
                    style={{
                      background: "#fff",
                      border: "1px solid #e6e2e2",
                      color: "#000"
                    }}
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section
  className="lj tp kr"
  style={{
    background:
      "linear-gradient(20deg, rgba(77,92,201,1) 0%, rgba(2,6,92,0.5) 25%, rgba(255,255,255,1) 62%)"
  }}
>
  <div className="bb ye i z-10 ki xn dr">
    <div className="tc uf sn tn un gg">
      <img src="images/shape-14.svg" alt="Shape" className="h ja ka mt-5" />
      <div className="animate_left to/2">
        <h2 className="fk vj zp pr lk ac" style={{ color: "#000" }}>
          Install unlimited applications with our service.
        </h2>
      </div>
      <div className="animate_left ">
        <h2 className="fk vj zp pr lk ac" style={{ color: "#000" }}>
          50K+
        </h2>
        <p className="">Registered Users</p>
      </div>
      <div className="animate_left ">
        <h2 className="fk vj zp pr lk ac" style={{ color: "#000" }}>
          50K+
        </h2>
        <p className="">Registered Users</p>
      </div>
    </div>
  </div>
  <div className="bb ze ki xn yq mb en">
    <div className="wc qf pn xo ng">
      <div
        className="animate_top sg oi pi zq ml il am cn _m"
        style={{
          background: "#fff",
          margin: 10,
          padding: 20,
          border: "1px solid #f1f2f3"
        }}
      >
        {/* <img src="images/icon-04.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b">
          Look for the application you are searching for
        </h4>
        <p>
          By using the search bar, you can find +1000 applications from our
          database &amp; dockerhub
        </p>
      </div>
      <div
        className="animate_top sg oi pi zq ml il am cn _m"
        style={{
          background: "#fff",
          margin: 10,
          padding: 20,
          border: "1px solid #f1f2f3"
        }}
      >
        {/* <img src="images/icon-05.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b">Install application easily</h4>
        <p>
          Once you have found the application, you can instantly install the
          app. Don't forget to specify custom name, ports &amp; environnement
          variable
        </p>
      </div>
      <div
        className="animate_top sg oi pi zq ml il am cn _m"
        style={{
          background: "#fff",
          margin: 10,
          padding: 20,
          border: "1px solid #f1f2f3"
        }}
      >
        {/* <img src="images/icon-06.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b">Ready to use!</h4>
        <p>
          You can now use your application peacefully. You can access it with
          HTTP or TCP/UDP adress.
        </p>
      </div>
    </div>
  </div>
  <div className="bb ze ki xn yq mb en">
    <div className="wc qf pn xo ng">
      <div
        className="animate_top sg oi pi zq ml il am cn _m"
        style={{
          background: "#fff",
          margin: 10,
          padding: 20,
          border: "1px solid #f1f2f3"
        }}
      >
        {/* <img src="images/icon-07.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b">Secured</h4>
        <p>
          We offer different layer of security options. Users can choose the
          right security level that suits well for the application as well for
          their needs.
        </p>
      </div>
      <div
        className="animate_top sg oi pi zq ml il am cn _m"
        style={{
          background: "#fff",
          margin: 10,
          padding: 20,
          border: "1px solid #f1f2f3"
        }}
      >
        {/* <img src="images/icon-05.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b">User Friendly</h4>
        <p>
          The plateform is designed in a way that anybody from technical and
          most importantly the non-technical background can easily deploy and
          run their applications securly
        </p>
      </div>
      <div
        className="animate_top sg oi pi zq ml il am cn _m"
        style={{
          background: "#fff",
          margin: 10,
          padding: 20,
          border: "1px solid #f1f2f3"
        }}
      >
        {/* <img src="images/icon-06.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b">Choice</h4>
        <p>
          Your are not limited to one application from a list of applications
          that are supported.{" "}
        </p>
      </div>
    </div>
  </div>
</section>


<section className="i pg qh rm ji hp">
  <img src="images/shape-11.svg" alt="Shape" className="of h ga ha ke" />
  <img src="images/shape-07.svg" alt="Shape" className="h ia o ae jf" />
  <img src="images/shape-14.svg" alt="Shape" className="h ja ka" />
  <img src="images/shape-15.svg" alt="Shape" className="h q p" />
  <div className="bb ze i va ki xn br">
    <div className="tc uf sn tn xf un gg">
      <div className="animate_top me/5 ln rj">
        <h2 className="gk vj zp or kk wm hc">1000+</h2>
        <p className="ek bk aq">Applications</p>
      </div>
      <div className="animate_top me/5 ln rj">
        <h2 className="gk vj zp or kk wm hc">200+</h2>
        <p className="ek bk aq">Happy Clients</p>
      </div>
      <div className="animate_top me/5 ln rj">
        <h2 className="gk vj zp or kk wm hc">50K+</h2>
        <p className="ek bk aq">Registered Users</p>
      </div>
    </div>
  </div>
</section>

<section id="support" className="i pg fh rm ji gp uq">
  <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
  <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
  <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
  <img src="images/shape-12.svg" alt="Shape" className="h p s" />
  <img src="images/shape-13.svg" alt="Shape" className="h r q" />
  <div x-data="{ sectionTitle: `Let’s Stay Connected`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
    <div className="animate_top bb ze rj ki xn vq">
      <h2 x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b" />
      <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" />
    </div>
  </div>
  <div className="i va bb ye ki xn wq jb mo">
    <div className="tc uf sn tf rn un zf xl:gap-10">
      <div className="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg">
        <img src="images/shape-03.svg" alt="Shape" className="h la x wd" />
        <img src="images/shape-06.svg" alt="Shape" className="h la ma ne kf" />
        <div className="fb">
          <h4 className="wj kk wm cc">Email Address</h4>
          <p>
            <a href="#">
              <span
                className="__cf_email__"
                data-cfemail="d0a3a5a0a0bfa2a490a3a4b1a2a4a5a0feb3bfbd"
              >
                info@scaleinfinite.fr
              </span>
            </a>
          </p>
        </div>
        <div className="fb">
          <h4 className="wj kk wm cc">Office Location</h4>
          <p>78 Avenue Des Champs Elysees</p>
        </div>
        <div className="fb">
          <h4 className="wj kk wm cc">Phone Number</h4>
          <p>
            <a href="#">+33 9 70 44 00 55</a>
          </p>
        </div>
        {/*  <div class="fb">
               <h4 class="wj kk wm cc">Skype Email</h4>
               <p><a href="#"><span class="__cf_email__" data-cfemail="482d30292538242d0831273d3a25292124662b2725">[email&#160;protected]</span></a></p>
            </div> */}
        <span className="rc nd rh tm lc fb" />
        <div>
          <h4 className="wj kk wm qb">Social Media</h4>
          <ul className="tc wf fg">
            <li>
              <a
                href="https://www.instagram.com/scaleinfinite/"
                target="_blank"
              >
                <img
                  src="images/instagram.png"
                  style={{ width: 35, height: "auto" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/scaleinfinite">
                <img
                  src="images/linkedin.png"
                  style={{ width: 35, height: "auto" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
        <img src="images/connect.png" alt="" />
      </div>
    </div>
  </div>
</section>


    </Layout>
  )
}
// import React, { useState, useEffect } from 'react';

// export default function HomePage() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [scrollTop, setScrollTop] = useState(false);

//   useEffect(() => {
//     const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
//     setDarkMode(savedDarkMode ?? true);

//     const handleScroll = () => {
//       setStickyMenu(window.pageYOffset > 20);
//       setScrollTop(window.pageYOffset > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [darkMode]);

//   const toggleNavigation = () => {
//     setNavigationOpen(!navigationOpen);
//   };

//   return (
//     <div className={darkMode ? 'b eh' : ''}>
//       <header className={`g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}>
//         <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
//           <div className="vd to/4 tc wf yf">
//             <a href="#">
//               <img className="om scale-logo" src="images/scaleinfinite-logo-kubernetes-docker-services.png" alt="Logo Light" />
//               <img className="xc nm scale-logo" src="images/logo-light.png" alt="Logo Dark" />
//             </a>
//             <button className="po rc" onClick={toggleNavigation}>
//               <span className="rc i pf re pd">
//                 <span className="du-block h q vd yc">
//                   <span className={`rc i r s eh um tg te rd eb ml jl dl ${!navigationOpen ? 'ue el' : ''}`}></span>
//                   <span className={`rc i r s eh um tg te rd eb ml jl fl ${!navigationOpen ? 'ue qr' : ''}`}></span>
//                   <span className={`rc i r s eh um tg te rd eb ml jl gl ${!navigationOpen ? 'ue hl' : ''}`}></span>
//                 </span>
//                 <span className="du-block h q vd yc lf">
//                   <span className={`rc eh um tg ml jl el h na r ve yc ${!navigationOpen ? 'sd dl' : ''}`}></span>
//                   <span className={`rc eh um tg ml jl qr h s pa vd rd ${!navigationOpen ? 'sd rr' : ''}`}></span>
//                 </span>
//               </span>
//             </button>
//           </div>

//           <div className={`vd too/40 sd qo f ho oo wf yf ${navigationOpen ? 'd hh rm sr td ud qg ug jc yh' : ''}`}>
//             <nav>
//               <ul className="tc _o sf yo cg ep">
//                 <li><a href="https://docs.scaleinfinite.fr/" target="_blank" className="xl">Tutorial</a></li>
//                 <li><a href="#" className="xl">Contact</a></li>
//                 <li style={{ border: '1px solid #d1cdcd', width: '220px', borderRadius: '30px' }}>
//                   <a href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google" className="ek jk rg ml _d _l" style={{ padding: '0.5rem 1rem', display: 'flex', width: '220px' }}>
//                     <img src="images/g.png" style={{ marginRight: '8px', width: '30px', height: '30px' }} alt="Sign in with Google" /> Sign in with Google
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>

//       <main>
//         <section className="gj do ir hj sp jr i pg">
//           <div className="bb ze ki xn 2xl:ud-px-0">
//             <div className="tc _o">
//               <div className="animate_left jn/2">
//                 <h1 className="fk vj zp or kk wm wb">Self-Driving Cloud Applications</h1>
//                 <p className="fq">Put your applications on autopilot mode in our AI managed environment</p>
//                 <div className="tc tf yo zf mb aitm-center" style={{ alignItems: 'center' }}>
//                   <a href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google" className="ek jk lk gi hi rg ml il vc _d _l" style={{ background: '#040564' }}>Get Started Now</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <div className="animate_right xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 po-ab q r">
//               <img src="images/kubernetes-docker-services.png" alt="kubernetes-docker-services" className="q r ua mt-5 mr-2 bf" />
//             </div>
//           </div>
//         </section>

//         <footer style={{ backgroundColor: '#181c31' }}>
//           <div className="bb ze ki xn 2xl:ud-px-0">
//             <div className="ji gp">
//               <div className="tc uf ap gg fp">
//                 <div className="animate_top zd/2 to/2">
//                   <a href="#">
//                     <img className="om scale-logo" src="images/logo-light.png" alt="Logo Light" />
//                     <img className="xc nm scale-logo" src="images/logo-light.png" alt="Logo Dark" />
//                   </a>
//                   <p className="lc fb">Scale Infinite is a data software company based Europe and Asia that develop, educate and offers commercial support for open-source softwares designed to manage Big Data solutions and associated processing</p>
//                 </div>
//                 <div className="animate_top">
//                   <h4 className="kk wm tj ec" style={{ color: '#fff' }}>Quick Links</h4>
//                   <ul>
//                     <li><a href="#" className="sc xl vb">Home</a></li>
//                     <li><a href="https://docs.scaleinfinite.fr/introduction/about-scale-infinite" target="_blank" className="sc xl vb">About Scaleinfinite</a></li>
//                     <li><a href="https://docs.scaleinfinite.fr/introduction/cloud-float/" target="_blank" className="sc xl vb">About Cloudfloat</a></li>
//                   </ul>
//                 </div>
//                 <div className="animate_top">
//                   <h4 className="kk wm tj ec zd/2 to/2" style={{ color: '#fff' }}>Services</h4>
//                   <ul>
//                     <li><a href="https://docs.scaleinfinite.fr/introduction/kubernetes/" target="_blank" className="sc xl vb">Kubernetes Services</a></li>
//                     <li><a href="https://docs.scaleinfinite.fr/blogs/docker%20a%20game%20changer" target="_blank" className="sc xl vb">Docker Services</a></li>
//                     <li><a href="https://docs.scaleinfinite.fr/category/demo-deployment" target="_blank" className="sc xl vb">Demo Deployment</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="bh ch pm tc uf sf yo wf xf ap cg fp bj">
//               <div className="animate_top">
//                 <ul className="tc wf gg">
//                   <li><a href="https://docs.scaleinfinite.fr/" target="_blank" className="xl">Tutorial</a></li>
//                   <li><a href="https://docs.scaleinfinite.fr/community" target="_blank" className="xl">Support</a></li>
//                 </ul>
//               </div>
//               <div className="animate_top">
//                 <p>&copy; 2025 Scaleinfinite. All rights reserved</p>
//               </div>
//             </div>
//           </div>
//         </footer>

//         <button
//           className={`xc wf xf ie ld vg sr gh tr g sa ta _a ${scrollTop ? 'uc' : ''}`}
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         >
//           <svg className="uh se qd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//             <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
//           </svg>
//         </button>
//       </main>
//     </div>
//   );
// }
