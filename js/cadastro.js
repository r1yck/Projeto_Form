// Escuta o evento de envio do formulário de cadastro
document.getElementById('form-register').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário e recarregar a página

    // Pega os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    // Verifica se o nome de usuário já existe
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === username)) {
        alert('Este nome de usuário já está em uso.');
        return;
    }

    // Adiciona o novo usuário ao localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Redireciona para a página de login após o registro
    alert('Conta registrada com sucesso!');
    window.location.href = '../pages/login.html'; // Redireciona para a página de login
});
