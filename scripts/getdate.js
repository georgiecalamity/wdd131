const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("copyrightYear");
copyrightYear.textContent = `©${currentYear}`;

const lastModifiedDate = new Date(document.lastModified);
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString()}`;