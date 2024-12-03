document.querySelector("#button1").addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Gather form data
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const contact = document.querySelector("input[name='contact']:checked")?.value || "None";
    const message = document.querySelector("#text").value;
    const subscribe = document.querySelector("#vehicle1").checked;

    submitForm(name, email, contact, message, subscribe);
});

// GitHub API details
// Simula o conteúdo inicial do responses.json
let responsesJson = {
    responses: [],
};

// Função para adicionar uma nova resposta ao JSON e exibir a mensagem
function submitForm(name, email, contact, message, subscribe) {
    try {
        // Cria o novo objeto de resposta
        const newResponse = {
            name,
            email,
            contact,
            message,
            subscribe,
        };

        // Adiciona a nova resposta ao "responses.json"
        responsesJson.responses.push(newResponse);

        // Exibe as informações na tela
        alert(
            "Seu pedido foi enviado, obrigado!\n\nAqui estão os detalhes:\n" +
            `Nome: ${name}\n` +
            `Email: ${email}\n` +
            `Motivo do Contato: ${contact}\n` +
            `Mensagem: ${message}\n` +
            `Inscrito no Newsletter: ${subscribe ? "Sim" : "Não"}`
        );
    } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Ocorreu um erro ao enviar o formulário. Verifique o console para mais detalhes.");
    }
}