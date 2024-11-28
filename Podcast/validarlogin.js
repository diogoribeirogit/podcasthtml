function validateForm() {
    // Obtém os valores dos campos
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se os campos não estão vazios
    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Verificação simples de formato do e-mail (caso o usuário tenha usado um e-mail)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (username.indexOf("@") !== -1 && !emailPattern.test(username)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Caso a validação passe
    alert("Login realizado com sucesso!");
    return true;
}
