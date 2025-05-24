const camposFormulario = document.querySelectorAll('.campo')

const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio")

const botao = document.querySelector(".enviar")

botao.addEventListener('click', (e) => {

  e.preventDefault()

  camposFormulario.forEach((campo, index) => {
    if(campo.value){
      campo.classList.remove("campo-vazio")
      campo.classList.add("campo-preenchido")
      campo.nextElementSibling.innerHTML = ""
    }else if (campo.value == "") {
      campo.classList.remove("campo-preenchido")
      campo.classList.add("campo-vazio")
      campo.nextElementSibling.innerHTML = "* Campo obrigatório"
    }
  });
})