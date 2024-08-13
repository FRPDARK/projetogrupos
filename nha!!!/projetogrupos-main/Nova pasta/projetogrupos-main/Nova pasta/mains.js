const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.queryselector(".texto-resultado");

const perguntas = [

    {
    
    enunciado: "uso de IA é saúdavel?",
    
    alternativas: 
        [
            {
               texto:"sim, com certerza",
            },
            {
                texto: "concordo com a primeira alternativa"
            }
        ]
    },

    {
    enunciado: "é correto usar IA nos trabalhos escolares?", 
    alternativas: 
        [
            {    
                texto:"claro que sim",
            },
            {
                texto:"opção à cima está correta"
            } 
        ]
    
    },
     
    {
    enunciado: "Ia resolve problemas diários?", 
    alternativas: 
        [
            {    
                texto:"óbvio",
            },
            {
                texto:"Com certeza a opção à cima"
            }
        ]
        
    },

    {
    enunciado: "pra você a IA foi um grande avanço tecnológico?", 
    alternativas: 
        [
            {
                texto:"sim",
            },
            {
                texto: "não acho maneira de descordar com a opção à cima"
            }
        ]
        
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    caixaAlternativas.textContent="";
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
