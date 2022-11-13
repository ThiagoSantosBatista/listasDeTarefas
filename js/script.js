const btnMenu = document.querySelector(".nav__btn");
const btnMenuFechar = document.querySelector(".nav__btn-fechar");
const btnSair = document.querySelector(".sair");
const navListas = document.querySelector(".nav__listas");
const btnAddLista = document.querySelector(".btnAddLista");
const divListas = document.querySelector(".main__listas");
const addLista = document.querySelector(".adicionar");
const btnFecharModal = document.querySelector(".fecharModal");
const btnFecharModalLista = document.querySelector(".fecharModalLista");
const inputNomeLista = document.querySelector("#inputNomeLista");
const btnTrocarTema = document.querySelector(".btnTrocarTema");
const btnTrocarNome = document.querySelector(".trocarNomeLista");

let conteudoArrayListas = localStorage.getItem("listas")
  ? JSON.parse(localStorage.getItem("listas"))
  : [];

let contagemTarefas = localStorage.getItem("tarefas")
  ? parseInt(localStorage.getItem("tarefas"))
  : 0;
let idCheckbox = contagemTarefas;

for (let i = 0; i < 6; i++) {
  window[`tarefasLista${i}`] = localStorage.getItem(`lista${i}`)
    ? JSON.parse(localStorage.getItem(`lista${i}`))
    : [];
}

for (let i = 0; i < 6; i++) {
  window[`arrayCheckbox${i}`] = localStorage.getItem(`checkbox${i}`)
    ? JSON.parse(localStorage.getItem(`checkbox${i}`))
    : [];
}

function carregarTema() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode) trocarTema();
}
carregarTema();

function trocarTema() {
  const html = document.querySelector("html");
  html.classList.toggle("dark-mode");

  localStorage.removeItem("darkMode");
  if (html.classList.contains("dark-mode")) localStorage.setItem("darkMode", 1);
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
    criarTarefa();
  } else {
    alert(
      "Nome da lista deve ter no mínimo 1 caractere! Obs: Máximo de 6 listas."
    );
  }
}

function criarLista(text) {
  let id = conteudoArrayListas.length - 1;
  function listaConteudo() {
    let conteudo = text.nome;
    let div = document.createElement("div");
    div.classList.add(`lista`);
    div.innerHTML = `<div class="lista__nome">
      <h1 class="listaNome${id}">${conteudo}</h1>
      <img class="listaEditar${id} listaEdit" src="./img/edit_note.svg" alt="">
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
  listaConteudo();
  eventoLista();
}

function eventoLista() {
  let btnEditarLista = document.querySelectorAll(".listaEdit");
  btnEditarLista.forEach((e) => {
    e.addEventListener("click", function (e) {
      let elemento = e.target;
      const inputEditarNome = document.querySelector("#editarNomeLista");

      let modalEditarLista = document.querySelector(".editarLista");
      modalEditarLista.classList.add("modal-aberto");
      document.body.style.overflowY = "hidden";

      if (elemento.classList.contains("listaEditar0")) {
        inputEditarNome.classList.add("0");
        let h1 = document.querySelector(".listaNome0");
        inputEditarNome.value = h1.innerText;
      }
      if (elemento.classList.contains("listaEditar1")) {
        inputEditarNome.classList.add("1");
        let h1 = document.querySelector(".listaNome1");
        inputEditarNome.value = h1.innerText;
      }
      if (elemento.classList.contains("listaEditar2")) {
        inputEditarNome.classList.add("2");
        let h1 = document.querySelector(".listaNome2");
        inputEditarNome.value = h1.innerText;
      }
      if (elemento.classList.contains("listaEditar3")) {
        inputEditarNome.classList.add("3");
        let h1 = document.querySelector(".listaNome3");
        inputEditarNome.value = h1.innerText;
      }
      if (elemento.classList.contains("listaEditar4")) {
        inputEditarNome.classList.add("4");
        let h1 = document.querySelector(".listaNome4");
        inputEditarNome.value = h1.innerText;
      }
      if (elemento.classList.contains("listaEditar5")) {
        inputEditarNome.classList.add("5");
        let h1 = document.querySelector(".listaNome5");
        inputEditarNome.value = h1.innerText;
      }
    });
  });
}

function abrirModal() {
  let modalAddLista = document.querySelector(".adicionarLista");

  modalAddLista.classList.add("modal-aberto");
  document.body.style.overflowY = "hidden";
}

function fecharModal() {
  let modalAddLista = document.querySelector(".adicionarLista");
  modalAddLista.classList.remove("modal-aberto");
  document.body.style.overflowY = "visible";
}

conteudoArrayListas.forEach((text, id) => {
  function listaConteudo() {
    let conteudo = text.nome;
    let div = document.createElement("div");
    div.classList.add(`lista`);
    div.innerHTML = `<div class="lista__nome">
                              <h1 class="listaNome${id}">${conteudo}</h1>
                              <img class="listaEditar${id} listaEdit" src="./img/edit_note.svg" alt="">
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
  listaConteudo();
  eventoLista();
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
       <input type="checkbox" class="checkbox" id="checkbox${id}-${idCheckbox}}">
       <label for="checkbox${id}-${idCheckbox}" class="descricao"></label>
       </div>
       <p>${inputTarefa.value}
       </p>
       <svg onclick="deletarTarefa${id}(${idTarefa}, ${idCheckbox}) [id]})" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.68229 25C3.09896 25 2.58854 24.7917 2.15104 24.375C1.71354 23.9583 1.49479 23.4722 1.49479 22.9167V3.125H1.09375C0.777778 3.125 0.516493 3.02662 0.309896 2.82986C0.103299 2.6331 0 2.38426 0 2.08333C0 1.78241 0.103299 1.53356 0.309896 1.33681C0.516493 1.14005 0.777778 1.04167 1.09375 1.04167H6.85417C6.85417 0.740741 6.95747 0.491898 7.16406 0.295139C7.37066 0.0983798 7.63194 0 7.94792 0H15.3854C15.7014 0 15.9627 0.0983798 16.1693 0.295139C16.3759 0.491898 16.4792 0.740741 16.4792 1.04167H22.2396C22.5556 1.04167 22.8168 1.14005 23.0234 1.33681C23.23 1.53356 23.3333 1.78241 23.3333 2.08333C23.3333 2.38426 23.23 2.6331 23.0234 2.82986C22.8168 3.02662 22.5556 3.125 22.2396 3.125H21.8385V22.9167C21.8385 23.4722 21.6198 23.9583 21.1823 24.375C20.7448 24.7917 20.2344 25 19.651 25H3.68229ZM3.68229 3.125V22.9167H19.651V3.125H3.68229ZM7.54688 18.8889C7.54688 19.1898 7.65017 19.4387 7.85677 19.6354C8.06337 19.8322 8.32465 19.9306 8.64063 19.9306C8.9566 19.9306 9.21788 19.8322 9.42448 19.6354C9.63108 19.4387 9.73438 19.1898 9.73438 18.8889V7.11806C9.73438 6.81713 9.63108 6.56829 9.42448 6.37153C9.21788 6.17477 8.9566 6.07639 8.64063 6.07639C8.32465 6.07639 8.06337 6.17477 7.85677 6.37153C7.65017 6.56829 7.54688 6.81713 7.54688 7.11806V18.8889ZM13.599 18.8889C13.599 19.1898 13.7023 19.4387 13.9089 19.6354C14.1155 19.8322 14.3767 19.9306 14.6927 19.9306C15.0087 19.9306 15.27 19.8322 15.4766 19.6354C15.6832 19.4387 15.7865 19.1898 15.7865 18.8889V7.11806C15.7865 6.81713 15.6832 6.56829 15.4766 6.37153C15.27 6.17477 15.0087 6.07639 14.6927 6.07639C14.3767 6.07639 14.1155 6.17477 13.9089 6.37153C13.7023 6.56829 13.599 6.81713 13.599 7.11806V18.8889Z" fill="#FE5045"/>
         </svg>
       <span class="linha"></span>`;
      ulListaConteudo.appendChild(li);
      if (id === 0) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista0.push(listaTarefa);
        localStorage.setItem("lista0", JSON.stringify(tarefasLista0));
        arrayCheckbox0.push(idCheckbox);
        localStorage.setItem("checkbox0", JSON.stringify(arrayCheckbox0));
        mostrarTarefas0();
      } else if (id === 1) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista1.push(listaTarefa);
        localStorage.setItem("lista1", JSON.stringify(tarefasLista1));
        arrayCheckbox1.push(idCheckbox);
        localStorage.setItem("checkbox1", JSON.stringify(arrayCheckbox1));
        mostrarTarefas1();
      } else if (id === 2) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista2.push(listaTarefa);
        localStorage.setItem("lista2", JSON.stringify(tarefasLista2));
        arrayCheckbox2.push(idCheckbox);
        localStorage.setItem("checkbox2", JSON.stringify(arrayCheckbox2));
        mostrarTarefas2();
      } else if (id === 3) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista3.push(listaTarefa);
        localStorage.setItem("lista3", JSON.stringify(tarefasLista3));
        arrayCheckbox3.push(idCheckbox);
        localStorage.setItem("checkbox3", JSON.stringify(arrayCheckbox3));
        mostrarTarefas3();
      } else if (id === 4) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista4.push(listaTarefa);
        localStorage.setItem("lista4", JSON.stringify(tarefasLista4));
        arrayCheckbox4.push(idCheckbox);
        localStorage.setItem("checkbox4", JSON.stringify(arrayCheckbox4));
        mostrarTarefas4();
      } else if (id === 5) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista5.push(listaTarefa);
        localStorage.setItem("lista5", JSON.stringify(tarefasLista5));
        arrayCheckbox5.push(idCheckbox);
        localStorage.setItem("checkbox5", JSON.stringify(arrayCheckbox5));
        mostrarTarefas5();
      }
      ++idCheckbox;
      addTarefaNum = idCheckbox;
      localStorage.setItem("tarefas", JSON.stringify(addTarefaNum));
      inputTarefa.value = "";
      inputTarefa.focus();
      salvarCheckbox();
    } else {
      alert("Escreva uma tarefa!");
    }
  }
  btnAddTarefa.addEventListener("click", adicionarTarefa);
}

function salvarCheckbox() {
  let lista = document.querySelectorAll(".checkbox");
  lista.forEach((el) => {
    localStorage.setItem(el.id, el.checked);
  });
}

document.addEventListener("click", (e) => {
  const target = e.target;
  const divcheckbox = target.closest("li");

  if (target.classList.contains("checkbox")) {
    divcheckbox.classList.toggle("concluido");
    salvarCheckbox();
  }
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
         <input type="checkbox" class="checkbox" id="checkbox${id}-${idCheckbox}">
         <label for="checkbox${id}-${idCheckbox}" class="descricao"></label>
         </div>
         <p>${inputTarefa.value}
         </p>
         <svg onclick="deletarTarefa${id}(${idTarefa}, ${idCheckbox}) [id]})" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.68229 25C3.09896 25 2.58854 24.7917 2.15104 24.375C1.71354 23.9583 1.49479 23.4722 1.49479 22.9167V3.125H1.09375C0.777778 3.125 0.516493 3.02662 0.309896 2.82986C0.103299 2.6331 0 2.38426 0 2.08333C0 1.78241 0.103299 1.53356 0.309896 1.33681C0.516493 1.14005 0.777778 1.04167 1.09375 1.04167H6.85417C6.85417 0.740741 6.95747 0.491898 7.16406 0.295139C7.37066 0.0983798 7.63194 0 7.94792 0H15.3854C15.7014 0 15.9627 0.0983798 16.1693 0.295139C16.3759 0.491898 16.4792 0.740741 16.4792 1.04167H22.2396C22.5556 1.04167 22.8168 1.14005 23.0234 1.33681C23.23 1.53356 23.3333 1.78241 23.3333 2.08333C23.3333 2.38426 23.23 2.6331 23.0234 2.82986C22.8168 3.02662 22.5556 3.125 22.2396 3.125H21.8385V22.9167C21.8385 23.4722 21.6198 23.9583 21.1823 24.375C20.7448 24.7917 20.2344 25 19.651 25H3.68229ZM3.68229 3.125V22.9167H19.651V3.125H3.68229ZM7.54688 18.8889C7.54688 19.1898 7.65017 19.4387 7.85677 19.6354C8.06337 19.8322 8.32465 19.9306 8.64063 19.9306C8.9566 19.9306 9.21788 19.8322 9.42448 19.6354C9.63108 19.4387 9.73438 19.1898 9.73438 18.8889V7.11806C9.73438 6.81713 9.63108 6.56829 9.42448 6.37153C9.21788 6.17477 8.9566 6.07639 8.64063 6.07639C8.32465 6.07639 8.06337 6.17477 7.85677 6.37153C7.65017 6.56829 7.54688 6.81713 7.54688 7.11806V18.8889ZM13.599 18.8889C13.599 19.1898 13.7023 19.4387 13.9089 19.6354C14.1155 19.8322 14.3767 19.9306 14.6927 19.9306C15.0087 19.9306 15.27 19.8322 15.4766 19.6354C15.6832 19.4387 15.7865 19.1898 15.7865 18.8889V7.11806C15.7865 6.81713 15.6832 6.56829 15.4766 6.37153C15.27 6.17477 15.0087 6.07639 14.6927 6.07639C14.3767 6.07639 14.1155 6.17477 13.9089 6.37153C13.7023 6.56829 13.599 6.81713 13.599 7.11806V18.8889Z" fill="#FE5045"/>
         </svg>
         <span class="linha"></span>`;
      ulListaConteudo.appendChild(li);
      if (id === 0) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista0.push(listaTarefa);
        localStorage.setItem("lista0", JSON.stringify(tarefasLista0));
        arrayCheckbox0.push(idCheckbox);
        localStorage.setItem("checkbox0", JSON.stringify(arrayCheckbox0));
        mostrarTarefas0();
        ++idCheckbox;
        addTarefaNum = idCheckbox;
        localStorage.setItem("tarefas", JSON.stringify(addTarefaNum));
      } else if (id === 1) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista1.push(listaTarefa);
        localStorage.setItem("lista1", JSON.stringify(tarefasLista1));
        arrayCheckbox1.push(idCheckbox);
        localStorage.setItem("checkbox1", JSON.stringify(arrayCheckbox1));
        mostrarTarefas1();
        ++idCheckbox;
        addTarefaNum = idCheckbox;
        localStorage.setItem("tarefas", JSON.stringify(addTarefaNum));
      } else if (id === 2) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista2.push(listaTarefa);
        localStorage.setItem("lista2", JSON.stringify(tarefasLista2));
        arrayCheckbox2.push(idCheckbox);
        localStorage.setItem("checkbox2", JSON.stringify(arrayCheckbox2));
        mostrarTarefas2();
        ++idCheckbox;
        addTarefaNum = idCheckbox;
        localStorage.setItem("tarefas", JSON.stringify(addTarefaNum));
      } else if (id === 3) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista3.push(listaTarefa);
        localStorage.setItem("lista3", JSON.stringify(tarefasLista3));
        arrayCheckbox3.push(idCheckbox);
        localStorage.setItem("checkbox3", JSON.stringify(arrayCheckbox3));
        mostrarTarefas3();
        ++idCheckbox;
        addTarefaNum = idCheckbox;
        localStorage.setItem("tarefas", JSON.stringify(addTarefaNum));
      } else if (id === 4) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista4.push(listaTarefa);
        localStorage.setItem("lista4", JSON.stringify(tarefasLista4));
        arrayCheckbox4.push(idCheckbox);
        localStorage.setItem("checkbox4", JSON.stringify(arrayCheckbox4));
        mostrarTarefas4();
        ++idCheckbox;
        addTarefaNum = idCheckbox;
        localStorage.setItem("tarefas", JSON.stringify(addTarefaNum));
      } else if (id === 5) {
        let listaTarefa = {
          tarefa: inputTarefa.value,
        };
        tarefasLista5.push(listaTarefa);
        localStorage.setItem("lista5", JSON.stringify(tarefasLista5));
        arrayCheckbox5.push(idCheckbox);
        localStorage.setItem("checkbox5", JSON.stringify(arrayCheckbox5));
        mostrarTarefas5();
        ++idCheckbox;
        addTarefaNum = idCheckbox;
        localStorage.setItem("tarefas", JSON.stringify(addTarefaNum));
      }
      inputTarefa.value = "";
      inputTarefa.focus();
      salvarCheckbox();
    } else {
      alert("Escreva uma tarefa!");
    }
  }
  btnAddTarefa.addEventListener("click", adicionarTarefa);
});

function mostrarTarefas0() {
  let i = 0;
  const ulListaConteudo = document.querySelector(".lc0");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista0.forEach((value, id) => {
    let tarefa = value.tarefa;
    let idCheckbox = JSON.parse(localStorage.getItem(`checkbox0`));
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
       <input type="checkbox" class="checkbox"" id="checkbox0-${idCheckbox[id]}">
       <label for="checkbox0-${idCheckbox[id]}" class="descricao"></label>
       </div>
       <p>${tarefa}
       </p>
       <svg onclick="deletarTarefa0(${id}, ${idCheckbox[id]})" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M3.68229 25C3.09896 25 2.58854 24.7917 2.15104 24.375C1.71354 23.9583 1.49479 23.4722 1.49479 22.9167V3.125H1.09375C0.777778 3.125 0.516493 3.02662 0.309896 2.82986C0.103299 2.6331 0 2.38426 0 2.08333C0 1.78241 0.103299 1.53356 0.309896 1.33681C0.516493 1.14005 0.777778 1.04167 1.09375 1.04167H6.85417C6.85417 0.740741 6.95747 0.491898 7.16406 0.295139C7.37066 0.0983798 7.63194 0 7.94792 0H15.3854C15.7014 0 15.9627 0.0983798 16.1693 0.295139C16.3759 0.491898 16.4792 0.740741 16.4792 1.04167H22.2396C22.5556 1.04167 22.8168 1.14005 23.0234 1.33681C23.23 1.53356 23.3333 1.78241 23.3333 2.08333C23.3333 2.38426 23.23 2.6331 23.0234 2.82986C22.8168 3.02662 22.5556 3.125 22.2396 3.125H21.8385V22.9167C21.8385 23.4722 21.6198 23.9583 21.1823 24.375C20.7448 24.7917 20.2344 25 19.651 25H3.68229ZM3.68229 3.125V22.9167H19.651V3.125H3.68229ZM7.54688 18.8889C7.54688 19.1898 7.65017 19.4387 7.85677 19.6354C8.06337 19.8322 8.32465 19.9306 8.64063 19.9306C8.9566 19.9306 9.21788 19.8322 9.42448 19.6354C9.63108 19.4387 9.73438 19.1898 9.73438 18.8889V7.11806C9.73438 6.81713 9.63108 6.56829 9.42448 6.37153C9.21788 6.17477 8.9566 6.07639 8.64063 6.07639C8.32465 6.07639 8.06337 6.17477 7.85677 6.37153C7.65017 6.56829 7.54688 6.81713 7.54688 7.11806V18.8889ZM13.599 18.8889C13.599 19.1898 13.7023 19.4387 13.9089 19.6354C14.1155 19.8322 14.3767 19.9306 14.6927 19.9306C15.0087 19.9306 15.27 19.8322 15.4766 19.6354C15.6832 19.4387 15.7865 19.1898 15.7865 18.8889V7.11806C15.7865 6.81713 15.6832 6.56829 15.4766 6.37153C15.27 6.17477 15.0087 6.07639 14.6927 6.07639C14.3767 6.07639 14.1155 6.17477 13.9089 6.37153C13.7023 6.56829 13.599 6.81713 13.599 7.11806V18.8889Z" fill="#FE5045"/>
       </svg>
       <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
    ++i;
    isChecked();
  });
}
mostrarTarefas0();

function mostrarTarefas1() {
  let i = 0;
  const ulListaConteudo = document.querySelector(".lc1");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista1.forEach((value, id) => {
    let tarefa = value.tarefa;
    let idCheckbox = JSON.parse(localStorage.getItem(`checkbox1`));
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox"" id="checkbox1-${idCheckbox[id]}">
         <label for="checkbox1-${idCheckbox[id]}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <svg onclick="deletarTarefa1(${id}, ${idCheckbox[id]})" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.68229 25C3.09896 25 2.58854 24.7917 2.15104 24.375C1.71354 23.9583 1.49479 23.4722 1.49479 22.9167V3.125H1.09375C0.777778 3.125 0.516493 3.02662 0.309896 2.82986C0.103299 2.6331 0 2.38426 0 2.08333C0 1.78241 0.103299 1.53356 0.309896 1.33681C0.516493 1.14005 0.777778 1.04167 1.09375 1.04167H6.85417C6.85417 0.740741 6.95747 0.491898 7.16406 0.295139C7.37066 0.0983798 7.63194 0 7.94792 0H15.3854C15.7014 0 15.9627 0.0983798 16.1693 0.295139C16.3759 0.491898 16.4792 0.740741 16.4792 1.04167H22.2396C22.5556 1.04167 22.8168 1.14005 23.0234 1.33681C23.23 1.53356 23.3333 1.78241 23.3333 2.08333C23.3333 2.38426 23.23 2.6331 23.0234 2.82986C22.8168 3.02662 22.5556 3.125 22.2396 3.125H21.8385V22.9167C21.8385 23.4722 21.6198 23.9583 21.1823 24.375C20.7448 24.7917 20.2344 25 19.651 25H3.68229ZM3.68229 3.125V22.9167H19.651V3.125H3.68229ZM7.54688 18.8889C7.54688 19.1898 7.65017 19.4387 7.85677 19.6354C8.06337 19.8322 8.32465 19.9306 8.64063 19.9306C8.9566 19.9306 9.21788 19.8322 9.42448 19.6354C9.63108 19.4387 9.73438 19.1898 9.73438 18.8889V7.11806C9.73438 6.81713 9.63108 6.56829 9.42448 6.37153C9.21788 6.17477 8.9566 6.07639 8.64063 6.07639C8.32465 6.07639 8.06337 6.17477 7.85677 6.37153C7.65017 6.56829 7.54688 6.81713 7.54688 7.11806V18.8889ZM13.599 18.8889C13.599 19.1898 13.7023 19.4387 13.9089 19.6354C14.1155 19.8322 14.3767 19.9306 14.6927 19.9306C15.0087 19.9306 15.27 19.8322 15.4766 19.6354C15.6832 19.4387 15.7865 19.1898 15.7865 18.8889V7.11806C15.7865 6.81713 15.6832 6.56829 15.4766 6.37153C15.27 6.17477 15.0087 6.07639 14.6927 6.07639C14.3767 6.07639 14.1155 6.17477 13.9089 6.37153C13.7023 6.56829 13.599 6.81713 13.599 7.11806V18.8889Z" fill="#FE5045"/>
         </svg>
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
    ++i;
    isChecked();
  });
}
mostrarTarefas1();

function mostrarTarefas2() {
  let i = 0;
  const ulListaConteudo = document.querySelector(".lc2");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista2.forEach((value, id) => {
    let tarefa = value.tarefa;
    let idCheckbox = JSON.parse(localStorage.getItem(`checkbox2`));
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox"" id="checkbox2-${idCheckbox[id]}">
         <label for="checkbox2-${idCheckbox[id]}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <svg onclick="deletarTarefa2(${id}, ${idCheckbox[id]})" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.68229 25C3.09896 25 2.58854 24.7917 2.15104 24.375C1.71354 23.9583 1.49479 23.4722 1.49479 22.9167V3.125H1.09375C0.777778 3.125 0.516493 3.02662 0.309896 2.82986C0.103299 2.6331 0 2.38426 0 2.08333C0 1.78241 0.103299 1.53356 0.309896 1.33681C0.516493 1.14005 0.777778 1.04167 1.09375 1.04167H6.85417C6.85417 0.740741 6.95747 0.491898 7.16406 0.295139C7.37066 0.0983798 7.63194 0 7.94792 0H15.3854C15.7014 0 15.9627 0.0983798 16.1693 0.295139C16.3759 0.491898 16.4792 0.740741 16.4792 1.04167H22.2396C22.5556 1.04167 22.8168 1.14005 23.0234 1.33681C23.23 1.53356 23.3333 1.78241 23.3333 2.08333C23.3333 2.38426 23.23 2.6331 23.0234 2.82986C22.8168 3.02662 22.5556 3.125 22.2396 3.125H21.8385V22.9167C21.8385 23.4722 21.6198 23.9583 21.1823 24.375C20.7448 24.7917 20.2344 25 19.651 25H3.68229ZM3.68229 3.125V22.9167H19.651V3.125H3.68229ZM7.54688 18.8889C7.54688 19.1898 7.65017 19.4387 7.85677 19.6354C8.06337 19.8322 8.32465 19.9306 8.64063 19.9306C8.9566 19.9306 9.21788 19.8322 9.42448 19.6354C9.63108 19.4387 9.73438 19.1898 9.73438 18.8889V7.11806C9.73438 6.81713 9.63108 6.56829 9.42448 6.37153C9.21788 6.17477 8.9566 6.07639 8.64063 6.07639C8.32465 6.07639 8.06337 6.17477 7.85677 6.37153C7.65017 6.56829 7.54688 6.81713 7.54688 7.11806V18.8889ZM13.599 18.8889C13.599 19.1898 13.7023 19.4387 13.9089 19.6354C14.1155 19.8322 14.3767 19.9306 14.6927 19.9306C15.0087 19.9306 15.27 19.8322 15.4766 19.6354C15.6832 19.4387 15.7865 19.1898 15.7865 18.8889V7.11806C15.7865 6.81713 15.6832 6.56829 15.4766 6.37153C15.27 6.17477 15.0087 6.07639 14.6927 6.07639C14.3767 6.07639 14.1155 6.17477 13.9089 6.37153C13.7023 6.56829 13.599 6.81713 13.599 7.11806V18.8889Z" fill="#FE5045"/>
         </svg>
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
    ++i;
    isChecked();
  });
}
mostrarTarefas2();

function mostrarTarefas3() {
  let i = 0;
  const ulListaConteudo = document.querySelector(".lc3");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista3.forEach((value, id) => {
    let tarefa = value.tarefa;
    let idCheckbox = JSON.parse(localStorage.getItem(`checkbox3`));
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox"" id="checkbox3-${idCheckbox[id]}">
         <label for="checkbox3-${idCheckbox[id]}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <svg onclick="deletarTarefa3(${id}, ${idCheckbox[id]})" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.68229 25C3.09896 25 2.58854 24.7917 2.15104 24.375C1.71354 23.9583 1.49479 23.4722 1.49479 22.9167V3.125H1.09375C0.777778 3.125 0.516493 3.02662 0.309896 2.82986C0.103299 2.6331 0 2.38426 0 2.08333C0 1.78241 0.103299 1.53356 0.309896 1.33681C0.516493 1.14005 0.777778 1.04167 1.09375 1.04167H6.85417C6.85417 0.740741 6.95747 0.491898 7.16406 0.295139C7.37066 0.0983798 7.63194 0 7.94792 0H15.3854C15.7014 0 15.9627 0.0983798 16.1693 0.295139C16.3759 0.491898 16.4792 0.740741 16.4792 1.04167H22.2396C22.5556 1.04167 22.8168 1.14005 23.0234 1.33681C23.23 1.53356 23.3333 1.78241 23.3333 2.08333C23.3333 2.38426 23.23 2.6331 23.0234 2.82986C22.8168 3.02662 22.5556 3.125 22.2396 3.125H21.8385V22.9167C21.8385 23.4722 21.6198 23.9583 21.1823 24.375C20.7448 24.7917 20.2344 25 19.651 25H3.68229ZM3.68229 3.125V22.9167H19.651V3.125H3.68229ZM7.54688 18.8889C7.54688 19.1898 7.65017 19.4387 7.85677 19.6354C8.06337 19.8322 8.32465 19.9306 8.64063 19.9306C8.9566 19.9306 9.21788 19.8322 9.42448 19.6354C9.63108 19.4387 9.73438 19.1898 9.73438 18.8889V7.11806C9.73438 6.81713 9.63108 6.56829 9.42448 6.37153C9.21788 6.17477 8.9566 6.07639 8.64063 6.07639C8.32465 6.07639 8.06337 6.17477 7.85677 6.37153C7.65017 6.56829 7.54688 6.81713 7.54688 7.11806V18.8889ZM13.599 18.8889C13.599 19.1898 13.7023 19.4387 13.9089 19.6354C14.1155 19.8322 14.3767 19.9306 14.6927 19.9306C15.0087 19.9306 15.27 19.8322 15.4766 19.6354C15.6832 19.4387 15.7865 19.1898 15.7865 18.8889V7.11806C15.7865 6.81713 15.6832 6.56829 15.4766 6.37153C15.27 6.17477 15.0087 6.07639 14.6927 6.07639C14.3767 6.07639 14.1155 6.17477 13.9089 6.37153C13.7023 6.56829 13.599 6.81713 13.599 7.11806V18.8889Z" fill="#FE5045"/>
         </svg>
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
    ++i;
    isChecked();
  });
}
mostrarTarefas3();

function mostrarTarefas4() {
  let i = 0;
  const ulListaConteudo = document.querySelector(".lc4");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista4.forEach((value, id) => {
    let tarefa = value.tarefa;
    let idCheckbox = JSON.parse(localStorage.getItem(`checkbox4`));
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox"" id="checkbox4-${idCheckbox[id]}">
         <label for="checkbox4-${idCheckbox[id]}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <svg onclick="deletarTarefa4(${id}, ${idCheckbox[id]})" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.68229 25C3.09896 25 2.58854 24.7917 2.15104 24.375C1.71354 23.9583 1.49479 23.4722 1.49479 22.9167V3.125H1.09375C0.777778 3.125 0.516493 3.02662 0.309896 2.82986C0.103299 2.6331 0 2.38426 0 2.08333C0 1.78241 0.103299 1.53356 0.309896 1.33681C0.516493 1.14005 0.777778 1.04167 1.09375 1.04167H6.85417C6.85417 0.740741 6.95747 0.491898 7.16406 0.295139C7.37066 0.0983798 7.63194 0 7.94792 0H15.3854C15.7014 0 15.9627 0.0983798 16.1693 0.295139C16.3759 0.491898 16.4792 0.740741 16.4792 1.04167H22.2396C22.5556 1.04167 22.8168 1.14005 23.0234 1.33681C23.23 1.53356 23.3333 1.78241 23.3333 2.08333C23.3333 2.38426 23.23 2.6331 23.0234 2.82986C22.8168 3.02662 22.5556 3.125 22.2396 3.125H21.8385V22.9167C21.8385 23.4722 21.6198 23.9583 21.1823 24.375C20.7448 24.7917 20.2344 25 19.651 25H3.68229ZM3.68229 3.125V22.9167H19.651V3.125H3.68229ZM7.54688 18.8889C7.54688 19.1898 7.65017 19.4387 7.85677 19.6354C8.06337 19.8322 8.32465 19.9306 8.64063 19.9306C8.9566 19.9306 9.21788 19.8322 9.42448 19.6354C9.63108 19.4387 9.73438 19.1898 9.73438 18.8889V7.11806C9.73438 6.81713 9.63108 6.56829 9.42448 6.37153C9.21788 6.17477 8.9566 6.07639 8.64063 6.07639C8.32465 6.07639 8.06337 6.17477 7.85677 6.37153C7.65017 6.56829 7.54688 6.81713 7.54688 7.11806V18.8889ZM13.599 18.8889C13.599 19.1898 13.7023 19.4387 13.9089 19.6354C14.1155 19.8322 14.3767 19.9306 14.6927 19.9306C15.0087 19.9306 15.27 19.8322 15.4766 19.6354C15.6832 19.4387 15.7865 19.1898 15.7865 18.8889V7.11806C15.7865 6.81713 15.6832 6.56829 15.4766 6.37153C15.27 6.17477 15.0087 6.07639 14.6927 6.07639C14.3767 6.07639 14.1155 6.17477 13.9089 6.37153C13.7023 6.56829 13.599 6.81713 13.599 7.11806V18.8889Z" fill="#FE5045"/>
</svg>
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
    ++i;
    isChecked();
  });
}
mostrarTarefas4();

function mostrarTarefas5() {
  let i = 0;
  const ulListaConteudo = document.querySelector(".lc5");
  if (ulListaConteudo) ulListaConteudo.innerHTML = "";
  tarefasLista5.forEach((value, id) => {
    let tarefa = value.tarefa;
    let idCheckbox = JSON.parse(localStorage.getItem(`checkbox5`));
    let li = document.createElement("li");
    li.classList.add("lista__item");
    li.innerHTML = `<div class="checkbox-campo">
         <input type="checkbox" class="checkbox"" id="checkbox5-${idCheckbox[id]}">
         <label for="checkbox5-${idCheckbox[id]}" class="descricao"></label>
         </div>
         <p>${tarefa}
         </p>
         <svg onclick="deletarTarefa5(${id}, ${idCheckbox[id]})" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.68229 25C3.09896 25 2.58854 24.7917 2.15104 24.375C1.71354 23.9583 1.49479 23.4722 1.49479 22.9167V3.125H1.09375C0.777778 3.125 0.516493 3.02662 0.309896 2.82986C0.103299 2.6331 0 2.38426 0 2.08333C0 1.78241 0.103299 1.53356 0.309896 1.33681C0.516493 1.14005 0.777778 1.04167 1.09375 1.04167H6.85417C6.85417 0.740741 6.95747 0.491898 7.16406 0.295139C7.37066 0.0983798 7.63194 0 7.94792 0H15.3854C15.7014 0 15.9627 0.0983798 16.1693 0.295139C16.3759 0.491898 16.4792 0.740741 16.4792 1.04167H22.2396C22.5556 1.04167 22.8168 1.14005 23.0234 1.33681C23.23 1.53356 23.3333 1.78241 23.3333 2.08333C23.3333 2.38426 23.23 2.6331 23.0234 2.82986C22.8168 3.02662 22.5556 3.125 22.2396 3.125H21.8385V22.9167C21.8385 23.4722 21.6198 23.9583 21.1823 24.375C20.7448 24.7917 20.2344 25 19.651 25H3.68229ZM3.68229 3.125V22.9167H19.651V3.125H3.68229ZM7.54688 18.8889C7.54688 19.1898 7.65017 19.4387 7.85677 19.6354C8.06337 19.8322 8.32465 19.9306 8.64063 19.9306C8.9566 19.9306 9.21788 19.8322 9.42448 19.6354C9.63108 19.4387 9.73438 19.1898 9.73438 18.8889V7.11806C9.73438 6.81713 9.63108 6.56829 9.42448 6.37153C9.21788 6.17477 8.9566 6.07639 8.64063 6.07639C8.32465 6.07639 8.06337 6.17477 7.85677 6.37153C7.65017 6.56829 7.54688 6.81713 7.54688 7.11806V18.8889ZM13.599 18.8889C13.599 19.1898 13.7023 19.4387 13.9089 19.6354C14.1155 19.8322 14.3767 19.9306 14.6927 19.9306C15.0087 19.9306 15.27 19.8322 15.4766 19.6354C15.6832 19.4387 15.7865 19.1898 15.7865 18.8889V7.11806C15.7865 6.81713 15.6832 6.56829 15.4766 6.37153C15.27 6.17477 15.0087 6.07639 14.6927 6.07639C14.3767 6.07639 14.1155 6.17477 13.9089 6.37153C13.7023 6.56829 13.599 6.81713 13.599 7.11806V18.8889Z" fill="#FE5045"/>
         </svg>
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
    ++i;
    isChecked();
  });
}
mostrarTarefas5();

function deletarTarefa0(i, idcheckbox) {
  let buscarIndice = arrayCheckbox0.indexOf(idcheckbox);
  tarefasLista0.splice(i, 1);
  localStorage.setItem("lista0", JSON.stringify(tarefasLista0));

  arrayCheckbox0.splice(buscarIndice, 1);
  localStorage.removeItem(`checkbox0-${idcheckbox}`);
  localStorage.setItem("checkbox0", JSON.stringify(arrayCheckbox0));
  mostrarTarefas0();
}

function deletarTarefa1(i, idcheckbox) {
  let buscarIndice = arrayCheckbox1.indexOf(idcheckbox);
  tarefasLista1.splice(i, 1);
  localStorage.setItem("lista1", JSON.stringify(tarefasLista1));

  arrayCheckbox1.splice(buscarIndice, 1);
  localStorage.removeItem(`checkbox1-${idcheckbox}`);
  localStorage.setItem("checkbox1", JSON.stringify(arrayCheckbox1));
  mostrarTarefas1();
}

function deletarTarefa2(i, idcheckbox) {
  let buscarIndice = arrayCheckbox2.indexOf(idcheckbox);
  tarefasLista2.splice(i, 1);
  localStorage.setItem("lista2", JSON.stringify(tarefasLista2));

  arrayCheckbox2.splice(buscarIndice, 1);
  localStorage.removeItem(`checkbox2-${idcheckbox}`);
  localStorage.setItem("checkbox2", JSON.stringify(arrayCheckbox2));
  mostrarTarefas2();
}

function deletarTarefa3(i, idcheckbox) {
  let buscarIndice = arrayCheckbox3.indexOf(idcheckbox);
  tarefasLista3.splice(i, 1);
  localStorage.setItem("lista3", JSON.stringify(tarefasLista3));

  arrayCheckbox3.splice(buscarIndice, 1);
  localStorage.removeItem(`checkbox3-${idcheckbox}`);
  localStorage.setItem("checkbox3", JSON.stringify(arrayCheckbox3));
  mostrarTarefas3();
}

function deletarTarefa4(i, idcheckbox) {
  let buscarIndice = arrayCheckbox4.indexOf(idcheckbox);
  tarefasLista4.splice(i, 1);
  localStorage.setItem("lista4", JSON.stringify(tarefasLista4));

  arrayCheckbox4.splice(buscarIndice, 1);
  localStorage.removeItem(`checkbox4-${idcheckbox}`);
  localStorage.setItem("checkbox4", JSON.stringify(arrayCheckbox4));
  mostrarTarefas4();
}

function deletarTarefa5(i, idcheckbox) {
  let buscarIndice = arrayCheckbox5.indexOf(idcheckbox);
  tarefasLista5.splice(i, 1);
  localStorage.setItem("lista5", JSON.stringify(tarefasLista5));

  arrayCheckbox5.splice(buscarIndice, 1);
  localStorage.removeItem(`checkbox5-${idcheckbox}`);
  localStorage.setItem("checkbox5", JSON.stringify(arrayCheckbox5));
  mostrarTarefas5();
}

function isChecked() {
  let listaCheckbox = document.querySelectorAll("input[type=checkbox]");
  listaCheckbox.forEach((el) => {
    var checked = JSON.parse(localStorage.getItem(el.id));
    document.getElementById(el.id).checked = checked;
    if (el.checked) el.closest("li").classList.add("concluido");
  });
}
isChecked();

function fecharModalLista() {
  const inputEditarNome = document.querySelector("#editarNomeLista");

  let modalEditarLista = document.querySelector(".editarLista");
  modalEditarLista.classList.remove("modal-aberto");
  document.body.style.overflowY = "visible";
  if (inputEditarNome.classList.contains("0"))
    inputEditarNome.classList.remove("0");
  if (inputEditarNome.classList.contains("1"))
    inputEditarNome.classList.remove("1");
  if (inputEditarNome.classList.contains("2"))
    inputEditarNome.classList.remove("2");
  if (inputEditarNome.classList.contains("3"))
    inputEditarNome.classList.remove("3");
  if (inputEditarNome.classList.contains("4"))
    inputEditarNome.classList.remove("4");
  if (inputEditarNome.classList.contains("5"))
    inputEditarNome.classList.remove("5");
}

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);
btnMenuFechar.addEventListener("click", toggleMenu);
btnMenuFechar.addEventListener("touchstart", toggleMenu);
navListas.addEventListener("click", toggleMenu);
navListas.addEventListener("touchstart", toggleMenu);
addLista.addEventListener("click", addListasDados);
btnTrocarTema.addEventListener("click", trocarTema);
btnAddLista.addEventListener("click", abrirModal);
btnFecharModal.addEventListener("click", fecharModal);
btnFecharModalLista.addEventListener("click", fecharModalLista);

btnTrocarNome.addEventListener("click", () => {
  const inputEditarNome = document.querySelector("#editarNomeLista");
  let valor = inputEditarNome.value.trim();
  if (valor.length > 0) {
    if (inputEditarNome.classList.contains("0")) {
      let h1 = document.querySelector(".listaNome0");
      let novoNome = inputEditarNome.value;
      h1.innerText = novoNome;
      conteudoArrayListas[0].nome = novoNome;
      localStorage.setItem("listas", JSON.stringify(conteudoArrayListas));
      fecharModalLista();
    }
    if (inputEditarNome.classList.contains("1")) {
      let h1 = document.querySelector(".listaNome1");
      let novoNome = inputEditarNome.value;
      h1.innerText = novoNome;
      conteudoArrayListas[1].nome = novoNome;
      localStorage.setItem("listas", JSON.stringify(conteudoArrayListas));
      fecharModalLista();
    }
    if (inputEditarNome.classList.contains("2")) {
      let h1 = document.querySelector(".listaNome2");
      let novoNome = inputEditarNome.value;
      h1.innerText = novoNome;
      conteudoArrayListas[2].nome = novoNome;
      localStorage.setItem("listas", JSON.stringify(conteudoArrayListas));
      fecharModalLista();
    }
    if (inputEditarNome.classList.contains("3")) {
      let h1 = document.querySelector(".listaNome3");
      let novoNome = inputEditarNome.value;
      h1.innerText = novoNome;
      conteudoArrayListas[3].nome = novoNome;
      localStorage.setItem("listas", JSON.stringify(conteudoArrayListas));
      fecharModalLista();
    }
    if (inputEditarNome.classList.contains("4")) {
      let h1 = document.querySelector(".listaNome4");
      let novoNome = inputEditarNome.value;
      h1.innerText = novoNome;
      conteudoArrayListas[4].nome = novoNome;
      localStorage.setItem("listas", JSON.stringify(conteudoArrayListas));
      fecharModalLista();
    }
    if (inputEditarNome.classList.contains("5")) {
      let h1 = document.querySelector(".listaNome5");
      let novoNome = inputEditarNome.value;
      h1.innerText = novoNome;
      conteudoArrayListas[5].nome = novoNome;
      localStorage.setItem("listas", JSON.stringify(conteudoArrayListas));
      fecharModalLista();
    }
  } else {
    alert("Insira um nome!");
  }
});
