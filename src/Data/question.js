export const javaScript = [
  {
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
        response: "",
      },
    ],
  },
];
