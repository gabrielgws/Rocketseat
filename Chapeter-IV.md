# 📝 Módulo 01
Construindo interfaces do futuro

## 💻 Configurando o ambiente

### :hammer:	Interface Declarativa <br/>
:bulb:	Pergunta: O que é uma interface declarativa? Quais as vantagens que ela traz? <br/>
Interface declarativa é quando conseguimos definir a estilização dos elementos direto pela tag do jsx.

As vantagens são que economizamos tempo para ‘codar’ a parte de estilização, assim focando mais no lógico da nossa aplicação.

-----

### :hammer:	Criando projeto Next.js <br/>
:bulb:	Pergunta: Documente todo o processo de criação de um projeto Next.js.  <br/>
• yarn create next-app dashgo;

• Limpar o projeto e trocar as extensões;

• yarn add typescript @types/react @types/node -D

-----

### :hammer:	Configurando Chakra UI <br/>
:bulb:	Pergunta: Para que serve o arquivo theme.ts? <br/>
É o nosso tema do chakra.

yarn add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion

-----

### :hammer:	Configurando fonte <br/>
:bulb:	Pergunta: Quais os três tipos de fontes que podemos customizar dentro do arquivo theme.ts? <br/>
Fonte do corpo que são todos os textos da aplicação, fonte dos cabeçalhos h1,h2,h3 ... e as fonts mono spance que são as fontes pra código.

-----

## 💻 Login e dashboard

### 🔷	Página: Sign in <br/>
:bulb:	Pergunta: Para que serve o elemento Stack do Chakra UI? <br/>
Para quando vamos criar uma pilha de elementos que precisam de um espaçamento entre eles.

-----

### 🔷	Componente: Input <br/>
:bulb:	Pergunta: Qual a grande vantagem, olhando para a estilização, de dividir a aplicação em componentes menores? <br/>
Assim a nossa aplicação fica mais organizada

-----

### 🔷	Criando Header <br/>
:bulb:	Pergunta: De acordo com a documentação do Chakra UI, qual a melhor forma de utilizarmos um ícone dentro da nossa aplicação? <br/>
Utilizarmos o próprio componente de icons do Chakra.

-----

### 🔷	Finalizando Header <br/>
:bulb:	Pergunta: Porque utilizar o Avatar do Chakra UI e não um componente de imagem tradicional? <br/>
Caso o componente não carregue a imagem ou o usuário não tem, ele mostra as iniciais do nome do usuário.

-----

### 🔷	Componente: Sidebar <br/>
:bulb:	Pergunta: Para que serve a tag < aside > ? <br/>
Tag utilizada para sidebar.

-----

### 🔷	Página: Dashboard <br/>
:bulb:	Pergunta: Para que serve a função dynamic() do Next.js? <br/>
Carregar algum componente de uma forma dinâmica.

-----

## 💻 Controle de usuários

### 🛂	Página: Lista de usuários <br/>
:bulb:	Pergunta: Para que serve o elemento Flex do Chakra UI? <br/>
Flex é uma box com ‘display: flex’, que renderiza um elemento div.

-----

### 🛂	Componente: Pagination <br/>
:bulb:	Pergunta: Para que serve a tag strong do HTML? <br/>
Define um texto com forte importância. O conteúdo dentro é normalmente exibido em negrito.

-----

### 🛂	Página: Form de usuário <br/>
:bulb:	Pergunta: Para que serve o elemento Divider do Chakra UI? <br/>
Ele é usado para separar visualmente o conteúdo em uma lista ou grupo.

-----

## 💻 Responsividade

### 💅	Separando componentes <br/>
:bulb:	Pergunta: Porque é importante, sempre que possível, separar um componente em subcomponentes?  <br/>
Como estamos usando estilização em js, quebrando a nossa aplicação deixamos a nossa aplicação mais limpa visualmente, e mais fácil de se dar manutenção.

-----

### 💅	Responsividade no Chakra <br/>
:bulb:	Pergunta: Para que servem os  breakpoints? <br/>
Podemos adicionar estilizações diferentes para cara breakpoints.

-----

### 💅	Header responsivo <br/>
:bulb:	Pergunta: Caso eu queira esconder um componente na versão mobile, por exemplo, o que eu devo fazer? <br/>
Podemos utilizar um hook do Chakra ‘useBreakpointValue’, que quando está na versão mobile ele esconde o componente.
```
const isWideVersion = useBreakpointValue({
base: false,
lg: true
})

return (

{ isWideVersion && <SearchBox />}

)
```

-----

### 💅	Sidebar responsiva <br/>
:bulb:	Pergunta: Porque foi necessário criar um contexto para controlar o funcionamento da Sidebar? <br/>
Como nossa aplicação o nosso ‘abrir’ o sidebar está no header um componente que não temos acesso dentro do sidebar, assim criamos um contexto para compartilhar essa informação de abrir o sidebar.

-----

### 💅	Dashboard responsivo <br/>
:bulb:	Pergunta: O que os dois valores passados em um array para o padding representam? <br/>
Representam valores para mobile e desktop.

-----

### 💅	Listagem responsiva <br/>
:bulb:	Pergunta: No geral, quais as duas alternativas temos para deixar uma tabela responsiva? <br/>
Fazendo um scroll, ou transformar tudo em coluna.

-----

### 💅	Cadastro responsivo <br/>
:bulb:	Pergunta: - <br/>
-

-----

### 💅	Fluxo de navegação <br/>
:bulb:	Pergunta: Para que serve a propriedade passHref que colocamos no Link? <br/>
Quando utilizamos o <Link> e dentro ele não tem a tag do HTML <a> e sim utilizamos outros elementos que renderiza uma âncora, e usando o passHref força o <Link> a enviar um href para o seu filho.

-----

### 💅	Sinalizando link ativo <br/>
:bulb:	Pergunta: Quando devemos usar ReactElement? <br/>
ReactElement é diferente do ReactNode pois ele precisa ser um componente react.

-----
  
## 💻 Formulários e validação

### 📃	Formulários no React <br/>
:bulb:	Pergunta: Qual a diferença entre Controlled components e Uncontrolled components na criação de formulários dentro do React?  <br/>
O controlled ele armazena cada tecla digitada e salva em um estado, e o Uncontrolled acessamos o valor do input só no momento que precisamos utilizar ele.

- Formik
- React hook form

-----
  
### 📃	Atualização React Hook Form <br/>
:bulb:	Pergunta: Confira se você fez as mudanças necessárias depois da atualização da lib.  <br/>
-

-----
  
### 📃	Form de autenticação <br/>
:bulb:	Pergunta: Como podemos fazer um encaminhamento de ref? Qual método utilizamos para isso?  <br/>
Primeiro temos que transformar nosso componente em uma constante, e utilizamos o método que vem de dentro do React ‘forwardRef’ e ele faz um encaminhamento da Ref.

-----
  
### 📃	Validação dos dados <br/>
:bulb:	Pergunta: Qual a função da biblioteca Yup? O que devemos colocar no schema de validação?  <br/>
É uma biblioteca focada em validação de dados, e dentro do schema devemos colocar os campos do nosso formulário:
```
const signInFormSchema = yup.object().shape({
email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
password: yup.string().required('Senha obrigatório'),
})
```

-----
  
### 📃	Form de criação de usuário <br/>
:bulb:	Pergunta: Como podemos validar o campo de confirmação de senha com o Yup?  <br/>
Usando o oneOf, e usando o ref sendo referenciado um campo já validado pelo yup
```
password_confirmation: yup.string().oneOf([
null, yup.ref('password')
], 'As senhas precisam ser iguais'),
```

-----
  
# 📝 Módulo 02
Data fetching e cache local

## 💻 Conceitos do React Query

### 🌐 Data fetching no React <br/>
:bulb: Pergunta: Quais as vantagens de se trabalhar com data fetching e cache local de dados? <br/>
Armazena o estado/dados das requisições, em um período de tempo pré determinado que não tenha probabilidade de mudar, salvamos essas informações para mostrar ao usuário com uma melhor usabilidade.

React Query - biblioteca utilizada

-----
  
### 🌐 Configurando MirageJS  <br/>
:bulb: Pergunta: Pra que serve o método passthrough()? <br/>
Faz com que todas as chamadas para ‘api’ passem pelo MirageJS, caso não forem detectadas pelo MirageJS faz uma chamada para a rota original.

-----
  
### 🌐 Factories e seeds <br/>
:bulb: Pergunta: O que são as factories? <br/>
São formas da gente conseguir gerar dados em massa.

-----
  
### 🌐 Configurando React Query <br/>
:bulb: Pergunta: Para o que a biblioteca React Query é utilizada?  <br/>
É uma das melhores maneiras de buscar, armazenar em cache e atualizar dados remotos. Precisamos apenas dizer à biblioteca onde você precisa buscar os dados, e ela tratará do cache, das atualizações em segundo plano e da atualização dos dados sem nenhum código ou configuração extra.

-----
  
### 🌐 Listagem de usuários <br/>
:bulb: Pergunta: Como podemos converter um campo do tipo string em uma data? <br/>
```
createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),  
```

-----
  
### 🌐 Configurando DevTools <br/>
:bulb: Pergunta: O que difere os estados da biblioteca React Query dos estados do React, por exemplo? <br/>
O ReactQuery ele controla o estado da comunicação do front-end com o servidor, enquanto o estado do react gerenciam o estado da aplicação pelo client.

Stale - Significa obsoleto, quer dizer que se o usuário der foco nessa tela ou sair da tela e precisar carregar os dados novamente o ReactQuery precisa ir na api e buscar os dados novamente.

Fetching - Significa que está no meio do processo do carregamento.

Fresh - Significa que um dado é recente, e não precisamos recarregar esse dado dentro de um certo período.

-----
## 💻 Construindo aplicação

### 🌐 Sinalizando refetch dos dados <br/>
:bulb: Pergunta: Porque é interessante termos dois tipos de loading na aplicação? Em que momento usar cada um deles? <br/>
Loading inicial que ele é mais pesado (o primeiro carregamento), e o loading que apenas sinaliza um refetch mostra que estamos atualizando os dados.
  
-----
  
### 🌐 Configurando Axios <br/>
:bulb: Pergunta: Cite uma vantagem que o axios tem em relação ao fetch. <br/>
Com o axios conseguirmos colocar uma url base, para que todas as requisições partam de um endereço inicial.
  
-----
  
### 🌐 Criando hook de listagem <br/>
:bulb: Pergunta: Quais as possíveis formas de passar o tipo de dado que o useQuery (React Query) retorna? <br/>
Podemos tipar que tipo de dados estamos passando e usar duas opções para passar esses dados.

- no useQuery podemos passar um generic falando que o retorno dele é um array de User.
- Passamos uma Promisse para a função que o useQuery está recebendo, assim ele já vai saber o tipo de dados retornados.
  
-----
  
### 🌐 Lógica de paginação <br/>
:bulb: Pergunta: Quando devemos enviar os dados como headers? Qual a melhor forma de fazer isso no mirage? <br/>
Quando queremos enviar dados que não fazem parte do corpo da requisição (corpo da resposta), fazem parte do resultado da requisição.
  ```
  return new Response (
          200,
          { 'x-total-count': String(total) },
           { users }
        );
  ```
  
-----
  
### 🌐 Componente de paginação <br/>
:bulb: Pergunta: Para absorver melhor o conteúdo, documente como foi feita cada lógica dentro desse componente de paginação.
Ex: Qual a lógica para mostrar a primeira página? A última? Os ... entre elas? <br/>
```
 - lastPage: const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
- previousPage:

const siblingsCount = 1;

function generatePagesArray*(from: number, to: number)*{

return [...new Array(to - from)]

.map(*(_, index)* => {

return from + index + 1;

})

.filter(page => page > 0);

}

const previousPages = currentPage > 1
? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
: []

- nextPage:

const nextPage = currentPage < lastPage
? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
: [] 
 ```
-----
  
### 🌐 Trocando de página <br/>
:bulb: Pergunta: O que é o conceito de prop drilling? <br/>
É passar uma prop do componente pai para o filho, e do filho para outro filho.
  
-----
  
### 🌐 Prefetch de dados <br/>
:bulb: Pergunta: Defina o que é a funcionalidade Prefetch. <br/>
Deixa esses dados armazenados em cache antes mesmo de precisarmos do mesmo.
  
-----
  
### 🌐 Utilizando mutations <br/>
:bulb: Pergunta: Como podemos enviar e/ou receber dados e relacionamentos em uma única  requisição? <br/>
Utilizando de dentro do MirageJS o serializers, ele determina como ele deve interpretar os dados que são enviados. E assim usamos o ActiveModelSerializer para conseguirmos enviar os dados/relacionamentos todos em um dado só.
  
-----
  
### 🌐 SSR no React Query <br/>
:bulb: Pergunta: O que devemos fazer para que um hook funcione, em integração com um SSR, já que ele só pode ser usado dentro de um componente? <br/>
Usando o UseQueryOptions e dentro dele temos o initialData, initialData é qual o valor que queremos inicializar.
  
-----
  
 # 📝 Módulo 03
Autenticação e autorização

## 💻 Configurando ambiente

### 🔧 Estratégia de autenticação <br/>
:bulb: Pergunta: Qual a função de um Refresh Token e porque ele acaba sendo mais seguro? <br/>
Quando front-end detectar que o token foi expirado, ele vai fazer uma nova requisição para o back-end e assim devolvendo um novo jwt e refresh token.
  
-----
  
### 🔧 Configurando API RESTful <br/>
:bulb: Pergunta: Clone e deixe rodando na sua máquina este repositório. <br/>
  
-----
  
## 💻 Autenticação com JWT

### 🔒 Contexto de autenticação <br/>
:bulb: Pergunta: Porque é importante criar o método de autenticação dentro de um contexto? <br/>
Pois a parte de autenticação ela precisa estar disponível em toda a nossa aplicação
  
-----

### 🔒 Configurando cliente do axios <br/>
:bulb: Pergunta: Descreva o que representa cada uma das três partes de um token JWT. <br/>
Vermelho: header, fala qual algoritmo está utilizando e qual o tipo do token.

Roxa: payload, informações que podemos colocar dentro do token.

Azul: verify signature, basicamente uma verificação de assinatura.
  
-----

### 🔒 Salvando dados do usuário <br/>
:bulb: Pergunta: Cite três maneiras que podemos armazenar o token e o refreshToken do usuário mesmo após ele atualizar a página. Qual a melhor delas? <br/>
Podemos armazenar utilizando o localStorage, sessionStorage ou cookies. E o melhor delas é para o quê você vai utilizar, para essa aplicação o melhor é o cookies pois ele pode ser acessando tanto pelo lado do servidor e pelo lado client.
  
-----

### 🔒 Salvando tokens nos cookies <br/>
:bulb: Pergunta: O que a função setCookie() faz? Quais os três parâmetros que ela recebe? <br/>
SetCookie da biblioteca nookies, salva uma nova informação nos cookies.

E os parametros que ela recebe são:

- Contexto da requisição (undefined)
- Nome do cookie
- Valor do token
  
-----

### 🔒 Recuperando estado da autenticação <br/>
:bulb: Pergunta: O que o parseCookies() faz? Como podemos adicionar o header em todas as requisições?  <br/>
parseCookies( ) devolve uma lista de todos os cookies salvos.

Dentro da nossa api, adicionar os headers assim passando para toda nossa aplicação.
  
-----

### 🔒 Realizando refresh do token <br/>
:bulb: Pergunta: O que é o interceptor?  <br/>
Você pode interceptar solicitações ou respostas antes que elas sejam tratadas por then ou catch.
  
-----

### 🔒 Fila de requisições no Axios <br/>
:bulb: Pergunta: Como podemos solucionar o problema em que a requisição para o refresh é feita mais de uma vez? <br/>
Criamos uma variável global e ela vai começar como false, e na chama api /refresh assim quando recebermos a resposta que o token está inválido, vamos atualizar o token e setar a variável como true, assim as outras requisições não vão acontecer.
  
-----

### 🔒 Realizando logout automático <br/>
:bulb: Pergunta: Para que serve a função destroyCookie()? <br/>
Loggout o usuário, e redireciona pra a HomePage.
  ```
  .catch(error => {
        destroyCookie(undefined, 'nextauth.token');
        destroyCookie(undefined, 'nextauth.refreshToken');

        Router.push('/')
      })
  ```
  
-----

## 💻 Autenticação com SSR

### 🔐 Recuperando token no server-side <br/>
:bulb: Pergunta: Como podemos trabalhar com cookies do lado do servidor? <br/>
Utilizando o parseCookies da biblioteca nookies, assim retornando os cookies existentes.
```
  export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (cookies['nextauth.token']) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    }
  }
  
  return {
    props: {}
  }
}
```
  
-----
  
### 🔐 Validando visitante <br/>
:bulb: Pergunta: O que é uma higher-order function? <br/>
É uma função que pode retornar uma função ou receber como parâmetro uma função e executar essa função.
  
-----
  
### 🔐 Validando autenticação (Server) <br/>
:bulb: Pergunta: Como podemos conferir se o código está sendo executado no browser ou no servidor? <br/>
Primeiro mudamos a nossa chamada api para um função e assim passamos um contexto para ela.
```
export const getServerSideProps = withSSRAuth( async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get('/me');

  console.log(response.data);

  return {
    props: {}
  }
})
```
  
-----
  
### 🔐 Redirecionamento pelo servidor <br/>
:bulb: Pergunta: Por que é importante fazermos o redirecionamento pelo servidor quando o token expirar? <br/>
Pois a aplicação vai continuar tendo acesso as informações do usuário, pois ela vai fazer o processo de refresh pelo client.
  
-----
  
## 💻 Controle de permissões

### 🛂 Criando hook de permissão <br/>
:bulb: Pergunta: Para que serve o método every()? <br/>
Ele só vai retornar true caso todas as condições dentro dessa função estiverem satisfeitas.
  
-----
  
### 🛂 Criando componente de permissão <br/>
:bulb: Utilize esse espaço para anotações importantes sobre a aula. <br/>
```
import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

export function Can({ children, permissions, roles }: CanProps) {
  const userCanSeeComponent = useCan({ permissions, roles });

  if(!userCanSeeComponent) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}  
```
  
-----
  
### 🛂 Validando permissões (Server) <br/>
:bulb: Pergunta: Por que não podemos utilizar o hook useCan para fazer a validação das permissões e roles do usuário, diretamente dentro do getServerSideProps? <br/>
Os use dor react só funcionam dentro de componentes.
  
-----
  
### 🛂 Broadcast de logout <br/>
:bulb: Pergunta: Explique o que é o BroadcastChannel, e para que utilizamos ele. <br/>
A interface BroadcastChannel (canal de transmissão) representa um canal com um nome em que qualquer browsing context (en-US)  (contexto de navegação) de uma determinada origin (origem) pode assinar. Permite a comunicação entre diferentes documentos (em diferentes janelas, abas, frames ou iframes) da mesma origin. As mensagens são transmitidas através de um vento message
acionado em todos objetos do tipo BroadcastChannel que estão ouvindo o canal.
  
-----
