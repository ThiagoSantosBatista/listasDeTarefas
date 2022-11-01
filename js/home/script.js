const btnMenu = document.querySelector(".nav__btn");
const btnMenuFechar = document.querySelector(".nav__btn-fechar");
const btnSair = document.querySelector(".sair");
const navListas = document.querySelector(".nav__listas");
const btnAddLista = document.querySelector("#btnAddLista");
const divListas = document.querySelector(".main__listas");
const addLista = document.querySelector(".adicionar");
const btnFecharModal = document.querySelector(".fecharModal");
const inputNomeLista = document.querySelector("#inputNomeLista");
let conteudoArrayListas = localStorage.getItem("listas")
  ? JSON.parse(localStorage.getItem("listas"))
  : [];

let tarefasLista0 = localStorage.getItem("lista0")
  ? JSON.parse(localStorage.getItem("lista0"))
  : [];
let tarefasLista1 = localStorage.getItem("lista1")
  ? JSON.parse(localStorage.getItem("lista1"))
  : [];
let tarefasLista2 = localStorage.getItem("lista2")
  ? JSON.parse(localStorage.getItem("lista2"))
  : [];
let tarefasLista3 = localStorage.getItem("lista3")
  ? JSON.parse(localStorage.getItem("lista3"))
  : [];
let tarefasLista4 = localStorage.getItem("lista4")
  ? JSON.parse(localStorage.getItem("lista4"))
  : [];
let tarefasLista5 = localStorage.getItem("lista5")
  ? JSON.parse(localStorage.getItem("lista5"))
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

conteudoArrayListas.forEach((text, id) => {
  let conteudo = text.nome;
  let div = document.createElement("div");
  div.classList.add(`lista`);
  div.innerHTML = `<div class="lista__nome">
                          <h1>${conteudo}</h1>
                          <img src="./img/edit_note.svg" alt="">
                      </div>
                      <div class="lista__add">
                          <input class="inputTarefa it${id}" type="text">
                          <button class="addTarefa at${id}">Add</button>
                      </div>
                      <ul class="lista__conteudo lc${id}">
                      </ul>
                      `;
  divListas.appendChild(div);
  inputNomeLista.value = "";
  inputNomeLista.focus();
});

tarefasLista0.forEach((value, id) => {
  let tarefa = value.tarefa;
  const ulListaConteudo = document.querySelector(".lc0");
  let li = document.createElement("li");
  li.classList.add("lista__item");
  li.innerHTML = `<div class="checkbox-campo">
       <input type="checkbox" id="checkbox-${id}">
       <label for="checkbox-${id}" class="descricao"></label>
       </div>
       <p>${tarefa}
       </p>
       <img src="./img/more.svg" alt="">
       <span class="linha"></span>`;
  ulListaConteudo.appendChild(li);
});
tarefasLista1.forEach((value, id) => {
  let tarefa = value.tarefa;
  const ulListaConteudo = document.querySelector(".lc1");
  let li = document.createElement("li");
  li.classList.add("lista__item");
  li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" id="checkbox-${id}">
         <label for="checkbox-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/more.svg" alt="">
         <span class="linha"></span>`;
  ulListaConteudo.appendChild(li);
});
tarefasLista2.forEach((value, id) => {
  let tarefa = value.tarefa;
  const ulListaConteudo = document.querySelector(".lc2");
  let li = document.createElement("li");
  li.classList.add("lista__item");
  li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" id="checkbox-${id}">
         <label for="checkbox-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/more.svg" alt="">
         <span class="linha"></span>`;
  ulListaConteudo.appendChild(li);
});
tarefasLista3.forEach((value, id) => {
  let tarefa = value.tarefa;
  const ulListaConteudo = document.querySelector(".lc3");
  let li = document.createElement("li");
  li.classList.add("lista__item");
  li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" id="checkbox-${id}">
         <label for="checkbox-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/more.svg" alt="">
         <span class="linha"></span>`;
  ulListaConteudo.appendChild(li);
});
tarefasLista4.forEach((value, id) => {
  let tarefa = value.tarefa;
  const ulListaConteudo = document.querySelector(".lc4");
  let li = document.createElement("li");
  li.classList.add("lista__item");
  li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" id="checkbox-${id}">
         <label for="checkbox-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/more.svg" alt="">
         <span class="linha"></span>`;
  ulListaConteudo.appendChild(li);
});
tarefasLista5.forEach((value, id) => {
  let tarefa = value.tarefa;
  const ulListaConteudo = document.querySelector(".lc5");
  let li = document.createElement("li");
  li.classList.add("lista__item");
  li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" id="checkbox-${id}">
         <label for="checkbox-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/more.svg" alt="">
         <span class="linha"></span>`;
  ulListaConteudo.appendChild(li);
});

conteudoArrayListas.forEach((undefined, id) => {
  let btnAddTarefa = document.querySelector(`.at${id}`);
  const ulListaConteudo = document.querySelector(`.lc${id}`);
  function adicionarTarefa() {
    let inputTarefa = document.querySelector(`.it${id}`);
    let valor = inputTarefa.value.trim();
    if (valor.length > 0) {
      let li = document.createElement("li");
      li.classList.add("lista__item");
      li.innerHTML = `<div class="checkbox-campo">
       <input type="checkbox" id="checkbox-${id}">
       <label for="checkbox-${id}" class="descricao"></label>
       </div>
       <p>${inputTarefa.value}
       </p>
       <img src="./img/more.svg" alt="">
       <span class="linha"></span>`;
      ulListaConteudo.appendChild(li);
      if (id === 0) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista0.push(listaTarefa);
        localStorage.setItem("lista0", JSON.stringify(tarefasLista0));
      } else if (id === 1) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista1.push(listaTarefa);
        localStorage.setItem("lista1", JSON.stringify(tarefasLista1));
      } else if (id === 2) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista2.push(listaTarefa);
        localStorage.setItem("lista2", JSON.stringify(tarefasLista2));
      } else if (id === 3) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista3.push(listaTarefa);
        localStorage.setItem("lista3", JSON.stringify(tarefasLista3));
      } else if (id === 4) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista4.push(listaTarefa);
        localStorage.setItem("lista4", JSON.stringify(tarefasLista4));
      } else if (id === 5) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista5.push(listaTarefa);
        localStorage.setItem("lista5", JSON.stringify(tarefasLista5));
      }

      inputTarefa.value = "";
    } else {
      alert("Escreva uma tarefa!");
    }
  }
  btnAddTarefa.addEventListener("click", adicionarTarefa);
});

function criarLista(text) {
  let conteudo = text.nome;
  let id = conteudoArrayListas.length - 1;
  let div = document.createElement("div");
  div.classList.add(`lista`);
  div.innerHTML = `<div class="lista__nome">
    <h1>${conteudo}</h1>
    <img src="./img/edit_note.svg" alt="">
  </div>
  <div class="lista__add">
    <input class="inputTarefa it${id}" type="text">
    <button class="addTarefa at${id}">Add</button>
  </div>
  <ul class="lista__conteudo lc${id}">
  </ul>
  `;
  divListas.appendChild(div);
  inputNomeLista.value = "";
  inputNomeLista.focus();
}

function criarTarefa() {
  let id = conteudoArrayListas.length - 1;
  let btnAddTarefa = document.querySelector(`.at${id}`);
  const ulListaConteudo = document.querySelector(`.lc${id}`);
  function adicionarTarefa() {
    let inputTarefa = document.querySelector(`.it${id}`);
    let valor = inputTarefa.value.trim();
    if (valor.length > 0) {
      let li = document.createElement("li");
      li.classList.add("lista__item");
      li.innerHTML = `<div class="checkbox-campo">
       <input type="checkbox" id="checkbox-${id}">
       <label for="checkbox-${id}" class="descricao"></label>
       </div>
       <p>${inputTarefa.value}
       </p>
       <img src="./img/more.svg" alt="">
       <span class="linha"></span>`;
      ulListaConteudo.appendChild(li);
      if (id === 0) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista0.push(listaTarefa);
        localStorage.setItem("lista0", JSON.stringify(tarefasLista0));
      } else if (id === 1) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista1.push(listaTarefa);
        localStorage.setItem("lista1", JSON.stringify(tarefasLista1));
      } else if (id === 2) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista2.push(listaTarefa);
        localStorage.setItem("lista2", JSON.stringify(tarefasLista2));
      } else if (id === 3) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista3.push(listaTarefa);
        localStorage.setItem("lista3", JSON.stringify(tarefasLista3));
      } else if (id === 4) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista4.push(listaTarefa);
        localStorage.setItem("lista4", JSON.stringify(tarefasLista4));
      } else if (id === 5) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista5.push(listaTarefa);
        localStorage.setItem("lista5", JSON.stringify(tarefasLista5));
      }

      inputTarefa.value = "";
    } else {
      alert("Escreva uma tarefa!");
    }
  }
  btnAddTarefa.addEventListener("click", adicionarTarefa);
}

function addListasDados() {
  let value = inputNomeLista.value.trim();
  if (conteudoArrayListas.length > 5) return alert("Máximo de 6 listas");
  if (value.length > 0) {
    let listaDados = {
      nome: inputNomeLista.value,
    };
    conteudoArrayListas.push(listaDados);
    localStorage.setItem("listas", JSON.stringify(conteudoArrayListas));
    criarLista(conteudoArrayListas[conteudoArrayListas.length - 1]);
    criarTarefa(conteudoArrayListas[conteudoArrayListas.length - 1]);
  } else {
    alert(
      "Nome da lista deve ter no mínimo 1 caractere! Obs: Máximo de 6 listas."
    );
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
addLista.addEventListener("click", addListasDados);
btnAddLista.addEventListener("click", abrirModal);
btnFecharModal.addEventListener("click", fecharModal);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addLista.click();
  }
});
