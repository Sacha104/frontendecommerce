const products = [
    { id: 1, name: "Produit 1", description: "Description du produit 1", price: 20, image: "images/product1.jpg" },
    { id: 2, name: "Produit 2", description: "Description du produit 2", price: 30, image: "images/product2.jpg" },
    // Ajoutez plus de produits ici
];

function renderProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price} €</p>
            <button onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productId) {
    // Implémentation pour ajouter au panier (localStorage ou autre méthode)
    console.log(`Produit ${productId} ajouté au panier`);
}

document.addEventListener("DOMContentLoaded", renderProducts);
