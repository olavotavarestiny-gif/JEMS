import Icon from '@/components/Icon';
import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brand from '@/components/Brand';
import Film from '@/components/Film';
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';

const categories = [
  { number: '01', title: 'Anéis', subtitle: 'O gesto que se torna eterno.', image: '/images/anel-diamante.webp', alt: 'Anel com pedra transparente sobre tecido de textura clara — fotografia ilustrativa', className: 'category-ring' },
  { number: '02', title: 'Colares', subtitle: 'Uma presença inesquecível.', image: '/images/colar-esmeralda.webp', alt: 'Pendente verde e pequenas pedras claras sobre uma taça de cerâmica — fotografia ilustrativa', className: 'category-necklace' },
  { number: '03', title: 'Peças singulares', subtitle: 'A expressão do excepcional.', image: '/images/brincos-seda.webp', alt: 'Brincos dourados de linhas escultóricas sobre seda branca — fotografia ilustrativa', className: 'category-earrings' },
];

export default function Home() {
  return <>
    <a className="skip-link" href="#a-jems">Saltar para o conteúdo</a>
    <Header />
    <main>
      <Hero />

      <section id="a-jems" className="manifesto section-ivory" aria-labelledby="manifesto-title">
        <div className="container manifesto-grid">
          <div className="manifesto-visual" data-reveal>
            <div className="image-frame manifesto-image"><Image src="/images/brincos-seda.webp" alt="Composição editorial de brincos dourados sobre seda clara" fill sizes="(max-width: 767px) 88vw, 40vw" /></div>
            <span className="image-caption">A EXPRESSÃO DO INTEMPORAL</span>
          </div>
          <div className="manifesto-copy" data-reveal>
            <p className="eyebrow section-eyebrow"><span className="small-rule" /> A JEMS</p>
            <h2 id="manifesto-title">Há histórias<br />que merecem<br /><em>continuar.</em></h2>
            <p>Cada jóia guarda mais do que beleza. Guarda momentos, memórias e histórias que atravessam gerações.</p>
            <p>Na JEMS, acreditamos que o verdadeiro valor merece permanecer.</p>
            <a className="text-link" href="#essencia">A essência da nossa marca <span aria-hidden="true"><Icon name="arrow-up-right" /></span></a>
          </div>
        </div>
        <div className="manifesto-foot container"><span>JOALHARIA. MEMÓRIA. LEGADO.</span><span>UM NOVO OLHAR SOBRE O VALOR.</span></div>
      </section>

      <section id="leiloes" className="auctions section-ivory" aria-labelledby="auctions-title">
        <div className="container">
          <div className="section-heading auctions-heading" data-reveal><div><p className="eyebrow">O UNIVERSO DOS LEILÕES</p><h2 id="auctions-title">A arte de descobrir<br /><em>o extraordinário.</em></h2></div><p className="heading-aside">Um encontro entre a singularidade<br className="desktop-break" /> de uma peça e a sensibilidade<br className="desktop-break" /> de quem a reconhece.</p></div>
          <div className="category-grid">
            {categories.map(item => <figure className={`category ${item.className}`} key={item.number} data-reveal>
              <div className="image-frame category-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 88vw, (max-width: 1023px) 44vw, 29vw" /></div>
              <figcaption><span className="category-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.subtitle}</p></div><span className="category-mark" aria-hidden="true"><Icon name="diamond" /></span></figcaption>
            </figure>)}
          </div>
          <div className="auctions-bottom"><p className="small-note">Composições ilustrativas. Não representam peças ou leilões disponíveis.</p><a href="#conceito" className="button button-dark">Conhecer o conceito <span aria-hidden="true"><Icon name="arrow-up-right" /></span></a></div>
          <div className="auction-concept" id="conceito" data-reveal>
            <div><p className="eyebrow">DESCOBRIR · APRECIAR · DAR CONTINUIDADE</p><h3>Uma nova história<br />começa num encontro.</h3></div>
            <div><p>Um leilão aproxima peças singulares de pessoas que reconhecem o seu valor. É uma oportunidade para descobrir, apreciar e dar continuidade à história de uma jóia.</p><p className="small-note">Esta apresentação explora o conceito. As condições de participação e os futuros leilões serão comunicados pelos canais oficiais da JEMS.</p></div>
          </div>
        </div>
      </section>

      <section id="galeria" className="gallery section-ivory" aria-labelledby="gallery-title">
        <div className="container">
          <div className="gallery-heading" data-reveal><p className="eyebrow">UM OLHAR MAIS PRÓXIMO</p><h2 id="gallery-title">A beleza está<br /><em>nos detalhes.</em></h2><p>Na luz de uma pedra. Na delicadeza de uma linha.<br />Naquilo que sentimos, antes de dizer.</p></div>
          <div className="editorial-grid">
            <figure className="editorial-large" data-reveal><div className="image-frame"><Image src="/images/macro-esmeralda.webp" alt="Macro de um pendente verde com reflexos de luz em tons de ouro e esmeralda" fill sizes="(max-width: 767px) 88vw, 49vw" /></div><figcaption><span>01 / A PROFUNDIDADE DA COR</span><span>ESMERALDA</span></figcaption></figure>
            <figure className="editorial-small" data-reveal><div className="image-frame"><Image src="/images/composicao-ouro.webp" alt="Composição de fios e pendentes dourados num fundo marfim" fill sizes="(max-width: 767px) 72vw, 30vw" /></div><figcaption><span>02 / A LEVEZA DA FORMA</span><span>OURO</span></figcaption></figure>
            <div className="editorial-quote" data-reveal><span className="quote-rule" /><p>O que é raro<br />não precisa de<br /><em>se explicar.</em></p><span className="eyebrow">BASTA SENTIR.</span></div>
            <figure className="editorial-wide" data-reveal><div className="image-frame"><Image src="/images/gesto-joalharia.webp" alt="Pormenor de mãos com anel verde e colar, numa composição editorial em luz natural" fill sizes="(max-width: 767px) 88vw, 56vw" /></div><figcaption><span>03 / A INTIMIDADE DO GESTO</span><span>JOALHARIA</span></figcaption></figure>
          </div>
          <p className="small-note gallery-note">Fotografia editorial ilustrativa. As imagens não representam inventário oficial da JEMS.</p>
        </div>
      </section>

      <section id="essencia" className="essence" aria-labelledby="essence-title">
        <div className="container essence-grid">
          <div className="essence-copy" data-reveal><p className="eyebrow"><span className="small-rule" /> A ESSÊNCIA JEMS</p><h2 id="essence-title">Não é para<br />chamar atenção.<br /><em>É para permanecer<br />na memória.</em></h2><div className="essence-rule" /><p>Há uma elegância que dispensa palavras.<br />Uma presença que se reconhece.<br />Uma história que continua consigo.</p><a className="text-link" href="#filme">Sentir o universo JEMS <span aria-hidden="true"><Icon name="arrow-up-right" /></span></a></div>
          <figure className="essence-visual" data-reveal><div className="image-frame"><Image src="/assets/editorial.webp" alt="Fotografia vertical fornecida para o projecto: modelo com colar e brincos de pedras verdes" fill sizes="(max-width: 767px) 88vw, 39vw" /></div><figcaption>O VALOR DE UMA PRESENÇA.</figcaption></figure>
        </div>
      </section>

      <section id="filme" className="film" aria-labelledby="film-title">
        <div className="container"><div className="film-heading" data-reveal><p className="eyebrow">O FILME JEMS</p><h2 id="film-title">Uma história<br /><em>que permanece.</em></h2><p>Mais do que ver. Sentir.</p></div><div data-reveal><Film /></div></div>
      </section>

      <section id="contactos" className="invitation" aria-labelledby="invitation-title"><div className="container" data-reveal><p className="eyebrow">O PRÓXIMO CAPÍTULO</p><h2 id="invitation-title">O extraordinário<br />merece ser <em>descoberto.</em></h2><p>Conheça o universo da JEMS e descubra uma nova<br className="desktop-break" /> perspectiva sobre a alta joalharia.</p><Contact /><span className="contact-demo-label">CONTACTO DEMONSTRATIVO</span></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main"><div><Brand footer /><p>Jóias com história.<br />Valor que permanece.</p></div><nav aria-label="Navegação do rodapé"><a href="#inicio">Início</a><a href="#a-jems">A JEMS</a><a href="#leiloes">Leilões</a><a href="#contactos">Contactos</a></nav><a className="back-top text-link" href="#inicio">Voltar ao início <span aria-hidden="true"><Icon name="arrow-up" /></span></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} JEMS. Todos os direitos reservados.</p><p>ANGOLA · ALTA JOALHARIA</p></div><p className="demo-disclosure">Demonstração de Homepage para apresentação. Conceito e textos editoriais sujeitos a aprovação da JEMS. Sem licitações ou pagamentos.</p></div></footer>
    <Reveal />
  </>;
}
