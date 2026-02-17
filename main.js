const originalProducts = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Ipad", price: 100 }
];
const taxedProducts = originalProducts.map(product => {
    return {
        name: product.name,
        price: product.price * 1.15 // إضافة 15% ضريبة
    };
});
const listElement = document.getElementById('taxed-list');
taxedProducts.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `المنتج: ${product.name} - السعر بعد الضريبة: <span class="price-tag">${product.price.toFixed(2)}</span>`;
    listElement.appendChild(li);
});
console.log("Taxed List:", taxedProducts);