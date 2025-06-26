const traducoes = {
  pt: {
    titulo: "Olá, sou Nathalia",
    descricao: "Apaixonada por criar interfaces bonitas, funcionais e com usabilidade.",
    meusProjetos: "Meus Projetos",
    descricaoProjeto1: "Estudo de caso: site responsivo de papelaria de casamentos",
    descricaoProjeto2: "Estudo de caso: app e site de cadastro e consulta de medicamentos",
    rodape: "Desenvolvido por Nathalia Carvalho 💜"
  },
  en: {
    titulo: "Hi, I'm Nathalia",
    descricao: "Passionate about creating beautiful, functional, and user-friendly interfaces.",
    meusProjetos: "My Projects",
    descricaoProjeto1: "Case study: responsive website for wedding stationery",
    descricaoProjeto2: "Case study: app and website for registering and consulting medications",
    rodape: "Developed by Nathalia Carvalho 💜"
  }
};

function aplicarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-i18n]");
  elementos.forEach(el => {
    const chave = el.getAttribute("data-i18n");
    if (traducoes[idioma] && traducoes[idioma][chave]) {
      el.textContent = traducoes[idioma][chave];
    }
  });
}

function selecionarIdioma(idioma) {
  localStorage.setItem("idiomaEscolhido", idioma);
  aplicarIdioma(idioma);
  document.getElementById("idioma-popup").style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
  const idiomaSalvo = localStorage.getItem("idiomaEscolhido") || "pt";
  aplicarIdioma(idiomaSalvo);

  if (idiomaSalvo) {
    document.getElementById("idioma-popup").style.display = "none";
  }
});
