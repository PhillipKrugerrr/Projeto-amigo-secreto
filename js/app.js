let nomes = [];
const temNumero = /\d/;
function adicionar() {
    let novoNome = document.getElementById("nome-amigo").value;
    let amigosIncluidos = document.getElementById("lista-amigos");

        if (novoNome.trim() === "") {
            alert('Nenhum nome adicionado');
            return;
        } 
        
        if (temNumero.test(novoNome)) {
            alert('Nao é permitido o uso de números');
            return;
        }  
        
        if (nomes.includes(novoNome)) {
            alert("Nome já adicionado!");
            return; 
        } 
            nomes.push(novoNome);
            amigosIncluidos.innerHTML = nomes.join(" , ");
            limpar();
    }

function sortear() {

    if (nomes.length <= 4) {
        alert("Adicione pelo menos 4 amigos!");
        return;
    }

    let listaSorteio = document.getElementById("lista-sorteio");
    let nomesEmbaralhados = []; 

        for (const pessoa of nomes) {
            nomesEmbaralhados.push(pessoa);
        }
        for (let i = 0; i < nomesEmbaralhados.length; i++) {

            let indiceAleatorio = Math.trunc(Math.random() * nomesEmbaralhados.length -1);

            let temp = nomesEmbaralhados[i];
            nomesEmbaralhados[i] = nomesEmbaralhados[indiceAleatorio];
            nomesEmbaralhados[indiceAleatorio] = temp;
    }
            let resultado = "";

        for (let i = 0; i < nomesEmbaralhados.length; i++) {
            
            let amigoSecreto;

        if (i === nomesEmbaralhados.length - 1) {

            amigoSecreto = nomesEmbaralhados[0];

        } else {

            amigoSecreto = nomesEmbaralhados[i + 1];

        }

            resultado += `${nomesEmbaralhados[i]} → ${amigoSecreto}<br>`;
    }

    listaSorteio.innerHTML = resultado;

}
function reiniciar() {
    nomes = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    limpar()
}

function limpar() {
    document.getElementById("nome-amigo").value = "";
}

let remover = document.getElementById('lista-amigos');

remover.addEventListener('click', function() {
    
    remover.innerHTML = '';

    limpar();
});


