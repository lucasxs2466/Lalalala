const caixaprincipal = document.querySelector('.caixa-principal')
const caixaperguntas = document.querySelector('.caixa-perguntas')
const caixaalternativas = document.querySelector('.caixa-alternativas')
const caixaresultados = document.querySelector('.caixa-resultado')
const textoresultados = document.querySelector('.texto-resultado')

const perguntas = [

    {
        enunciado: "no ambito social, voce prefere:",
        alternativas:
            [

                {
                    texto: "1",
                    afirmação: "afirmação",
                },

                {
                    texto: "2",
                    afirmação: "afirmação",
                }]
    },
    {
        enunciado: "no ambito ambiental, voce prefere:",
        alternativas:
            [

                {
                    texto: "3",
                    afirmação: "afirmação",
                },

                {
                    texto: "4",
                    afirmação: "afirmação",
                }]
    },
    {
        enunciado: "no ambito tecnologico, voce prefere:",
        alternativas:
            [

                {
                    texto: "5",
                    afirmação: "afirmação",
                },

                {
                    texto: "6",
                    afirmação: "afirmação",
                }]
    },
]

let atual = 0;
let perguntaAtual;
let hisoriaFinal = "";

function mostraPerguntas (){

    perguntaAtual= perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    caixaalternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const pergunta of perguntaAtual.alternativas)
    { const botaoAlternativa = document.createElement ("button");
        botaoAlternativa.textContent = pergunta.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(pergunta));
        mostraPerguntas();
        caixaalternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(pergunta){
    if(atual >= perguntas.lenght){
        mostraResultado();
        return;        
    }
    const afirmacoes = pergunta.afirmacao;
    hisoriaFinal += afirmacoes +" ";
    atual++;
    mostraPerguntas();

}

function mostraResultado(){
    caixaperguntas.textContent = "";
    textoresultados.textContent = "historiaFinal";
    caixaalternativas.textContent = " ";
}

mostraPerguntas();