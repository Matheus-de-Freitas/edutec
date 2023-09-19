class EnviarFormulario {
  constructor(configuracoes) {
    this.configuracoes = configuracoes;
    this.formulario = document.querySelector(configuracoes.form);
    this.botaoFormulario = document.querySelector(configuracoes.button);
    if (this.formulario) {
      this.url = this.formulario.getAttribute("action");
    }
    this.enviarFormulario = this.enviarFormulario.bind(this);
  }

  exibirSucesso() {
    this.formulario.innerHTML = this.configuracoes.sucesso;
  }

  exibirErro() {
    this.formulario.innerHTML = this.configuracoes.erro;
  }

  obterObjetoFormulario() {
    const objetoFormulario = {};
    const campos = this.formulario.querySelectorAll("[name]");
    campos.forEach((campo) => {
      objetoFormulario[campo.getAttribute("name")] = campo.value;
    });
    return objetoFormulario;
  }

  duranteEnvio(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async enviarFormulario(event) {
    try {
      this.duranteEnvio(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.obterObjetoFormulario()),
      });
      this.exibirSucesso();
    } catch (erro) {
      this.exibirErro();
      throw new Error(erro);
    }
  }


  iniciar() {
    if (this.formulario) this.botaoFormulario.addEventListener("click", this.enviarFormulario);
    return this;
  }
}

const formularioEnviar = new EnviarFormulario({
  form: "[data-form]",
  button: "[data-button]",
  sucesso: "<h1 class='sucesso'>Mensagem enviada!</h1>",
  erro: "<h1 class='erro'>Não foi possível enviar sua mensagem.</h1>",
});
formularioEnviar.iniciar();