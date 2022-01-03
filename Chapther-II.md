# 📝 Módulo 01
Fundamentos do ReactJS

## 💻 Estrutura da aplicação

### :hammer: Estrutura com create-react-app <br/>
:bulb: Pergunta: O que é o create-react-app e para que utilizamos ele? <br/>
É uma estrutura pré configurada. Utilizamos eles para pular algumas etapas, e ir direto ao código.

yarn create react-app dtmoney --template typescript

-----

### :hammer: Instalando Styled Components <br/>
:bulb: Pergunta: Qual o benefício do Styled Componentes e por que utilizamos ele? <br/>
As vantagens de usar o styled-components é que ele suporta o encadeamento de estilos assim como temos no sass, e uma das grandes vantagens que percebemos no começo é que quando utilizamos ele a nossa estilização fica apenas dentro do escopo apenas do componentes que criamos aquela estilização.

yarn add styled-components

yarn add @types/styled-components -D

-----

### :hammer: Criando estilos globais <br/>
:bulb: Pergunta: Qual o benefício de utilizar porcentagem na estilização das fontes na nossa aplicação, principalmente quando lidamos com a responsividade? <br/>
Caso o usuário esteja com a configuração mobile ou desktop de aumentar a fonte ou diminuir o percentual vai aumentar ou diminuir de acordo com a preferência do usuário.

-----

### :hammer: Fontes do Google Fonts <br/>
:bulb: Pergunta: O que é o React e o que conseguimos construir com ele? <br/>
React é uma biblioteca de criação de interfaces, tudo que é interface pode ser construída com ReactJS (interface web, mobile, TV, Realidade Virtual).

-----

## 💻 Componentização

### 🔵 Componente: Header <br/>
:blue: Pergunta: Para o que serve o Fragment que utilizamos no nosso componente App?  <br/>
Fragment é um elemento que não tem nenhuma assinatura, uma tag vazia. Ela é uma div porém ela não é passada para o nosso html.

-----

### 🔵 Componente: Summary <br/>
:bulb: Pergunta: Como podemos definir um grid de 3 colunas com o CSS? <br/>
css:
```
display: grid;
grid-template-colums: repeat (3, 1fr); // 3 colunas de tamanhos iguais
gap: 2rem;
```

-----

### 🔵 Componente: TransactionsTable <br/>
:bulb: Pergunta: O que faz o seletor :first-child no CSS? <br/>
Seleciona e estiliza o primeiro elemento, o primeiro filho do seu pai.

-----
