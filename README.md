# JEMS — Homepage

Proposta de experiência digital de alta joalharia, desenvolvida exclusivamente como Homepage para apresentação local à direcção da JEMS.

## Visualizar

Requer Node.js 20.9 ou superior.

```sh
npm install
npm run dev
```

Abrir **http://127.0.0.1:3000** no navegador. O servidor é local e não publica o projecto na internet. Se a porta estiver ocupada, o Next.js indica outra porta no terminal.

Para visualizar a versão optimizada:

```sh
npm run build
npm start
```

Para validar TypeScript:

```sh
npm run typecheck
```

As fontes são descarregadas de Google Fonts durante a primeira compilação e servidas localmente por `next/font/google`; a primeira compilação requer acesso à internet. Fotografias e vídeos já estão guardados no projecto.

## Publicar na Vercel

Importar este repositório na Vercel com o preset **Next.js**, raiz `./` e branch `main`. Não são necessárias variáveis de ambiente. Ver o guia completo em [VERCEL.md](VERCEL.md).

## Experiência

Sete secções: hero cinematográfico, manifesto, universo dos leilões, galeria editorial, essência JEMS, filme institucional e convite com rodapé. Todas as ligações de navegação são âncoras da mesma página. O menu móvel suporta teclado, foco contido, Escape e fecho ao navegar. O contacto abre uma janela claramente demonstrativa.

O hero utiliza um excerto optimizado de 10 segundos, sem som, com pausa manual e alternativa estática. Em `prefers-reduced-motion`, não descarrega nem reproduz automaticamente o vídeo. O filme original tem reprodução voluntária, controlos nativos e transcrição acessível.

## Estrutura

- `app/page.tsx`: sete secções e conteúdo editorial.
- `app/globals.css`: sistema visual, composições e adaptação móvel.
- `app/layout.tsx`: Cormorant Garamond e Manrope, metadados e idioma.
- `components/`: marca, cabeçalho, hero, filme, contacto e revelações subtis.
- `public/brand/`: logótipo original.
- `public/videodamarca/`: filme original.
- `public/images/`: fotografias fornecidas e fotografias externas licenciadas.
- `public/assets/`: derivações optimizadas de materiais fornecidos.
- `docs/IMAGE-LICENSES.md`: fontes, condições de licença e recursos em falta.
- `docs/VALIDATION.md`: verificações e limitações de apresentação.

Next.js App Router, TypeScript, Tailwind CSS e CSS personalizado. Sem bibliotecas de componentes, backend, pagamentos ou funcionalidades de licitação.

## Conteúdo e materiais pendentes

O ficheiro `designbriefing` encontrava-se vazio. A implementação segue o briefing detalhado enviado na conversa.

O conceito “Jóias com história. Valor que permanece.” e os textos editoriais são propostas sujeitas a aprovação. As imagens externas são ilustrativas e estão identificadas como tal; não representam peças da marca. O filme original contém mensagens de lançamento e não anuncia aqui qualquer data de leilão.

Não foram fornecidos contactos ou redes sociais oficiais, por isso não são inventados. Falta a arte vertical da campanha original: a secção respectiva apresenta a fotografia vertical fornecida, num espaço preparado para substituição pela campanha oficial. Ver documentação de licenças.

A demonstração está marcada `noindex, nofollow`. O projecto está preparado para publicação na Vercel seguindo o guia incluído.
