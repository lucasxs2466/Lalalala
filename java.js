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
                    texto: "Sorrir com o Patati, porém aumentar a desigualdade no mundo fazendo com que todos entrem em conflitos.",
                    afirmacao: "Parabéns!!! agora vc sorriu com o patati e aumentou a desigualdade no mundo🤡🤡",
                },
                {
                    texto: "Brincar com o Patatá, porém iniciar a 3° Guerra Mundial e se tornar um dos recrutas.",
                    afirmacao: " Parabéns!!! Você conseguiu brincar com o Patatá, porém condenouo mundo intero à morte, inclusive você",
                },
            ]
    },
    {

        enunciado: "No âmbito ambiental, você prefere:",
        alternativas:
            [
                {
                    texto: "Poder escolher o que vai comer para o resto da vida, porém todo mundo terá que beber da água do Rio Senna todo sujo, poluído, podre, capenga, estragado, pela manhã.",
                    afirmacao: "Parabéns!!! Você agora pode comer tudo o que quer, mas todo vai ter que viver bebendo água podre ",
                },
                {
                    texto: "Se tornar filho(a) da Rihanna, porém desmatar a Amazônia inteira junto do Bolsonaro nos cavalos da cavalaria com um isqueiro bic e uma tesoura sem um extintor.",
                    afirmacao: "Parabéns!!!! Vc nasceu filho da Rihanna, mas desmatou toda a Amazônia junto do Bolsonaro com apenas um inqueiro e uma tesoura sem nenhum extintor",
                },
            ]
    },
    {

        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas:
            [
                {
                    texto: "Se torna a pessoa mais rica do mundo, porém se casar com o Elon Musk e viver com ele sem poder se separar para o resto de suas vidas.",
                    afirmacao: "Parabéns!!! Vc se tornou a pessoa mais rica do mundo, porém se casou com o velho nojento do Elon Musk",
                },
                {
                    texto: "Descobrir como funciona a inteligência artificial, porém terá que fazer parte de um trisal com a Taylor Swift e o Kanye West e escutar eles cantando todo dia e noite no banho juntos.",
                    afirmacao: "Parabéns!!! Vc descubriu como funciona a inteligência artifcial, porém está participando de um trisal com a Taylor e o Kanye West e escuta eles cantando toda noite juntos no banho.",
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