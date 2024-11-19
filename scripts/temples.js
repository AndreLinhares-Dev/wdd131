function toggleMenu() {
    const menu = document.getElementById('menu');
    const title = document.getElementById('title');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        title.style.display = 'block'; 
    } else {
        menu.style.display = 'flex';
        title.style.display = 'none'; 
    }
}


const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById('last-modified');

lastModifiedElement.innerHTML = new Date(lastModified).toLocaleString();