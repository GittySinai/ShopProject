import data from '../json/index' assert { type: 'json' };

const notebooks = data.notebooks; 
console.log(notebooks);

const cardsContainer = document.querySelector('.cards-container');

function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = product.title;; 

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `₪${product.price}`;

    const addButton = document.createElement('button');
    addButton.classList.add('add-to-cart-btn');
    addButton.textContent = 'הוסף לסל';
    addButton.disabled = true;  

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(addButton);

    return card;
}

// notebooks.forEach(product => {
//     const card = createCard(product);
//     cardsContainer.appendChild(card); 
// });
