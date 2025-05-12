let salas = [];

function cadastrarSala() {
    const numero = document.getElementById("numero").value;
    const capacidade = document.getElementById("capacidade").value;

    if (numero && capacidade) {
        const sala = {
            numero: numero,
            capacidade: capacidade
        };
        salas.push(sala);
        atualizarLista();
        document.getElementById("numero").value = '';
        document.getElementById("capacidade").value = '';
    } else {
        alert("Preencha todos os campos.");
    }
}

function atualizarLista() {
    const lista = document.getElementById("lista-salas");
    lista.innerHTML = '';

    salas.forEach((sala) => {
        const li = document.createElement("li");
        li.textContent = `Sala ${sala.numero} - Capacidade: ${sala.capacidade}`;
        lista.appendChild(li);
    });
}
