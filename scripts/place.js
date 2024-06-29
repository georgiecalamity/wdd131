const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("copyrightYear");
copyrightYear.textContent = `©${currentYear}`;

const lastModifiedDate = new Date(document.lastModified);
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified ${lastModifiedDate.toLocaleDateString()}`;


function calculateWindChill(temperature, windSpeed) {
    if (temperature < 10 || windSpeed > 4.8) {
      return "N/A";
    }
  
    const tempF = (temperature * 9/5) + 32;
    const windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed, 0.16)) 
                      + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
    const windChillC = (windChill - 32) * 5/9;
  
    return Math.round(windChillC * 10) / 10;
  }
  
const temperature = 34;
const windSpeed = 24; 
const result = calculateWindChill(temperature, windSpeed);
document.getElementById('windchill').textContent = ` ${result}`;
