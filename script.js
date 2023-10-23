document.addEventListener("DOMContentLoaded", function () {
    // Adicionar classe de destaque aos links de navegação quando clicados
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            navLinks.forEach(link => link.classList.remove("ativo"));
            this.classList.add("ativo");
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Validação do formulário de contato
    const contatoForm = document.getElementById("contato-form");
    contatoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");
        const mensagemInput = document.getElementById("mensagem");

        if (nomeInput.value === "" || emailInput.value === "" || mensagemInput.value === "") {
            alert("Por favor, preencha todos os campos do formulário.");
        } else {
            alert("O formulário foi enviado com sucesso!");
            contatoForm.reset();
        }
    });
});