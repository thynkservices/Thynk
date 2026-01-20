function comecar(){
    window.location.href = "AW_Formulario.html";
}

const menu = document.getElementById("menuHamburguer");

menu.addEventListener("click", function(){
    const navLista = document.getElementById("navLista");
    const body = document.getElementById("body");
    
    navLista.classList.toggle("ativa");
    menu.classList.toggle("ativa");
    body.classList.toggle("ativa");
})

document.querySelectorAll(".setinha").forEach(setinha => {
  setinha.addEventListener("click", function () {

    const titulo = this.closest(".navListaTitulo");
    const submenu = titulo.nextElementSibling;

    submenu.classList.toggle("ativa");
    
  });
});

document.querySelectorAll('.navListaTitulo').forEach(titulo => {
    titulo.addEventListener('click', () => {
        const item = titulo.closest('.navItem');
        item.classList.toggle('ativo');
    });
});


