'use client';

import { useEffect, useRef, useState } from 'react';
import Brand from './Brand';

const links = [{ href: '#inicio', label: 'Início' }, { href: '#a-jems', label: 'A JEMS' }, { href: '#leiloes', label: 'Leilões' }, { href: '#contactos', label: 'Contactos' }];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
      if (event.key === 'Tab') {
        const items = [trigger.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[];
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    function onResize() { if (window.innerWidth >= 768) { setOpen(false); } }
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);

  return <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-is-open' : ''}`}>
    <div className="header-inner">
      <Brand onNavigate={() => setOpen(false)} />
      <nav aria-label="Navegação principal" className="desktop-nav">
        {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <button ref={trigger} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    <div className="mobile-menu" id="mobile-menu" ref={panel} hidden={!open} role="dialog" aria-modal="true" aria-label="Menu de navegação">
      <p className="eyebrow">O UNIVERSO JEMS</p>
      <nav aria-label="Navegação móvel">{links.map((link, i) => <a href={link.href} key={link.href} onClick={() => { setOpen(false); trigger.current?.focus(); }}><span className="menu-index">0{i + 1}</span>{link.label}<span className="menu-arrow" aria-hidden="true">↗</span></a>)}</nav>
      <p className="mobile-menu-note">Jóias com história.<br />Valor que permanece.</p>
    </div>
  </header>;
}
