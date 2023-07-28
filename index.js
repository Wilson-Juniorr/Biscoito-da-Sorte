const clickImgInteiro = document.querySelector('.screen1 img');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const divFrase = document.querySelector('.frase')
const button = document.querySelector('.screen2 button')

//Eventos
clickImgInteiro.addEventListener('click', addClassHide)
button.addEventListener('click', classHide)

function addClassHide () {
  classHide()
  divFrase.innerText = gerarFrasesAleatorias()
}

function classHide () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

const frases = [
  "Acredite em você mesmo, e tudo será possível.",
  "O sucesso começa com a vontade de tentar.",
  "Sonhe grande, trabalhe duro, alcance seus objetivos.",
  "Seja a mudança que você quer ver no mundo.",
  "Nunca é tarde demais para recomeçar.",
  "A força não vem do físico, mas de uma vontade inabalável.",
  "O fracasso é uma oportunidade para começar de novo, com mais inteligência.",
  "Pense positivo e coisas positivas acontecerão.",
  "Você é capaz de mais do que imagina.",
  "Supere seus limites, supere a si mesmo.",
  "Acredite que é possível, e você estará no meio do caminho.",
  "A jornada de mil milhas começa com um simples passo.",
  "Não deixe que o medo impeça você de alcançar seus sonhos.",
  "As dificuldades são oportunidades disfarçadas.",
  "Seja persistente, não desista no primeiro obstáculo.",
  "Acredite, lute, conquiste, e prove a si mesmo que é capaz.",
  "A única limitação é aquela que você coloca em sua mente.",
  "Transforme cada desafio em uma chance de crescimento.",
  "Nada é impossível para uma mente determinada.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "Se você quer voar, desista de tudo que pesa.",
  "A persistência realiza o impossível.",
  "A jornada de mil milhas começa com um único passo.",
  "Faça o que você pode, com o que você tem, onde você está.",
  "O sucesso não é o resultado de um único dia, é o resultado de esforços constantes.",
  "Você é mais forte do que imagina. Acredite em si mesmo e surpreenda-se.",
];
function gerarFrasesAleatorias() {
  let indiceAleatorio = Math.floor(Math.random() * frases.length);
  return frases[indiceAleatorio];
}

