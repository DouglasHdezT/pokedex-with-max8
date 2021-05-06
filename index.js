const maxApi = require("max-api");
const fetch = require("node-fetch");

maxApi.addHandler("makeRequest", async (pokename)=> {
    const baseroute = `https://pokeapi.co/api/v2/pokemon/${pokename}`;

    const response = await fetch(baseroute);
    
    if(response.ok) {
        const data = await response.json();
        maxApi.outlet(data)
    }else {
        console.log("Pokemon no encontrado")
    }
})