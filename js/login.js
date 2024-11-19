document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário e recarregamento da página

    // Pega os dados do formulário de login
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Recupera os usuários armazenados no localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o usuário existe e se a senha está correta
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Armazena o nome de usuário logado no localStorage
        localStorage.setItem('currentUser', username);

        alert('Login bem-sucedido!');
        window.location.href = '../pages/home.html'; // Redireciona para a página inicial ou área protegida
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
