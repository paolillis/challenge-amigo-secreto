// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function limpiarResultado() {
  const ulResultado = document.getElementById("resultado");
  if (ulResultado) ulResultado.innerHTML = "";
}

function focusInput() {
  const input = document.getElementById("amigo");
  if (input) input.focus();
}

function actualizarLista() {
  const ul = document.getElementById("listaAmigos");
  if (!ul) return;

  ul.innerHTML = "";
  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  if (!input) return;

  const nombre = input.value.trim();

  if (!nombre) {
    alert("Por favor, escribe un nombre válido.");
    focusInput();
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya está en la lista.");
    input.value = "";
    focusInput();
    return;
  }

  amigos.push(nombre);
  input.value = "";
  limpiarResultado();
  actualizarLista();
  focusInput();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay nombres en la lista para sortear.");
    focusInput();
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const ulResultado = document.getElementById("resultado");
  if (!ulResultado) return;

  ulResultado.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${elegido}`;
  ulResultado.appendChild(li);
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("amigo");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") agregarAmigo();
    });
  }
});
