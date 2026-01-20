const btn = document.getElementById("comecar");
const form = document.getElementById("form");

btn.addEventListener("click", function () {

  let preenchido = true;

  const inputs = document.querySelectorAll(".input");

  inputs.forEach(input => {
    const erro = input.parentElement.querySelector(".erro");
    const erroLogo = input.parentElement.querySelector(".erroLogo");

    if (input.value.trim() === "") {
      erro.classList.add("ativo");
      erroLogo.classList.add("ativo");
      input.classList.add("invalido");
      preenchido = false;
    } else {
      erro.classList.remove("ativo");
      erroLogo.classList.remove("ativo");
      input.classList.remove("invalido");

      if (input.id === "email"){
        const emailInput = document.querySelector("#email");
        const email = emailInput.value;

        function temArroba(email) {
          if (typeof email !== "string") {
            return false;
          }

          email = email.trim();
          return email.includes("@");
        }

        const erroArroba = input.parentElement.querySelector(".erroArroba");
        const erroArrobaLogo = input.parentElement.querySelector(".erroArrobaLogo");

        if (temArroba(email) === false) {
          erroArroba.classList.add("ativo");
          erroArrobaLogo.classList.add("ativo");
          emailInput.classList.add("invalido");
          preenchido = false;
        } else {
          erroArroba.classList.remove("ativo");
          erroArrobaLogo.classList.remove("ativo");
          emailInput.classList.remove("ativo");
          return
        }
      }
    }
  });

  if (preenchido === true) {
    const promptGeradoConteudo = document.getElementById("promptNaoGeradoConteudo");
    const texto = promptGeradoConteudo.querySelector(".promptNaoGeradoTexto");
    const body = document.getElementById("body");
    const botaoSair = document.getElementById("promptNaoGeradoConteudoSair");

    texto.innerHTML = '';

    promptGeradoConteudo.classList.toggle("gerado");
    body.classList.toggle("ativo");
    botaoSair.classList.toggle("ativo");

    const cr = document.getElementById("cr").value;
    const i = document.getElementById("i").value;
    const s = document.getElementById("s").value;
    const p = document.getElementById("p").value;
    const e = document.getElementById("e").value;
    const dadosUsuario = `${i}. Considerando o contexto, atue como ${cr} para executar ${s} de forma ${p}. Quando apropriado, utilize ${e}, como exemplos. `
    
    function criarConteudo(pergunta, resposta) {
      const div = document.createElement("div");
      div.classList.add("promptGeradoConteudoDiv");

      const pPergunta = document.createElement("p");
      pPergunta.textContent = pergunta;
      pPergunta.classList.add("promptGeradoPergunta");

      const pResposta = document.createElement("p");
      pResposta.textContent = resposta;
      pResposta.classList.add("promptGeradoResposta");

      div.appendChild(pPergunta);
      div.appendChild(pResposta);

      texto.appendChild(div);
    }

    function criarPrompt(dados){
      const div = document.createElement("div");
      div.classList.add("promptGeradoPromptDiv");

      const prompt = document.createElement("p");
      prompt.classList.add("promptGeradoPrompt");
      prompt.setAttribute("title", "Clique para copiar");
      prompt.id = "promptGeradoPrompt";
      prompt.textContent = dados;

      div.append(prompt);
      texto.append(div);
    }

    criarConteudo("Capacidade e Função:", cr);
    criarConteudo("Contexto:", i);
    criarConteudo("Pedido:", s);
    criarConteudo("Personalidade", p);
    criarConteudo("Experimento:", e);
    criarPrompt(dadosUsuario);
    document.getElementById("promptGeradoPrompt").addEventListener("click", function () {
    const texto = this.innerText;

    navigator.clipboard.writeText(texto)
        .then(() => {
            mostrarFeedback(this);
        });
});

function mostrarFeedback(elemento) {
    const textoOriginal = elemento.innerText;
    elemento.innerText = "✔ Texto copiado!";

    setTimeout(() => {
        elemento.innerText = textoOriginal;
    }, 1500);
}
  }
});

function sair(){
  const botaoSair = document.getElementById("promptNaoGeradoConteudoSair");
  const promptGeradoConteudo = document.getElementById("promptNaoGeradoConteudo");
  const body = document.getElementById("body");

  promptGeradoConteudo.classList.remove("gerado");
  body.classList.remove("ativo");
  botaoSair.classList.remove("ativo");

}

function mudarTexto(estilo){
  const cr = document.getElementById("cr").value;
  const i = document.getElementById("i").value;
  const s = document.getElementById("s").value;
  const p = document.getElementById("p").value;
  const e = document.getElementById("e").value;

      const prompt = document.querySelector(".promptGeradoPrompt");
      const versoes = {
        1:`${i}. Considerando o contexto, atue como ${cr} para executar ${s} de forma ${p}. Quando apropriado, utilize ${e}, como exemplos.`,
        2:`${i}. Dado o contexto anterior, assuma o papel de ${cr}. Sua tarefa é executar ${s} com uma personalidade ${p}. Sempre que apropriado, use ${e} como exemplos para maior clareza.`,
        3:`${i}. No contexto apresentado, você deve atuar como ${cr}, realizando as instruçôes de ${s}. Apresente isso de forma ${p} e recorra a exemplos, como ${e} quando isso ajudar na compreensão.`
      };

      prompt.textContent = versoes[estilo];
      prompt.setAttribute("name", "prompt");
    }

function finalizar(){
  form.submit();
}

const casa = document.getElementById("casa");

casa.addEventListener("click", function(){
  window.location.href = "index.html";
})



