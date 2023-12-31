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
     Questao: "(PUC-RJ 2013)  O aquecimento global é considerado por inúmeros cientistas como um fenômeno provocado pelo homem em função do desequilíbrio causado no ciclo do carbono. Considerando que esses cientistas estejam certos, é correto afirmar que: ",
 respostas: [
   { texto: "A) 	Mecanismos que aumentam o sequestro de carbono por organismos autotróficos reduzem a disponibilidade do monóxidode carbono na atmosfera, contribuindo para a diminuição do efeito estufa. ", correto: false },
 
   { texto: "B) As queimadas florestais são a principal causa do aquecimento global.", correto: false},
 
   { texto: "C) A liberação do gás carbônico na atmosfera em decorrência de atividades humanas, como a queima de combustíveis fósseis, é feita a uma velocidade muito maior do que sua assimilação pela fotossíntese.  .", correto: true}
 ],
 justificativa: " C) Apesar de os organismos fotossintetizantes utilizarem gás carbônico no processo de fotossíntese, eles não conseguem utilizar esse gás com a mesma velocidade em que ele é liberado atualmente.",
 letra:'c',
},
 
 {Questao: "(PUC-RIO 2007)  Nos últimos anos, observa-se um aumento crescente do percentual de CO2 na atmosfera.",
 respostas: [
     { texto: "A) Resfriamento global. ", correto: false },
     { texto: "B) Aumento da camada de ozônio.", correto: true },
     { texto: "C) Diminuição da camada de ozônio. ", correto: false }
   ],
   justificativa: " B) O aumento de dióxido de carbono na atmosfera contribui para a acentuação do efeito estufa e, consequentemente, o aumento do aquecimento global.",
   letra:'b',
  },
   
   {Questao: " (VUNESP 2009)  Especula-se que o aquecimento global esteja interferindo nos recifes de corais australianos. Cerca de 13% do recife reduziu desde 1990. O excesso de gás carbônico produzido por atividades humanas pode:",
   respostas: [
     { texto: "A) Ser absorvido pelos oceanos e formar o ácido carbônico, que pode dissolver o esqueleto dos corais. Isso ocasionará a perda da sustentação do animal. ", correto: true },
   
     { texto: "B) Intensificar a eutrofização nos oceanos e diminuir a taxa de gás oxigênio dissolvido na água. Isso provoca a morte dos corais. ", correto: false },
 
     { texto: "C)Aumentar a temperatura da água e, com isso, as células do animal começam a se desintegrar e não conseguem manter o esqueleto de fosfato de cálcio resistente. .", correto: false }
   ],
   justificativa: " A) Quando as temperaturas da Terra aumentaram, a atmosfera passou a reter mais colar, o que afetou o nível dos oceanos, a composição química da água e as correntes marinhas.Acredita-se que atualmente, o planeta está passando por um período de aquecimento, denominado de aquecimento global. O aquecimento global consiste no processo de aumento da temperatura média da Terra, considerando a superfície, a atmosfera e os oceanos, devido a grandes emissões de gases. Esses gases são responsáveis por intensificar o efeito estufa e sua origem são as atividades antrópicas.",

   letra:'a',
   },
   {Questao: " (FUVEST 2001)  A recente descoberta de uma vasta região de mar descongelado no Pólo Norte é um exemplo dos efeitos do aquecimento global pelo qual passa o planeta. Alarmados com a situação, alguns países industrializados elaboraram uma carta de intenções em que se comprometem a promover amplos reflorestamentos, como uma estratégia para reduzir o efeito estufa e conter o aquecimento global. Tal estratégia baseia-se na hipótese de que o aumento das áreas de floresta promoverá maior . ",
 respostas: [
   { texto: "A) Sombreamento do solo, com resfriamento da superfície terrestre. ", correto: false },
 
   { texto: "B) Retenção do carbono na matéria orgânica das árvores, com diminuição do gás carbônico atmosférico responsável pelo efeito estufa. ", correto: true },
 
   { texto: "C) Disponibilidade de combustíveis renováveis e, conseqüentemente, menor queima de combustíveis fósseis, que liberam CFC (clorofluorcarbono). ", correto: false }
 ],
 justificativa: " B) O excesso de gás carbônico, também conhecido como CO2, que é produzido por atividades humanas (veículos que utilizam combustíveis fósseis e fábricas) pode acabar sendo absorvido pelos nossos oceanos. Esse advento significaria que os oceanos iriam absorver o CO2, que misturado com as demais propriedades das águas do mar irá resultar na formação de ácido carbônico. Isso teria como resultado a dissolvimento dos corais, o que causaria um grande prejuízo à vida marinha. ",
 letra:'b',
 },
 
 { Questao: " (PUCRS 2001) Em outubro passado, cientistas revelaram que o aquecimento médio global cresceu num índice superior às expectativas. No dia 13 de dezembro de 2000, os jornais publicaram que o Rio Grande do Sul bateu seu recorde de consumo de energia devido às altas temperaturas registradas. :",
 respostas: [
   { texto: "A) 	Pelo aumento na emissão de CO2. ", correto: true },
   { texto: "B)  e)	Pelas queimadas das áreas vegetais. ", correto: false },
   { texto: "C) f)	Pelos buracos na camada de ozônio.  ", correto: false }
 ],
 justificativa: " A) O texto aponta para a necessidade de se obterem estratégias que permitem uma maior retenção do carbono, dada a grande liberação de CO2 que ocorre nas indústrias hoje, principalmente de países com alta produtividade, como os EUA. Diante disso, a evidência destas florestas permite um maior sequestro de carbono, resultando na maior retenção e redução do impacto global deste gás na atmosfera. ",
 letra:'a',
 
 },
 
 {
         
     Questao: " (Urca 2022) Considerando os pressupostos estabelecidos pela Ecologia e a conservação da natureza, tem se tornado cada vez mais preocupante a extensa lista de ameaças ambientais. O desenvolvimento e a aplicação da ideia de sustentabilidade ambiental torna-se, nesse contexto, importante para a construção de uma visão comprometida e atuante da Ecologia. Neste sentido, considerando o histórico da evolução das ideias de conservação dos ambientes e dos recursos naturais, assinale a alternativa correta: ",
             
         Questao: "(Uece 2022) No que diz respeito ao efeito estufa, é correto afirmar que é um fenômeno ",
         respostas: [
          { texto: "A) 	No qual parte da radiação infravermelha refletida pela superfície terrestre é absorvida por gases atmosféricos e irradiada de volta para a superfície. ", correto: true },
         
          { texto: "B) a)	Por meio do qual toda a radiação solar que incide no planeta Terra é absorvida pela superfície terrestre e pelos oceanos. ", correto: false},
          { texto: "C) Intensificado pelo aumento do desmatamento, que aumenta a quantidade de CO2 na atmosfera e faz com que a temperatura do planeta diminua. ", correto: false}
         ],
         justificativa: " A) A alternativa se refere a um importante marco na história da conservação ambiental, no qual os países se comprometeram a reduzir as emissões de gases que contribuem para o aquecimento global, visando mitigar as mudanças climáticas.  ",
         letra:'a',
         },
         {Questao: "(UNAMA 2009) Cientistas acreditam que o reflorestamento e o plantio de árvores em áreas sem vegetação podem contribuir para minimizar o aquecimento global. A redução desse aquecimento ocorreria porque: ",
         respostas: [
  { texto: "A) diminuiria a quantidade de dióxido de carbono na atmosfera, que seria utilizado pela fotossíntese. ", correto: true },
 
  { texto: "B) a expansão das florestas seria inibida, em longo prazo, pelo excesso de gás carbônico liberado. ", correto: false},
 
  { texto: "C) diminuiria o efeito estufa, com a liberação de gás carbônico, em decorrência da expansão da cobertura vegetal. ", correto: false}
        ],
        justificativa: " A) O dióxido de carbono dissolvido no oceano irá reagir com a água e formar o acido carbônico, que pode acidificar uma região do oceano, destruindo recifes de corais, que irão formar carbonato de cálcio. ",
        letra:'a',
       },
 
 
            {
           Questao: "(Fatec 2019) A fim de controlar os diversos problemas ambientais de cunho antrópico detectados na Terra a partir de meados do século XX, os governos dos países membros da ONU têm se reunido em grandes conferências em busca de soluções e metas comuns. Assinale a alternativa correta a respeito dessas conferências.",
 
            respostas: [
             { texto: "A) Um produto da Eco–92 foi a Agenda–21, documento em que constam programas para um desenvolvimento mais sustentável durante o século XXI.  ", correto: true },
 
          { texto: "B) A Rio+20 determinou maior fiscalização em usinas nucleares, a fim de evitar acidentes atômicos como os de Chernobyl, Goiânia e Fukushima.  ", correto: false},
 
          { texto: "C) Após a Rio+20, Canadá, Rússia e China deixaram a ONU, alegando discordâncias com políticas que interfeririam na autonomia dos países desenvolvidos. ", correto: false}
         ],
         justificativa: " A) O reflorestamento condiz com os propósitos do acordo, pois a vegetação, através da fotossíntese, retira CO2 (gás estufa) da atmosfera.  ",
         letra:'a',
         },
         
                
         {
             Questao: " (UEA 2019) A compreensão dos ciclos da matéria nos ecossistemas do planeta permite que o ser humano formule as melhores soluções para impactos ambientais cada vez mais preocupantes. Na natureza, o desequilíbrio verificado no ciclo do elemento carbono relaciona-se:",
         
            
         respostas: [
          { texto: "A) 	À inversão térmica nas grandes cidades. ", correto: false },
         
          { texto: "B)	À eutrofização dos ambientes aquáticos. ", correto: false},
 
          { texto: "C) 	À intensificação do efeito estufa. ", correto: true}
         ],
         justificativa: " C) A conferência Eco-92 produziu um documento chamado de Agenda21, no qual se estabeleceu um programa de ação para o desenvolvimento ambiental racional e sustentável. ",
         letra:'c',
         },
 

         {
          Questao: "(Fuvest 2019) O processo de acidificação dos oceanos, decorrente das mudanças climáticas globais, afeta diretamente as colônias de corais, influenciando na formação de recifes. Assinale a alternativa que completa corretamente a explicação para esse fenômeno.  ",
      
        
      
      respostas: [
       { texto: "A) Leva à formação de ácido carbônico, que, dissociado, gera, ao final, íons de hidrogênio e de carbonato, que se ligam, impedindo a formação do carbonato de cálcio que compõe os recifes de coral.  ", correto: false },

       { texto: "B) Reage com a água, produzindo ácido carbônico, que permanece no oceano e corrói os recifes de coral, que são formados por carbonato de cálcio. ", correto: true},
      
       { texto: "C) Gera menor quantidade de íons de hidrogênio, o que diminui o pH da água, liberando maior quantidade de íons cálcio, que, por sua vez, se ligam aos carbonatos, aumentando o tamanho dos recifes.  ", correto: false}
      ],
      justificativa: " B): O desequilíbrio no ciclo do elemento carbono está relacionado à intensificação do efeito estufa. O aumento da concentração de dióxido de carbono (CO2) na atmosfera, devido à queima de combustíveis fósseis e outras atividades humanas, é uma das principais causas do efeito estufa e do aquecimento global, levando a sérias consequências ambientais. Portanto, essa alteração no ciclo do carbono está relacionada ao aumento do efeito estufa.",
      letra:'b',
      },

]    



ComecarJogo()