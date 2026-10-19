'use client';

import { useEffect } from 'react';

export default function Reveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => {
      if (element.getBoundingClientRect().top >= window.innerHeight) { element.classList.add('will-reveal'); observer.observe(element); }
    });
    return () => { observer.disconnect(); document.querySelectorAll('.will-reveal').forEach(el => el.classList.remove('will-reveal')); };
  }, []);
  return null;
}
