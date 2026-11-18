const body = document.body;
const btnTema = document.querySelector("#mudartema");

function mudarTema() {
    body.classList.toggle("dark");
}

btnTema.onclick = mudarTema;