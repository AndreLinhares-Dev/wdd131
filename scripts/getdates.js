
const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById('last-modified');

lastModifiedElement.innerHTML = new Date(lastModified).toLocaleString();