## 📝 Configurando Ambiente 

### ✅ Criando estrutura do Projeto
Projetos utilizando JavaScript, sempre inicializamos o repositório criando o package.json. 
yarn init –y or npm init –y 

Pakage.json aonde fica as nossas bibliotecas de terceiros 
yarn add react 
yarn add react-dom – forma de trabalhar com react na web, html convertido em sintaxe de objeto de um JavaScript 

Pastas do nosso projeto: 
src – Aonde fica todo o nosso código 
public – Aonde fica os arquivos públicos, principalmente o index.html, os favicon, e qualquer arquivo que precisa ser acessado. 

### ✅ Configurando Babel
yarn add @babel/core @babel/cli @babel/preset-env –D 

Criar arquivo na raíz do projeto: babel.config.js : 
module.exports = { 
presets: [ 
'@babel/preset-env', 
['@babel/preset-react', { 
runtime: 'automatic' 
}] 
], 
} 

 

yarn babel src/index.js --out-file dist/bundle.js 

yarn add @babel/preset-react -D  

### ✅ Configurando Webpack
yarn add webpack webpack-cli webpack-dev-server -D 

Criar arquivo na raiz do projeto: webpack.config.js 

const path = require('path'); 
module.exports = { 
mode: 'development', 
entry: path.resolve(__dirname, 'src', 'index.jsx'), 
output: { 
path: path.resolve(__dirname, 'dist'), 
filename: 'bundle.js' 
}, 
resolve: { 
extensions: ['.js', '.jsx'] 
}, 
module: { 
rules: [ 
{ 
test: /\.jsx$/, 
exclude: /node_modules/, 
use: 'babel-loader' 
} 
], 
} 
}; 

yarn add babel-loader –D 

yarn webpack 

### ✅ Estrutura do ReackJS
No nosso index.html não fica a nossa estrutura HTML, apenas fica uma div root, e toda nossa aplicação reat será construída dentro dessa div root 

### Servindo HTML estático
Removendo o script do index.html, e instalar dentro da nossa aplicação o: 
yarn add html-webpack-plugin -D 

Dentro do webpack.config.js adicionar: 
const HtmlWebpackPlugin - require('html-webpack-plugin') 
plugins: [ 
new HtmlWebpackPlugin({ 
template: path.resolve(__dirname, 'public', 'index.html') 
}) 
], 

### ✅ Webpack Dev Server
yarn add webpack-dev-server -D 

Para automatizar as atualizações da nossa aplicação. 

Dentro do webpack.config.js 

devServer: { 
contentBase: path.resolve(__dirname, 'public') 
} 

Depois disso, basta apenas executar: 

yarn webpack serve 

### ✅ Utilizando sorce maps
Uma forma conseguir visualizar o código original da nossa aplicação mesmo quando todo o código da nossa aplicação está embaralhado. 

Adicionar no webpack.config.js: 

devtool: 'eval-source-map', 

### ✅ Ambiente dev e produção
const isDevelopment = process.env.NODE_ENV !== 'production'; 

mode: isDevelopment ? 'development' : 'production', 

devtool: isDevelopment ? 'eval-source-map' : 'source-map', 

Para executar essas funcionalidades de produção ou não no mac ou linux: 
NODE-ENV=production yarn webpack 

Windows é diferente por isso vamos instalar: 
yarn add cross-env -D (definir variáveis ambientes independente do sistema operacional) 

No packge.json - juntos com as dependencias: 
"scripts": { 
"dev": "webpack serve", 
"build": "cross-env NODE_ENV=production webpack" 
}, 

yarn dev – ambiente de desenvolvimento 
yarn build – ambiente de produção   

### ✅ Importando aquivos CSS
Embaixo das rules do webpack.config.js: 
{ 
test: /\.scss$/, 
exclude: /node_modules/, 
use: ['style-loader', 'css-loader', 'sass-loader'], 
} 

yarn add style-loader css-loader -D 

### ✅ Utilizando o SASS
yarn add node-sass -D 
yarn add sass-loader -D 

## 📝 Conceitos importantes 

### ✅ Primeiro componente React
Componente é uma função, com o nome que começa sempre com a primeira letra em maiúsculo e essa função devolve um HTML, e apenas um componente por arquivo. 

### ✅ Propriedades do React: 
Props 

### ✅ Estado do componente
import { useState } from ‘react’; 
const [ counter, setCounter ] = useState(0); 

### ✅ A imutabilidade no React
Prevê que uma variável nunca vai ter o seu valor alterado, na verdade ela sempre vai receber um novo valor. 

usuarios = [‘magrelim12’, ‘Gabiru’, ‘Danilo’]; 

NovoUsuarios = [...usuarios, ‘vj’]; 

### ✅ Fast Refresh no Webpack
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh 

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') 

## 📝 Chamadas HTTP 

### ✅ Estilização da listagem 

### ✅ Utilizando o useEffect 
Nunca deixar sem o segundo parâmetro (se estiver sem, entrara em looping). 

UseEffect ( () =>{}, [] ); 

### ✅ Listando repositórios 

## 📝 Usando TypeScript 

### ✅ Fundamentos do TypeScript 
É um superset, um conjunto de funcionalidades que adicionamos em cima de uma linguagem. 

Type User – sempre definir o tipo com a primeira letra maiúscula 

### ✅ TypeScript no ReactJS 
yarn add typescript -D 

yarn tsc -init 

{ 
"compilerOptions": { 
"lib": [ 
"dom", 
"dom.Iterable", 
"esnext" 
], 
"allowJs": true, 
"jsx": "react-jsx", 
"noEmit": true, 
"strict": true, 
"moduleResolution": "node", 
"resolveJsonModule": true, 
"isolatedModules": true, 
"allowSyntheticDefaultImports": true, 
"esModuleInterop": true, 
"skipLibCheck": true, 
"forceConsistentCasingInFileNames": true 
}, 
"include": ["src"] 
} 

yarn add @babel/preset-typescript -D 

yarn add @types/react-dom -D 

yarn add @types/react -D 

### ✅ Componentes com TypeScript 

## 📝 Finalizando aplicação 

### ✅ Utilizando ReactDevTools 
 
