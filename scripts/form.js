
const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById('last-modified');

lastModifiedElement.innerHTML = new Date(lastModified).toLocaleString();

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5,
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7,
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5,
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9,
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0,
    },
  ];
  
  // Select the <select> element
  const selectElement = document.getElementById("productSelect");
  
  // Populate the <select> with product names
  products.forEach((product) => {
    const option = document.createElement("option"); // Create a new <option>
    option.value = product.id; // Set the value to the product id
    option.textContent = product.name; // Set the text to the product name
    selectElement.appendChild(option); // Append the <option> to the <select>
  });