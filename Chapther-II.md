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
:bulb: Pergunta: Para o que serve o Fragment que utilizamos no nosso componente App? <br/>
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

## 💻 Consumindo API

### 🌐 Criando front-end sem back-end <br/>
:bulb: Pergunta: Qual o benefício de usar Fake API's no nosso frontend enquanto ainda não temos um  back-end real? <br/>
Pois consumir uma API é diferente de deixar os dados estáticos e vai ‘faltar’ muita coisa do lado do react se deixarmos apenas os dados jogados ali no html, vai faltar a parte de estado, de useEffect, de consumir API e entre outras.

-----

### 🌐 Configurando MirageJS <br/>
:bulb: Pergunta: O que faz o método fetch do JavaScript?  <br/>
O método fetch retorna uma promessa. Se a promoessa retornada for resolve, a função dentro do método then é executada. Essa função contém o código para lidar com os dados recebidos da API.

-----

### 🌐 Configurando cliente do Axios <br/>
:bulb: Pergunta: O que é o axios? E quais benefícios você consegue enxergar no uso do axios no lugar do fetch? <br/>
Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.

O axios consegue interceptar requisições e respostas para a nossa api, adicionar uma regra que a cada requisição enviada para o back-end conseguimos interceptar ela antes de chegar e mudar algum dado pra enviar algum token de autenticação ou informação que tenhamos na aplicação. E na resposta a gente pode verificar se o token está inválido ou não, e assim fazendo o logout do cliente. 

yarn add axios

-----

## 💻 Modal & Forms

### 🚀 Configurando modal de criação <br/>
:bulb: Pergunta: O que faz o Modal.setAppelement('#root') que adicionamos na nossa aplicação? <br/>
É uma questão de acessibilidade, que fala qual o elemento root da nossa aplicação para o modal, e assim ele vai jogar o modal para dentro desse elemento root e não dentro do body.

-----

### 🚀 Componente: NewTransactionModal <br/>
:bulb: Pergunta: Qual foi o motivo de nós declararmos o estado e as funções do Modal no seu componente pai (App)? <br/>
Pois o botão está no Header, e para passarmos via props a função de abrir o modal seria via contexto, porém na nossa aplicação não estamos utilizando e por isso ele ficou no componente pai que fica por toda a nossa aplicação.

-----

### 🚀 Estrutura do formulário <br/>
:bulb: Pergunta: Qual foi o motivo de usarmos o position: relative no conteúdo do modal? <br/>
Para posicionar o botão de fechar no canto da tela, o conteúdo precisa estar relative para colocarmos o botão como absolute.

-----

### 🚀 Estilizando modal <br/>
:bulb: Pergunta: Para o que utilizamos o filter e o transition no CSS do nosso botão de submit no modal? <br/>
Quando passamos o mouse por cima ele diminui a luminosidade e assim criando um efeito ao passar o mouse por cima.

-----

### 🚀 Criando botões de Tipo <br/>
:bulb: Pergunta: Para que utilizamos o pacote polished? <br/>
É uma função js para manipulação de cores.

yarn add polished
```
import { darken } from ‘polished’;

border-color: ${darken(0.1, ‘#d7d7d7’)}; // escurecendo a cor em 10%
```

-----

### 🚀 Funcionamento dos Botões <br/>
:bulb: Pergunta: De quais formas podemos controlar a estilização de forma dinâmica do nosso button com HTML e CSS e de qual forma podemos fazer utilizando funcionalidades do styled-components? <br/>
className={ type == ‘deposit’ ? ‘active’ : ‘ ’ }

Essa é a forma de contraolar a estilização de forma dinâmica do nosso button.

E com o styled fazemos o button como um componentes e passamos uma propriedad.
```
<Button isActive={ type == ‘deposit’}></Button>
```
```
inteface ButtonActive { 

isActive: bollean;

}

export const Button = styled.button<ButtonActive>`

background: ${(props) ⇒ props.isActive ? ‘#eee’ : ‘transparent’};
```

-----

### 🚀 Cores dos botões <br/>
:bulb: Pergunta: Para que serve a funcionalidade transparentize do polished, e qual sua diferença com o uso do opacity? <br/>
Transparentize deixa a cor mais transparente, o opcity aplica no botão inteiro e do que tem dentro dele, já o transparentize aplica apenas na cor.

-----

### 🚀 Salvando dados do form <br/>
:bulb: Pergunta: Porque utilizamos o value do input, mesmo já utilizando o onChange para alterar o valor do nosso estado? <br/>
Para ter acesso ao valor digitado dentro do input.

-----

### 🚀 Inserindo transação na API <br/>
:bulb: Pergunta: Para que utilizamos o método post no cliente do axios que instanciamos para acessar a API? <br/>
Para fazer uma inserção na api.

-----

### 🚀 Listando transações e seeds <br/>
:bulb: Pergunta: Como podemos exibir um array de informações em tela no React? <br/>
Criando um estado, e salvando na nossa chamada api.

Logo após fazendo um map na nossa chamada, e no return o nosso conteúdo html com as informações.

-----

### 🚀 Formatando valores <br/>
:bulb: Pergunta: O que é o Intl e qual sua utilidade? <br/>
```
{new Int.NumberFormat(’pt-BR’, {

style: ‘currency’,

currency: ‘BRL’

}).format(transaction.amount) }

{new Int.DateTimeFormat(’pt-BR’,).format(

new Date(transaction.createdAt)

) }
```

-----

## 💻 Contextos e hooks

### 🔷 Introdução à contextos <br/>
:bulb: Pergunta: O que é o problema de prop-drilling no React? E como o Contexto pode ajudar à evitar isso? <br/>
Prop-driling é quando ficamos passando uma propriedade vários níveis para baixo.

Assim com o contexto podemos compartilhar uma informação ou um estado, para vários componentes da nossa aplicação independente de onde esses contextos estejam.

-----

### 🔷 A Context API no React <br/>
:bulb: Pergunta: Qual é a função responsável por uma criação de um Contexto, e para que serve o Provider que é retornado de dentro dela? <br/>
Para criação de um contexto podemos criar um arquivo js, e assim passando para a nossa aplicação como o hook useContext.

O provider envolve todo os componentes que precisam usar o estado context.

-----

### 🔷 Carregando transações <br/>
:bulb: Pergunta: O que é o children do React e porque precisamos utilizar ele no Provider da nossa Context? <br/>
Children retorna uma coleção de elementos filhos de um elemento. Pois o provider não sabe que pode receber conteúdo dentro dele, assim fazendo com o que ele receba utilizando o children provider.

-----

### 🔷 Movendo criação para o context <br/>
:bulb: Pergunta: Para o que serve o Omit do TypeScript que vimos nessa aula? <br/>
```type TransactionInput = Omit<Transaction, ‘id’ | ‘createdAt’>;```

O TransactionInput vai herdar todo os campos do TRansactions menos o id e o createdAt pois estamos omitindo eles.

-----

### 🔷 Finalizando inserção <br/>
:bulb: Pergunta: Como adicionamos uma informação no final de um vetor do JavaScript respeitando o conceito de imutabilidade do React? <br/>
Seguindo o conceito de imutabilidade você copia toda as informações e adiciona a nova informação no final. Assim ele não altera a informação original, criamos um novo vetor, adicionando no final.
```
setTransactions([
...transactions,
transaction
])
```

-----

### 🔷 Calculando resumo <br/>
:bulb: Pergunta: O que faz o método reduce? Quais parametros e qual o seu retorno? Como adicionar um reduce com um valor inicial? <br/>
Reduce é um método que retorna um único valor: o resultado acumulado da função.
```
const summary = transactions.reduce( (acc, transaction) ⇒ {

if (transactions.type == ‘deposit’ ){

acc.deposits += transaction.amount;

[acc.total](http://acc.total) += transaction.amount;

} else {

acc.withdraws += transaction.amount;

[acc.total](http://acc.total) -= transaction.amount

}

return acc;

}, {

deeposits: 0,

withdraws: 0,

total: 0,

})
```

-----

### 🔷 Criando hook <br/>
:bulb: Pergunta: O que é um hook do React e porque criamos um hook para as nossas transactions? <br/>
Os hooks permitem que os componentes da função tenham acesso ao estado e a outros recursos do React, assim permitindo “conectar” os recursos do React, com métodos de estado e de ciclo de vida.
