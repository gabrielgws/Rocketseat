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
