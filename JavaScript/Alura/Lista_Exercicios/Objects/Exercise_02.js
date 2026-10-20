// Você está criando um painel de configurações para um aplicativo. As configurações são armazenadas em um objeto e você precisa acessar informações específicas para exibição.

// Escreva um programa que:

// Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
// Acesse tema usando notação de ponto.
// Acesse idioma usando notação de colchetes.
// Exiba os dois valores no console.

const configuracoes = {
  tema: 'escuro',
  notificacoes: true,
  idioma: 'pt-BR'
};

console.log("Tema: ", configuracoes.tema);
console.log("Idioma: ", configuracoes.idioma);