'use client';

import Icon from './Icon';

import { useRef, useState } from 'react';

export default function Film() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);
  const [captions, setCaptions] = useState(false);

  async function play() {
    if (!video.current) return;
    setStarted(true);
    setError(false);
    video.current.controls = true;
    try { await video.current.play(); video.current.focus(); } catch { setError(true); }
  }

  return <>
    <div className={`film-player ${started ? 'has-started' : ''}`}>
      <video ref={video} playsInline preload="none" poster="/brand/logotipo.jpg" aria-label="Filme institucional JEMS — Uma história que permanece" tabIndex={0} onError={() => setError(true)}>
        <source src="/videodamarca/videodamarca.mp4" type="video/mp4" />
        <track kind="captions" src="/captions/filme-pt.vtt" srcLang="pt" label="Português" />
        O seu navegador não suporta vídeo. <a href="/videodamarca/videodamarca.mp4">Abrir o filme JEMS</a>.
      </video>
      {!started && <button className="film-play" onClick={play} aria-label="Reproduzir filme institucional JEMS com som"><span className="play-circle" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m9 5 11 7-11 7V5Z" stroke="currentColor" strokeWidth="1" /></svg></span><span>REPRODUZIR O FILME</span></button>}
    </div>
    <div className="film-caption"><span>JEMS · FILME INSTITUCIONAL</span><button className="text-link" aria-expanded={captions} aria-controls="film-transcript" onClick={() => setCaptions(!captions)}>{captions ? 'Fechar transcrição' : 'Ler transcrição'} <span aria-hidden="true"><Icon name={captions ? 'minus' : 'plus'} /></span></button><span>00:54</span></div>
    {error && <p className="film-error" role="status">Não foi possível iniciar a reprodução. <a href="/videodamarca/videodamarca.mp4">Abrir o ficheiro de vídeo</a>.</p>}
    <div id="film-transcript" className="film-transcript" hidden={!captions}>
      <p className="eyebrow">TEXTO DO FILME</p>
      <p>Criamos medidas para tudo. Peso, pureza, raridade, precisão… Certas coisas não cabem numa medida. A arte que transforma matéria em expressão. As histórias que sobrevivem em cada peça. Que passa de geração em geração. Tornam-se memória. Está a chegar o momento.</p>
      <p>JEMS. Primeiro leilão de alta joalharia em Angola.</p>
      <p className="small-note">O filme é apresentado na sua versão original. As mensagens de lançamento pertencem à campanha e não constituem um anúncio de data de leilão.</p>
    </div>
  </>;
}
