# SkateLink

**SkateLink** é uma plataforma de rede social para skatistas, permitindo que os usuários se cadastrem, façam login, e marquem rolês com outros skatistas. O site oferece uma maneira prática e divertida de conectar pessoas que compartilham a mesma paixão pelo skate.

## Funcionalidades

- **Cadastro de Usuário**: Os usuários podem criar uma conta com nome de usuário e senha.
- **Login**: Através do login, os usuários podem acessar sua conta e serem saudados com uma mensagem personalizada.
- **Armazenamento Local**: Utiliza **`localStorage`** para armazenar os dados dos usuários registrados.
- **Personalização**: Ao fazer login, o usuário é saudado com "Bem-vindo, [Usuário]!" na página inicial.

## Tecnologias Utilizadas

- **HTML5**: Para a estruturação das páginas.
- **CSS3**: Para a estilização e design responsivo.
- **JavaScript**: Para a funcionalidade dinâmica (controle de formulários, validação de dados e autenticação com `localStorage`).

## Funcionalidades Implementadas

- **Cadastro de novo usuário**:
    - O usuário fornece nome de usuário, senha e confirmação de senha.
    - Os dados são armazenados no **`localStorage`**.
    - Após o cadastro, o usuário é redirecionado para a página de login.

- **Login de usuário**:
    - O usuário insere seu nome de usuário e senha.
    - O sistema valida as credenciais com os dados armazenados no **`localStorage`**.
    - Caso o login seja bem-sucedido, o usuário é redirecionado para a página inicial e saudado com seu nome.

- **Página Inicial (Home)**:
    - Exibe uma mensagem personalizada para o usuário logado: "Bem-vindo, [Usuário]!".
    - O nome do usuário é recuperado do **`localStorage`** e exibido na página.

## Como Rodar o Projeto

### Requisitos

1. Um navegador web moderno (Chrome, Firefox, Safari, etc.).
2. O **`localStorage`** habilitado no navegador (que é suportado pela maioria dos navegadores modernos).

### Passos para Execução

1. **Baixe ou clone o repositório**:
    - Se você ainda não fez, faça o clone ou baixe o repositório:
    ```bash
    git clone https://github.com/r1yck/Projeto_Form.git
    ```

2. **Abra os arquivos no seu navegador**:
    - Navegue até o diretório do projeto e abra o arquivo `index.html` ou qualquer outro arquivo em seu navegador.
    - Ou, se preferir, pode usar um servidor local para visualização, como o **Live Server** no VS Code.

3. **Interaja com o site**:
    - Acesse a página de **Cadastro**, registre um usuário, faça o login e seja saudado na página inicial.

## Como Funciona o Cadastro e Login

- **Cadastro**: Quando um novo usuário se registra, o nome de usuário e a senha são armazenados no **`localStorage`** do navegador. O sistema verifica se o nome de usuário já existe antes de criar um novo.
  
- **Login**: O usuário fornece seu nome de usuário e senha. O sistema verifica se as credenciais correspondem aos dados armazenados e, se for bem-sucedido, o nome do usuário é exibido na página inicial.