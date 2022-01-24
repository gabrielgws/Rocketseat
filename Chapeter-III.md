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
  
# 📝 Módulo 02
Back-end no front-end
  
## 💻 API Routes no Next.js

### 🔨 API routes no Next.js <br/>
:bulb: Pergunta: Cite um caso de uso da API Routes e qual a sua principal vantagem.  <br/>
Um caso seria quando você está desenvolvendo uma landing page, e precisa salvar contatos do seu formulário. E caso a requisição fosse no front uma pessoa com conhecimentos poderia interceptar essa rota e cadastrar vários e-mails fakes.

E usando o api routes estamos trazendo segurando para o processo de inscrição pra conseguir manter as chaves de acesso ao banco de dados guardadas dentro de um ‘back-end’.

-----
  
### 🔨 Estratégias de autenticação <br/>
:bulb: Pergunta: O Next Auth, uma das estratégias de autenticação citadas, é indicado para quais situações?  <br/>
Quando formos utilizar uma autenticação simples, e quando precisamos de login social (facebook, github, ... ), e quando nós não queremos ficar preocupados com armazenamento de credenciais de acesso do usuário dentro do nosso back-end.

-----
  
### 🔨 Parametrização nas rotas <br/>
:bulb: Pergunta: Como funciona a parametrização das rotas no Next.js? <br/>
Quando utilizamos rotas dinâmicas, e vamos buscar por parâmetros trocamos o nome do arquivo para o que desejamos buscar, exemplo:

user.ts > user/index.ts

Quando queremos buscar um usuário pelo id, colocamos colchetes por volta do parâmetro:

user/[id].ts

-----
  
### 🔨 Autenticação com Next Auth <br/>
:bulb: Pergunta: Uma vez com o Next Auth configurado, como podemos compartilhar informações entre os vários componentes da aplicação? <br/>
Quando nossa aplicação toda precisa de uma informação utilizamos os contextos, nesse caso de dentro do next-auth pra servir as informações para os components se o usuário está autenticado ou não. E então passando para o nosso _app.tsx o provider do next-auth.

yarn add next-auth

-----
  
## 💻 Usando FaunaDB

### 💾 Escolhendo um banco de dados <br/>
:bulb: Pergunta: Porque utilizar um banco de dados como o FaunaDB para essa aplicação? <br/>
Pois essa aplicação não vai depender totalmente de um back-end necessariamente, e isso para aplicações menores, com contextos muito específicos é válido usar um FaunaDB.

-----
  
### 💾 Configurando FaunaDB <br/>
:bulb: Pergunta: Documente o processo de configuração do FaunaDB. <br/>
[https://fauna.com/](https://fauna.com/)
• Login
• CreateDatabase
• Security (configurar a api key) - Salvar a key no .env.local
• New Collection - Criar uma collection de usuários
• New index - ‘user’ ‘user_by_email’ ‘data.email’ ‘unique’ ‘serializes’

yarn add faunadb

fauna.ts

```import { Client } from 'faunadb';
  export const fauna = new Client({
    secret: process.env.FAUNADB_KEY,
})
```

-----
  
### 💾 Configurações no GitHub <br/>
:bulb: Pergunta: Verifique se o email da sua conta no GitHub está público para testar a aplicação. <br/>
Deixar um e-mail publico em configurações no github.

-----
  
### 💾 Salvando usuário no banco <br/>
:bulb: Pergunta: Para que serve o método Create?  <br/>
Create é um método para fazer inserção.

-----
  
### 💾 Chave privada do JWT <br/>
:bulb: Pergunta: Para que serve o pacote node-jose-tools? <br/>
É um pacote para gerar chaves e defini-las como vaiáveis de ambiente.

-----
  
### 💾 Verificando usuário duplicado <br/>
:bulb: Pergunta: Qual a vantagem de criar índices em um banco de dados? <br/>
Nós não buscamos uma informação no banco de dados sem um índice, e o índice otimiza a busca no banco de dados.

-----
  
## 💻 Pagamentos no Stripe

### 💳 Gerando sessão de checkout <br/>
:bulb: Pergunta: Em quais lugares, dentro do Next.js, podemos fazer operações que utilizem credenciais secretas? <br/>
Exsistem três lugares aonde podemos deixar nossas credenciais secretas:

• getServerSideProps (SSR) - Que não fica visível no front end
• getStaticProps - Também não fica visível no front end
• API routes

-----
  
### 💳 Redirecionando para o Stripe <br/>
:bulb: Pergunta: Como podemos deixar uma variável ambiente pública para que ela possa ser acessada diretamente pelo frontend da nossa aplicação? <br/>
Usando o ‘NEXT_PUBLIC’ no inicio do nome da nossa variável.

-----
  
### 💳 Evitando duplicação no Stripe <br/>
:bulb: Pergunta: Como podemos evitar a criação de um mesmo usuário no Stripe? <br/>
Utilizar o nosso banco de dados dentro do faunadb,

-----
  
## 💻 Ouvindo Webhooks

### 🌐 Webhooks do Stripe <br/>
:bulb: Pergunta: O que é um Webhooks e qual a sua principal função?  <br/>
Webhooks  é uma forma de recebimento de informações, que são passadas quando um avento acontece, assim pode receber notificações sobre coisas importantes ao invés de ter que ficar checando-as o tempo todo.

-----
  
### 🌐 Ouvindo eventos do Stripe <br/>
:bulb: Pergunta: Como podemos deixar essa troca de informações, entre a nossa aplicação e uma aplicação terceira, mais segura? <br/>
A aplicação terceira envia um código para sabermos que é ela que está enviando aqueles dados, e se vier um código diferente pode ser algum mal intencionado, assim salvamos esse código em uma variável de ambiente e colocamos no nosso front end.

-----
  
### 🌐 Salvando dados do evento <br/>
:bulb: Pergunta: O que a função Select faz?  <br/>
Como não queremos todos os campos e sim somente a ‘ref’, usamos o Select para informar ao banco de dados qual o campo que desejamos.

-----
  
### 🌐 Ouvindo mais eventos <br/>
:bulb: Pergunta: Quais são os métodos utilizados para atualizar um registro dentro do FaunaDB? Qual a diferença entre eles? <br/>
Os dois métodos são o ‘update’ e ‘replace’, update conseguimos atualizar alguns campos daquele registro e o replace substitui a “subscription” por completo.

-----
  
## 💻 AA

### 🔨 tt <br/>
:bulb: pp <br/>
rr

-----
