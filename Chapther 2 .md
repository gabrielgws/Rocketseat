## 📝 Estrutura da aplicação 

### ✅ Introdução do módulo

### ✅ Estrutura com create-react-app 
yarn create react-app my-app --template typescript 

Limpar todo o nosso projeto, deixando apenas o: 
index.html 
App.tsx - retirar o ‘export default App;’ e colocar o export na function’ 
index.tsx 
react-app-env.d 

No package.jason -> dependencias – tirar todos os @ e o type script e logo abaixo adicionar como devDependencies 

### ✅ Exportando assets do Figma 

### ✅ Instalando Styled Components 
yarn add styled-components 
yarn add @types/styled-components -D 

import styled from 'styled-components'; 

const Title = styled.h1` 
color: #8257e6; 
` 

export function App() { 
return ( 
<div className="App"> 
<Title>Hello Word!</Title> 
</div> 
); 
} 

Aceitam encadeamento como o sass. 

### ✅ Criando estilos globais 
html{ 
@media(max-width: 1080px){ 
font-size: 93.75%; // 15px 
} 
@media(max-width: 720px){ 
font-size: 87.5%; // 14px 
} 
} 

// REM = 1rem = 16px – quando utilizamos 1rem ele é igual a 16px, mas nos dispositivos móveis eles serão 15px ou 14px, e se o usuário estiver com o tamanho da fonte do dispositivo maior, eles vão aumentar. 

body{ 
--webkit-font-smoothing: antialiased; 
} 

// Para deixar a nossa font mais nitida. 

### ✅ Fontes do Google Fonts 

## 📝 Componentização 

### ✅ Componente: Header 

### ✅ Componente: Summary 

### ✅ Componente: TransactionsTable 

## 📝 Consumindo API 

### ✅ Criando front-end sem back-end 
json server 
Miragejs * 
MSW 

### ✅ Configurando MirageJS 
useEffect(() => { 
fetch('http://localhost:3000/api/transactions') 
.then(response => response.json()) 
.then(data => console.log(data)) 
}, []); 

import { createServer } from 'miragejs'; 

createServer({ 
routes() { 
this.namespace = 'api'; 
this.get('/transactions', () => { 
return [ 
{ 
id: 1, 
title: 'Transaction 1', 
amount: 400, 
type: 'deposit', 
category: 'Food', 
createAt: new Date(), 
} 
] 
}); 
} 
}) 

### ✅ Configurando cliente do Axios 
yarn add axios 

## 📝 Modal & Forms 

### ✅ Configurando modal de criação 
react-modal 

yarn add react-modal 
yarn add @types/react-modal -D 

### ✅ Componente: NewTransactionModal 

### ✅ Estrutura do formulário 

### ✅ Estilizando modal 

### ✅ Criando botões de Tipo 
yarn add polished // para escurecer uma cor, dentre outras. 

border-color: ${darken(0.1, '#d7d7d7')}; 

### ✅ Funcionamento dos Botões 
No styled componets, dá para passar propriedades e assim a gente manipular via js no nosso “css”. 

### ✅ Cores dos botões 

### ✅ Salvando dados do form 

### ✅ Inserindo transação na API 

### ✅ Listando transações e seeds 

### ✅ Formatando valores 

## 📝 Contextos e hooks 

### ✅ Introdução à contextos 

### ✅ A Context API no React 

### ✅ Carregando transações 

### ✅ Movendo criação para o context 

### ✅ Finalizando inserção 

### ✅ Calculando resumo 

### ✅ Criando hook 
