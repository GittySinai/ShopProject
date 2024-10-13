// פונקציה לטעינת נתונים
function fetchData() {
    return fetch(`http://localhost:3000/notebooks`) // תיקון כאן - השתמש בשם הנתיב הנכון
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
    
    card.addEventListener('click', () => {
      openModal(product);
  });

    return card;
}
// פונקציה לפתיחת הדיאלוג
function openModal(product) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalPrice = document.getElementById('modal-price');

  modalTitle.textContent = product.title;
  modalImage.src = product.image;
  modalPrice.textContent = `₪${product.price}`;

  modal.style.display = 'block'; // הפוך את הדיאלוג לגלוי

  // סגירת הדיאלוג כאשר לוחצים על ה-X
  const closeButton = document.querySelector('.close');
  closeButton.onclick = () => {
      modal.style.display = 'none';
  };

  // סגירת הדיאלוג כאשר לוחצים מחוץ לתוכן
  window.onclick = (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  };
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
