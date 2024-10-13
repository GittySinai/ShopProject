// פונקציה לטעינת נתונים
function fetchData() {
    return fetch(`http://localhost:3000/craft`) // תיקון כאן - השתמש בשם הנתיב הנכון
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

// בחר את הקונטיינר שבו תשים את הכרטיסים
const cardsContainer = document.querySelector('.cards-container');

// פונקציה ליצירת כרטיס מוצר
function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = product.image;
    image.alt = product.title;

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = product.title; 

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `₪${product.price}`;

    const addButton = document.createElement('button');
    addButton.classList.add('add-to-cart-btn');
    addButton.textContent = 'הוסף לסל';
    addButton.disabled = true;  

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(priceContainer);
    priceContainer.appendChild(price);
    priceContainer.appendChild(addButton);

    return card;
}

// קריאה ל-fetch והצגת הנתונים
fetchData().then(data => {
    if (data) { // אם הנתונים התקבלו
        data.forEach(product => {
            console.log('Creating card for:', product);
            const card = createCard(product);
            cardsContainer.appendChild(card); 
        });
    }
});
