const e=document.querySelector("#search-box");e.addEventListener("input",_.debounce((t=>{var n;t.preventDefault(),(n=e.value,fetch(`https://restcountries.com/v2/name/${n}?fields=name,capital,population,flags,languages`).then((e=>e.json()))).then((e=>console.log(e)))}),300));
//# sourceMappingURL=index.74219b91.js.map
