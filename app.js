// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos() {
  let inputAmigo = document.getElementById("amigo");
  let amigo = inputAmigo.value.trim();

  if (amigo === "") { 
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(amigo);
  inputAmigo.value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Agrega al menos uno.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

