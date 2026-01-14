let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = carrinho.reduce((s, i) => s + i.preco, 0);

let etapa = 1;
let saborSelecionado = "";
let tamanhoSelecionado = "";
let precoSelecionado = 0;

const sabores = ["Chocolate", "Morango", "Oreo"];
const tamanhos = [
  { nome: "Pequeno", preco: 12 },
  { nome: "Médio", preco: 15 },
  { nome: "Grande", preco: 20 }
];

document.addEventListener("DOMContentLoaded", () => {
  atualizarContador();
});

function abrirOpcoes() {
  etapa = 1;
  saborSelecionado = "";
  tamanhoSelecionado = "";
  document.getElementById("modal").style.display = "flex";
  renderizarSabores();
}

function renderizarSabores() {
  document.getElementById("titulo-etapa").innerText = "Escolha o sabor";
  const div = document.getElementById("opcoes");
  div.innerHTML = "";

  sabores.forEach(sabor => {
    const btn = document.createElement("button");
    btn.innerText = sabor;
    btn.onclick = () => selecionar(btn, sabor);
    div.appendChild(btn);
  });
}

function renderizarTamanhos() {
  document.getElementById("titulo-etapa").innerText = "Escolha o tamanho";
  const div = document.getElementById("opcoes");
  div.innerHTML = "";

  tamanhos.forEach(t => {
    const btn = document.createElement("button");
    btn.innerText = `${t.nome} - R$ ${t.preco}`;
    btn.onclick = () => selecionar(btn, t.nome, t.preco);
    div.appendChild(btn);
  });
}

function selecionar(botao, valor, preco = 0) {
  [...document.querySelectorAll("#opcoes button")].forEach(b => b.classList.remove("ativo"));
  botao.classList.add("ativo");

  if (etapa === 1) saborSelecionado = valor;
  if (etapa === 2) {
    tamanhoSelecionado = valor;
    precoSelecionado = preco;
  }
}

function confirmarOpcao() {
  if (etapa === 1 && saborSelecionado) {
    etapa = 2;
    renderizarTamanhos();
  } else if (etapa === 2 && tamanhoSelecionado) {
    carrinho.push({
      nome: `Copo ${saborSelecionado} (${tamanhoSelecionado})`,
      preco: precoSelecionado
    });
    total += precoSelecionado;
    salvar();
    fecharModal();
  } else {
    alert("Escolha uma opção!");
  }
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("ativo");
  document.getElementById("overlay").style.display = "block";
  atualizar();
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("ativo");
  document.getElementById("overlay").style.display = "none";
}

function atualizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  carrinho.forEach(i => {
    const li = document.createElement("li");
    li.textContent = `${i.nome} - R$ ${i.preco}`;
    lista.appendChild(li);
  });
  document.getElementById("total").innerText = total;
}

function atualizarContador() {
  document.getElementById("contador").innerText = carrinho.length;
}

function salvar() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContador();
}

function finalizar() {
  if (carrinho.length === 0) return alert("Carrinho vazio!");

  let msg = "Olá! Quero fazer um pedido 🍰\n\n";
  carrinho.forEach(i => msg += `• ${i.nome} - R$ ${i.preco}\n`);
  msg += `\nTotal: R$ ${total}`;

  const numero = "5511999999999";
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);

  carrinho = [];
  total = 0;
  salvar();
  fecharCarrinho();
}
