const product = [{name: 'Product1', price: 10},
               {name: 'Product2', price: 15},
               {name: 'Product3', price: 20}];
const productwithtax = product.map(product => {return {name: product.name, price: product.price * 1.15}});


console.log('product =',product)
console.log('producteith tax =',productwithtax)