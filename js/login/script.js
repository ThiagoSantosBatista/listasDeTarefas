const olhoOn = document.querySelectorAll(".eye-on");
const olhoOff = document.querySelectorAll(".eye-off");
const cadastrar = document.querySelector(".cadastrar");
const logar = document.querySelector(".logar");
const olhoSenha = document.querySelectorAll(".eye");
const inputSenha = document.querySelectorAll(".senha");

function toggleSenha(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  olhoSenha.forEach((e) => {
    e.classList.toggle("on");
    if (e.classList.contains("on")) {
      inputSenha.forEach((e) => {
        e.setAttribute("type", "text");
      });
    } else {
      inputSenha.forEach((e) => {
        e.setAttribute("type", "password");
      });
    }
  });
}

function logarCadastrar() {
  const input = document.querySelectorAll("input");
  const main = document.querySelector(".main");
  main.classList.toggle("telaCadastro");
  input.forEach((e) => {
    e.value = "";
  });
  olhoSenha.forEach((e) => {
    e.classList.remove("on");
    if (e.classList.contains("on")) {
      inputSenha.forEach((e) => {
        e.setAttribute("type", "text");
      });
    } else {
      inputSenha.forEach((e) => {
        e.setAttribute("type", "password");
      });
    }
  });
}

olhoOff.forEach((e) => {
  e.addEventListener("click", toggleSenha);
  e.addEventListener("touchstart", toggleSenha);
});

olhoOn.forEach((e) => {
  e.addEventListener("click", toggleSenha);
  e.addEventListener("touchstart", toggleSenha);
});

cadastrar.addEventListener("click", logarCadastrar);
logar.addEventListener("click", logarCadastrar);
