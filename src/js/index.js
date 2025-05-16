const camposFormulario = document.getElementsByName("campo")

const campoObrigatorio = document.querySelector("div[class='campo-obrigatorio']")

const botao = document.querySelector("button[class='enviar']")

botao.addEventListener('click', () => {
  camposFormulario.forEach((campo, index) => {
    if(campo.value !== ""){
      campo.classList.remove("campo-vazio")
      campo.classList.add("campo-preenchido")
      campoObrigatorio.innerHTML = ""
    }else if (campo.value == "") {
      campo.classList.remove("campo-preenchido")
      campo.classList.add("campo-vazio")
      campoObrigatorio.innerHTML = "* Campo Obrigatório"
    }
  });
})