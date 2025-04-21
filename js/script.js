// Alterna entre tema claro e escuro
function trocarTema() {
  document.body.classList.toggle("dark");
}

// Mensagem de boas-vindas ao carregar a página
window.onload = function () {
  alert("Bem-vindo ao seu portfólio!");
  console.log("Página carregada com sucesso.");
};

// Exemplo extra: log de clique no botão (para aprendizado)
const botaoTema = document.querySelector("button");
botaoTema.addEventListener("click", () => {
  console.log("Tema trocado!");
});
