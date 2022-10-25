const olhoOn = document.querySelector(".eye-on");
const olhoOff = document.querySelector(".eye-off");

function toggleSenha() {
  const olhoSenha = document.getElementById("eye");
  const inputSenha = document.getElementById("senhaLogin");
  olhoSenha.classList.toggle("on");
  olhoSenha.classList.contains("on") ? inputSenha.setAttribute("type", 'text') : inputSenha.setAttribute("type", 'password');
}

olhoOff.addEventListener("click", toggleSenha);
olhoOn.addEventListener("click", toggleSenha);
