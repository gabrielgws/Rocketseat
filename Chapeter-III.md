# 📝 Módulo 01
Fundamentos do Next.js

## 💻 Estrutura da aplicação

### :hammer: Fluxo da aplicação <br/>
:bulb: Pergunta: O que é um CMS? <br/>
Content management system é um painel de administração, para cadastro de informações e servir esses dados através de uma api.

-----

### :hammer: Fundamentos do Next.js <br/>
:bulb: Pergunta: O que difere um SSR(Server-side Rendering) de uma SPA(Single-page Application) ?  <br/>
SPA é uma aplicação de uma só página e sempre são executadas do lado do cliente, no caso, o navegador. O conteúdo é carregado completamente logo na primeira requisição.

Já o SSR oferece ao usuário um carregamento mais eficiente, já que parte da renderização é feita no servidor. Além da possibilidade de melhoria da performance, e ele ajuda a lidar com alguns problemas de SEO, já que parte da aplicação é carregada pelo servidor.

-----

### :hammer: Criando estrutura Next.js <br/>
:bulb: Pergunta: Como funciona o sistema de rotas do Next.js? <br/>
Cada arquivo da nossa aplicação vira uma rota.

yarn create next-app nome-do-app

-----

### :hammer: Adicionando TypeScript <br/>
:bulb: Pergunta: Como podemos conferir se o pacote instalado traz as tipagens do TypeScript? <br/>
[npmjs.com/package/react](http://npmjs.com/package/react) - a gente pode ver as tipagens é disponibilizadas dentro dele.

yarn add typescript @types/react @types/node -D

-----

### :hammer: Estilização com SASS <br/>
:bulb: Pergunta: Qual a principal diferença entre as sitaxes .sass e .scss? <br/>
No formato de .scss você coloca as chaves para indicar aonde uma tag abre e fecha e a .sass não precisa das chaves.

yarn add sass

-----

### :hammer: Configurando fonte externa <br/>
:bulb: Pergunta: Porque não podemos configurar uma fonte externa no arquivo _app.tsx? E qual a alternativa para isso? <br/>
O arquivo _app.tsx é recarregado toda vez que o usuário mudar de tela, assim não sendo viável estar dentro dele pois as fontes externa seria algo para ser carregado uma única vez.

A nossa alternativa é criar um arquivo _document.tsx, ele é recarregado uma única vez, e ele pode ser comparado ao index.html da pasta public do create react-app.

-----

### :hammer: Title dinâmico por página <br/>
:bulb: Pergunta: Qual a principal função do componente <Head>, importado diretamente do Next.js? <br/>
Head é um componente React que podemos colocar em qualquer lugar do nosso componente e tudo o que estiver dentro do Head vai ser anexado ao Head do _document.tsx.

Assim podemos configurar algumas coisas do cabeçalhos da nossa aplicação por página, importante também para SEO.

-----

### :hammer: Estilos globais do app <br/>
:bulb: Pergunta: Porque em um estilo global não usamos .module no nome do arquivo css? <br/>
O .modulo deixa o scss disponível apenas para o componente em que ele foi importado, como o scss é global ele fica de forma tradicional.

-----
  
## 💻 Componentes e páginas

### 🔷 Componente: Header <br/>
:bulb: Pergunta: Como funciona a importação de imagens no Next.js? <br/>
As imagens ficam sempre dentre da pasta public, e usando o barra ( / ) e o nome do arquivo ou a pasta que contém o arquivo.

-----
  
### 🔷 Componente: SignInButton <br/>
:bulb: Pergunta: Porque é melhor criar um componente para o botão SingIn do que apenas colocá-lo dentro do Header? <br/>
O botão tem duas funcionalidades, uma delas é que ele vai controlar a autenticação de usuário e ele terá dois estados logado e não logado, assim somente ele será atualizado quando acionado e não o header todo. 

-----
  
### 🔷 Página Home <br/>
:bulb: Pergunta: O faz a função calc() no css? <br/>
Calcula a largura ou altura de um elemento <div>.

-----
  
### 🔷 Componente: SubscribeButton <br/>
:bulb: Pergunta: O que faz o seletor :hover no CSS? <br/>
Seleciona e estiliza um elemento ao passar o mouse sobre ele.

-----
  
## 💻 Integração com API

### 🌐 Configurando Stripe <br/>
:bulb: Pergunta: O que é um arquivo .env? E qual o diferencial que o Next.js nos traz em relação a esse tipo de arquivo? <br/>
É um arquivo para variáveis ambiente, que elas são diferentes de acordo com o ambiente que nossa aplicação está rodando (quando está rodando em ambiente de desenvolvimento, a api chave seja de test, e assim que mudar mudaria a chave).

O diferencial que p Next.js usa o .env.local (entre outros ex: .env.production, .env.development), e as outras ferramentas usam apenas o .env com todas as variáveis.

-----
  
### 🌐 Consumindo API do Stripe (SSR) <br/>
:bulb: Pergunta: Quais as desvantagens em fazer chamadas API a nível do componente?
Qual a solução para isso? <br/>
A chama API a nível do componente ela só é chamada no browser, pode acontecer de a página ser carrega e as informações não e outro problema seria na indexação do google que não indexaria.

A solução seria fazer uma chamada SSR (no servidor Node.js), chamando dentro de uma page e não em componentes, exportando o getServerSideProps.

-----
  
### 🌐 Static Site Generation (SSG) <br/>
:bulb: Pergunta: Qual a principal diferença entre SSR(Server-side Rendering) e SSG(Static Site Generation)? <br/>
O SSR faz chamadas de quantos usuários acessarem o site, se mil pessoas acessarem o nosso site ele vai fazer mil chamadas na api.

E com o SSG o processo é semelhando ao SSR, a diferença é que o Next.js salva o html de forma estática com o resultado final, assim quando um novo usuário acessar novamente a mesma tela ele retorna o html sem precisar fazer uma nova chamada.

-----
  
## 💻 AA

### 🔷 tt <br/>
:bulb: pp <br/>
rr

-----
