// Array para armazenar as salas cadastradas
let salas = [];

// Função para cadastrar uma nova sala
function cadastrarSala() {
    const numero = document.getElementById("numero").value;
    const capacidade = document.getElementById("capacidade").value;

    // Verifica se os campos estão preenchidos
    if (numero && capacidade) {
        // Cria um novo objeto de sala
        const novaSala = {
            numero: numero,
            capacidade: capacidade,
            disponivel: true
        };

        // Adiciona a nova sala no array 'salas'
        salas.push(novaSala);

        // Atualiza a lista de salas exibida na página
        atualizarListaSalas();

        // Limpa os campos do formulário
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para alterar a disponibilidade de uma sala (reservar ou liberar)
function alterarDisponibilidade(index) {
    salas[index].disponivel = !salas[index].disponivel;
    atualizarListaSalas();
}

// Função para atualizar a lista de salas exibida na página
function atualizarListaSalas() {
    const listaSalas = document.getElementById("lista-salas");
    listaSalas.innerHTML = ''; // Limpa a lista atual

    // Loop para criar a lista de salas cadastradas
    salas.forEach((sala, index) => {
        const li = document.createElement("li");
        li.classList.add(sala.disponivel ? "" : "reservada");

        li.innerHTML = `
            <span>Sala ${sala.numero} - Capacidade: ${sala.capacidade}</span>
            <button onclick="alterarDisponibilidade(${index})">
                ${sala.disponivel ? "Reservar" : "Liberar"}
            </button>
        `;

        listaSalas.appendChild(li);
    });
}

// Função para limpar os campos de entrada
function limparCampos() {
    document.getElementById("numero").value = '';
    document.getElementById("capacidade").value = '';
}
