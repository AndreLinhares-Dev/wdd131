
const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById('last-modified');

lastModifiedElement.innerHTML = new Date(lastModified).toLocaleString();

  if (!localStorage.getItem('formSubmissionsCounter')) {
    localStorage.setItem('formSubmissionsCounter', 0);
}



const formSubmissionsCounter = localStorage.getItem('formSubmissionsCounter');

const reviewCounterParagraph = document.querySelector("p");

reviewCounterParagraph.innerHTML += formSubmissionsCounter;
