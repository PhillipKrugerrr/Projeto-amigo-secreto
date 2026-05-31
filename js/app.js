let nomes = [];
const temNumero = /\d/;

function adicionar() {
    let novoNome = document.getElementById("nome-amigo").value;
    let amigosIncluidos = document.getElementById("lista-amigos");

    if (novoNome.trim() === "") {
        alert('No name added');
        return;
    }

    if (temNumero.test(novoNome)) {
        alert('Numbers are not allowed');
        return;
    }

    if (nomes.includes(novoNome)) {
        alert("Name already added!");
        return;
    }

    nomes.push(novoNome);
    amigosIncluidos.innerHTML = nomes.join(" , ");
    limpar();
}

function sortear() {
    if (nomes.length <= 4) {
        alert("Add at least 4 friends!");
        return;
    }

    let doadores = [...nomes];
    let receptores = [...nomes];

    // Embaralha receptores com Fisher-Yates
    for (let i = receptores.length - 1; i > 0; i--) {
        let indiceAleatorio = Math.trunc(Math.random() * (i + 1));
        let temp = receptores[i];
        receptores[i] = receptores[indiceAleatorio];
        receptores[indiceAleatorio] = temp;
    }

    // Garante que ninguém tira o próprio nome
    for (let i = 0; i < doadores.length; i++) {
        if (doadores[i] === receptores[i]) {
            let proximo = (i + 1) % doadores.length;
            let temp = receptores[i];
            receptores[i] = receptores[proximo];
            receptores[proximo] = temp;
        }
    }

    // Exibição individual
    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = "";

    for (let i = 0; i < doadores.length; i++) {
        let botao = document.createElement("button");
        botao.textContent = `${doadores[i]}: reveal your secret friend`;
        botao.onclick = () => {
            alert(`${doadores[i]}, your secret friend is: ${receptores[i]}! 🎉`);
        };
        listaSorteio.appendChild(botao);
    }
}
function reiniciar() {
    nomes = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    limpar();
}

function limpar() {
    document.getElementById("nome-amigo").value = "";
}

let remover = document.getElementById('lista-amigos');
remover.addEventListener('click', function () {
    if (confirm("Remove all names?")) {
        nomes = [];
        remover.innerHTML = '';
        limpar();
    }
});