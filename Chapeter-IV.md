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
