let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = carrinho.reduce((s, i) => s + i.preco, 0);

atualizarContador();

function adicionar(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  salvar();
}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("ativo");
  atualizar();
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("ativo");
}

function atualizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.nome} - R$ ${item.preco}`;
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

  const numero = "5512982153106"; // SEU WHATS
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);

  carrinho = [];
  total = 0;
  salvar();
  fecharCarrinho();
}
