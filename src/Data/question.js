export const data = [
  {
    category: "Javascript",
    questions: [
      {
        question: "Qual a função ordena um array ?",
        options: [".sort", ".map", ".replace", ".random"],
        tip: "Tem que ter muita sorte",
        response: ".sort",
      },
      {
        question: "Qual opção abaixo define o dia/mes/ano atual",
        options: ["Date.now()", "Date.new()", "new(date)", "date()"],
        tip: "Começa com D maiusculo",
        response: "Date.now()",
      },
      {
        question: "Como você define uma função anônima em JavaScript?",
        options: [
          "() => {}",
          "function() {}",
          "function myFunction() {}",
          "var myFunction = function() {}",
        ],
        tip: "Este tipo de função não tem um nome próprio",
        response: "() => {}",
      },
      {
        question: "O que o método Math.random() retorna?",
        options: [
          "Retorna um número pseudo-aleatório no intervalo de 0 (inclusive) a 1 (exclusive)",
          "um número aleatório entre 0 e 100",
          "Retorna um número aleatório entre 0 e 10",
          "Retorna um número entre 0 e 1",
        ],
        tip: "O valor retornado é abaixo de 1",
        response:
          "Retorna um número pseudo-aleatório no intervalo de 0 (inclusive) a 1 (exclusive)",
      },
      {
        question:
          "Qual função converte uma string em um número inteiro em JavaScript?",
        options: ["parseInt()", "String()", "number()", "Number()"],
        tip: "Abreviação de inteiro",
        response: "parseInt()",
      },
      {
        question:
          "Qual método é usado para adicionar um ou mais elementos ao final de um array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        tip: "Empurrar em inglês",
        response: "push()",
      },
    ],
  },
  {
    category:"CSS",
    questions:[
      {
        question:"Qual propriedade altera a cor da fonte?",
        options:["color", "background-color", "linear-gradient", "transition"],
        tip: "Cor em inglês",
        response: "color"
      },
      {
        question: "Qual propriedade abaixo esta alterando o tamanho da fonte para 16px",
        options: ["font-size: 16px", "font-family: 16px", "font-style: 16px", "font-variant: 16px"],
        tip: "Começa com S",
        response: "font-size: 16px"
      },
      {
        question: "Qual propriedade utilizamos para alterar o estilo quando passamos o mouse por cima ?",
        options: [":hover", "::after", "::before", ":focus"],
        tip: "É quando flutua",
        response:":hover"
      },
      {
        question: "Qual propriedade CSS é usada para alterar a cor de fundo de um elemento?",
        options: ["background-color", "linear-gradient", "color", "background-size"],
        tip: "começa com background",
        response: "background-color"
      },
      {
        question: "Como você centraliza um elemento horizontalmente usando CSS Flexbox?",
        options: ["justify-content: center", "align-items: center", "position: center", "display: flex"],
        tip: " Usa a propriedade de alinhamento do contêiner flexível",
        response: "justify-content: center"
      },
      {
        question: "Qual propriedade CSS você usaria para fazer um elemento ficar fixo no topo da página ao rolar?",
        options: ["position: fixed; top: 0;", "position: absolute; justify-content: start;", "position: fixed", "justify-content: start"],
        tip: "Pense na posição que mantém o elemento sempre visível",
        response: "position: fixed; top: 0;"
      }
    ]
  },
  {
    category: "HTML",
    questions:[
      {
        question: "Qual elemento HTML é usado para criar um link?",
        options: ["<link>", "<a>", "<href>", "<anchor>"],
        tip: "O elemento é abreviação de anchor",
        response: "<a>"
      },
      {
        question: "Qual tag HTML é usada para inserir uma imagem em uma página web?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        tip: " O elemento tem um atributo 'src' que especifica a URL da imagem",
        response: "<img>"
      },
      {
        question: "Qual tag HTML é usada para criar uma lista numerada?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        tip: "A resposta esta na primeira letra da tag",
        response: "<ol>"
      },
      {
        question: "Qual tag HTML é usada para criar uma quebra de linha?",
        options: ["<lb>", "<br>", "<break>", "<line>"],
        tip: "É uma abreviação de break",
        response: "<br>" 
      },
      {
        question: "Qual atributo é usado em uma tag <input> para especificar o tipo de entrada?",
        options: ["type", "input-type", "form-type", "entry"],
        tip: "Esse atributo define se o campo será um texto, senha, email, etc",
        response: "type"
      },
      {
        question: "Qual tag HTML é usada para definir o maior título em uma página web?",
        options: ["<h6>", "<title>", "<h1>", "<head>"],
        tip: "Essa tag representa o título de nível mais alto",
        response: "<h1>"
      },
    ]
  }
];
