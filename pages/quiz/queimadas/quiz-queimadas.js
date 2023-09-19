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
    Questao: '(Enem 2019) "O efeito estufa não é fenômeno recente e, muito menos, naturalmente maléfico. Alguns dos gases que o provocam funcionam como uma capa protetora que impede a dispersão total do calor e garante o equilíbrio da temperatura na Terra. Cientistas americanos da Universidade da Virgínia alegam ter descoberto um dos primeiros registros da ação humana sobre o efeito estufa. Há oito mil anos, houve uma súbita elevação da quantidade de CO2 na atmosfera terrestre. Nesse mesmo período, agricultores da Europa e da China já dominavam o fogo e haviam domesticado cães e ovelhas. A atividade humana da época com maior impacto sobre a organização social e sobre o ambiente foi o começo do plantio de trigo, cevada, ervilha e outros vegetais. Esse plantio passou a exigir áreas de terreno livre de sua vegetação original, providenciadas pelos inúmeros grupos humanos nessas regiões com métodos elementares de preparo do solo, ainda hoje, usados e condenados, em razão dos problemas ambientais decorrentes". Segundo a hipótese levantada pela pesquisa sobre as primeiras atividades humanas organizadas, o impacto ambiental mencionado foi decorrente:' ,

    respostas: [
      
      { texto: "A) da manipulação de alimentos cujo cozimento e consumo liberavam grandes quantidades de calor e gás carbônico.", correto: false },

      { texto: "B) da queima ou da deterioração das árvores derrubadas para o plantio, que contribuíram para a liberação de gás carbônico e poluentes em proporções significativas.", correto: true},

      { texto: "C) do início da domesticação de animais no período mencionado, a qual contribuiu para uma forte elevação das emissões de gás metano.", correto: false}
    ],

    justificativa: " A queima de vegetação, até hoje, é um dos principais motivos de aceleração do aquecimento global. Por isso, o desmatamento, seguido de queimada, é uma prática que deve ser combatida nos dias atuais.",
    letra:'b',

  },
  
  {
    Questao: '(Enem 2014) "O uso intenso das águas subterrâneas sem planejamento tem causado sérios prejuízos à sociedade, ao usuário e ao meio ambiente. Em várias partes do mundo, percebe-se que a exploração de forma incorreta tem levado a perdas do próprio aquífero" .(TEIXEIRA, W. et al. Decifrando a Terra. São Paulo: Cia. Editora Nacional, 2009 (adaptado). No texto, apontam-se dificuldades associadas ao uso de um importante recurso natural. Um problema derivado de sua utilização e uma respectiva causa para sua ocorrência são:' ,

    respostas: [
      
      { texto: "A) Contaminação do aquífero — Contenção imprópria do ingresso direto de água superficial. ", correto: true },

      { texto: "B) Intrusão salina — Extração reduzida da água doce do subsolo.", correto: false},

      {texto:  "C) Superexploração de poços — Construção ineficaz de captações subsuperficiais.", correto: false}
    ],

    justificativa: "A contaminação de água subterrânea ocorre em função da poluição das águas na superfície. Uso de produtos químicos em lavouras, deposição inapropriada de lixo e ausência de tratamento de esgoto são fatores que contribuem significativamente para esse problema.",
    letra:'A',

  },

    {Questao: '(Enem 2019) "A pegada ecológica gigante que estamos a deixar no planeta está a transformá-lo de tal forma que os especialistas consideram que já entramos numa nova época geológica, o Antropoceno. E muitos defendem que, se não travarmos a crise ambiental, mais rapidamente transformaremos a Terra em Vênus do que iremos a Marte. A expressão “Antropoceno” é atribuída ao químico e prêmio Nobel Paul Crutzen, que a propôs durante uma conferência em 2000, ao mesmo tempo que anunciou o fim do Holoceno — a época geológica em que os seres humanos se encontram há cerca de 12 mil anos, segundo a União Internacional das Ciências Geológicas (UICG), a entidade que define as unidades de tempo geológicas." (SILVA, R. D. Antropoceno: e se formos os últimos seres vivos a alterar a Terra? (adaptado).A concepção apresentada considera a existência de uma nova época geológica concebida a partir da capacidade de influência humana nos processos' ,

    respostas: [
      
      { texto: "A) eruptivos. ", correto: false },

      { texto: "B) exógenos.", correto:  true},

      {texto:  "C) tectônicos.", correto: false}
    ],

    justificativa: "Processos exógenos são os processos que ocorrem na superfície do planeta Terra. A partir da primeira Revolução Industrial, a capacidade humana de alterar a superfície do planeta tornou-se imensa e nociva.",
    letra:'B',

  },

{Questao: '(Enem 2018) "Quer um conselho? Vá conhecer alguma coisa da terra e deixe os homens em paz... Os homens mudam, a terra é inalterável. Vá por aí dentro, embrenhe-se pelo interior e observe alguma coisa de proveitoso. Aqui na capital só encontrará casas mais altas, ruas mais cheias e coisas parecidas ao que de igual existe em todas as cidades modernas. Mas ao contato com a terra você sentirá o que não pode sentir nas avenidas asfaltadas." (LOBATO, M. Lobatiana: meio ambiente. São Paulo: Brasiliense, 1985). O texto literário evidencia uma percepção dual sobre a cidade e o campo, fundamentada na ideia de' ,

    respostas: [
      
      { texto: "A) progresso científico. ", correto: false },

      { texto: "B) evolução da sociedade.", correto:  false},

      {texto:  "C) valorização da natureza.", correto: true}
    ],

    justificativa: "Percebe-se que o autor considera o afastamento geográfico da cidade como algo positivo, “proveitoso”. Revela uma valorização aos elementos naturais.",
    letra:'C',

  },
{Questao: '(Enem 2015) "A questão ambiental, uma das principais pautas contemporâneas, possibilitou o surgimento de concepções políticas diversas, dentre as quais se destaca a preservação ambiental, que sugere uma ideia de intocabilidade da natureza e impede o seu aproveitamento econômico sob qualquer justificativa."(PORTO-GONÇALVES, C. W. A globalização da natureza e a natureza da globalização. Rio de Janeiro: Civilização Brasileira, 2006 (adaptado). Considerando as atuais concepções políticas sobre a questão ambiental, a dinâmica caracterizada no texto quanto à proteção do meio ambiente está baseada na' ,

    respostas: [
      
      { texto: "A) proibição permanente da exploração da natureza.", correto: true },

      { texto: "B) contenção de impactos ambientais.", correto:  false},

      {texto:  "C) utilização progressiva dos recursos naturais.", correto: false}
    ],

    justificativa: "A política de preservação ambiental baseia-se no princípio da não utilização de recursos naturais como forma de se evitar problemas. Essa política diverge da conservação ambiental, que prega a utilização dos recursos, mas de forma sustentável, garantindo a existência dos mesmos às gerações futuras e a não ocorrência de problemas ambientais.",
    letra:'A',
  },

  {Questao: '(Enem 2014) "A principal forma de relação entre o homem e a natureza, ou melhor, entre o homem e o meio, é dada pela técnica — um conjunto de meios instrumentais e sociais, com os quais o homem realiza sua vida, produz e, ao mesmo tempo, cria espaço."(SANTOS, M. A natureza do espaço. São Paulo: Edusp, 2002 (adaptado)." A relação estabelecida no texto, associada a uma profunda degradação ambiental, é verificada na' ,

    respostas: [
      
      { texto: "A) apropriação de reservas extrativistas para atender à demanda de subsistência.", correto: false },

      { texto: "B) retirada da cobertura vegetal com o intuito de desenvolver a agricultura intensiva.", correto:  true},

      {texto:  "C) ampliação da produção de alimentos orgânicos para minimizar problemas da fome.", correto: false}
    ],

    justificativa: "O desenvolvimento da agricultura intensiva, fruto do avanço das técnicas, é marcado pela elevação da ocorrência dos problemas ambientais, especialmente o desmatamento, queimadas, empobrecimento dos solos e uso permanente de grandes quantidades de água doce.",
    letra:'B',

  },

{Questao: '(Enem 2014) "A sustentabilidade é o maior desafio global. Por isso o desenvolvimento de um país, por mais exemplar que venha a ser, só poderá ser realmente sustentável quando a pegada ecológica mundial deixar de ultrapassar a capacidade de regeneração da biosfera. Não é diferente em termos setoriais. O setor agropecuário só será sustentável se também o forem o industrial, o terciário e a mineração. (VEIGA, J. E. O futuro da comida. Globo Rural, n. 312, out. 2011.) De acordo com o texto, a busca da sustentabilidade ambiental envolve mudança de hábitos, para que o desenvolvimento seja pautado no(a)' ,

    respostas: [
      
      { texto: "A) busca de alternativas tecnológicas visando reduzir a jornada de trabalho.", correto: false },

      { texto: "B) trabalho cooperativo, com remuneração justa e distribuição igualitária de renda.", correto:  false},

      {texto:  "C) satisfação das necessidades da geração atual, assim como as das gerações futuras.", correto: true}
    ],
    justificativa: "O conceito de desenvolvimento sustentável baseia-se no princípio expresso na alternativa C: usar os recursos da terra de forma que as necessidades atuais sejam sanadas, mas mantendo esses mesmos recursos para a utilização das gerações futuras.",
    letra:'C',
  },

{Questao: '(Enem 2011) "Como os combustíveis energéticos, as tecnologias da informação são, hoje em dia, indispensáveis em todos os setores econômicos. Através delas, um maior número de produtores é capaz de inovar e a obsolescência de bens e serviços se acelera. Longe de estender a vida útil dos equipamentos e a sua capacidade de reparação, o ciclo de vida desses produtos diminui, resultando em maior necessidade de matéria-prima para a fabricação de novos." (GROSSARD, C. Le Monde Diplomatique Brasil. Ano 3, nº 36, 2010 (adaptado). A postura consumista de nossa sociedade indica a crescente produção de lixo, principalmente nas áreas urbanas, o que, associado a modos incorretos de deposição',

    respostas: [
      
      { texto: "A) provoca a contaminação do solo e do lençol freático, ocasionando assim graves problemas socioambientais, que se adensarão com a continuidade da cultura do consumo desenfreado.", correto: true },

      { texto: "B) produz efeitos perversos nos ecossistemas, que são sanados por cadeias de organismos decompositores que assumem o papel de eliminadores dos resíduos depositados em lixões.", correto:  false},

      {texto:  "C) multiplica o número de lixões a céu aberto, considerados atualmente a ferramenta capaz de resolver de forma simplificada e barata o problema de deposição de resíduos nas grandes cidades.", correto: false}
    ],
    justificativa: "A produção de lixo é crescente na sociedade desde a primeira revolução industrial. O destino do lixo é problemático, uma vez que a utilização de lixões a céu aberto representa o modo predominante de descarte de materiais no Brasil.",
    letra:'A',
  },

{Questao: '(Enem 2014) "Em 1872, Robert Angus Smith criou o termo “chuva ácida”, descrevendo precipitações ácidas em Manchester após a Revolução Industrial. Trata-se do acúmulo demasiado de dióxido de carbono e enxofre na atmosfera que, ao reagirem com compostos dessa camada, formam gotículas de chuva ácida e partículas de aerossóis. A chuva ácida não necessariamente ocorre no local poluidor, pois tais poluentes, ao serem lançados na atmosfera, são levados pelos ventos, podendo provocar a reação em regiões distantes. A água de forma pura apresenta pH 7 e, ao contatar agentes poluidores, reage, modificando seu pH para 5,6 e até menos que isso, o que provoca reações que deixam consequências. O texto aponta para um fenômeno atmosférico causador de graves problemas ao meio ambiente: a chuva ácida (pluviosidade com pH baixo). Esse fenômeno tem como consequência',

    respostas: [
      
      { texto: "A) a corrosão de metais, pinturas, monumentos históricos, destruição da cobertura vegetal e acidificação dos lagos.", correto: true },

      { texto: "B) a diminuição do aquecimento global, já que esse tipo de chuva retira poluentes da atmosfera.", correto:  false},

      {texto:  "C) a destruição da fauna e da flora, e redução dos recursos hídricos, com o assoreamento dos rios.", correto: false}
    ],
    justificativa: "As chuvas ácidas aumentam na mesma proporção que a industrialização e utilização de veículos automotivos. É um problema ambiental de ordem global e pode ocorrer em regiões com muita ou pouca industrialização, em função do deslocamento dos ventos.",
    letra:'A',

  },

{Questao: '(Enem 2011) "A problemática ambiental surgiu nas últimas décadas do século XX como uma crise de civilização, questionando as racionalidades econômica e tecnológica dominantes. Com isso, novas organizações da sociedade civil despontaram, interessadas em um alternativo de relação sociedade e natureza. (MIGUEL, K. G. A expressão dos movimentos ambientais na atualidade: mídia, diversidade e igualdade.) Os movimentos sociais, em especial o movimento ambientalista, têm participado de forma decisiva na mudança de postura por parte das grandes empresas, principalmente no que diz respeito',

    respostas: [
      
      { texto: "A) ao sistema produtivo, que considera os custos ambientais, já que muitos recursos são retirados da natureza e apresentam um meio adequado de reposição..", correto: false },

      { texto: "B) à observação dos direitos civis, que são conquistas do poder público e resultam na observação de toda a legislação ambiental existente nos países.", correto:  false},

      {texto:  "C) à adoção de medidas sustentáveis, a fim de que essas empresas atuem com responsabilidade nos locais em que estão instaladas.", correto: true}
    ],
    justificativa: "A atuação de grupos ambientalistas reforça a importância da sustentabilidade junto às empresas e aos consumidores.",
    letra:'C',
  },

]

ComecarJogo()