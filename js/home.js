// Recupera os usuários armazenados no localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Pega o nome de usuário do localStorage (supondo que o usuário esteja logado)
const username = document.getElementById('username-display');

// Tenta recuperar o usuário logado com base no nome de usuário atual (você pode usar uma lógica de sessão aqui se necessário)
const currentUser = users.find(user => user.username === localStorage.getItem('currentUser'));

// Exibe o nome do usuário, se encontrado
if (currentUser) {
    username.textContent = currentUser.username;
} else {
    username.textContent = "Usuário não encontrado"; // Caso o usuário não seja encontrado
}
