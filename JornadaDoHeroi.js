console.clear();
const prompt = require("prompt-sync")();

const enredo = [
  "Brayan era um garotinho de 6 anos que adorava jogar e assistir pelo celular.",
  "Um belo dia, enquanto aguardava o carrgamento da bateria do seu celular,",
  "olhou pela janela e percebeu uma pipa voando no céu.",
  "O menino ficou encantado com o que viu, então pediu para o seu tio fazer uma pipa pra poder empiná-la.",
  "Imagine que você é o tio do Brayan e terá que ajudá-lo a conseguir a pipa que tanto deseja.",
];

const perguntas = [
  [
    "Você comprou linha, folhas de seda, varetas de bambú e cola?",
    "Ótimo, agora poderá iniciar a construção dá pipa. Você fez a armação com as varetas e a linha?",
    "Você encapou a pipa com as cores preferidas do Brayan?",
    "Você fez a rabiola da pipa?",
    "Você o ajudou a empinar a pipa?",
  ],
  [
    "Que pena! Comprou a linha, pelo menos?",
    "Comprou uma pipa com as cores preferidas do Brayan?",
    "Você fez a rabiola da pipa?",
    "Você ajudou o Brayan a empinar a pipa?",
  ],
  [
    "Pegou a linha emprestada com alguém?",
    "Comprou a pipa e a rabiola?",
    "Você ajudou o Brayan a empinar a pipa?",
  ],
  [
    "Usou a linha de costura da vovó para ajudar o Brayan empinar a pipa?",
    "Pegou emprestado a pipa e a rabiola, e ajudou o Brayan a empiná-la?",
  ],
  ["Usou a linha de anzol do vovô para ajudar o Brayan empinar a pipa?"],
];

const resultado = [
  "Você falha miseravelmente.",
  "Você falha, mas ainda consegue fugir da situação.",
  "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.",
  "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.",
  "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.",
];

// História
let cont = 0;
let historia = "";
while (enredo.length > cont) {
  historia = historia + enredo[cont] + "\n";
  cont++;
}

console.log("A JORNADA DO HERÓI");
console.log();
console.log(historia);
console.log(
  "Para isso, deverá responder a 5 perguntas com (SIM/S) ou (NAO/N)."
);
console.log();

// Perguntas
cont = 0;
let contSim = 0;
let pergunta = "teste";

while (cont + contSim < 5) {
  do {
    pergunta = prompt(
      `Pergunta ${cont + contSim + 1} - ${
        perguntas[cont][contSim]
      } SIM ou NAO (S/N)? `
    );
  } while (
    pergunta.toLowerCase() !== "s" &&
    pergunta.toLowerCase() !== "sim" &&
    pergunta.toLowerCase() !== "n" &&
    pergunta.toLowerCase() !== "nao" &&
    pergunta.toLowerCase() !== "não"
  );
  if (pergunta.toLowerCase() == "sim" || pergunta.toLowerCase() == "s") {
    cont--;
    contSim++;
  }
  cont++;
}

// Resultado
if (contSim < 2) {
  contSim++;
}
console.log();
console.log(resultado[contSim - 1]);
console.log();
