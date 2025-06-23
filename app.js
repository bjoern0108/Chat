
const products = [
    { id: 1, name: "Lila T-Shirt", price: "12€", image: "https://via.placeholder.com/200x200?text=T-Shirt" },
    { id: 2, name: "Lila Tasche", price: "25€", image: "https://via.placeholder.com/200x200?text=Tasche" },
    { id: 3, name: "Lila Schuhe", price: "40€", image: "https://via.placeholder.com/200x200?text=Schuhe" }
];

const productsContainer = document.getElementById('products');

products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>In den Warenkorb</button>
    `;
    productsContainer.appendChild(div);
});
