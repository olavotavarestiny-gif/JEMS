'use client';

import { useRef } from 'react';

export default function Contact() {
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <button className="button button-gold" onClick={() => dialog.current?.showModal()}>Entrar em contacto <span aria-hidden="true">↗</span></button>
    <dialog ref={dialog} className="contact-dialog" aria-labelledby="contact-title" onClick={event => { if (event.target === dialog.current) dialog.current?.close(); }}>
      <div className="contact-dialog-inner"><button className="dialog-close" aria-label="Fechar contacto" onClick={() => dialog.current?.close()}>×</button>
        <p className="eyebrow">DEMONSTRAÇÃO · CONTACTOS</p>
        <h2 id="contact-title">O início de<br /><em>uma conversa.</em></h2>
        <p>Esta é uma proposta de experiência digital para a JEMS. Os contactos oficiais da marca serão disponibilizados após confirmação.</p>
        <p className="contact-note">Nesta demonstração não são recolhidos dados nem enviados pedidos de contacto.</p>
        <button className="button button-dark" onClick={() => dialog.current?.close()}>Continuar a descobrir <span aria-hidden="true">↗</span></button>
      </div>
    </dialog>
  </>;
}
