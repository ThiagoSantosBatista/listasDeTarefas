const btnMenu = document.querySelector(".nav__btn");
const btnMenuFechar = document.querySelector(".nav__btn-fechar");
const btnSair = document.querySelector(".sair");
const navListas = document.querySelector(".nav__listas");
const btnAddLista = document.querySelector("#btnAddLista");
const listas = document.querySelector(".main__listas");
const addLista = document.querySelector(".adicionar");
const btnFecharModal = document.querySelector(".fecharModal");

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
  const ativo = nav.classList.contains("ativo");
  btnMenu.setAttribute("aria-expanded", ativo);
  btnMenuFechar.setAttribute("aria-expanded", ativo);
  ativo
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "visible");
  ativo
    ? (document.body.style.pointerEvents = "none")
    : (document.body.style.pointerEvents = "auto");
}

(function () {
  let nome = localStorage.getItem("user");
  let jsonData = JSON.parse(nome);
  let userSpan = document.querySelector(".user-roxo");

  userSpan.innerHTML = jsonData.nome;
})();

function criarLista() {
  let inputNomeLista = document.querySelector("#inputNomeLista");
  let nomeLista = inputNomeLista.value;
  if (nomeLista.length > 0) {
    let div = document.createElement("div");
    div.classList.add("lista");
    listas.appendChild(div);

    let divListaNome = document.createElement("div");
    divListaNome.classList.add("lista__nome");
    div.appendChild(divListaNome);

    let listaNomeH1 = document.createElement("h1");
    listaNomeH1.innerText = nomeLista;
    divListaNome.appendChild(listaNomeH1);

    let listaNomeImg = document.createElement("img");
    listaNomeImg.src = "./img/edit_note.svg";
    divListaNome.appendChild(listaNomeImg);

    let divListaAdd = document.createElement("div");
    divListaAdd.classList.add("lista__add");
    div.appendChild(divListaAdd);

    let listaAddInput = document.createElement("input");
    divListaAdd.appendChild(listaAddInput);

    let listaAddBtn = document.createElement("button");
    listaAddBtn.innerText = "add";
    divListaAdd.appendChild(listaAddBtn);
    inputNomeLista.value = "";
    inputNomeLista.focus();
  } else {
    alert("Nome da lista deve ter no mínimo 1 caractere!");
  }
}

function abrirModal() {
  let modalAddLista = document.querySelector(".adicionarLista");
  modalAddLista.classList.add("ativo");
}

function fecharModal() {
  let modalAddLista = document.querySelector(".adicionarLista");
  modalAddLista.classList.remove("ativo");
}

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);
btnMenuFechar.addEventListener("click", toggleMenu);
btnMenuFechar.addEventListener("touchstart", toggleMenu);
btnSair.addEventListener("click", logout);
btnSair.addEventListener("touchstart", logout);
navListas.addEventListener("click", toggleMenu);
navListas.addEventListener("touchstart", toggleMenu);
addLista.addEventListener("click", criarLista);
btnAddLista.addEventListener("click", abrirModal);
btnFecharModal.addEventListener("click", fecharModal);
