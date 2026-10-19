import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], variable: '--font-editorial', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'JEMS — Jóias com história. Valor que permanece.',
  description: 'Uma nova experiência de alta joalharia e leilões em Angola. Descubra o universo JEMS nesta proposta de experiência digital.',
  robots: { index: false, follow: false },
  icons: { icon: '/brand/logotipo.jpg' },
};
export const viewport: Viewport = { themeColor: '#003F37', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-AO" className={`${editorial.variable} ${sans.variable}`}><body>{children}</body></html>;
}
