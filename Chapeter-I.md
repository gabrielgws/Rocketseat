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
### :hammer:	Introdução do módulo <br/>
:bulb:	Pergunta: O que é o React e o que conseguimos construir com ele? <br/>
React é uma biblioteca de criação de interfaces, tudo que é interface pode ser construída com ReactJS (interface web, mobile, TV, Realidade Virtual).

### :hammer:	Introdução do módulo <br/>
:bulb:	Pergunta: O que é o React e o que conseguimos construir com ele? <br/>
React é uma biblioteca de criação de interfaces, tudo que é interface pode ser construída com ReactJS (interface web, mobile, TV, Realidade Virtual).

### :hammer:	Introdução do módulo <br/>
:bulb:	Pergunta: O que é o React e o que conseguimos construir com ele? <br/>
React é uma biblioteca de criação de interfaces, tudo que é interface pode ser construída com ReactJS (interface web, mobile, TV, Realidade Virtual).

### :hammer:	Introdução do módulo <br/>
:bulb:	Pergunta: O que é o React e o que conseguimos construir com ele? <br/>
React é uma biblioteca de criação de interfaces, tudo que é interface pode ser construída com ReactJS (interface web, mobile, TV, Realidade Virtual).

### :hammer:	Introdução do módulo <br/>
:bulb:	Pergunta: O que é o React e o que conseguimos construir com ele? <br/>
React é uma biblioteca de criação de interfaces, tudo que é interface pode ser construída com ReactJS (interface web, mobile, TV, Realidade Virtual).
