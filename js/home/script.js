const btnMenu = document.querySelector(".nav__btn");
const btnMenuFechar = document.querySelector(".nav__btn-fechar");
const btnSair = document.querySelector(".sair");
const navListas = document.querySelector(".nav__listas");
const btnAddLista = document.querySelector("#btnAddLista");
const divListas = document.querySelector(".main__listas");
const addLista = document.querySelector(".adicionar");
const btnFecharModal = document.querySelector(".fecharModal");
const inputNomeLista = document.querySelector("#inputNomeLista");
const btnAddTarefa = document.querySelector(".addTarefa");
const listas = document.getElementsByClassName(".lista")[0];
let conteudoArrayListas = localStorage.getItem("listas")
  ? JSON.parse(localStorage.getItem("listas"))
  : [];
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

conteudoArrayListas.forEach(criarLista);

function criarLista(text) {
    let conteudo = text.nome;
  let div = document.createElement("div");
  div.classList.add("lista");
  div.innerHTML = `<div class="lista__nome">
                    <h1>${conteudo}</h1>
                    <img src="./img/edit_note.svg" alt="">
                </div>
                <div class="lista__add">
                    <input class="inputTarefa" type="text">
                    <button class="addTarefa" onclick="adicionarTarefa()">Add</button>
                </div>
                <ul class="lista__conteudo">
                </ul>
                `;
  divListas.appendChild(div);
  inputNomeLista.value = "";
  inputNomeLista.focus();
}
function addListasDados() {
  let value = inputNomeLista.value.trim();
  if (value.length > 0) {
    let listaDados = {
      nome: inputNomeLista.value,
    };
    conteudoArrayListas.push(listaDados);
    localStorage.setItem("listas", JSON.stringify(conteudoArrayListas));
    criarLista(conteudoArrayListas[conteudoArrayListas.length - 1]);
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

function adicionarTarefa(e) {
  const ulListaConteudo = document.querySelector(".lista__conteudo");
  const inputTarefa = document.querySelector(".inputTarefa");
  let value = inputTarefa.value.trim();
  if (value.length > 0) {
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
     <input type="checkbox" id="checkbox-7">
     <label for="checkbox-7" class="descricao"></label>
     </div>
     <p>${inputTarefa.value}
     </p>
     <img src="./img/more.svg" alt="">
     <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
    inputTarefa.value = "";
  } else {
    alert("Escreva uma tarefa!");
  }
}

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);
btnMenuFechar.addEventListener("click", toggleMenu);
btnMenuFechar.addEventListener("touchstart", toggleMenu);
btnSair.addEventListener("click", logout);
btnSair.addEventListener("touchstart", logout);
navListas.addEventListener("click", toggleMenu);
navListas.addEventListener("touchstart", toggleMenu);
addLista.addEventListener("click", addListasDados);
btnAddLista.addEventListener("click", abrirModal);
btnFecharModal.addEventListener("click", fecharModal);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addLista.click();
  }
});
