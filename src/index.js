//-----------------------V A R I A B L E S----------------------//
import './css/styles.css';
const inputCountry = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;
//-----------------------F U N C T I O N S----------------------//
inputCountry.addEventListener('input', _.debounce((event) => {
    event.preventDefault();
    fetchCountries(inputCountry.value).then(name => console.log(name));
  }, DEBOUNCE_DELAY)
);
function fetchCountries(name) {
    return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`).then(response => response.json());
}
