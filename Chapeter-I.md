# 📝 Módulo 01
Fundamentos do ReactJS

## 💻 Configurando o ambiente

### :hammer:	Introdução do módulo <br/>
:bulb:	Pergunta: O que é o React e o que conseguimos construir com ele? <br/>
React é uma biblioteca de criação de interfaces, tudo que é interface pode ser construída com ReactJS (interface web, mobile, TV, Realidade Virtual).

-----

### :hammer:	Criando estrutura do projeto <br/>
:bulb:	Pergunta: Como podemos instalar bibliotecas para começar o desenvolvimento de uma estrutura de uma aplicação? <br/>
Utilizadno o yarn ou npm.

yarn init -y (npm init -y) - package.json aonde ficará as bibliotecas de terceiros.

yarn add react

yarn add react-dom - árvores de elementos da nossa aplicação, permite que o react se comunique com a arvore de elementos do HTML

-----

### :hammer:	Configurando Babel <br/>
:bulb:	Pergunta: Qual a função do Babel? Como podemos utilizar ele em nossa aplicação? <br/>
Babel serve para converter o nosso código para uma maneira que todos os browsers e o nosso ambiente da aplicação consiga entender todos os códigos.

yarn add @babel/core @babel/cli @babel/preset-env -D

babel.config.js - 

```
module.exports = {
presets: [
 ‘@babel/preset-env’,
 ‘@babel/preset-react’,
]
}
```

yarn babel src/index.js - -out-file dist/bundle.js

yarn add @babel/preset-react -D

-----

### :hammer:	Configurando Webpack <br/>
:bulb:	Pergunta: Qual a diferença do Webpack e do Babel? O que são os loaders do Webpack? <br/>
Estipula uma série de configurações (loaders) que ensinam a nossa aplicação como ela deve tratar cada um desses tipos de arquivos((.sass - .css), (.png ou .jpg - .png e .jpg que são entendíveis pelo browser)), o webpack pega cada um desses arquivos e converte em arquivos ‘entendíveis’ pelo browser.

yarn add webpack webpack-cli webpack-dev-server -D

webpack.config.js -
```const path = require(’path’) 

module.export = {
entry: path.resolver(__dirname, ‘src’, ‘index.jsx’),

output: {
 path: path.resolve(__dirname, ‘dist’),
 filename: ‘bundle.js’
},

resolve: {
 extensions: [’.js’, ‘.jsx’],
},

module: {
 rules: [
   {
   test: /\.jsx$/,
   exclude: /node_modules/,
   use: ‘babel-loader’
   },
  ],
 }
}
```

yarn add babel-loader -D // Integração entre o babel e o webpack

-----

### :hammer:	Estrutura do ReactJS <br/>
:bulb:	Pergunta: O que é o React-DOM e qual sua importância quando estamos utilizando o React? Como podemos utilizar o React-DOM para exibir nossa aplicação no Browser? <br/>
React-DOM renderiza a nossa aplicação recebendo dois parâmetros, primeiro o que queremos renderizar e exibir em tela, e o segundo é dentro de qual elemento eu desejo renderizar essa informação
```
import { render } from ‘react-dom’;

render (<h1>test</h1>, document.getElementById(’root’))
```

-----

### :hammer:	Servindo HTML estático <br/>
:bulb:	Pergunta: Qual o benefício do html-webpack-plugin? <br/>
Melhorar a estrutura da aplicação e melhorar o fluxo da aplicação.

yarn add html-webpack-pluguin -D
```
const HtmlWebpackPluguin = require(’html-webpack-plugin’)

plugins: [
 new HtmlWebpacjPlugin({
  template: path.resolve(__dirname, ‘public’, ‘index.html’)
})
]
```

-----

### :hammer:	Webpack Dev Server <br/>
:bulb:	Pergunta: Qual a principal funcionalidade do webpack-dev-server? <br/>
Automatizar, o webpack fica observando as alterações nos arquivos, e toda vez que tiver uma alteração ele cria um novo bundle.js e não precisamos ficar se preocupando.

yarn add webpack-dev-server -D
```
devServer: {
 contentBase: path.resolve(__dirname, ‘public’, ‘index.html’)
}
```
yarn webpack serve

-----

### :hammer:	Utilizando source maps <br/>
:bulb:	Pergunta: Qual o benefício da utilização do source maps enquanto desenvolvemos a aplicação? <br/>
Uma forma de conseguir visualizar o código original da nossa aplicação mesmo quanto todo o código está embaralhado no bundle.js.

-----

### :hammer:	Ambiente dev e produção <br/>
:bulb:	Pergunta: O que são as variáveis ambientes, e como podemos utilizar elas em nossa aplicação?  <br/>
Variáveis ambientes são para configurar alguma coisa de acordo o ambiente da minha aplicação.

const isDevelopment = process.env.NODE_ENV ≠ ‘production’;

Temos ambiente de desenvolvimento e de produção, o webpack funciona de forma diferentes, quando estamos em desenvolvimento e quando eu gerar a aplicação para produção.

mode: isDevelopment ? ‘development’ : ‘production’

yarn add cross-env -D
```
“scripts”: {
 “dev”: “webpack serve”,
 “build”: “cross-env NODE_ENV=production webpack”
}
```

------

### :hammer:	Importando arquivos CSS <br/>
:bulb:	Pergunta: Por que é necessário configurar um loader para os nossos arquivos de css? <br/>
O react não entende nada do arquivo que importamos pois não é um arquivo js, e o loader serve para ler o arquivos css.

yarn add style-loader css-loader -D

import ‘./styles/global.css’;

```
module: {
 rules: [
 {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [’style-loader’, ‘css-loader’],
 }
 ]
}
```
### :hammer:	Utilizando SASS <br/>
:bulb:	Pergunta: O que é o SASS e quais benefícios você consegue enxergar na utilização dele? <br/>
SASS é um pré-processador que conseguimos tem funcionalidades a mais como o encadeamento, utilizar mais funções.

yarn add node-sass -D

yarn add sass-loader -D

-----

## 💻 Configurando o ambiente

### :wrench:	Primeiro componente React <br/>
:bulb:	Pergunta: O que são componentes do React e qual sua importância para a organização da nosas aplicação? <br/>
Componentes é como se fosse as tags no HTML, são formas de encapsular uma quantidade de código dentro de um único elemento e ele tem sua própria funcionalidade sua estilização e a sua própria estrutura. São formas da gente organizar a nossa aplicação, dividir a nossa aplicação em vários pedacinhos que quando conectados formam algo maior.

-----

### :wrench:	Propriedades no React <br/>
:bulb:	Pergunta: Como utilizamos as propriedades do React? Qual a utilidade de propriedades no React? <br/>
Propriedades funcionam assim como os atributos funcionam dentro de tags HTML, são informações variáveis que eu posso passar para um componente funcionar de forma diferente.

Podemos acessar todas as propriedades que um componentes recebe através dos argumentos da função (props).

-----

### :wrench:	Estado do componente <br/>
:bulb:	Pergunta: O que é estado no React? Qual é o hook de estado do React? <br/>
Estado é uma variável que o react monitora e toda vez que o valor é alterado ele renderiza novamente em tela.

O hook utilizado é o useState.

-----

### :wrench:	A imutabilidade no React <br/>
:bulb:	Pergunta: O que significa a imutabilidade no React e qual sua importância?  <br/>
Ele prevê que uma variável nunca pode ter o seu valor alterado, ele sempre vai receber um novo valor. Cria um novo espaço na memória contendo a nova informação do que alterar uma informação que já está salva na memória. Garantindo uma melhor performance no react, e fica mais fácil ele entender as novas informações que existem dentro de uma variável.

-----

### :wrench:	Fast Refresh no Webpack <br/>
:bulb:	Pergunta: Como o Fast Refresh beneficia o nosso desenvolvimento? <br/>
Deixa o ambiente de desenvolvimento mais fluido. Quando alteramos algo em nosso componente ele mantem o estado assim não perdendo todo o processo.

yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

-----

## 💻 Chamadas HTTP

### 🌐	Primeiro componente React <br/>
:bulb:	Pergunta: O que o & significa no SCSS? <br/>
O & no scss referencia o próprio elemento.
```
li {
 & + li {
  margin-top: 20px;
 }
}
```

-----

### 🌐	Utilizando o useEffect <br/>
:bulb:	Pergunta: Qual a funcionalidade do useEffect? E como podemos utilizar uma função somente assim que nosso componente for renderizado em tela utizando o useEffect? <br/>
Dispara uma função quando algo acontecer na aplicação. Esse ‘algo’ poderia ser uma variável mudar, e ai conseguimos avisar alguma api que ouve alguma alteração ou até podemos disparar alguma função dentro do sistema.
```
useEffect( () ⇒ {}, [])
```

-----

### 🌐	Listando repositórios <br/>
:bulb:	Pergunta: Como podemos incluir um código JavaScript dentro do retorno do nosso componente React? <br/>
Conseguimos incluir JavaScript dentro do React usando chaves {}.

-----

## 💻 Utilizando TypeScript 

### ⚫	Fundamentos do TypeScript <br/>
:bulb:	Pergunta: Por definição, o que é o TypeScript? Quais os benefícios em utilizá-lo no projeto? <br/>
TypeScript é um superset, um conjunto de funcionalidades que a gente adiciona em cima de uma linguagem.

TypeScipt permite adicionar tipagem, adicionar qual é o formato das informações que estamos esperando dentro dos argumentos da nossa função. ou qual é o formato das informações que estamos esperando retornar de uma função.

-----

### ⚫	TypeScript no ReactJS <br/>
:bulb:	Pergunta: Quais utilizades tem o TypeScript no React? Quais os principais lugares que adicionamos tipagens no React? <br/>
Ele tipa as propriedades que um componente pode receber.

yarn add typescript -D

yarn tsc —init

yarn add @babel/preset-typescript -D

yarn add @types/react-dom -D

yarn add @types/react -D

-----

### ⚫	Componentes com TypeScript <br/>
:bulb:	Pergunta: Qual formato damos para os nossos arquivos React para podermos utilizar o TypeScript junto com o React? <br/>
Formato de .tsx

-----

## 💻 Finalizando a aplicação

### 🔎	Utilizando React DevTools <br/>
:bulb:	Pergunta: Por definição, o que é o TypeScript? Quais os benefícios em utilizá-lo no projeto? <br/>
TypeScript é um superset, um conjunto de funcionalidades que a gente adiciona em cima de uma linguagem.

TypeScipt permite adicionar tipagem, adicionar qual é o formato das informações que estamos esperando dentro dos argumentos da nossa função. ou qual é o formato das informações que estamos esperando retornar de uma função.

-----

### 🔎	Finalização do módulo <br/>
:bulb:	Pergunta: O que você aprendeu até aqui? Quais os pontos principais desse módulo pra você? 💜 <br/>
Aprendi nesse primeiro módulo:

- Como configurar estrutura de um projeto react do 0 com babel, com webpack, com typescript, com css loader ou sass loader.
- Webpack dev server
- Source maps
- Sobre ambiente de desenvolvimento e de produção
- Importação de arquivos css e scss
- Componentização
- Sobre propriedades do componente
- Estado
- Imutabilidade
- Hooks (useState, useEffect)
- Listagem de repositório (api github, map(), key)
- typeScript
- React Devtools
