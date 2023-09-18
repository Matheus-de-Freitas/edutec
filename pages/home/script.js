const home = document.querySelector('.botao-home')
const quiz = document.querySelector('.botao-quiz')
const contato = document.querySelector('.botao-contato')
const conteudos = document.querySelector('.botao-conteudos')
const sobreNav = document.querySelector('.botao-sobre')

const desmatamento = document.querySelector('.inicial-quiz-desmatamento')
const queimadas = document.querySelector('.inicial-quiz-queimadas')
const extincao = document.querySelector('.inicial-quiz-extincao')
const estufa = document.querySelector('.inicial-quiz-estufa')
const aquecimento = document.querySelector('.inicial-quiz-aquecimento')

const sobre = document.querySelector('.sobre1')
const integrantes1 = document.querySelector('.integrantes1')
const integrantes2 = document.querySelector('.integrantes2')

function marcarPosicao() {
    const janelaTopo = window.pageYOffset;
    console.log(janelaTopo);
    
    if (janelaTopo > 830) {
        home.classList.remove('ativo');
        quiz.classList.add('ativo')
    }

    else if (janelaTopo < 830) {
        quiz.classList.remove('ativo');
        home.classList.add('ativo');
    }

    if (janelaTopo >= 1500) {
        quiz.classList.remove('ativo')
        contato.classList.add('ativo')
    }

    else if (janelaTopo <= 1500 & janelaTopo > 830) {
        contato.classList.remove('ativo')
    }


    if (janelaTopo >= 2400) {
        contato.classList.remove('ativo')
        conteudos.classList.add('ativo')
    }

    else if (janelaTopo < 2400) {
        conteudos.classList.remove('ativo')
    }

    if (janelaTopo >= 3300) {
        conteudos.classList.remove('ativo')
        sobreNav.classList.add('ativo')
    }

    else if (janelaTopo < 3300) {
        sobreNav.classList.remove('ativo')
    }
}



function mudarConteudo(direcao, destino){
    if (direcao === 'direita') {

        if (destino === 'sobre') {
            sobre.removeAttribute('id')
            integrantes2.id = 'proxima-pagina'
        }
        
        else if (destino === 'integrantes1') {
            integrantes1.removeAttribute('id')
            sobre.id = 'proxima-pagina'
        }

        else if (destino === 'integrantes2') {
            integrantes2.removeAttribute('id')
            integrantes1.id = 'proxima-pagina'
        }
    }

    else if (direcao === 'esquerda') {

        if (destino === 'sobre') {
            sobre.removeAttribute('id')
            integrantes1.id = 'proxima-pagina'
        }

        else if (destino === 'integrantes1') {
            integrantes1.removeAttribute('id')
            integrantes2.id = 'proxima-pagina'
        }

        else if (destino === 'integrantes2') {
            integrantes2.removeAttribute('id')
            sobre.id = 'proxima-pagina'
        }
    }
}

function mudarPagina (direcao , pagina) {

    if(direcao = 'esquerda') {

        if (pagina === "desmatamento"){

            desmatamento.removeAttribute('id')
            queimadas.id = 'proxima-pagina'
        }

        else if (pagina === 'queimadas') {
            queimadas.removeAttribute('id')
            extincao.id = 'proxima-pagina'
        }

        else if (pagina === 'extincao') {
            extincao.removeAttribute('id')
            estufa.id = 'proxima-pagina'
        }

        else if (pagina === 'estufa') {
            estufa.removeAttribute('id')
            aquecimento.id = 'proxima-pagina'
        }

        else if (pagina === 'aquecimento') {
            aquecimento.removeAttribute('id')
            desmatamento.id = 'proxima-pagina'
        }

    }

    if (direcao = 'direita') {

        if(pagina === 'desmatamento') {
            desmatamento.removeAttribute('id')
            aquecimento.id = 'proxima-pagina'
        }

        else if (pagina === 'queimadas') {
            queimadas.removeAttribute('id')
            desmatamento.id = 'proxima-pagina'
        }

        else if (pagina === 'extincao') {
            extincao.removeAttribute('id')
            queimadas.id = 'proxima-pagina'
        }

        else if (pagina === 'estufa') {
            estufa.removeAttribute('id')
            extincao.id =  'proxima-pagina'
        }

        else if (pagina === 'aquecimento') {
            aquecimento.removeAttribute('id')
            estufa.id = 'proxima-pagina'
        }
    }
}

window.addEventListener('scroll', function(){
    marcarPosicao()
})