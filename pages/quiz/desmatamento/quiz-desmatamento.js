const buttonBack = document.querySelector(".button-back")
const startGameButton = document.querySelector(".start_btn")
const questionsContainer = document.querySelector(".Quizbox")
const quizInicial = document.querySelector(".quiz-inicial")
const answerContainer = document.querySelector(".answers-container")
const nextQuestionButton = document.querySelector(".next-question")
const questionText = document.querySelector(".question")
const justifyQuestion = document.querySelector(".justify-question")
const justifyText = document.querySelector(".justify-text")
const justifyTittle = document.querySelector(".justify-tittle")
const endAnswersContainer = document.querySelector(".end-answers")
const quizEnd = document.querySelector(".Quiz-end")
const endAnswerCorrect = document.querySelector(".correct")
const endAnswerIncorrect = document.querySelector(".wrong")
const gridQuestions = document.querySelector(".number-grid")
const questoes = document.querySelector('.questions')




//variavel para saber qual pergunta o usuario está
let currentQuestionIndex = 1;

//variavel com o total de questoes corretas 
let totalCorrect = 0;

nextQuestionButton.addEventListener('click', displayNextQuestion)



function startGame(){
  displayNextQuestion()
}



function resetState(){
  while(answerContainer.firstChild){
    answerContainer.removeChild(answerContainer.firstChild)
    nextQuestionButton.classList.add("hide")
  }

  justifyQuestion.classList.add("hide")

}


function displayNextQuestion(){
  resetState()

  if (questions.length === currentQuestionIndex){
    return finishGame()
  }

  questionText.textContent = questions[currentQuestionIndex].question

  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button")
    newAnswer.classList.add("button","answer")
    newAnswer.textContent = answer.text
    
    if (answer.correct){
      newAnswer.dataset.correct = answer.correct
    }

    answerContainer.appendChild(newAnswer)

    newAnswer.addEventListener("click", selectAnswer)

  })
}



function selectAnswer(event){
  const answerClicked = event.target

  if(answerClicked.dataset.correct){
    totalCorrect++
  }

  if (answerClicked.dataset.correct){
    gridQuestions.innerHTML += `
      <div class="numbers">${currentQuestionIndex})
        <div class="answer-grid"> 
          <p class="correct-questions"><img src="../imgs/simbolos/resp-certa-quiz.png" alt=""></p>
        </div>`
  } else {
    gridQuestions.innerHTML += `
      <div class="numbers">${currentQuestionIndex})
        <div class="answer-grid"> 
          <p class="incorrect"><img src="../imgs/simbolos/resp-errada-quiz.png" alt=""></p>
      </div>`
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct){
      button.classList.add("correct")
      
     
    } else {
      button.classList.add("incorrect")
      
    }

    
  })

  justifyQuestion.classList.remove("hide")
  nextQuestionButton.classList.remove("hide")
  const letter = questions[currentQuestionIndex].letra
  const justifify = questions[currentQuestionIndex].justificativa

  justifyTittle.textContent = `RESPOSTA CERTA: ${letter}`
  justifyText.textContent = `${justifify}`


  currentQuestionIndex++
}





function finishGame(){
  questionsContainer.classList.add("hide")
  quizEnd.classList.remove("hide")

  //const answerC = document.querySelector(".AnswerC") //respostas certas 
  //const answerInc = document.querySelector(".AnswerInc") //respostas erradas
  const totalQuestion = questions.length
  const totalIncorrect = totalQuestion - totalCorrect
  endAnswerCorrect.innerHTML = `
  <a href="#" class="correct id="end-correct">Respostas certas: <span>${totalCorrect}</span></a>`
  endAnswerIncorrect.innerHTML = `<a href="#" class="incorrect id="end-incorrect">Respostas erradas: <span>${totalIncorrect}</span></a>`

}






// as questoes do quiz:
const questions = [
  {
    question: "Questão pulada) -(UEFS) Em Salvador e na região metropolitana, são descartados, por ano, cerca de dois milhões de toneladas deresíduos sólidos. Se não forem tomadas providências, em pouco tempo, os aterros sanitários não serão suficientes para mantertanto lixo.",
    answers: [
      { text: "A) Questao pulada.", correct: false },
      { text: "B) Questao", correct: true },
      { text: "C) Pulada", correct: false }
    ],
    justificativa: "B) Apesar de os organismos fotossintetizantes utilizarem gás carbônico no processo de fotossíntese, eles não conseguem utilizar esse gás com a mesma velocidade em que ele é liberado atualmente.",
    letra: 'B',
  },
  {
    question: "Questão z) -(UEFS) Em Salvador e na região metropolitana, são descartados, por ano, cerca de dois milhões de toneladas deresíduos sólidos. Se não forem tomadas providências, em pouco tempo, os aterros sanitários não serão suficientes para mantertanto lixo.",
    answers: [
      { text: "A) O reaproveitamento de resíduos com objetivo de requalificá-los e introduzi-los na economia.", correct: false },
      { text: "B) A incineração de resíduos sólidos descartados nos aterros sanitários.", correct: true },
      { text: "C) A ampliação de aterros sanitários para aproveitar a energia gerada na biodecomposição de resíduos sólidos.", correct: false }
    ],
    justificativa: "B) Apesar de os organismos fotossintetizantes utilizarem gás carbônico no processo de fotossíntese, eles não conseguem utilizar esse gás com a mesma velocidade em que ele é liberado atualmente.",
    letra: 'B',
  },
  {
    question: "Questão 2) O crescimento precipitado das cidades em decorrência do acelerado desenvolvimento tecnológico da segunda metade do século XX produziu um espaço urbano cada vez mais fragmentado, caracterizado pelas desigualdades e segregação espacial, subemprego e submoradia, violência urbana e graves problemas ambientais",
    answers: [
      { text: "A) Os resíduos domésticos, industriais aliados aos numerosos espaços marginalizados, são desafios dasd cidades", correct: true },
      { text: "B) A chuva ácida ocorrida nos países ricos industrializados apresenta como consequência", correct: false },
      { text: "C) Apenas para países e regiões que se organizaram politicamente em espaços áridos ou semiáridos", correct: false },
    ],
    justificativa: "A) Os resíduos domésticos, industriais aliados aos numerosos espaços marginalizados, são desafios dasd cidades",
    letra: 'A'
  },
  {
    question: 'Questão 3) - (UFPI) Preservar a biodiversidade constitui uma das condições básicas para manter os mabientes sadios no nosso planeta. Essa afirmação refere-se a uma preocupação:',
    answers: [
      { text: 'A) Apenas para países e regiões que se organizaram politicamente em espaços áridos ou semiáridos', correct: false },
      { text: 'B) OS resíduos domésticos, industriais aliados aos numerosos espaçs marginalizados, são desafios das cidades', correct: false },
      { text: 'C) Mundial, as espécies levaram milhoes de anos para se desenvolverem se a poluição e o desmatamento tiverem continuidade, desaparecerem do mundo em poucas décadas', correct: true },
    ],
    justificativa: "Mundial, as espécies levaram milhoes de anos para se desenvolverem se a poluição e o desmatamento tiverem continuidade, desaparecerem do mundo em poucas décadas",
    letra: 'C'
  },
  {
    question: "Questão 1) -(UEFS) Em Salvador e na região metropolitana, são descartados, por ano, cerca de dois milhões de toneladas deresíduos sólidos. Se não forem tomadas providências, em pouco tempo, os aterros sanitários não serão suficientes para mantertanto lixo.",
    answers: [
      { text: "A) O reaproveitamento de resíduos com objetivo de requalificá-los e introduzi-los na economia.", correct: false },
      { text: "B) A incineração de resíduos sólidos descartados nos aterros sanitários.", correct: true },
      { text: "C) A ampliação de aterros sanitários para aproveitar a energia gerada na biodecomposição de resíduos sólidos.", correct: false }
    ],
    justificativa: "B) A incineração de resíduos sólidos descartados nos aterros sanitários.",
    letra: 'B'
  },
  {
    question: "Questão 2) O crescimento precipitado das cidades em decorrência do acelerado desenvolvimento tecnológico da segunda metade do século XX produziu um espaço urbano cada vez mais fragmentado, caracterizado pelas desigualdades e segregação espacial, subemprego e submoradia, violência urbana e graves problemas ambientais",
    answers: [
      { text: "A) Os resíduos domésticos, industriais aliados aos numerosos espaços marginalizados, são desafios dasd cidades", correct: true },
      { text: "B) A chuva ácida ocorrida nos países ricos industrializados apresenta como consequência", correct: false },
      { text: "C) Apenas para países e regiões que se organizaram politicamente em espaços áridos ou semiáridos", correct: false },
    ],
    justificativa: "A) Os resíduos domésticos, industriais aliados aos numerosos espaços marginalizados, são desafios dasd cidades",
    letra: 'A'
  },
  {
    question: 'Questão 3) - (UFPI) Preservar a biodiversidade constitui uma das condições básicas para manter os mabientes sadios no nosso planeta. Essa afirmação refere-se a uma preocupação:',
    answers: [
      { text: 'A) Apenas para países e regiões que se organizaram politicamente em espaços áridos ou semiáridos', correct: false },
      { text: 'B) OS resíduos domésticos, industriais aliados aos numerosos espaçs marginalizados, são desafios das cidades', correct: false },
      { text: 'C) Mundial, as espécies levaram milhoes de anos para se desenvolverem se a poluição e o desmatamento tiverem continuidade, desaparecerem do mundo em poucas décadas', correct: true },
    ],
    justificativa: "C) Mundial, as espécies levaram milhoes de anos para se desenvolverem se a poluição e o desmatamento tiverem continuidade, desaparecerem do mundo em poucas décadas",
    letra: 'C'
  },
  {
    question: "Questão 1) -(UEFS) Em Salvador e na região metropolitana, são descartados, por ano, cerca de dois milhões de toneladas deresíduos sólidos. Se não forem tomadas providências, em pouco tempo, os aterros sanitários não serão suficientes para mantertanto lixo.",
    answers: [
      { text: "A) O reaproveitamento de resíduos com objetivo de requalificá-los e introduzi-los na economia.", correct: false },
      { text: "B) A incineração de resíduos sólidos descartados nos aterros sanitários.", correct: true },
      { text: "C) A ampliação de aterros sanitários para aproveitar a energia gerada na biodecomposição de resíduos sólidos.", correct: false }
    ],
    justificativa: "B) A incineração de resíduos sólidos descartados nos aterros sanitários.",
    letra: 'B'
  },
  {
    question: "Questão 2) O crescimento precipitado das cidades em decorrência do acelerado desenvolvimento tecnológico da segunda metade do século XX produziu um espaço urbano cada vez mais fragmentado, caracterizado pelas desigualdades e segregação espacial, subemprego e submoradia, violência urbana e graves problemas ambientais",
    answers: [
      { text: "A) Os resíduos domésticos, industriais aliados aos numerosos espaços marginalizados, são desafios dasd cidades", correct: true },
      { text: "B) A chuva ácida ocorrida nos países ricos industrializados apresenta como consequência", correct: false },
      { text: "C) Apenas para países e regiões que se organizaram politicamente em espaços áridos ou semiáridos", correct: false },
    ],
    justificativa: "A) Os resíduos domésticos, industriais aliados aos numerosos espaços marginalizados, são desafios dasd cidades",
    letra: 'A'
  },
  {
    question: 'Questão 3) - (UFPI) Preservar a biodiversidade constitui uma das condições básicas para manter os mabientes sadios no nosso planeta. Essa afirmação refere-se a uma preocupação:',
    answers: [
      { text: 'A) Apenas para países e regiões que se organizaram politicamente em espaços áridos ou semiáridos', correct: false },
      { text: 'B) OS resíduos domésticos, industriais aliados aos numerosos espaçs marginalizados, são desafios das cidades', correct: false },
      { text: 'C) Mundial, as espécies levaram milhoes de anos para se desenvolverem se a poluição e o desmatamento tiverem continuidade, desaparecerem do mundo em poucas décadas', correct: true },
    ],
    justificativa: "A) Mundial, as espécies levaram milhoes de anos para se desenvolverem se a poluição e o desmatamento tiverem continuidade, desaparecerem do mundo em poucas décadas",
    letra: 'B'
  },
  {
    question: 'Questão 3) - (UFPI) Preservar a biodiversidade constitui uma das condições básicas para manter os mabientes sadios no nosso planeta. Essa afirmação refere-se a uma preocupação:',
    answers: [
      { text: 'A) Apenas para países e regiões que se organizaram politicamente em espaços áridos ou semiáridos', correct: false },
      { text: 'B) OS resíduos domésticos, industriais aliados aos numerosos espaçs marginalizados, são desafios das cidades', correct: false },
      { text: 'C) Mundial, as espécies levaram milhoes de anos para se desenvolverem se a poluição e o desmatamento tiverem continuidade, desaparecerem do mundo em poucas décadas', correct: true },
    ], 
    justificativa: "A) Mundial, as espécies levaram milhoes de anos para se desenvolverem se a poluição e o desmatamento tiverem continuidade, desaparecerem do mundo em poucas décadas",
    letra: 'C'
  },
]



startGame()