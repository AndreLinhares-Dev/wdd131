document.querySelector("button").addEventListener("click", function() {
    const query = document.querySelector("input[type='text']").value;
    console.log("You searched for:", query);
    // Add logic to handle the search
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const header2 = document.querySelector('.header2');

    toggleButton.addEventListener('click', function () {
        if (header2.style.display === 'none' || !header2.style.display) {
            header2.style.display = 'block';
        } else {
            header2.style.display = 'none';
        }
    });
});

const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById('last-modified');

lastModifiedElement.innerHTML = new Date(lastModified).toLocaleString();