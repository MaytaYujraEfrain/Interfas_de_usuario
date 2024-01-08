// Utilizando la biblioteca 'node-fetch' para realizar la solicitud a la API
const fetch = require('node-fetch');

// Haciendo la solicitud a la API de Pokémon
fetch('https://pokeapi.co/api/v2/pokemon/25')
  .then(response => response.json())
  .then(data => {
    // Mostrando información específica en la consola
    console.log('Nombre: ' + data.name);
    console.log('Altura: ' + data.height);
    console.log('Peso: ' + data.weight);
    console.log('Habilidades:');
    data.abilities.forEach(ability => {
      console.log('  - ' + ability.ability.name);
    });
  });