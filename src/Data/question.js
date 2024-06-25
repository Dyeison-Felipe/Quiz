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
        options: ["Date.new()", "new(date)", "Date.now()", "date()"],
        tip: "Começa com D maiusculo",
        response: "Date.now()",
      },
      {
        question: "Como você define uma função anônima em JavaScript?",
        options: [
          "function() {}",
          "function myFunction() {}",
          "var myFunction = function() {}",
          "() => {}",
        ],
        tip: "Este tipo de função não tem um nome próprio",
        response: "() => {}",
      },
      {
        question: "O que o método Math.random() retorna?",
        options: [
          "um número aleatório entre 0 e 100",
          "Retorna um número aleatório entre 0 e 10",
          "Retorna um número pseudo-aleatório no intervalo de 0 (inclusive) a 1 (exclusive)",
          "Retorna um número entre 0 e 1",
        ],
        tip: "O valor retornado é abaixo de 1",
        response:
          "Retorna um número pseudo-aleatório no intervalo de 0 (inclusive) a 1 (exclusive)",
      },
      {
        question:
          "Qual função converte uma string em um número inteiro em JavaScript?",
        options: [ "String()", "parseInt()", "number()", "Number()"],
        tip: "Abreviação de inteiro",
        response: "parseInt()",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual propriedade altera a cor da fonte?",
        options: ["color", "background-color", "linear-gradient", "transition"],
        tip: "Cor em inglês",
        response: "color",
      },
      {
        question:
          "Qual propriedade abaixo esta alterando o tamanho da fonte para 16px",
        options: [
          "font-family: 16px",
          "font-style: 16px",
          "font-variant: 16px",
          "font-size: 16px",
        ],
        tip: "Começa com S",
        response: "font-size: 16px",
      },
      {
        question:
          "Qual propriedade utilizamos para alterar o estilo quando passamos o mouse por cima ?",
        options: [ "::after", "::before", ":hover", ":focus"],
        tip: "É quando flutua",
        response: ":hover",
      },
      {
        question:
          "Como você centraliza um elemento horizontalmente usando CSS Flexbox?",
        options: [
          "align-items: center",
          "position: center",
          "display: flex",
          "justify-content: center",
        ],
        tip: " Usa a propriedade de alinhamento do contêiner flexível",
        response: "justify-content: center",
      },
      {
        question:
          "Qual propriedade CSS você usaria para fazer um elemento ficar fixo no topo da página ao rolar?",
        options: [
          "position: absolute; justify-content: start;",
          "position: fixed; top: 0;",
          "position: fixed",
          "justify-content: start",
        ],
        tip: "Pense na posição que mantém o elemento sempre visível",
        response: "position: fixed; top: 0;",
      },
    ],
  },
  {
    category: "HTML",
    questions: [
      {
        question: "Qual elemento HTML é usado para criar um link?",
        options: ["<link>", "<a>", "<href>", "<anchor>"],
        tip: "O elemento é abreviação de anchor",
        response: "<a>",
      },
      {
        question:
          "Qual tag HTML é usada para inserir uma imagem em uma página web?",
        options: [ "<image>", "<img>", "<pic>", "<src>"],
        tip: " O elemento tem um atributo 'src' que especifica a URL da imagem",
        response: "<img>",
      },
      {
        question: "Qual tag HTML é usada para criar uma lista numerada?",
        options: [ "<ul>", "<li>", "<list>", "<ol>",],
        tip: "A resposta esta na primeira letra da tag",
        response: "<ol>",
      },
      {
        question: "Qual tag HTML é usada para criar uma quebra de linha?",
        options: ["<lb>", "<br>", "<break>", "<line>"],
        tip: "É uma abreviação de break",
        response: "<br>",
      },
      {
        question:
          "Qual atributo é usado em uma tag <input> para especificar o tipo de entrada?",
        options: [ "input-type", "form-type", "entry", "type",],
        tip: "Esse atributo define se o campo será um texto, senha, email, etc",
        response: "type",
      },
    ],
  },
];
