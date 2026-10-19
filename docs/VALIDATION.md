# Validação da Homepage JEMS

19 de Outubro de 2026. Ambiente local macOS, Node.js 24, Next.js 16.4.2 e Chromium headless. A validação automática complementa a revisão visual; não equivale a certificação de acessibilidade ou a testes em todos os dispositivos reais.

## Compilação

- `npm run build`: compilação de produção e geração estática concluídas.
- `npm run typecheck`: sem erros TypeScript.
- Instalação: 0 vulnerabilidades indicadas pelo npm no momento da instalação.
- Uma única Homepage, com sete secções e um único H1. A rota 404 é a rota padrão do Next.js.

## Interacções verificadas no navegador

- Todos os destinos das ligações internas existem.
- CTA “Explorar leilões” navega para os leilões.
- CTA “Conhecer o conceito” navega para a explicação na mesma página.
- Menu móvel: abertura, fecho, Escape, foco ao abrir, contenção de foco em ambos os sentidos, retorno ao botão, fecho após navegação e fecho ao clicar no logótipo.
- Contacto: abertura da janela demonstrativa, fecho por botão e por Escape. Sem recolha de dados.
- Hero: reprodução automática sem som, pausa manual persistente ao sair e voltar à secção e retoma pelo controlo.
- Preferência de movimento reduzido: hero sem download ou reprodução automática de vídeo; scroll sem animação.
- Filme completo: permanece sem carregar antes da interacção; reprodução voluntária com som, controlos nativos, pausa e alteração de som funcionais.
- Transcrição: abertura e fecho funcionais. Legendas opcionais em português em `public/captions/filme-pt.vtt`.
- Nenhum erro JavaScript de execução ou resposta HTTP falhada observado durante os testes da aplicação.

## Responsividade e revisão visual

Verificadas larguras de 320, 360, 390, 768, 1024 e 1440 px, sem deslocamento horizontal. Capturas integrais de desktop e mobile foram revistas. Enquadramentos, disposição das fotografias, espaçamentos, menu e botões possuem ajustes móveis próprios.

## Acessibilidade

Auditoria axe-core executada para WCAG 2 A/AA e 2.1 AA, em desktop, com o menu móvel aberto e na janela de contacto. Os contrastes detectados na primeira passagem foram corrigidos. Resultado da última passagem: **0 violações automáticas** nos critérios verificados.

Existem texto alternativo para imagens, títulos semânticos, ligação para saltar conteúdo, foco visível, controlos identificados, diálogo nativo e respeito por movimento reduzido. A leitura por leitor de ecrã e dispositivos físicos não foi verificada nesta sessão.

## Desempenho local

- Vídeo do hero: 10 segundos, 617 819 bytes, sem áudio, H.264, `faststart`.
- Imagens editoriais: WebP local, variantes responsivas por Next/Image e carregamento diferido.
- Fontes: Cormorant Garamond e Manrope servidas localmente por Next/Font.
- Filme completo: `preload="none"`; não carrega no acesso inicial.
- Na amostra local da versão de produção, viewport móvel 390 × 844: LCP observado ~0,76 s, CLS ~0,015 e ~1,28 MB transferidos na abertura. É uma medição sintética local de uma execução, não um resultado Lighthouse nem uma previsão para redes móveis reais.

## Pendências editoriais

1. A arte vertical oficial da campanha não foi encontrada. A fotografia vertical fornecida ocupa a composição preparada, sem novos textos sobrepostos. Substituir pela campanha original quando disponível.
2. Confirmar os direitos de utilização da fotografia vertical fornecida antes de publicação externa. As fotografias externas utilizadas estão documentadas em `IMAGE-LICENSES.md`.
3. Contactos e redes sociais oficiais não foram fornecidos. O contacto permanece explicitamente demonstrativo.
4. Conceito e textos sujeitos a aprovação da JEMS. Não são anunciadas peças disponíveis, datas, preços ou condições operacionais.

A entrega permanece local, conforme o briefing. Não foi publicada na internet.
