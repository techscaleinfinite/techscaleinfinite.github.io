import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useInView } from 'framer-motion';
import styles from './styles.module.css';

function AnimatedDonut({ percent, color, label, subtitle, delay = 0 }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const step = percent / 80;
      const timer = setInterval(() => {
        start += step;
        if (start >= percent) {
          setCurrent(percent);
          clearInterval(timer);
        } else {
          setCurrent(Math.round(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, percent, delay]);

  const offset = circumference - (current / 100) * circumference;

  return (
    <div ref={ref} className={styles.donutContainer}>
      <div className={styles.donutHeader}>
        <span className={styles.donutIcon} style={{ background: color + '22', color }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="4" />
            <line x1="6" y1="10" x2="18" y2="10" />
            <line x1="6" y1="14" x2="18" y2="14" />
          </svg>
        </span>
        <span className={styles.donutLabel}>{label}</span>
      </div>
      <div className={styles.donutChart}>
        <svg viewBox="0 0 100 100" className={styles.donutSvg}>
          <circle cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="7" />
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className={styles.donutCenter}>
          <span className={styles.donutPercent}>{current}%</span>
          <span className={styles.donutSub}>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}

function LiveTrendOverlay() {
  const canvasRef = useRef(null);
  const dataRef = useRef({ cpu: [], mem: [] });
  const animRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '-20px' });

  const initData = useCallback((count) => {
    const cpu = [], mem = [];
    for (let i = 0; i < count; i++) {
      cpu.push(45 + Math.random() * 20);
      mem.push(20 + Math.random() * 15);
    }
    return { cpu, mem };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor(rect.width / 3);
      if (dataRef.current.cpu.length !== count) {
        dataRef.current = initData(count);
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const drawLine = (data, color, fillColor, w, h, padding) => {
      if (data.length < 2) return;
      const stepX = w / (data.length - 1);
      const graphH = h - padding * 2;

      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, fillColor);
      grad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let i = 0; i < data.length; i++) {
        const x = i * stepX;
        const y = padding + graphH * (1 - data[i] / 100);
        if (i === 0) ctx.lineTo(x, y);
        else {
          const prevX = (i - 1) * stepX;
          const prevY = padding + graphH * (1 - data[i - 1] / 100);
          const cpx = (prevX + x) / 2;
          ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
        }
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i < data.length; i++) {
        const x = i * stepX;
        const y = padding + graphH * (1 - data[i] / 100);
        if (i === 0) ctx.moveTo(x, y);
        else {
          const prevX = (i - 1) * stepX;
          const prevY = padding + graphH * (1 - data[i - 1] / 100);
          const cpx = (prevX + x) / 2;
          ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
        }
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const { cpu, mem } = dataRef.current;
      ctx.clearRect(0, 0, w, h);

      if (cpu.length >= 2) {
        const lastCpu = cpu[cpu.length - 1];
        cpu.push(Math.max(25, Math.min(80, lastCpu + (Math.random() - 0.48) * 4)));
        cpu.shift();

        const lastMem = mem[mem.length - 1];
        mem.push(Math.max(10, Math.min(50, lastMem + (Math.random() - 0.5) * 3)));
        mem.shift();

        const padding = 6;
        drawLine(mem, '#38bdf8', 'rgba(56,189,248,0.15)', w, h, padding);
        drawLine(cpu, '#7c3aed', 'rgba(124,58,237,0.15)', w, h, padding);
      }
      animRef.current = requestAnimationFrame(draw);
    };

    if (isInView) {
      animRef.current = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isInView, initData]);

  return (
    <div ref={containerRef} className={styles.trendContainer}>
      <div className={styles.trendHeader}>
        <span className={styles.trendIcon}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </span>
        <span className={styles.trendLabel}>Live Trend</span>
        <div className={styles.trendLegend}>
          <span className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: '#7c3aed' }} />
            <span>CPU {dataRef.current.cpu?.length > 0 ? Math.round(dataRef.current.cpu[dataRef.current.cpu.length - 1] || 53.6) : 53.6}%</span>
          </span>
          <span className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: '#38bdf8' }} />
            <span>Mem {dataRef.current.mem?.length > 0 ? Math.round(dataRef.current.mem[dataRef.current.mem.length - 1] || 25.1) : 25.1}%</span>
          </span>
        </div>
        <span className={styles.liveTag}>
          <span className={styles.liveDot} />
          live
        </span>
      </div>
      <div className={styles.trendCanvas}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

const UnifiedCloudDashboardVisual = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/images/dashboard.jpg"
        alt="Unified cloud dashboard"
        className={styles.dashboardImage}
      />
      <div className={styles.overlayRow}>
        <AnimatedDonut
          percent={54}
          color="#7c3aed"
          label="CPU Utilization"
          subtitle="215 / 400 mcpu"
          delay={300}
        />
        <AnimatedDonut
          percent={25}
          color="#38bdf8"
          label="Memory Utilization"
          subtitle="128.8 MB / 512 MB"
          delay={600}
        />
        <LiveTrendOverlay />
      </div>
    </div>
  );
};

export default UnifiedCloudDashboardVisual;
