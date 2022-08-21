!function(){var e=document.querySelector("#search-box");e.addEventListener("input",_.debounce((function(n){var t;n.preventDefault(),(t=e.value,fetch("https://restcountries.com/v2/name/".concat(t,"?fields=name,capital,population,flags,languages")).then((function(e){return e.json()}))).then((function(e){return console.log(e)}))}),300))}();
//# sourceMappingURL=index.271f6ba5.js.map
