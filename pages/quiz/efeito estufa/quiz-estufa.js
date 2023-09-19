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
  Questao: "O efeito estufa é um fenômeno natural que é intensificado pela ação humana. Qual gás, lançado por meio das atividades antrópicas, está diretamente relacionado ao efeito estufa?",
  respostas: [
    { texto: "A) Gás carbônico.", correto: false },
    { texto: "B) Nitrogênio.", correto: false},
    { texto: "C) Dióxido de carbono .", correto: true}
  ],
  justificativa: " C) O dióxido de carbono é o principal gás responsável pelo efeito estufa. Ele é gerado por meio da queima de combustíveis fósseis assim como de madeira e restos vegetais.",
  letra:'c',
  
},
  {Questao: "O efeito estufa é uma das principais preocupações ambientais da humanidade, uma vez que os seus efeitos causam prejuízos para a biodiversidade e para as atividades humanas. Esse fenômeno tem como uma de suas consequências o:",
  respostas: [
    { texto: "A) processo de formação de vulcões.", correto: false },
    { texto: "B) aumento da temperatura terrestre.", correto: true },
    { texto: "C) desenvolvimento de tornados.", correto: false }
  ],
  justificativa: " B) O efeito estufa é um fenômeno natural que é potencializado pelas ações humanas. A sua principal consequência é o aumento da temperatura terrestre, que gera impactos como a redução da biodiversidade, o derretimento das calotas polares e o aumento do nível dos oceanos.",
  letra:'b',
  },
  
  {Questao: "As atividades produtivas são importantes fatores que interferem diretamente na ocorrência do efeito estufa. No que toca à energia, pode-se afirmar que o efeito estufa está diretamente relacionado à produção energética por meio de:",
  respostas: [
    { texto: "A) combustíveis fósseis.", correto: true },
    { texto: "B) produção de biomassa.", correto: false },
    { texto: "C) instalações nucleares.", correto: false }
  ],
  justificativa: " A) Os combustíveis fósseis são os principais responsáveis pela emissão dos gases do efeito estufa. A queima de carvão mineral, petróleo e gás natural, por exemplo, emite gases poluentes que contribuem para o aumento da temperatura terrestre.",
  letra:'a',
  },
  
  {Questao: "Com base nas características do efeito estufa, escolha uma alternativa que indique corretamente uma provável consequência desse fenômeno no Brasil. ",
  respostas: [
    { texto: "A) Crescimento das queimadas, como no Pantanal.", correto: false },
    { texto: "B) Inundações de cidades costeiras, como Santos", correto: true },
    { texto: "C) Incidência de chuva ácida, em Cubatão.", correto: false }
  ],
  justificativa: " B) No Brasil, uma das prováveis causas do efeito estufa é o aumento do nível do oceano ao longo da costa do país. Dessa maneira, cidades como Santos (SP), que estão localizadas ao nível do mar, poderão ter grande parte da sua área alagada pelo mar.",
  letra:'b',
  },
  
  { Questao: "Na atualidade, novas tecnologias vêm possibilitando o desenvolvimento de ferramentas que podem contribuir para a diminuição do lançamento de gases do efeito estufa. Em relação aos transportes, uma ação relacionada à diminuição do efeito estufa expressa-se em:",
  respostas: [
    { texto: "A) Investimento em automóveis elétricos", correto: true },
    { texto: "B)  Crescimento da frota de aeronaves.", correto: false },
    { texto: "C) Aumento da cadeia produtiva de carros. ", correto: false }
  ],
  justificativa: " A)  Os carros elétricos, no que toca ao setor de transportes, são uma alternativa para a diminuição das emissões de gases do efeito estufa. A substituição de matrizes energéticas de combustíveis fósseis por matrizes renováveis é fundamental para a diminuição do efeito estufa.",
  letra:'a',
  
  },
  
  {
          
      Questao: "No que toca às atividades agropecuárias, assinale a alternativa que apresenta uma prática agrícola positiva para a diminuição dos processos que causam o efeito estufa:",
  respostas: [
   { texto: "A) Remoção da vegetação nativa nas áreas rurais..", correto: false },
   { texto: "B) Criação de estufas artificiais para os cultivos.", correto: false},
   { texto: "C) Aumento da presença de matéria orgânica no solo.", correto: true}
  ],
  justificativa: " C) O aumento de matéria orgânica no solo é de suma importância para a diminuição do efeito estufa, uma vez que ele promove o sequestro do carbono no solo e, ainda, diminui o fluxo de gases do efeito estufa para o meio ambiente.",
  letra:'c',
  },
  
  {
          
      Questao: "Com base nos seus conhecimentos sobre o efeito estufa, aponte uma prática que possibilita a diminuição da sua ocorrência:",
  respostas: [
   { texto: "A) Reflorestamento de regiões desmatadas.", correto: true },
   { texto: "B) Investimento em pecuária extensiva.", correto: false},
   { texto: "C) Queima dos resíduos orgânicos do lixo.", correto: false}
  ],
  justificativa: " A) As atividades de reflorestamento promovem o sequestro dos gases do efeito estufa que vão para a atmosfera, sendo assim de grande importância para a diminuição desses gases no meio, dessa forma, diminuindo a ação do efeito estufa ",
  letra:'a',
  },
  
  
  {
          
   Questao: "O Decreto Federal n. 7.390/2010, que regulamenta a Lei da Política Nacional sobre Mudança do Clima (PNMC) no Brasil, projeta que as emissões nacionais de gases de efeito estufa (GEE) em 2020 serão de 3,236 milhões. Esse mesmo decreto define o compromisso nacional voluntário do Brasil em reduzir as emissões de GEE projetadas para 2020 entre 38,6% e 38,9%. O cumprimento da meta mencionada está condicionado por",
  
  respostas: [
   { texto: "A)  explorar reservas do pré-sal.", correto: false },
   { texto: "B) investir em energias sustentáveis.", correto: true},
   { texto: "C) utilizar gás de xisto betuminoso.", correto: false}
  ],
  justificativa: " B) : O investimento em fontes de energia renováveis promove a substituição dos combustíveis fósseis, principais contribuintes do efeito estufa, por matrizes como a solar e a eólica, que produzem energia limpa e sem emissão de poluentes na atmosfera.",
  letra:'b',
  },
  
  {
  Questao: "Segundo a Conferência de Quioto, os países centrais industrializados, responsáveis históricos pela poluição, deveriam alcançar a meta de redução de 5,2% do total de emissões segundo níveis de 1990. O nó da questão é o enorme custo desse processo, demandando mudanças radicais nas indústrias para que se adaptem rapidamente aos limites de emissão estabelecidos e adotem tecnologias energéticas limpas. A comercialização internacional de créditos de sequestro ou de redução de gases causadores do efeito estufa foi a solução encontrada para reduzir o custo global do processo. Países ou empresas que conseguirem reduzir as emissões abaixo de suas metas poderão vender este crédito para outro país ou empresa que não consiga. As posições contrárias à estratégia de compensação presente no texto relacionam-se à ideia de que ela promove:"
   ,
  
  respostas: [
   { texto: "A) desigualdade na distribuição do impacto ecológico.", correto: true },
   { texto: "B) decréscimo dos índices de desenvolvimento econômico.", correto: false},
   { texto: "C) surgimento de conflitos de caráter diplomático.", correto: false}
  ],
  justificativa: " A) : As principais críticas envolvidas no texto da questão estão relacionadas à desigualdade na ação e na distribuição das fontes poluidoras, uma vez que o texto defende que as empresas poluam via compra de créditos de carbono de outras regiões para continuar com seus processos, que, por sua vez, geram impacto ambiental.",
  letra:'a',
  },
  
         
  {
      Questao: "Em estudos de Geografia Física, um dos fenômenos climáticos que possui destaque é o efeito estufa, caracterizado como",
  
     
  respostas: [
   { texto: "A) um fenômeno antrópico intensificado pela urbanização e industrialização mundial, que absorve poluentes como o metano e os clorofluorcarbonetos.", correto: false },
  
   { texto: "B) um fenômeno natural que retém parte do calor irradiado pela superfície terrestre e partículas de gases e de água em suspensão.", correto: false},
  
   { texto: "C) um fenômeno antrópico originado pela combinação de gás carbônico e água na atmosfera, capaz de causar danos em coberturas vegetais durante as precipitações.", correto: true}
  ],
  justificativa: " C) : O efeito estufa é de fato um fenômeno natural, caracterizado pela retenção de parte da emissão de calor proveniente da superfície terrestre. Contudo, esse fenômeno é potencializado pelas ações humanas, com destaque para as emissões de combustíveis fósseis e a queima de elementos orgânicos.",
  letra:'c',
  },
  
  
  
  
         
  {
      Questao: "Ninguém duvida que o problema essencial da mudança climática seja o aquecimento provocado pelo efeito estufa. Nem que sejam gases como vapor d’água, dióxido de carbono ou metano os principais causadores do aumento da temperatura ambiente. Uma função que é, aliás, positiva. Se não ocorresse, a humanidade nem sequer existiria, pois a temperatura média do planeta seria 33 graus inferior à que temos. Um dos principais problemas desencadeados pelo efeito estufa diz respeito",
  
  respostas: [
   { texto: "A) A extração ilegal de madeira na Amazônia vem sendo monitorada por países estrangeiros devido às exigências na COP 21, pois eles são os maiores beneficiários dos acordos da Conferência.", correto: false },
  
   { texto: "B) à revisão das unidades climáticas que o aquecimento terrestre fomenta.", correto: true},
  
   { texto: "C) ao aquecimento espacialmente desigual que ele traz à superfície terrestre.", correto: false}
  ],
  justificativa: " B): O aumento das temperaturas registradas na superfície terrestre é o principal problema desencadeado pelo efeito estufa. Tal cenário resulta em prejuízos ambientais e econômicos assim como na potencialização de desastres naturais.",
  letra:'b',
  },
  
  
  
         
  {Questao: "O Sol emite luz para o planeta Terra. A luminosidade é transformada em calor na superfície terrestre. Uma parte desse calor é absorvida pela superfície terrestre e pelos oceanos, outra parte é devolvida ao espaço. A parcela de calor que fica retida pela atmosfera terrestre decorre da presença de gases específicos. Esse fenômeno que consiste na retenção de parte do calor junto à superfície terrestre é denominado:",
  respostas: [
   { texto: "A) efeito estufa", correto: true },
   { texto: "B) ilha de calor.", correto: false},
   { texto: "C) camada de ozônio.", correto: false}
  ],
  justificativa: " A) : O efeito estufa é o fenômeno natural do planeta Terra que garante a temperatura média da Terra. Os gases atmosféricos que produzem esse fenômeno são chamados de gases de efeito estufa.",
  letra:'a',
  }, 
  
  
  
  
  
         
  {Questao: "O efeito estufa é o nome do fenômeno natural que garante a manutenção da temperatura média do planeta Terra em 14 ºC. Graças a ele, é possível o desenvolvimento da biodiversidade em nosso planeta. Os gases responsáveis pela ocorrência do efeito estufa são conhecidos como GEE — Gases de Efeito Estufa. Marque a alternativa que NÃO indica um dos gases de efeito estufa:",
  respostas: [
   { texto: "A) gás metano ", correto: false },
   { texto: "B) óxido nitroso", correto: false},
  
   { texto: "C) sulfato ferroso", correto: true}
  ],
  justificativa: " C) : O sulfato ferroso não é um gás de efeito estufa. Os demais, em conjunto, são responsáveis pelo fenômeno do efeito estufa, que consiste em reter parte do calor produzido próximo à superfície terrestre.",
  letra:'c',
  },
  
  
  
  
]



ComecarJogo()