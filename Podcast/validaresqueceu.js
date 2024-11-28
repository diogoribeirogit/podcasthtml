// Função de validação do e-mail no formulário
function validateForm() {
    // Obtém o valor do e-mail
    var email = document.getElementById("email").value;

    // Valida o formato do e-mail
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Caso a validação passe
    alert("Um link para redefinir sua senha foi enviado para o seu e-mail.");
    return true;
}
