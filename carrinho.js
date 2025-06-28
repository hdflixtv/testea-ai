let pedido = {
  itens: [],
  total: 0
};

function adicionarCarrinho(produto, preco) {
  pedido.itens.push({ produto, preco });
  pedido.total += preco;
  atualizarResumo();
}

function atualizarResumo() {
  const resumo = document.getElementById("resumo");
  resumo.innerHTML = "<h3>Resumo do Pedido:</h3>";
  pedido.itens.forEach(item => {
    resumo.innerHTML += `<p>${item.produto} - R$ ${item.preco.toFixed(2)}</p>`;
  });
  resumo.innerHTML += `<strong>Total: R$ ${pedido.total.toFixed(2)}</strong>`;
}

function enviarPedido() {
  const dados = {
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    cep: document.getElementById("cep").value,
    endereco: document.getElementById("endereco").value,
    itens: pedido.itens,
    total: pedido.total.toFixed(2)
  };

  localStorage.setItem("pedido", JSON.stringify(dados));
  window.location.href = "pagamento.html";
  return false; // evita reload
}
