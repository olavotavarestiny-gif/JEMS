# Publicar a demonstração JEMS na Vercel

## Importar o repositório

1. Aceder a https://vercel.com/new e iniciar sessão com GitHub.
2. Em **Import Git Repository**, seleccionar **olavotavarestiny-gif/JEMS** e clicar em **Import**.
3. Caso o repositório não apareça, usar a opção para configurar a integração GitHub e permitir acesso ao repositório JEMS.
4. Manter as seguintes definições:

| Campo | Valor |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | Raiz do repositório (`./`) |
| Production Branch | `main` |
| Build Command | `npm run build` — detecção automática |
| Output Directory | Predefinição do Next.js, sem alteração |
| Install Command | Predefinição automática do npm |
| Environment Variables | Nenhuma necessária |

5. Clicar em **Deploy** e aguardar a compilação.
6. Quando o estado for **Ready**, abrir a ligação gerada pela Vercel. Essa será a ligação para apresentar a demonstração.

Não é necessário executar `npm start` na Vercel, criar um `vercel.json`, configurar um backend ou adicionar variáveis de ambiente. A integração gere o Next.js, os recursos estáticos e a optimização de imagens.

## Actualizações

Depois da importação, cada novo push para a branch de produção `main` desencadeia uma nova publicação. Outras branches e pull requests podem gerar versões de pré-visualização através da integração GitHub.

## Verificar depois de publicar

- Confirmar que o hero reproduz sem som e que o controlo de pausa funciona.
- Testar a navegação entre as sete secções e o menu no telemóvel.
- Reproduzir o filme completo e confirmar os controlos de som.
- Abrir a janela de contacto demonstrativo.

A Homepage mantém o carácter de demonstração, o contacto demonstrativo e a indicação para não indexar nos motores de pesquisa.

## Documentação oficial

- [Importar um projecto existente](https://vercel.com/docs/getting-started-with-vercel/import)
- [Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Integração com GitHub](https://vercel.com/docs/git/vercel-for-github)
