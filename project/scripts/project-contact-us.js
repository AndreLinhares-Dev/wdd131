document.querySelector("#button1").addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Gather form data
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const contact = document.querySelector("input[name='contact']:checked")?.value || "None";
    const message = document.querySelector("#text").value;
    const subscribe = document.querySelector("#vehicle1").checked;

    const newResponse = {
        name: name,
        email: email,
        contact_reason: contact,
        message: message,
        subscribe_to_newsletter: subscribe,
    };
});