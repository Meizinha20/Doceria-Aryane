
let carrinho = [];
let total = 0;

function adicionar(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;

  document.getElementById("contador").innerText = carrinho.length;
}

function abrirCarrinho() {
  document.getElementById("carrinho").style.display = "flex";
  atualizar();
}

function fecharCarrinho() {
  document.getElementById("carrinho").style.display = "none";
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

function finalizar() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let mensagem = "Olá! Quero fazer um pedido 🍰\n\n";
  carrinho.forEach(item => {
    mensagem += `• ${item.nome} - R$ ${item.preco}\n`;
  });

  mensagem += `\nTotal: R$ ${total}`;

  const numero = "5512982153106"; // COLOQUE SEU WHATS AQUI
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
