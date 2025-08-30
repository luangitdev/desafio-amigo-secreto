//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
	const input = document.getElementById('amigo');
	const nome = input.value.trim();
	if (nome) {
		listaDeAmigos.push(nome);
		input.value = '';
		mostrarLista();
	}
}

// Função para mostrar a lista de amigos na tela
function mostrarLista() {
	const ul = document.getElementById('listaAmigos');
	ul.innerHTML = '';
	listaDeAmigos.forEach(function(nome) {
		const li = document.createElement('li');
		li.textContent = nome;
		ul.appendChild(li);
	});
}

// Função para sortear pares de amigo secreto

function sortearAmigo() {
	if (listaDeAmigos.length === 0) {
		alert('Adicione pelo menos um amigo para sortear!');
		return;
	}
	const indice = Math.floor(Math.random() * listaDeAmigos.length);
	const nomeSorteado = listaDeAmigos[indice];
	const ulResultado = document.getElementById('resultado');
	ulResultado.innerHTML = '';
	const li = document.createElement('li');
	li.textContent = 'Amigo sorteado: ' + nomeSorteado;
	ulResultado.appendChild(li);
}
