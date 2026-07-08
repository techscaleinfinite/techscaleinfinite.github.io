import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  ArrowRight, Play, Cloud, Shield, Clock, Users, Zap,
  Server, HardDrive, Database, Search, Download, Lock,
  UserCheck, LayoutGrid, Mail, MapPin, Phone,
  ChevronRight, Star, Rocket, Globe
} from 'lucide-react';
import InfraStorySection from '../components/InfraStory';
import CloudFloatVisual from '../components/CloudFloatVisual';
import AppShowcaseCards from '../components/AppShowcaseCards';
import PlaystoreShowcase from '../components/PlaystoreShowcase';
import S3StorageVisual from '../components/S3StorageVisual';
import UnifiedCloudDashboardVisual from '../components/UnifiedCloudDashboardVisual';
import ServerOverviewVisual from '../components/ServerOverviewVisual';
import DockerHubVisual from '../components/DockerHubVisual';
import styles from './index.module.css';

const OAUTH_URL = 'https://pods.fltt.fr';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target.replace(/[^0-9]/g, ''));
    let start = 0;
    const increment = num / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const featureCards = [
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'Round-the-clock support for seamless operations. Your applications never sleep, and neither does our infrastructure.',
  },
  {
    icon: Zap,
    title: 'Proactive Solutions',
    desc: 'Quick resolutions to keep you moving forward. AI-powered monitoring detects and resolves issues before they impact you.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Multiple layers of security options. Choose the right security level that suits your application and compliance needs.',
  },
];

const howItWorksCards = [
  {
    step: 1,
    icon: Search,
    title: 'Live Search on Docker Hub',
    desc: 'Search thousands of Docker images in real time directly from Docker Hub. Find the exact application or service you need instantly.',
  },
  {
    step: 2,
    icon: Download,
    title: 'Install in Seconds',
    desc: 'Deploy any application with one click. Just set a name, port, and environment variables — your app is live in seconds, not hours.',
  },
  {
    step: 3,
    icon: Globe,
    title: 'S3 Volume Mount',
    desc: 'Attach S3-compatible storage as persistent volumes for your applications. Your data stays safe across redeployments and scales with you.',
  },
  {
    step: 4,
    icon: Lock,
    title: 'AI Autopilot',
    desc: 'Let AI handle the heavy lifting. Auto-configure ports, environment variables, and resources based on the image — smart deployment with zero guesswork.',
  },
  {
    step: 5,
    icon: UserCheck,
    title: 'Live Monitoring',
    desc: 'Track CPU, memory, and network usage in real time. Get instant visibility into your application health with live performance dashboards.',
  },
  {
    step: 6,
    icon: LayoutGrid,
    title: 'Terminal, Logs & Events',
    desc: 'Access a built-in terminal, stream live logs, and track deployment events — all from your browser. Debug and manage without leaving the dashboard.',
  },
];


const platformSections = [
  {
    title: 'Discover & Deploy Applications in Minutes',
    desc: 'Explore a curated collection of production-ready applications across AI & ML, Databases, DevOps, CMS, Monitoring, Security, and more. Deploy your favorite applications to your CloudFloat environment with just a few clicks—no complex setup required.',
    component: 'playstore',
    icon: HardDrive,
    cta: { label: 'Browse Playstore', href: '/playstore' },
  },
  {
    title: 'Mount Your S3 Storage as Persistent Application Storage',
    desc: 'Connect your S3-compatible storage and use it as persistent storage for your applications. Store files securely, retain data across deployments, and scale seamlessly with reliable object storage.',
    component: 's3storage',
    icon: Server,
    reversed: true,
  },
  {
    title: 'Manage Your Applications with a Unified Cloud Dashboard',
    desc: 'Monitor application health, track CPU and memory utilization, view live performance metrics, manage deployed applications, and access cluster resources—all from a single, intuitive dashboard designed for seamless cloud operations.',
    component: 'unifiedDashboard',
    icon: Database,
  },
  {
    title: 'Complete Server & Application Overview',
    desc: 'Monitor your application\'s health, resource utilization, logs, terminal access, events, and configuration from a single dashboard. View real-time CPU, memory, network usage, deployment details, and manage your application files with an integrated file browser.',
    component: 'serverOverview',
    icon: Server,
    reversed: true,
  },
  {
    title: 'Connect Your Docker Hub Account',
    desc: 'Link your Docker Hub account to seamlessly access and manage your private and public container images. Browse repositories, deploy applications directly from your registry, and streamline your cloud deployment workflow from a single interface.',
    component: 'dockerHub',
    icon: Database,
  },
];

const showcaseApps = [
  'https://cdn.scaleinfinite.fr/app-images-webp/nextcloud.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/wordpress.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/grafana/grafana.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/postgres.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/jenkins.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/nginx.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/redis.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/mysql.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/ghost.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/drupal.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/joomla.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/mongo.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/traefik.webp',
  'https://cdn.scaleinfinite.fr/app-images-webp/caddy.webp',
];

export default function Home() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const loader = document.getElementById('global-loader');
    if (loader) loader.remove();
  }, []);

  return (
    <div className={isHome ? 'is-home' : ''}>
      <Layout description="AI-Managed Solutions for Automated Application Performance">

        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <div className={styles.heroBgGrid} />
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroOrb3} />

          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={styles.heroBadge}>
                <Rocket size={14} />
                <span>AI-Powered Cloud Platform</span>
              </div>

              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>Self-Driving</span>
                <span className={styles.heroTitleGradient}>Cloud Applications</span>
              </h1>

              <p className={styles.heroSubtitle}>
                Put your applications on autopilot mode in our AI-managed
                environment. Deploy, scale, and manage with zero effort —
                powered by Kubernetes and Docker.
              </p>

              <div className={styles.heroCtas}>
                <a href={OAUTH_URL} className={styles.ctaPrimary}>
                  Get Started Free
                  <ArrowRight size={18} />
                </a>
                <Link to="/quick-start" className={styles.ctaSecondary}>
                  <Play size={16} />
                  View Tutorial
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <div className={styles.heroTrustAvatars}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={styles.heroTrustAvatar}>
                      <Users size={14} />
                    </div>
                  ))}
                </div>
                <span className={styles.heroTrustText}>
                  Trusted by <strong>50,000+</strong> developers worldwide
                </span>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={styles.heroDashboard}>
                <div className={styles.heroDashboardHeader}>
                  <div className={styles.heroDashboardDots}>
                    <span /><span /><span />
                  </div>
                  <span className={styles.heroDashboardTitle}>ScaleInfinite Dashboard</span>
                </div>
                <img
                  src="/images/kubernetes-docker-services.png"
                  alt="Kubernetes and Docker services"
                  className={styles.heroDashboardImage}
                />
              </div>

              <motion.div
                className={`${styles.heroFloatingCard} ${styles.heroFloatingCard1}`}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Cloud size={20} className={styles.heroFloatingIcon} />
                <div>
                  <div className={styles.heroFloatingLabel}>Deployments</div>
                  <div className={styles.heroFloatingValue}>1,247</div>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.heroFloatingCard} ${styles.heroFloatingCard2}`}
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Shield size={20} className={styles.heroFloatingIcon} />
                <div>
                  <div className={styles.heroFloatingLabel}>Uptime</div>
                  <div className={styles.heroFloatingValue}>99.9%</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== MUST TRY APPS ===== */}
        <section className={styles.brands}>
          <div className={styles.brandsContainer}>
            <h2 className={styles.brandsLabel}>Must Try Self Hosted Applications</h2>
            <div className={styles.brandsTrack}>
              <div className={styles.brandsSlide}>
                {[...showcaseApps, ...showcaseApps].map((logo, i) => (
                  <img key={i} src={logo} alt="" className={styles.brandLogo} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className={styles.features}>
          <div className={styles.sectionContainer}>
            <AnimatedSection>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionBadge}>Features</span>
                <h2 className={styles.sectionTitle}>
                  Everything you need to deploy with confidence
                </h2>
                <p className={styles.sectionSubtitle}>
                  Our platform provides enterprise-grade tools and support
                  to keep your applications running flawlessly.
                </p>
              </div>
            </AnimatedSection>

            <div className={styles.featuresGrid}>
              {featureCards.map((f, i) => (
                <AnimatedSection key={f.title} delay={i * 0.1}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIconWrap}>
                      <f.icon size={24} />
                    </div>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INFRA STORY ===== */}
        <InfraStorySection />

        {/* ===== WHAT IS CLOUDFLOAT ===== */}
        <section className={styles.twoColSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.twoColGrid}>
              <AnimatedSection className={styles.twoColImage}>
                <div className={styles.imageFrame}>
                  <CloudFloatVisual />
                </div>
              </AnimatedSection>
              <AnimatedSection className={styles.twoColText} delay={0.15}>
                <span className={styles.sectionBadge}>Platform</span>
                <h2 className={styles.twoColTitle}>What is CloudFloat</h2>
                <p className={styles.twoColDesc}>
                  Live search images on Docker Hub and get them up and running
                  in seconds. No more tinkering with Dockerfiles and manually
                  provisioning databases. Deploy production-ready applications
                  with our intelligent deployment platform.
                </p>
                <a href={OAUTH_URL} className={styles.ctaPrimary}>
                  Get Started Free
                  <ArrowRight size={18} />
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ===== APP SHOWCASE ===== */}
        <section className={styles.showcase}>
          <div className={styles.showcaseGrid}>
            <AnimatedSection className={styles.showcaseLeft}>
              <span className={styles.sectionBadge}>Marketplace</span>
              <h2 className={styles.showcaseTitle}>
                Affordable Premium Applications
              </h2>
              <p className={styles.showcaseDesc}>
                Choose from hundreds of ready-to-deploy applications.
                Transparent pricing with no hidden fees.
              </p>
              <Link to="/playstore" className={styles.ctaPrimary}>
                View All Applications
                <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            <div className={styles.showcaseRight}>
              <AppShowcaseCards />
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className={styles.howItWorks}>
          <div className={styles.sectionContainer}>
            <AnimatedSection>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionBadge}>How It Works</span>
                <h2 className={styles.sectionTitle}>
                  Deploy applications in seconds
                </h2>
                <p className={styles.sectionSubtitle}>
                  From search to deploy in simple steps. Our platform makes
                  cloud deployment effortless for everyone.
                </p>
              </div>
            </AnimatedSection>

            <div className={styles.stepsGrid}>
              {howItWorksCards.map((card, i) => (
                <AnimatedSection key={card.step} delay={i * 0.08}>
                  <div className={styles.stepCard}>
                    <div className={styles.stepNumber}>{card.step}</div>
                    <div className={styles.stepIconWrap}>
                      <card.icon size={22} />
                    </div>
                    <h3 className={styles.stepTitle}>{card.title}</h3>
                    <p className={styles.stepDesc}>{card.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PLATFORM SECTIONS ===== */}
        {platformSections.map((section, i) => (
          <section key={section.title} className={styles.twoColSection}>
            <div className={styles.sectionContainer}>
              <div className={`${styles.twoColGrid} ${section.reversed ? styles.twoColReversed : ''}`}>
                <AnimatedSection className={styles.twoColImage}>
                  <div className={styles.imageFrame}>
                    {section.component === 'playstore' ? (
                      <PlaystoreShowcase />
                    ) : section.component === 's3storage' ? (
                      <S3StorageVisual />
                    ) : section.component === 'unifiedDashboard' ? (
                      <UnifiedCloudDashboardVisual />
                    ) : section.component === 'serverOverview' ? (
                      <ServerOverviewVisual />
                    ) : section.component === 'dockerHub' ? (
                      <DockerHubVisual />
                    ) : (
                      <img src={section.image} alt={section.title} />
                    )}
                  </div>
                </AnimatedSection>
                <AnimatedSection className={styles.twoColText} delay={0.15}>
                  <h2 className={styles.twoColTitle}>{section.title}</h2>
                  <p className={styles.twoColDesc}>{section.desc}</p>
                  <a href={section.cta ? section.cta.href : OAUTH_URL} className={styles.ctaPrimary}>
                    {section.cta ? section.cta.label : 'Get Started Free'}
                    <ArrowRight size={18} />
                  </a>
                </AnimatedSection>
              </div>
            </div>
          </section>
        ))}


        {/* ===== CTA SECTION ===== */}
        <section className={styles.ctaSection}>
          <div className={styles.sectionContainer}>
            <AnimatedSection>
              <div className={styles.ctaCard}>
                <div className={styles.ctaCardBg} />
                <h2 className={styles.ctaCardTitle}>
                  Ready to deploy your first application?
                </h2>
                <p className={styles.ctaCardDesc}>
                  Join 50,000+ developers who trust ScaleInfinite for their cloud deployments.
                  Get started in minutes with our free tier.
                </p>
                <div className={styles.ctaCardActions}>
                  <a href={OAUTH_URL} className={styles.ctaPrimaryLight}>
                    Start Deploying Now
                    <ArrowRight size={18} />
                  </a>
                  <Link to="/playstore" className={styles.ctaSecondaryLight}>
                    Browse Playstore
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className={styles.contact}>
          <div className={styles.sectionContainer}>
            <AnimatedSection>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionBadge}>Contact</span>
                <h2 className={styles.sectionTitle}>Let's Stay Connected</h2>
                <p className={styles.sectionSubtitle}>
                  Reach out to us anytime. Our team is here to help you succeed.
                </p>
              </div>
            </AnimatedSection>

            <div className={styles.contactGrid}>
              <AnimatedSection delay={0.1}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIconWrap}>
                    <Mail size={22} />
                  </div>
                  <h4 className={styles.contactLabel}>Email Address</h4>
                  <a href="mailto:info@scaleinfinite.fr" className={styles.contactValue}>
                    info@scaleinfinite.fr
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIconWrap}>
                    <MapPin size={22} />
                  </div>
                  <h4 className={styles.contactLabel}>Office Location</h4>
                  <p className={styles.contactValue}>78 Avenue Des Champs Elysees</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIconWrap}>
                    <Phone size={22} />
                  </div>
                  <h4 className={styles.contactLabel}>Phone Number</h4>
                  <a href="tel:+33970440055" className={styles.contactValue}>
                    +33 9 70 44 00 55
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div className={styles.socialRow}>
                <a href="https://www.instagram.com/scaleinfinite/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <img src="images/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/scaleinfinite" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <img src="images/linkedin.png" alt="LinkedIn" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </Layout>
    </div>
  );
}
