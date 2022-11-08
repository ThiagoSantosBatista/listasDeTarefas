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

function criarTarefa() {
  let id = conteudoArrayListas.length - 1;
  let idTarefa;
  if (id === 0) idTarefa = tarefasLista0.length;
  if (id === 1) idTarefa = tarefasLista1.length;
  if (id === 2) idTarefa = tarefasLista2.length;
  if (id === 3) idTarefa = tarefasLista3.length;
  if (id === 4) idTarefa = tarefasLista4.length;
  if (id === 5) idTarefa = tarefasLista5.length;
  let btnAddTarefa = document.querySelector(`.at${id}`);
  const ulListaConteudo = document.querySelector(`.lc${id}`);
  function adicionarTarefa() {
    let inputTarefa = document.querySelector(`.it${id}`);
    let valor = inputTarefa.value.trim();
    if (valor.length > 0) {
      let li = document.createElement("li");
      li.classList.add("lista__item");
      li.innerHTML = `<div class="checkbox-campo">
       <input type="checkbox" class="checkbox" id="checkbox${id}-${idTarefa}">
       <label for="checkbox${id}-${idTarefa}" class="descricao"></label>
       </div>
       <p>${inputTarefa.value}
       </p>
       <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa${id}(${idTarefa})">
       <span class="linha"></span>`;
      ulListaConteudo.appendChild(li);
      if (id === 0) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista0.push(listaTarefa);
        localStorage.setItem("lista0", JSON.stringify(tarefasLista0));
        mostrarTarefas0();
      } else if (id === 1) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista1.push(listaTarefa);
        localStorage.setItem("lista1", JSON.stringify(tarefasLista1));
        mostrarTarefas1();
      } else if (id === 2) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista2.push(listaTarefa);
        localStorage.setItem("lista2", JSON.stringify(tarefasLista2));
        mostrarTarefas2();
      } else if (id === 3) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista3.push(listaTarefa);
        localStorage.setItem("lista3", JSON.stringify(tarefasLista3));
        mostrarTarefas3();
      } else if (id === 4) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista4.push(listaTarefa);
        localStorage.setItem("lista4", JSON.stringify(tarefasLista4));
        mostrarTarefas4();
      } else if (id === 5) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista5.push(listaTarefa);
        localStorage.setItem("lista5", JSON.stringify(tarefasLista5));
        mostrarTarefas5();
      }
      inputTarefa.value = "";
      inputTarefa.focus();
      isChecked();
    } else {
      alert("Escreva uma tarefa!");
    }
  }
  btnAddTarefa.addEventListener("click", adicionarTarefa);
}

function isChecked() {
  let lista = document.querySelectorAll("[type=checkbox]");
  lista.forEach((el) => {
    localStorage.setItem(el.id, el.checked);
  });
}

document.addEventListener("click", (e) => {
  const target = e.target;
  const divcheckbox = target.closest("li");

  if (target.classList.contains("checkbox")) {
    divcheckbox.classList.toggle("concluido");
    isChecked();
  }
});

let listaCheckbox = document.querySelectorAll(`[type*="checkbox"]`);
listaCheckbox.forEach((el) => {
  var checked = JSON.parse(localStorage.getItem(el.id));
  document.getElementById(checked).checked = localStorage.getItem(el.che);
});

conteudoArrayListas.forEach((undefined, id) => {
  let idTarefa;
  if (id === 0) idTarefa = tarefasLista0.length;
  if (id === 1) idTarefa = tarefasLista1.length;
  if (id === 2) idTarefa = tarefasLista2.length;
  if (id === 3) idTarefa = tarefasLista3.length;
  if (id === 4) idTarefa = tarefasLista4.length;
  if (id === 5) idTarefa = tarefasLista5.length;
  let btnAddTarefa = document.querySelector(`.at${id}`);
  const ulListaConteudo = document.querySelector(`.lc${id}`);
  function adicionarTarefa() {
    let inputTarefa = document.querySelector(`.it${id}`);
    let valor = inputTarefa.value.trim();
    if (valor.length > 0) {
      let li = document.createElement("li");
      li.classList.add("lista__item");
      li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox" id="checkbox${id}-${idTarefa}">
         <label for="checkbox${id}-${idTarefa}" class="descricao"></label>
         </div>
         <p>${inputTarefa.value}
         </p>
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa${id}(${idTarefa})">
         <span class="linha"></span>`;
      ulListaConteudo.appendChild(li);
      if (id === 0) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista0.push(listaTarefa);
        localStorage.setItem("lista0", JSON.stringify(tarefasLista0));
        ++idTarefa;
      } else if (id === 1) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista1.push(listaTarefa);
        localStorage.setItem("lista1", JSON.stringify(tarefasLista1));
        ++idTarefa;
      } else if (id === 2) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista2.push(listaTarefa);
        localStorage.setItem("lista2", JSON.stringify(tarefasLista2));
        ++idTarefa;
      } else if (id === 3) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista3.push(listaTarefa);
        localStorage.setItem("lista3", JSON.stringify(tarefasLista3));
        ++idTarefa;
      } else if (id === 4) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista4.push(listaTarefa);
        localStorage.setItem("lista4", JSON.stringify(tarefasLista4));
        ++idTarefa;
      } else if (id === 5) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista5.push(listaTarefa);
        localStorage.setItem("lista5", JSON.stringify(tarefasLista5));
        ++idTarefa;
      }
      inputTarefa.value = "";
      inputTarefa.focus();
      isChecked();
    } else {
      alert("Escreva uma tarefa!");
    }
  }
  btnAddTarefa.addEventListener("click", adicionarTarefa);
});

function mostrarTarefas0() {
  const ulListaConteudo = document.querySelector(".lc0");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista0.forEach((value, id) => {
    let tarefa = value.tarefa;
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
       <input type="checkbox" class="checkbox" id="checkbox0-${id}">
       <label for="checkbox0-${id}" class="descricao"></label>
       </div>
       <p>${tarefa}
       </p>
       <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa0(${id})">
       <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
  });
}
mostrarTarefas0();

function mostrarTarefas1() {
  const ulListaConteudo = document.querySelector(".lc1");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista1.forEach((value, id) => {
    let tarefa = value.tarefa;
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox" id="checkbox1-${id}">
         <label for="checkbox1-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa1(${id})">
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
  });
}
mostrarTarefas1();

function mostrarTarefas2() {
  const ulListaConteudo = document.querySelector(".lc2");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista2.forEach((value, id) => {
    let tarefa = value.tarefa;
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox" id="checkbox2-${id}">
         <label for="checkbox2-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa2(${id})">
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
  });
}
mostrarTarefas2();

function mostrarTarefas3() {
  const ulListaConteudo = document.querySelector(".lc3");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista3.forEach((value, id) => {
    let tarefa = value.tarefa;
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox" id="checkbox3-${id}">
         <label for="checkbox3-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa3(${id})">
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
  });
}
mostrarTarefas3();

function mostrarTarefas4() {
  const ulListaConteudo = document.querySelector(".lc4");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista4.forEach((value, id) => {
    let tarefa = value.tarefa;
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox" id="checkbox4-${id}">
         <label for="checkbox4-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa4(${id})">
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
  });
}
mostrarTarefas4();

function mostrarTarefas5() {
  const ulListaConteudo = document.querySelector(".lc5");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista5.forEach((value, id) => {
    let tarefa = value.tarefa;
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox" id="checkbox5-${id}">
         <label for="checkbox5-${id}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa5(${id})">
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
  });
}
mostrarTarefas5();

function abrirModal() {
  let modalAddLista = document.querySelector(".adicionarLista");
  modalAddLista.classList.add("ativo");
}

function fecharModal() {
  let modalAddLista = document.querySelector(".adicionarLista");
  modalAddLista.classList.remove("ativo");
}

function deletarTarefa0(i) {
  tarefasLista0.splice(i, 1);
  localStorage.setItem("lista0", JSON.stringify(tarefasLista0));
  mostrarTarefas0();
}

function deletarTarefa1(i) {
  tarefasLista1.splice(i, 1);
  localStorage.setItem("lista1", JSON.stringify(tarefasLista1));
  mostrarTarefas1();
}

function deletarTarefa2(i) {
  tarefasLista2.splice(i, 1);
  localStorage.setItem("lista2", JSON.stringify(tarefasLista2));
  mostrarTarefas2();
}

function deletarTarefa3(i) {
  tarefasLista3.splice(i, 1);
  localStorage.setItem("lista3", JSON.stringify(tarefasLista3));
  mostrarTarefas3();
}

function deletarTarefa4(i) {
  tarefasLista4.splice(i, 1);
  localStorage.setItem("lista4", JSON.stringify(tarefasLista4));
  mostrarTarefas4();
}

function deletarTarefa5(i) {
  tarefasLista5.splice(i, 1);
  localStorage.setItem("lista5", JSON.stringify(tarefasLista5));
  mostrarTarefas5();
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
