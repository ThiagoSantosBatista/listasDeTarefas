const btnMenu = document.querySelector(".nav__btn");
const btnMenuFechar = document.querySelector(".nav__btn-fechar");
const btnSair = document.querySelector(".sair");

function logout(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  window.location.href = "index.html";
}

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector(".nav");
  nav.classList.toggle("ativo");
}

(function () {
  let nome = localStorage.getItem("user");
  let jsonData = JSON.parse(nome);
  let userSpan = document.querySelector(".user-roxo");

  userSpan.innerHTML = jsonData.nome;
})();

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);
btnMenuFechar.addEventListener("click", toggleMenu);
btnMenuFechar.addEventListener("touchstart", toggleMenu);
btnSair.addEventListener("click", logout);
btnSair.addEventListener("touchstart", logout);
