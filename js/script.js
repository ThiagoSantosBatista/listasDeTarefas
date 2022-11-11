const btnMenu = document.querySelector(".nav__btn");
const btnMenuFechar = document.querySelector(".nav__btn-fechar");
const btnSair = document.querySelector(".sair");
const navListas = document.querySelector(".nav__listas");
const btnAddLista = document.querySelector("#btnAddLista");
const divListas = document.querySelector(".main__listas");
const addLista = document.querySelector(".adicionar");
const btnFecharModal = document.querySelector(".fecharModal");
const inputNomeLista = document.querySelector("#inputNomeLista");
const btnTrocarTema = document.querySelector(".btnTrocarTema");
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

let arrayCheckbox0 = localStorage.getItem("checkbox0")
  ? JSON.parse(localStorage.getItem("checkbox0"))
  : [];
let arrayCheckbox1 = localStorage.getItem("checkbox1")
  ? JSON.parse(localStorage.getItem("checkbox1"))
  : [];
let arrayCheckbox2 = localStorage.getItem("checkbox2")
  ? JSON.parse(localStorage.getItem("checkbox2"))
  : [];
let arrayCheckbox3 = localStorage.getItem("checkbox3")
  ? JSON.parse(localStorage.getItem("checkbox3"))
  : [];
let arrayCheckbox4 = localStorage.getItem("checkbox4")
  ? JSON.parse(localStorage.getItem("checkbox4"))
  : [];
let arrayCheckbox5 = localStorage.getItem("checkbox5")
  ? JSON.parse(localStorage.getItem("checkbox5"))
  : [];

let contagemTarefas = localStorage.getItem("tarefas")
  ? parseInt(localStorage.getItem("tarefas"))
  : 0;
let idCheckbox = contagemTarefas;

function trocarTema() {
    const html = document.querySelector('html');
    html.classList.toggle('dark-mode')
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
       <input type="checkbox" class="checkbox" id="checkbox${id}-${idCheckbox}}">
       <label for="checkbox${id}-${idCheckbox}" class="descricao"></label>
       </div>
       <p>${inputTarefa.value}
       </p>
       <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa${id}(${idTarefa}, ${idCheckbox})">
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
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa${id}(${idTarefa}, ${idCheckbox})">
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
       <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa0(${id}, ${idCheckbox[id]})">
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
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa1(${id}, ${idCheckbox[id]})">
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
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa2(${id}, ${idCheckbox[id]})">
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
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa3(${id}, ${idCheckbox[id]})">
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
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa4(${id}, ${idCheckbox[id]})">
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
         <img src="./img/delete.svg" alt="" class="delete" onclick="deletarTarefa5(${id}, ${idCheckbox[id]})">
         <span class="linha"></span>`;
    ulListaConteudo.appendChild(li);
    ++i;
    isChecked();
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

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);
btnMenuFechar.addEventListener("click", toggleMenu);
btnMenuFechar.addEventListener("touchstart", toggleMenu);
navListas.addEventListener("click", toggleMenu);
navListas.addEventListener("touchstart", toggleMenu);
addLista.addEventListener("click", addListasDados);
btnAddLista.addEventListener("click", abrirModal);
btnFecharModal.addEventListener("click", fecharModal);
btnTrocarTema.addEventListener('click', trocarTema);