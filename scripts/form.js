const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("copyrightYear");
copyrightYear.textContent = `©${currentYear}`;

const lastModifiedDate = new Date(document.lastModified);
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified ${lastModifiedDate.toLocaleDateString()}`;


const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
const selectElement = document.getElementById('product-name');

for (const product  of products) {
    const optionElement = document.createElement('option');

    optionElement.key = product.id;
    optionElement.text = product.name;

    selectElement.appendChild(optionElement);
}


const form = document.getElementById('reviewForm');


form.addEventListener('submit', function(event) {
    event.preventDefault();


    setTimeout(() => {

        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);

        document.getElementById('reviews-completed').textContent = reviewCount;


        window.location.href = 'review.html';
    }, 1000); 
});

document.addEventListener('DOMContentLoaded', function() {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('reviews-completed').textContent = reviewCount;
});