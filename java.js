const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAltermativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {

        enunciado: "No âmbito social, você prefere:",
        alternativas:
            [
                {
                    texto: "Escolher Squirtle, porém iniciar a 3° Guerra Mundial e se tornar um dos recrutas..",
                    afirmacao: "Parabéns!!! agora vc tem um Squirtle, mas iniciou uma FODENDO guerra🤡🤡",
                },
                {
                    texto: "Escolher o Charmander, porém a fome mundial triplica.",
                    afirmacao: " Parabéns!!! Você escolheu o Charmander, porém todos passamos fome👌",
                },
            ]
    },
    {

        enunciado: "No âmbito ambiental, você prefere:",
        alternativas:
            [
                {
                    texto: "Poder escolher entre qualquer Pókemon, porém todo mundo terá que abandonar seus animais domesticos na rua do rio Senna.",
                    afirmacao: "Parabéns!!! Você agora pode ter um Pókemon, porém todos irão abandonar seus animais. ",
                },
                {
                    texto: "Você se torna imortal, porém terá que corta 10 árvores da Amazônia todo dia.",
                    afirmacao: "Parabéns!!!! Vc se torna imortal, mas desmatou desmata uma floresta toda semana.",
                },
            ]
    },
    {

        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas:
            [
                {
                    texto: "Se torna a pessoa mais rica do mundo, porém o mundo é dominado pela inteligência artificial.",
                    afirmacao: "Parabéns!!! Vc se tornou a pessoa mais rica do mundo, porém o mundo é uma merda.",
                },
                {
                    texto: "Vc tem um computador que te dá todas as respostas possiveis, mas ele é alimentado por cérebros reais .",
                    afirmacao: "Parabéns!!! vc tem o pc mais inteligentes do mundo, porém precisa matar uma pessoa por dia.",
                },
            ]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas () {
    if(atual >= perguntas.length){
      mostraResultado();
      return;
    }
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAltermativas.textContent="";
     mostraAlternativas();

}
  
 function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativas.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativas));
        caixaAltermativas.appendChild(botaoAlternativa);
    }

  }

function respostaSelecionada (alternativas){
    const afirmacoes = alternativas.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}
function mostraResultado(){
caixaPerguntas.textContent = "Em Resumo, as suas escolhas revelaram que você...";
textoResultado.textContent = historiaFinal;
caixaAltermativas.textContent = " ";
}
mostraPerguntas();