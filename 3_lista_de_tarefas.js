let tarefas = [];

for (let i = 0; i < 5; i++) {
    const tarefa = prompt(`Digite a tarefa ${i + 1}:`);
    tarefas.push(tarefa);
}

console.log("Tarefas:", tarefas.join(", "));

const tarefaConcluida = prompt("Qual tarefa você deseja marcar como 'concluída'?");

const index = tarefas.indexOf(tarefaConcluida);
if (index !== -1) {
    tarefas.splice(index, 1); 
    console.log(`A tarefa '${tarefaConcluida}' foi marcada como concluída.`);
} else {
    console.log("Tarefa não encontrada.");
}

console.log("Tarefas atuais:", tarefas.join(", "));
