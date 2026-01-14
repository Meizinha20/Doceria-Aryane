let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = carrinho.reduce((s, i) => s + i.preco, 0);

document.addEventListener("DOMContentLoaded", () => {
  atualizarContador();
});

function adicionar(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  salvar();
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

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco}`;
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
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let msg = "Olá! Quero fazer um pedido 🍰\n\n";
  carrinho.forEach(i => msg += `• ${i.nome} - R$ ${i.preco}\n`);
  msg += `\nTotal: R$ ${total}`;

  const numero = "5512982153106"; // SEU WHATS
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, "_blank");

  carrinho = [];
  total = 0;
  salvar();
  fecharCarrinho();
}
