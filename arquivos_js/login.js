if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./login.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));
        
let logado = document.querySelector("#logado"); 
Logado.innerHTML = Olá `${userLogado.nome}`;
        
function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./login.html"
}