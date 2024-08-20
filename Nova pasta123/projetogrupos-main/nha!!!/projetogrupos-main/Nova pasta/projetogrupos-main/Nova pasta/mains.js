const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "IA ajuda?",
    alternativas:[
        {
            texto: "A) sim",
            afirmacao: "Afirmação 1a alternativa"
        },
        {
            texto: "B) com certeza",
            afirmacao: "Afirmação 2a alternativa"
           
        },
    ]
},

{
    enunciado: "o processo de criação de IA é importante para o desenvolvimento humano?",
    alternativas:[
        {
            texto: "A) óbvio",
            afirmacao: "Afirmação 1a alternativa"
           
        },
        {
            texto: "B) claro que sim",
            afirmacao: "Afirmação 2a alternativa"
           
        },
    ]
},

{
    enunciado: "voce apoia o uso de IA em trabalhos escolares?",
    alternativas:[
        {
            texto: "A) positivo",
            afirmacao: "Afirmação 1a alternativa"          
           
        },
        {
            texto: "B) alternativa à cima",
            afirmacao: "Afirmação 2a alternativa"
           
        },
    ]
},

{
    enunciado: "o uso de IA é benéfico?",
    alternativas:[
        {
            texto: "A) segue a alternativa B",
            afirmacao: "Afirmação 1a alternativa"
           
        },
        {
            texto: "B) óbviomante sim",
            afirmacao: "Afirmação 2a alternativa"
         
        },
    ]
},

]

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