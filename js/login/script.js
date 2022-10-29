const olhoOn = document.querySelectorAll(".eye-on");
const olhoOff = document.querySelectorAll(".eye-off");
const cadastrar = document.querySelector(".cadastrar");
const logar = document.querySelector(".logar");
const olhoSenha = document.querySelectorAll(".eye");
const inputSenha = document.querySelectorAll(".senha");
const btnEntrar = document.querySelector(".btn-entrar");
const btnCadastrar = document.querySelector(".btn-cadastrar");


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

function toggleLogarCadastrar() {
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

function cadastro() {
  let email = document.querySelector(".email").value;
  let senha = document.querySelector(".senhaCadastro").value;
  let nome = document.querySelector(".nome").value;

  let usuario = {
    nome: nome,
    senha: senha,
    email: email,
  };
  let toJson = JSON.stringify(usuario);
  localStorage.setItem("user", toJson);
  alert("Usuário cadastrado!");
}

function login() {
  let email = document.querySelector(".emailLogin").value;
  let senha = document.querySelector(".senhaLogin").value;

  let usuario = localStorage.getItem("user");
  let jsonData = JSON.parse(usuario);

  if (!email || !senha) {
    alert("Insira o e-mail e a senha!");
  } else if (email === jsonData.email && senha === jsonData.senha) {
    location.replace("home.html");
  } else {
    alert("E-mail ou senha incorreto!");
  }
}

olhoOff.forEach((e) => {
  e.addEventListener("click", toggleSenha);
  e.addEventListener("touchstart", toggleSenha);
});

olhoOn.forEach((e) => {
  e.addEventListener("click", toggleSenha);
  e.addEventListener("touchstart", toggleSenha);
});

cadastrar.addEventListener("click", toggleLogarCadastrar);
logar.addEventListener("click", toggleLogarCadastrar);

btnCadastrar.addEventListener("submit", (e) => {
  e.preventDefault();
});
btnCadastrar.addEventListener("click", cadastro);
btnEntrar.addEventListener("click", login);
btnEntrar.addEventListener("submit", (e) => {
  e.preventDefault();
});
