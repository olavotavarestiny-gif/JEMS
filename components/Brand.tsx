import Image from 'next/image';

export default function Brand({ footer = false, onNavigate }: { footer?: boolean; onNavigate?: () => void }) {
  return <a href="#inicio" onClick={onNavigate} className={`brand${footer ? ' brand-footer' : ''}`} aria-label="JEMS — voltar ao início">
    <Image src="/assets/logo.png" alt="JEMS" width={510} height={225} preload={!footer} />
  </a>;
}
