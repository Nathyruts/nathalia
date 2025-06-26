function selecionarIdioma(idioma) {
  localStorage.setItem("idiomaEscolhido", idioma);

  if (idioma === "en") {
    // Redirecione para versão em inglês, se desejar:
    // window.location.href = "en/index.html";
    alert("Idioma inglês ainda não está disponível.");
  }

  document.getElementById("idioma-popup").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("idiomaEscolhido")) {
    document.getElementById("idioma-popup").style.display = "none";
  }
});
