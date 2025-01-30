//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo() {
    let campoTexto = document.querySelector('input').value;
    if(campoTexto == ''){
        alert('Digite um nome válido!')
    } else{
        amigos.push(campoTexto)
        let texto = document.getElementById('listaAmigos');
        texto.innerHTML += `<p>${campoTexto}</p>`;
        limparCampo();
    }
}

function sortearAmigo() {
    if (amigos == ''){
        alert('Digite algum amigo antes de sortear!')
    } else{
        let QuantidadeDeAmigos = amigos.length;
        let indiceAleatorio = Math.floor(Math.random() * QuantidadeDeAmigos)

        let amigoSorteado = amigos[indiceAleatorio]
        let texto = document.getElementById('resultado')
        texto.innerHTML = `O/A amigo(a) sorteado(a) foi o/a ${amigoSorteado}`

         }
        }



function limparCampo() {
    campoTexto = document.querySelector('input');
    campoTexto.value = '';
    
}