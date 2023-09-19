const containerQuestoes = document.querySelector(".caixaQuiz")
const quizInicial = document.querySelector(".quiz-inicial")
const containerResposta = document.querySelector(".container-respostas")
const botaoProximaQuestao = document.querySelector(".proxima-questao")
const textoQuestao = document.querySelector(".questao")
const explicacaoQuestao = document.querySelector(".explicacao-questao")
const explicacaoTexto = document.querySelector(".explicacao-texto")
const explicacaoTitulo = document.querySelector(".explicacao-titulo")
const quizFim = document.querySelector(".Quiz-final")
const respostaFimCorreta = document.querySelector(".correto")
const respostaFimIncorreta = document.querySelector(".errado")
const gradeQuestoes = document.querySelector(".grade-numeros")
const questoes = document.querySelector('.questoes')




//variavel para saber qual pergunta o usuario está
let indexQuestaoAtual = 0;

//variavel com o total de questoes corretas 
let totalCorreto = 0;

botaoProximaQuestao.addEventListener('click', mostrarProximaQuestao)



function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
}


function ComecarJogo(){
  embaralharArray(questao)
  questao.splice(10, 3)
  indexQuestaoAtual = 0;
  totalCorreto = 0;
  mostrarProximaQuestao()
}



function reiniciarEstado(){
  while(containerResposta.firstChild){
    containerResposta.removeChild(containerResposta.firstChild)
    botaoProximaQuestao.classList.add("oculto")
  }

  explicacaoQuestao.classList.add("oculto")

}


function mostrarProximaQuestao(){
  reiniciarEstado()

  if (questao.length === indexQuestaoAtual){
    return fimJogo()
  }

  textoQuestao.textContent = questao[indexQuestaoAtual].Questao

  questao[indexQuestaoAtual].respostas.forEach(resposta => {
    const novaResposta = document.createElement("button")
    novaResposta.classList.add("botao","resposta")
    novaResposta.textContent = resposta.texto
    
    if (resposta.correto){
      novaResposta.dataset.correto = resposta.correto
    }

    containerResposta.appendChild(novaResposta)

    novaResposta.addEventListener("click", selecionarResposta)

  })
}



function selecionarResposta(evento){
  const respostaClicada = evento.target

  if(respostaClicada.dataset.correto){
    totalCorreto++
  }

  if (respostaClicada.dataset.correto){
    gradeQuestoes.innerHTML += `
      <div class="numeros">${indexQuestaoAtual + 1})
        <div class="grade-respostas"> 
          <p class="questoes-corretas"><img src="../../../images/ilustrações/quiz/certo-errado/resp-certa-quiz.png" alt=""></p>
        </div>`
  } else {
    gradeQuestoes.innerHTML += `
      <div class="numeros">${indexQuestaoAtual + 1})
        <div class="grade-respostas"> 
          <p class="incorreto"><img src="../../../images/ilustrações/quiz/certo-errado/resp-errada-quiz.png" alt=""></p>
      </div>`
  }

  document.querySelectorAll(".resposta").forEach(botao => {
    botao.disabled = true

    if (botao.dataset.correto){
      botao.classList.add("correto")
      
     
    } else {
      botao.classList.add("incorreto")
      
    }

    
  })

  explicacaoQuestao.classList.remove("oculto")
  botaoProximaQuestao.classList.remove("oculto")
  const letra = questao[indexQuestaoAtual].letra
  const justificação = questao[indexQuestaoAtual].justificativa

  explicacaoTitulo.textContent = `RESPOSTA CERTA: ${letra}`
  explicacaoTexto.textContent = `${justificação}`


  indexQuestaoAtual++
}





function fimJogo(){
  containerQuestoes.classList.add("oculto")
  quizFim.classList.remove("oculto")

  //const answerC = document.querySelector(".AnswerC") //respostas certas 
  //const answerInc = document.querySelector(".AnswerInc") //respostas erradas
  const totalQuestoes = 10
  const totalIncorreto = totalQuestoes - totalCorreto
  respostaFimCorreta.innerHTML = `
  <a href="#" class="correto id="fim-correto">Respostas certas: <span>${totalCorreto}</span></a>`
  respostaFimIncorreta.innerHTML = `<a href="#" class="incorreto id="fim-incorreto">Respostas erradas: <span>${totalIncorreto}</span></a>`

}






// as questoes do quiz:
const questao = [

  {
  Questao: "Qual é a principal causa da perda de biodiversidade global?",
  respostas: [
    { texto: "A) Poluição.", correto: false },
    { texto: "B) Mudança climática.", correto: false},
    { texto: "C) Destruição de habitat.", correto: true}
  ],
  justificativa: " C) A destruição do habitat é a principal causa da perda de biodiversidade global, resultante da conversão de áreas naturais em áreas urbanas, agrícolas e industriais.",
  letra:'c',
  },
  
  {Questao: "O que é a sobreexploração de recursos naturais?",
  respostas: [
    { texto: "A) Uso sustentável de recursos.", correto: false },
    { texto: "B) Exploração excessiva de recursos.", correto: true },
    { texto: "C) Proteção de recursos naturais.", correto: false }
  ],
  justificativa: " B) A sobreexploração ocorre quando os recursos naturais são utilizados em quantidades que excedem sua capacidade de regeneração.",
  letra:'b',
  },
  
  {Questao: "Quais são as espécies que não são nativas de uma região, mas que podem causar danos à biodiversidade local?",
  respostas: [
    { texto: "A) Espécies exóticas invasoras.", correto: true },
    { texto: "B) Espécies endêmicas .", correto: false },
    { texto: "C) Espécies ameaçadas.", correto: false }
  ],
  justificativa: " A) Espécies exóticas invasoras são aquelas que não são nativas de uma região e podem prejudicar a biodiversidade local competindo com as espécies nativas.",
  letra:'a',
  },
  
  {Questao: "Como a poluição do ar e da água afeta a biodiversidade? ",
  respostas: [
    { texto: "A) Aumenta a diversidade de espécies.", correto: false },
    { texto: "B) Pode contaminar habitats e prejudicar as espécies .", correto: true },
    { texto: "C) Melhora a saúde das espécies .", correto: false }
  ],
  justificativa: " B) A poluição do ar e da água pode causar danos diretos aos habitats e às espécies, prejudicando a biodiversidade.",
  letra:'b',
  },
  
  { Questao: "Qual é o termo usado para descrever a variedade de vida na Terra ?",
  respostas: [
    { texto: "A) Biodiversidade.", correto: true },
    { texto: "B) Unidade ecológica.", correto: false },
    { texto: "C) Ecossistema .", correto: false }
  ],
  justificativa: " A) Biodiversidade se refere à variedade de vida na Terra, incluindo a diversidade de espécies, genes e ecossistemas .",
  letra:'a',
  
  },
  
  {
          
      Questao: "Qual das seguintes ações humanas é uma causa direta de extinção de espécies?",
  respostas: [
   { texto: "A) Conservação de habitats naturais.", correto: false },
   { texto: "B) Educação ambiental.", correto: false},
   { texto: "C) Desmatamento de florestas tropicais.", correto: true}
  ],
  justificativa: " C) O desmatamento de florestas tropicais é uma causa direta de extinção de espécies devido à perda de habitat .",
  letra:'c',
  },
  
  {
          
      Questao: "Qual das seguintes opções é um exemplo de extinção em massa ocorrida no passado ?",
  respostas: [
   { texto: "A) Extinção dos dinossauros naturais.", correto: true },
   { texto: "B) Extinção das abelhas.", correto: false},
   { texto: "C) Extinção dos tigres.", correto: false}
  ],
  justificativa: " A) : A extinção dos dinossauros é um exemplo famoso de extinção em massa ocorrida no passado.",
  letra:'a',
  },
  
  
  {
          
   Questao: "O que é a Lista Vermelha da IUCN?",
  respostas: [
   { texto: "A)  Uma lista de espécies extintas.", correto: false },
   { texto: "B) Uma lista de espécies em perigo de extinção.", correto: true},
   { texto: "C) Uma lista de espécies protegidas por lei.", correto: false}
  ],
  justificativa: " B) : A Lista Vermelha da IUCN é uma lista que avalia o status de conservação das espécies, identificando aquelas em perigo de extinção.",
  letra:'b',
  },
  
  {
         
  Questao: " O que é a biodiversidade genética?",
  respostas: [
   { texto: "A) A variedade de genes dentro de uma espécie.", correto: true },
   { texto: "B) A variedade de espécies em um ecossistema.", correto: false},
   { texto: "C) A variedade de ecossistemas em todo o mundo.", correto: false}
  ],
  justificativa: " A) : Biodiversidade genética refere-se à diversidade de genes dentro de uma espécie.",
  letra:'a',
  },
  
         
  {
    Questao: "Qual das seguintes atividades humanas pode levar à degradação dos solos e afetar a biodiversidade?",
  respostas: [
   { texto: "A) Proteção de áreas naturais.", correto: false },
   { texto: "B) Reflorestamento.", correto: false},
   { texto: "C) Urbanização descontrolada.", correto: true}
  ],
  justificativa: " C) : A urbanização descontrolada pode levar à destruição de habitats naturais e à degradação dos solos, afetando a biodiversidade.",
  letra:'c',
  },
  
  {
    Questao: "O que é a pesca excessiva?",
respostas: [
 { texto: "A) Captura de peixes apenas para consumo local.", correto: false },
 { texto: "B) Captura de peixes em quantidade superior à capacidade de reprodução.", correto: true},
 { texto: "C) Captura de peixes dentro das cotas estabelecidas.", correto: false}
],
justificativa: " B) : A pesca excessiva ocorre quando os peixes são capturados em quantidades que excedem sua capacidade de se reproduzir e se recuperar.",
letra:'b',
},

       
{Questao: "Qual é o nome do tratado internacional que visa a conservação da biodiversidade?",
respostas: [
 { texto: "A)  Convenção sobre Diversidade Biológica (CDB).", correto: true },
 { texto: "B) Tratado de Tóquio.", correto: false},
 { texto: "C) Tratado de Paris.", correto: false}
],
justificativa: " A) : A Convenção sobre Diversidade Biológica é um tratado internacional que visa à conservação da biodiversidade.",
letra:'a',
},

]



ComecarJogo()