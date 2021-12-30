## 📝 Fundamentos do Next.js

### Introdução do módulo

### Fluxo da aplicação 
Stripe (Pagamentos) 
Github (Autenticação + OAuth) 
FaunaDB (Banco de dados) 
Prismic CMS 

### Fundamentos do Next.js 
SPA (Single-page Application) 
SSR (Server-side Rendering) 

### Criando estrutura Next.js 
yarn create next-app ignews 

### Adicionando estrutura TypeScript 
yarn add typescript @types/react @types/node -D 
Dentro de _app.tsx - importar o (import { AppProps } from 'next/app'; )  

import { AppProps } from 'next/app'; 
function MyApp({ Component, pageProps }: AppProps) { 
return <Component {...pageProps} /> 
} 

export default MyApp 

### Estilização com SASS 
yarn add sass 

### Configurando fonte externa 
_documents.tsx - enquanto o ‘_app.tsx’ é carregado todas as vezes que mudamos de págima, o documents é carrega uma única vez. 

### Title dinâmico por página 

### Estilos globais do app 

## 📝 Componentes e páginas 

### Componentes: Header 

### Componente: SignInButton 
yarn add react-icons 

### Página Home 

### Componente: SubscribeButton 

## 📝 Integração com API 

### Configurando Stripe 
.env.local 
STRIPE_API_KEY=chave 

### Consumindo API do Stripe (SSR) 
yarn add stripe 
