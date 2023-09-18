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
          <p class="incorreto"><img src="../../../images/ilustrações/quiz/certo-errado/resp-certa-quiz.png" alt=""></p>
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
    Questao: ' "Assinale a alternativa que NÃO apresenta uma causa do desmatamento:" ' ,
    respostas: [
      { texto: "A) Exploração de madeira.", correto: false },
      { texto: "B) Produção de carvão.", correto: false },
      { texto: "C) Conservação dos rios.", correto: true }
    ],
    justificativa: "C) O desmatamento possui várias causas, relacionadas com questões econômicas, políticas e sociais, mas não está vinculado à conservação dos cursos de água.",
    letra: 'C',
  },
  {
    Questao: "Indique um fenômeno geomorfológico que é diretamente aumentado pelo desmatamento:",
    respostas: [
      { texto: "A) Vulcanismo", correto: false },
      { texto: "B) Erosão", correto: true },
      { texto: "C) Sedimentação", correto: false },
    ],
    justificativa: "B) A erosão é diretamente aumentada pelo desmatamento, visto que o solo sem vegetação natural fica muito mais suscetível aos processos erosivos.",
    letra: 'B'
  },
  {
    Questao: 'Qual impacto provocado pelo desmatamento está fortemente ligado à fauna e à flora de uma região?',
    respostas: [
      { texto: 'A) Diminuição da biodiversidade', correto: true },
      { texto: 'B) Elevação do nível dos oceanos', correto: false },
      { texto: 'C) Contaminação do nível freático', correto: false },
    ],
    justificativa: "A) O desmatamento provoca a perda do habitat de espécies de fauna e flora locais e contribui diretamente para a diminuição da biodiversidade de uma região.",
    letra: 'A'
  },
  {
    Questao: "A remoção da vegetação, causada pelo desmatamento, implica na... ",
    respostas: [
      { texto: "A) Manutenção do equilíbrio ambiental.", correto: false },
      { texto: "B) Redução da infiltração da água no solo.", correto: true },
      { texto: "C) Conservação das nascentes de água", correto: false }
    ],
    justificativa: "B) Por meio do desmatamento, a capacidade de infiltração de água no solo fica comprometida, reduzindo assim a quantidade de água armazenada nos aquíferos.",
    letra: 'B'
  },
  {
    Questao: "Uma das causas do desmatamento na Mata Atlântica é a...",
    respostas: [
      { texto: "A) Expansão da urbanização", correto: true },
      { texto: "B) Cultivação de cereais", correto: false },
      { texto: "C) Construção de hidrelétricas", correto: false },
    ],
    justificativa: "A) A Mata Atlântica, bioma presente especialmente na porção centro-sul brasileira, foi duramente atingida pelo avanço da urbanização do país, marcado pelo crescimento desordenado das cidades.",
    letra: 'A'
  },
  {
    Questao: 'No Brasil, o crescimento dos índices de desmatamento está fortemente ligado à:',
    respostas: [
      { texto: 'A) Construção de usinas nucleares.', correto: false },
      { texto: 'B) Exploração de bacias sedimentares', correto: false },
      { texto: 'C) Promoção de atividades agropecuárias', correto: true },
    ],
    justificativa: "C) O desmatamento no Brasil está fortemente vinculado às atividades agropecuárias. Atividades como a plantação de grãos e a criação de animais são comumente apontadas como grandes causadoras do desmatamento no país.",
    letra: 'C'
  },
  {
    Questao: "Qual das seguintes opções é um exemplo de extinção em massa ocorrida no passado?",
    respostas: [
      { texto: "A) Amazônia.", correto: true },
      { texto: "B) Caatinga.", correto: false },
      { texto: "C) Cocais.", correto: false }
    ],
    justificativa: "A) A Amazônia é o bioma mais atingido pelo desmatamento no Brasil, principalmente por causa da expansão da fronteira agrícola brasileira, que atinge duramente a porção centro-sul desse bioma. ",
    letra: 'A'
  },
  {
    Questao: "Uma medida para atenuar os processos de desmatamento no meio ambiente é a?",
    respostas: [
      { texto: "A) Remoção de árvores de grande porte.", correto: false },
      { texto: "B) Reflorestação de regiões devastadas.", correto: true },
      { texto: "C) Utilização de fontes não renováveis.", correto: false },
    ],
    justificativa: "B) Uma medida que busca solucionar os problemas resultantes do desmatamento é a recomposição da cobertura vegetal natural por meio de ações de reflorestamento.",
    letra: 'B'
  },
  {
    Questao: 'Parceiros comerciais do Brasil no exterior, principalmente os compradores de commodities produzidas na Amazônia, andam preocupados em evitar o que chamam de “desmatamento importado”, e têm exigido cada vez mais garantias de que os bens que compram são produzidos em conformidade com normas de respeito ao meio ambiente. A concepção de "desmatamento importado":',
    respostas: [
      { texto: 'A) Estende às economias globais a responsabilidade sobre mudanças planetárias.', correto: true },
      { texto: 'B) Impede o crescimento econômico dos países do Terceiro Mundo.', correto: false },
      { texto: 'C) Privilegia a qualidade de vida em prejuízo da produção de riqueza.', correto: false },
    ],
    justificativa: "A) O desmatamento importado ocorre por meio da compra de produtos que são provenientes de zonas geográficas que sofreram com a derrubada de árvores. Logo, é um conceito que remete à responsabilidade dos compradores pela origem dos produtos consumidos. ",
    letra: 'A'
  },
  {
    Questao: 'A redução dos tamanhos das florestas naturais em todo o mundo tem ocorrido como resultado, principalmente, de incêndios, corte de árvores para propósitos comerciais, devastação de terras para utilização da agropecuária, ou até fenômenos naturais. (...) A persistência na ocorrência desses problemas torna relevante a manutenção de debates sobre as causas e os fatores relacionados ao desmatamento no Brasil, detentor da maior floresta mundial. Sobre o desmatamento no Brasil é CORRETO afirmar:',
    respostas: [
      { texto: 'A) O desmatamento é um processo inerente ao progresso, sem o qual o crescimento econômico é inviável.', correto: false },
      { texto: 'B) A caatinga é o bioma brasileiro com menor percentual de área desmatada, devido, sobretudo, à aridez dos solos, o que inibe a agricultura.', correto: false },
      { texto: 'C) Como consequência do desmatamento, acontece a diminuição da recarga dos aquíferos.', correto: true },
    ], 
    justificativa: "C) A diminuição da recarga dos aquíferos, por meio da dificuldade de entrada da água no subsolo, é uma consequência gerada pela remoção da vegetação nativa.",
    letra: 'C'
  },
  {
    Questao: 'O desmatamento atual na Amazônia cresceu em relação a 2015. Metade da área devastada fica no estado do Pará, atingindo áreas privadas ou de posse, sendo ainda registrados focos em unidades de conservação, assentamentos de reforma agrária e terras indígenas. Tal situação coloca em risco o compromisso firmado pelo Brasil na 21ª Conferência das Nações Unidas sobre Mudança Climática (COP 21), ocorrida em 2015. O desmatamento na Amazônia tem raízes históricas ligadas a processos que ocorrem desde 1970. Com base nos dados e em seus conhecimentos, aponte a afirmação correta.',
    respostas: [
      { texto: 'A) A extração ilegal de madeira na Amazônia vem sendo monitorada por países estrangeiros devido às exigências na COP 21, pois eles são os maiores beneficiários dos acordos da Conferência.', correto: false },
      { texto: 'B) A grilagem de terras em regiões de grandes projetos de infraestrutura, a extração ilegal de madeira e a construção de rodovias estão entre as causas do desmatamento na Amazônia. ', correto: true },
      { texto: 'C) Os grandes projetos de infraestrutura causam degradação da floresta amazônica, com intensidade moderada e temporária, auxiliando a regularização fundiária.', correto: false },
    ], 
    justificativa: "B) Os motivos do desmatamento da Amazônia estão fortemente vinculados a questões econômicas, a atividades ilegais, como grilagem de terras, projetos estruturais e atividades de mineração.",
    letra: 'B'
  },
  {
    Questao: 'Segundo uma reportagem do jornal O Globo (nov. 2009), entre os meses de agosto de 2008 a julho de 2009 foram desmatados, na Amazônia, 7.008 km2 de floresta, de acordo com dados do Instituto Nacional de Pesquisas Espaciais. Apesar de esse número significar uma redução de 45% em relação ao ano anterior, o desmatamento ainda origina diversos prejuízos socioambientais à Floresta Amazônica, causando:',
    respostas: [
      { texto: 'A) Diminuição da fertilidade dos solos, comprometendo a potencialidade agrícola.', correto: true },
      { texto: 'B) Diminuição da fauna, prejudicando as atividades turísticas.', correto: false },
      { texto: 'C) Diminuição dos níveis fluviais, alterando os usos e as apropriações econômicas dos rios.', correto: false },
    ], 
    justificativa: "A) O desmatamento provoca, dentre outros problemas, a diminuição da fertilidade do solo, devido ao impacto direto na deterioração da qualidade do solo.",
    letra: 'A'
  },
  {
    Questao: 'Calcula-se que 78% do desmatamento na Amazônia tenha sido motivado pela pecuária – cerca de 35% do rebanho nacional está na região – e que pelo menos 50 milhões de hectares de pastos são pouco produtivos. Enquanto o custo médio para aumentar a produtividade de 1 hectare de pastagem é de 2 mil reais, o custo para derrubar igual área de floresta é estimado em 800 reais, o que estimula novos desmatamentos. Adicionalmente, madeireiras retiram as árvores de valor comercial que foram abatidas para a criação de pastagens. Os pecuaristas sabem que problemas ambientais como esses podem provocar restrições à pecuária nessas áreas, a exemplo do que ocorreu em 2006 com o plantio da soja, o qual, posteriormente, foi proibido em áreas de floresta. A partir da situação-problema descrita, conclui-se que:',
    respostas: [
      { texto: 'A) O desmatamento na Amazônia decorre principalmente da exploração ilegal de árvores de valor comercial.', correto: false },
      { texto: 'B) Um dos problemas que os pecuaristas vêm enfrentando na Amazônia é a proibição do plantio de soja.', correto: false },
      { texto: 'C) A recuperação de áreas desmatadas e o aumento de produtividade das pastagens podem contribuir para a redução do desmatamento na Amazônia.', correto: true },
    ], 
    justificativa: "C) Segundo o texto, há uma política contraditória, pois, há uma grande quantidade de pastos improdutivos e não utilizados no Brasil, enquanto os pecuaristas buscam a expansão de novas áreas para as suas atividades em áreas naturais através do desmatamento. Nesse sentido, uma medida de recuperação da Amazônia seria a realização de uma maior produtividade nas áreas hoje subutilizadas, além do reflorestamento das áreas desflorestadas.",
    letra: 'C'
  },
]



ComecarJogo()