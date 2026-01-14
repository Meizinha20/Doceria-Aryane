let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvar() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizar();
}

function adicionar(botao) {
  const card = botao.parentElement;
  const sabor = card.querySelector(".sabor").value;
  const tamanho = card.querySelector(".tamanho");
  const preco = Number(tamanho.selectedOptions[0].dataset.preco);
  const nomeTamanho = tamanho.value;
  const nutella = card.querySelector(".nutella").checked;

  let total = preco + (nutella ? 5 : 0);

  carrinho.push({
    nome: "Copo da Felicidade",
    sabor,
    tamanho: nomeTamanho,
    nutella,
    total
  });

  salvar();
  abrirCarrinho();
}

function renderizar() {
  const lista = document.getElementById("lista");
  const totalEl = document.getElementById("total");

  lista.innerHTML = "";
  let soma = 0;

  carrinho.forEach(item => {
    soma += item.total;
    lista.innerHTML += `
      <li>
        <b>${item.nome}</b><br>
        ${item.sabor} • ${item.tamanho} ${item.nutella ? "+ Nutella" : ""}
        <br><b>R$ ${item.total}</b>
      </li>
    `;
  });

  totalEl.innerText = "Total: R$ " + soma;
}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("ativo");
  document.getElementById("overlay").style.display = "block";
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("ativo");
  document.getElementById("overlay").style.display = "none";
}

function finalizar() {
  let msg = "Pedido - Doceria da Aryane:%0A";

  carrinho.forEach(p => {
    msg += `• ${p.nome} (${p.sabor} - ${p.tamanho}) ${p.nutella ? "+ Nutella" : ""} - R$${p.total}%0A`;
  });

  window.open("https://wa.me/55SEUNUMERO?text=" + msg);
}

renderizar();
