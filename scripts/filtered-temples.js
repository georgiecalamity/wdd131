document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.getElementById('menu');
  
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('open');
        if (menu.classList.contains('open')) {
            menuIcon.textContent = '❌';
        } else {
            menuIcon.textContent = '☰';
        }
    });
  });
  

const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("copyrightYear");
copyrightYear.textContent = `©${currentYear}`;

const lastModifiedDate = new Date(document.lastModified);
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString()}`;
  

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Arequipa Peru",
        location: "Arequipa Peru",
        dedicated: "2019, December 15",
        area: 26969,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/4-48661c257177c19a0f39a3991b1a7e7aa0338487.jpeg"
    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunción Paraguay",
        dedicated: "2002, May 19",
        area: 11906,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"
    },
    {
        templeName: "Atlanta Georgia",
        location: "Atlanta Georgia",
        dedicated: "1983, June 1-4",
        area: 34500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg"
    }
  ];


function displayTemples(){
  const templeContainer = document.getElementById("templeImages");

  for (let i = 0; i < temples.length; i++){
    const temple = temples[i];

    const templeDiv = document.createElement('div');
    templeDiv.classList.add('templejs');

    const nameofTemple = document.createElement('h3');
    nameofTemple.textContent = temple.templeName;

    const templeDedication = document.createElement('p');
    templeDedication.textContent = `Dedicated: ${temple.dedicated}`;

    const templeArea = document.createElement('p');
    templeArea.textContent = `Area: ${temple.area}`;

    const templeImg = document.createElement('img');
    templeImg.src = temple.imageUrl;
    templeImg.alt = temple.templeName;

    templeDiv.appendChild(nameofTemple);
    templeDiv.appendChild(templeDedication);
    templeDiv.appendChild(templeArea);
    templeDiv.appendChild(templeImg);

    templeContainer.appendChild(templeDiv)
  }
}

function filterTemples(criteria){
  const templeContainer = document.getElementById('templeImages');
  templeContainer.innerHTML = ""

  let filteredTemples = []

  switch(criteria){
    case "old":
      filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1900, 1));
      break;
    case "new":
      filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date(2000, 1));
      break;
    case "large":
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
      break;
  }

  for (let i = 0; i < filteredTemples.length; i++){
    const temple = filteredTemples[i];
  
    const templeDiv = document.createElement('div');
    templeDiv.classList.add('templejs');
  
    const nameofTemple = document.createElement('h3');
    nameofTemple.textContent = temple.templeName;
  
    const templeDedication = document.createElement('p');
    templeDedication.textContent = `Dedicated: ${temple.dedicated}`;
  
    const templeArea = document.createElement('p');
    templeArea.textContent = `Area: ${temple.area}`;
  
    const templeImg = document.createElement('img');
    templeImg.src = temple.imageUrl;
    templeImg.alt = temple.templeName;
  
    templeDiv.appendChild(nameofTemple);
    templeDiv.appendChild(templeDedication);
    templeDiv.appendChild(templeArea);
    templeDiv.appendChild(templeImg);
  
    templeContainer.appendChild(templeDiv);
  }
}

document.getElementById('home-menu').addEventListener('click', function(){
  filterTemples();
})
document.getElementById('old-menu').addEventListener('click', function(){
  filterTemples('old');
});
document.getElementById('new-menu').addEventListener('click', function(){
  filterTemples('new');
})
document.getElementById('large-menu').addEventListener('click', function(){
  filterTemples('large');
})
document.getElementById('small-menu').addEventListener('click', function(){
  filterTemples('small');
})

displayTemples();