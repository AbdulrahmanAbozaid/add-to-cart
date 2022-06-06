/**-base-*/

var productItems = document.querySelectorAll('#products li');
var addedProducts = document.getElementById('contents');
var showPrice = document.getElementById('showPrice');
var price = document.getElementById('price');
var clear = document.getElementById('clearBtn');
var total = 0;


/* adding to cart */
productItems.forEach(function(item) {
    item.addEventListener('click', () => {
        total += parseInt(item.getAttribute('price'));
        addedProducts.innerHTML += `<li>${item.textContent}</li>`;
        if (addedProducts.innerHTML != '' && total != 0) {
            showPrice.style.display = 'inline-block';
            clear.style.display = 'inline-block';
        }
    })
});


// price

showPrice.addEventListener('click', () => {
    price.style.display = 'inline-block';
    price.value = total + '$';
    console.log(total);
});

//clear

clear.addEventListener('click', () => {
    addedProducts.innerHTML = '';
    total = 0;
    showPrice.style.display = 'none';
    clear.style.display = 'none';
    price.style.display = 'none';
})