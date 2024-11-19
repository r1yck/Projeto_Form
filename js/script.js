document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Recupera os usuários armazenados no localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o usuário existe e a senha está correta
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login bem-sucedido!');
        window.location.href = './home.html'; // Redireciona para a página inicial
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
