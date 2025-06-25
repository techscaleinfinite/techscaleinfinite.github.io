import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout'
import { useLocation } from '@docusaurus/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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
  // Hide search icon//
  const location = useLocation();
const isHome = location.pathname === '/';
  // Hide Search icon end//

     useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  const sectionTitle = "We Offer Great Affordable Premium Prices.";
  const sectionTitleText =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.";

  const [filterTab, setFilterTab] = React.useState(0); // 0 = all, 2 = storage, 3 = compute, 4 = dashboard
 
  return (
     <div className={isHome ? 'is-home' : ''}>
    <Layout  description="AI-Managed Solutions for Automated Application Performance">
  <section className="gj do  hj sp  i pg">         
  <div className="bb ze ki xn 2xl:ud-px-0">
   <div className="tc _o">
     
               <div className="animate_left jn/2" data-sr-id="25"  data-aos="fade-right">
                  <div class="fk vj zp or kk wm wb cloud-title" >Self-Driving Cloud Applications</div>
                  <p className="fq" >
                  Put your applications on autopilot mode in our AI managed environment
                  </p>
                  <div className="tc tf yo zf mb aitm-center"  style={{alignItems:"center"}}>
                     <a href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google" className="ek jk lk gi hi rg ml il vc _d _l " style={{background:'var(--ifm-button-bg)'}}>Get Started Now</a>
                  </div>
               </div>
            </div>
           
  </div>
  <div>
    
    <div  className=" xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 po-ab q r" data-aos="fade-left">
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
      <div className="animate_top kn to/3 tc cg oq" data-aos="fade-down">
        <div className="tc wf xf cf ae cd rg mh">
          <img src="images/icon-01.svg" alt="Icon" />
        </div>
        <div>
          <h4 className="ek yj go kk wm xb sub-heading">24/7 Availability</h4>
          <p>Round-the-Clock Support for Seamless Operations</p>
        </div>
      </div>
      <div className="animate_top kn to/3 tc cg oq" data-aos="fade-up">
        <div className="tc wf xf cf ae cd rg nh">
          <img src="images/icon-02.svg" alt="Icon" />
        </div>
        <div>
          <h4 className="ek yj go kk wm xb sub-heading">Proactive Solutions</h4>
          <p>Quick resolutions to keep you moving forward</p>
        </div>
      </div>
      <div className="animate_top kn to/3 tc cg oq" data-aos="fade-down" >
        <div className="tc wf xf cf ae cd rg oh">
          <img src="images/icon-03.svg" alt="Icon" />
        </div>
        <div>
          <h4 className="ek yj go kk wm xb sub-heading">Experienced Team</h4>
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
        <div className="animate_left xc_cstm gn gg xc/2 i" data-aos="fade-left">
          <div>
            <img
              src="images/shape-05.svg"
              alt="Shape"
              className="h -ud-left-5 x"
            />
            <img src="images/image-creator.png" alt="About" />
          </div>
        </div>
        <div className="animate_right xc_cstm xc/2 i" data-aos="fade-right" >
          <h2 className="fk vj zp pr kk wm qb cloud-title">What is Cloudfloat</h2>
          <p className="uo">
            Instantly install Apps. Easily deploy production ready apps. No more
            tinkering with Dockerfiles and manually provisioning databases.
          </p>
          <div className="tc tf yo zf mb">
            <a
              href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google"
              className="ek jk lk gh gi hi rg ml il vc _d _l"  style={{background:'var(--ifm-button-bg)',  color: '#fff'}}
              >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Flash card Slider */}
  <div className="container mt-5 pt-5" >
    <div x-data="{ sectionTitle: `We Offer Great Affordable Premium Prices.`}" data-aos="fade-left">
      <div className="animate_top bb ze rj ki xn vq">
        <h2 x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b cloud-title" >We Offer Great Affordable Premium Prices.</h2>
        <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" />
      </div>
    </div>
    <div data-aos="fade-right" >
    <Slider {...settings}  className="customSlider" >
      <div className="item" >
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
    
  </div>
  
</section>
<section
  className="lj tp kr"
  style={{ background: 'var(--ifm-gradient-bg-color)' }}
>
  <div className="bb ye i z-10 ki xn dr">
    <div className="tc uf sn tn un gg">
      <img src="images/shape-14.svg" alt="Shape" className="h ja ka mt-5" />
      <div className="animate_left to/2" data-aos="zoom-in">
        <h2 className="fk vj zp pr lk ac cloud-title " >
          Install unlimited applications with our service.
        </h2>
      </div>
      <div className="animate_left " data-aos="fade-up">
        <h2 className="fk vj zp pr lk ac cloud-title">
          50K+
        </h2>
        <p className="">Registered Users</p>
      </div>
      <div className="animate_left " data-aos="fade-down">
        <h2 className="fk vj zp pr lk ac cloud-title">
          50K+
        </h2>
        <p className="">Registered Users</p>
      </div>
    </div>
  </div>
  <div className="bb ze ki xn yq mb en">
    <div className="wc qf pn xo ng">
      <div
        className="animate_top sg oi pi zq ml il am cn _m" data-aos="flip-left"
        style={{
          background: 'var( --ifm-card-background)',
          margin: 10,
          padding: 20,
       
        }}
      >  
        <h5 className="ek zj kk wm _b sub-heading">
          Look for the application you are searching for
        </h5>
        <p>
          By using the search bar, you can find +1000 applications from our
          database &amp; dockerhub
        </p>
      </div>
      <div
        className="animate_top sg oi pi zq ml il am cn _m" data-aos="flip-right"
       style={{
          background: 'var( --ifm-card-background)',
          margin: 10,
          padding: 20,
       
        }}
       >
        {/* <img src="images/icon-05.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b sub-heading">Install application easily</h4>
        <p>
          Once you have found the application, you can instantly install the
          app. Don't forget to specify custom name, ports &amp; environnement
          variable
        </p>
      </div>
      <div
        className="animate_top sg oi pi zq ml il am cn _m"  data-aos="flip-left"
      style={{
          background: 'var( --ifm-card-background)',
          margin: 10,
          padding: 20,
       
        }}
      >
        {/* <img src="images/icon-06.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b sub-heading">Ready to use!</h4>
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
        className="animate_top sg oi pi zq ml il am cn _m" data-aos="flip-right"
         style={{
          background: 'var( --ifm-card-background)',
          margin: 10,
          padding: 20,
       
        }}
      >
        {/* <img src="images/icon-07.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b sub-heading">Secured</h4>
        <p>
          We offer different layer of security options. Users can choose the
          right security level that suits well for the application as well for
          their needs.
        </p>
      </div>
      <div
        className="animate_top sg oi pi zq ml il am cn _m" data-aos="flip-left"
        style={{
          background: 'var( --ifm-card-background)',
          margin: 10,
          padding: 20,
       
        }}
      >
        {/* <img src="images/icon-05.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b sub-heading">User Friendly</h4>
        <p>
          The plateform is designed in a way that anybody from technical and
          most importantly the non-technical background can easily deploy and
          run their applications securly
        </p>
      </div>
      <div
        className="animate_top sg oi pi zq ml il am cn _m"  data-aos="flip-right"
      style={{
          background: 'var( --ifm-card-background)',
          margin: 10,
          padding: 20,
       
        }}
      >
        {/* <img src="images/icon-06.svg" alt="Icon" /> */}
        <h4 className="ek zj kk wm _b sub-heading">Choice</h4>
        <p>
          Your are not limited to one application from a list of applications
          that are supported.{" "}
        </p>
      </div>
    </div>
  </div>
</section>
  <section className="gj do ir hj sp jr i pg ">
    <div x-data="{ sectionTitle: `We Offer Great Affordable Premium Prices.`}" >
      <div className="animate_top bb ze rj ki xn vq" data-aos="fade-right">
        <h2 x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b cloud-title" >We Offer Great Affordable Premium Prices.</h2>
        <p className="bb on/5 wo/5 hq"  >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
      </div>
    </div>
  <div className="bb ye i z-10 ki xn dr">
    <div className="bb ze ki xn wq">
      <div className="tc_display wf gg qq">
        <div className="animate_left xc_cstm gn gg xc/2 i" >
          <div data-aos="fade-up">
            <img
              src="images/shape-05.svg"
              alt="Shape"
              className="h -ud-left-5 x"
            />
            <img src="images/shape-06.svg" alt="Shape" className="opacity-30 mb-4" />
            <img src="images/storage.png" alt="Storage" className="w-full rounded" />
          </div>
        </div>
        <div className="animate_right xc_cstm xc/2 i" data-aos="fade-down">
          <h2 className="fk vj zp pr kk wm qb cloud-title">About File Storage</h2>
            <p className="text-gray-700 mb-6">
              Instantly install Apps. Easily deploy production-ready apps. No more tinkering with Dockerfiles and manually provisioning databases.
            </p>
          <div className="tc tf yo zf mb">
            <a
              href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google"
              className="ek jk lk gh gi hi rg ml il vc _d _l"  style={{background:'var(--ifm-button-bg)',  color: '#fff'}}
              >
              Get Started Now
            </a>
          </div>
        </div>
      </div>

        <div className="tc_display wf gg qq">
        
        <div className="w-full md:w-1/2 mt-5 md:mt-0" data-aos="fade-left">
            <h2 className="fk vj zp pr kk wm qb cloud-title">About Compute</h2>
            <p className="text-gray-700 mb-6">
              Instantly install Apps. Easily deploy production-ready apps. No more tinkering with Dockerfiles and manually provisioning databases.
            </p>
            <div className="tc tf yo zf mb" >
            <a
              href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google"
              className="ek jk lk gh gi hi rg ml il vc _d _l"  style={{background:'var(--ifm-button-bg)',  color: '#fff'}}
              >
              Get Started Now
            </a>
          </div>
          </div>
        <div className="animate_left xc_cstm gn gg xc/2 i" >
        <div className="w-full md:w-1/2" data-aos="fade-right">
            <img src="images/shape-05.svg" alt="Shape" className="opacity-30 mb-4" />
            <img src="images/compute2.png" alt="Compute" className="w-full rounded" />
          </div>
        </div>
      </div>

       <div className="tc_display wf gg qq">
        <div className="animate_left xc_cstm gn gg xc/2 i" >
          <div data-aos="fade-left">
          
            <img src="images/shape-05.svg" alt="Shape" className="opacity-30 mb-4" />
            <img src="images/compute2.png" alt="Storage" className="w-full rounded" />
          </div>
        </div>
        <div className="animate_right xc_cstm xc/2 i" data-aos="fade-right">
          <h2 className="fk vj zp pr kk wm qb cloud-title">About Cloudfloat</h2>
            <p className="text-gray-700 mb-6">
              Instantly install Apps. Easily deploy production-ready apps. No more tinkering with Dockerfiles and manually provisioning databases.
            </p>
          <div className="tc tf yo zf mb">
            <a
              href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google"
              className="ek jk lk gh gi hi rg ml il vc _d _l"  style={{background:'var(--ifm-button-bg)',  color: '#fff'}}
              >
              Get Started Now
            </a>
          </div>
        </div>
      </div>


    </div>
  </div>
  </section>

<section className="i pg qh rm ji hp"   style={{ background: 'var(--ifm-card-background)' }}>
  <img src="images/shape-11.svg" alt="Shape" className="of h ga ha ke" />
  <img src="images/shape-07.svg" alt="Shape" className="h ia o ae jf" />
  <img src="images/shape-14.svg" alt="Shape" className="h ja ka" />
  <img src="images/shape-15.svg" alt="Shape" className="h q p" />
  <div className="bb ze i va ki xn br">
    <div className="tc uf sn tn xf un gg">
      <div className="animate_top me/5 ln rj" data-aos="fade-up">
        <h2 className="gk vj zp or kk wm hc cloud-title">1000+</h2>
        <p className="ek bk aq">Applications</p>
      </div>
      <div className="animate_top me/5 ln rj" data-aos="fade-down">
        <h2 className="gk vj zp or kk wm hc cloud-title">200+</h2>
        <p className="ek bk aq">Happy Clients</p>
      </div>
      <div className="animate_top me/5 ln rj" data-aos="fade-up">
        <h2 className="gk vj zp or kk wm hc cloud-title">50K+</h2>
        <p className="ek bk aq">Registered Users</p>
      </div>
    </div>
  </div>
</section>

<section id="support" className="i pg fh rm ji gp uq"  style={{ background: 'var(--ifm-card-background)' }}>
  <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
  <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
  <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
  <img src="images/shape-12.svg" alt="Shape" className="h p s" />
  <img src="images/shape-13.svg" alt="Shape" className="h r q" />
     <div className="animate_top bb ze rj ki xn vq" data-aos="fade-left">
          <h2 x-text="" className="fk vj pr kk wm on/5 gq/2 bb _b cloud-title"  >Let’s Stay Connected`</h2>
      <p className="bb on/5 wo/5 hq" x-text="sectionTitleText" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
  
    </div>
  <div className="i va bb ye ki xn wq jb mo">
    <div className="tc uf sn tf rn un zf xl:gap-10">
      <div className="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg" >
        <img src="images/shape-03.svg" alt="Shape" className="h la x wd" />
        <img src="images/shape-06.svg" alt="Shape" className="h la ma ne kf" />
        <div className="fb" data-aos="fade-right">
          <h4 className="wj kk wm cc sub-heading">Email Address</h4>
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
        <div className="fb" data-aos="fade-left">
          <h4 className="wj kk wm cc sub-heading">Office Location</h4>
          <p>78 Avenue Des Champs Elysees</p>
        </div>
        <div className="fb" data-aos="fade-right">
          <h4 className="wj kk wm cc sub-heading">Phone Number</h4>
          <p>
            <a href="#">+33 9 70 44 00 55</a>
          </p>
        </div>
        {/*  <div class="fb">
               <h4 class="wj kk wm cc">Skype Email</h4>
               <p><a href="#"><span class="__cf_email__" data-cfemail="482d30292538242d0831273d3a25292124662b2725">[email&#160;protected]</span></a></p>
            </div> */}
        <span className="rc nd rh tm lc fb" />
        <div data-aos="zoom-in">
          <h4 className="wj kk wm qb sub-heading">Social Media</h4>
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
      <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq" data-aos="zoom-out" >
        <img src="images/connect.png" alt="" />
      </div>
    </div>
  </div>
</section>


    </Layout>
    </div>
  )
}

