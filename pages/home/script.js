const home = document.querySelector('.botao-home')
const quiz = document.querySelector('.botao-quiz')
const contact = document.querySelector('.botao-contact')
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
    const windowTop = window.pageYOffset;
    console.log(windowTop);
    
    if (windowTop > 830) {
        home.classList.remove('active');
        quiz.classList.add('active')
    }

    else if (windowTop < 830) {
        quiz.classList.remove('active');
        home.classList.add('active');
    }

    if (windowTop >= 1500) {
        quiz.classList.remove('active')
        contact.classList.add('active')
    }

    else if (windowTop <= 1500 & windowTop > 830) {
        contact.classList.remove('active')
    }


    if (windowTop >= 2400) {
        contact.classList.remove('active')
        conteudos.classList.add('active')
    }

    else if (windowTop < 2400) {
        conteudos.classList.remove('active')
    }

    if (windowTop >= 3300) {
        conteudos.classList.remove('active')
        sobreNav.classList.add('active')
    }

    else if (windowTop < 3300) {
        sobreNav.classList.remove('active')
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


class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();