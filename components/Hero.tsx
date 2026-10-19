'use client';

import Icon from './Icon';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const element = video.current;
    function update() {
      setReduced(media.matches);
      if (!element) return;
      if (media.matches) { element.pause(); }
      else {
        if (!element.getAttribute('src')) { element.src = '/assets/hero.mp4'; element.load(); }
        element.play().catch(() => setPlaying(false));
      }
    }
    update();
    media.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => {
      if (!element) return;
      if (!entry.isIntersecting) element.pause();
      else if (!media.matches && !userPaused.current && element.getAttribute('src')) element.play().catch(() => {});
    }, { threshold: 0.1 });
    if (element) observer.observe(element);
    return () => { media.removeEventListener('change', update); observer.disconnect(); };
  }, []);

  async function toggle() {
    if (!video.current) return;
    if (video.current.paused) {
      if (!video.current.getAttribute('src')) video.current.src = '/assets/hero.mp4';
      userPaused.current = false;
      try { await video.current.play(); } catch { setPlaying(false); }
    } else { userPaused.current = true; video.current.pause(); }
  }

  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <video ref={video} className="hero-video" muted loop playsInline preload="none" poster="/images/hero-poster.webp" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setPlaying(false)} aria-hidden="true" tabIndex={-1} />
    <div className="hero-scrim" />
    <div className="hero-content container">
      <p className="eyebrow hero-eyebrow"><span /> ALTA JOALHARIA · ANGOLA</p>
      <h1 id="hero-title">Jóias com história.<br /><em>Valor que permanece.</em></h1>
      <p className="hero-description">Uma nova experiência de alta joalharia<br className="desktop-break" /> e leilões em Angola.</p>
      <div className="hero-actions"><a href="#leiloes" className="button button-gold">Explorar leilões <span aria-hidden="true"><Icon name="arrow-up-right" /></span></a><a href="#a-jems" className="button button-outline">Descobrir a JEMS</a></div>
    </div>
    <div className="hero-bottom container">
      <a className="scroll-cue" href="#a-jems"><span className="scroll-line" />UM UNIVERSO A DESCOBRIR <span aria-hidden="true"><Icon name="arrow-down" /></span></a>
      <button className="motion-control" onClick={toggle} aria-label={playing ? 'Pausar vídeo de fundo' : 'Reproduzir vídeo de fundo'}><span aria-hidden="true"><Icon name={playing ? 'pause' : 'play'} /></span><span>{playing ? 'Pausar' : reduced ? 'Reproduzir animação' : 'Reproduzir'}</span></button>
    </div>
    <span className="hero-side-note" aria-hidden="true">O VALOR DO INTEMPORAL</span>
  </section>;
}
