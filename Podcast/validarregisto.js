function validateForm() {
    // Obtém os valores dos campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Verifica se os campos não estão vazios
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Valida a correspondência das senhas
    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Tente novamente.");
        return false;
    }

    // Valida o formato do e-mail
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Caso a validação passe
    alert("Registro realizado com sucesso!");
    return true;
}
