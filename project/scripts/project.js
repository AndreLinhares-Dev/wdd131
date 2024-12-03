document.addEventListener("DOMContentLoaded", () => {
    // Get the current visit count for each page from Local Storage
    const pageName = window.location.pathname; // Get the current page's URL path (can be a custom identifier)
    let visitData = JSON.parse(localStorage.getItem("visitData")) || {};

    // If the page has been visited before, increment its count, otherwise set it to 1
    if (visitData[pageName]) {
        visitData[pageName]++;
    } else {
        visitData[pageName] = 1;
    }

    // Save the updated visit data back to Local Storage
    localStorage.setItem("visitData", JSON.stringify(visitData));

    // Check if the visit-message element exists and display the visit count for the current page
    const visitMessage = document.getElementById("visit-message");
    if (visitMessage) {
        visitMessage.textContent = `You have visited this page ${visitData[pageName]} time(s).`;
    }
});

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