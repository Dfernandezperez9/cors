const INPUT_BUSQUEDA = document.getElementById('input_busqueda');
const BOTON_BUSQUEDA = document.getElementById('busqueda');
const DIV_PERSONAJES = document.getElementById('personajes');

BOTON_BUSQUEDA.addEventListener('click', async () => {
  const NOMBRE_PERSONAJE = INPUT_BUSQUEDA.value.trim();
  if (NOMBRE_PERSONAJE) {
    const RESPONSE = await fetch(`https://rickandmortyapi.com/api/character/?name=${NOMBRE_PERSONAJE}`);
    const DATA = await RESPONSE.json();
    const PERSONAJE = DATA.results[0];
    if (PERSONAJE) {
     DIV_PERSONAJES.innerHTML = '';
      const DIV_INDIVIDUAL_PERSONAJE = document.createElement('div');
      DIV_INDIVIDUAL_PERSONAJE.classList.add('personaje');
      DIV_INDIVIDUAL_PERSONAJE.innerHTML = `
        <img src="${PERSONAJE.image}" alt="${PERSONAJE.name}">
        <h2>${PERSONAJE.name}</h2>
        <p>Estado: ${PERSONAJE.status}</p>
        <p>Especie: ${PERSONAJE.species}</p>
        <p>Género: ${PERSONAJE.gender}</p>
        <p>Origen: ${PERSONAJE.origin.name}</p>
      `;
     DIV_PERSONAJES.appendChild(DIV_INDIVIDUAL_PERSONAJE);
    } else {
     DIV_PERSONAJES.innerHTML = '<p>No se encontró el personaje</p>';
    }
  } else {
   DIV_PERSONAJES.innerHTML = '';
    const RESPONSE = await fetch('https://rickandmortyapi.com/api/character/');
    const DATA = await RESPONSE.json();
    const PERSONAJES = DATA.results;
    PERSONAJES.forEach((PERSONAJE) => {
      const DIV_INDIVIDUAL_PERSONAJE = document.createElement('div');
      DIV_INDIVIDUAL_PERSONAJE.classList.add('personaje');
      DIV_INDIVIDUAL_PERSONAJE.innerHTML = `
        <img src="${PERSONAJE.image}" alt="${PERSONAJE.name}">
        <h2>${PERSONAJE.name}</h2>
        <p>Estado: ${PERSONAJE.status}</p>
        <p>Especie: ${PERSONAJE.species}</p>
        <p>Género: ${PERSONAJE.gender}</p>
        <p>Origen: ${PERSONAJE.origin.name}</p>
      `;
     DIV_PERSONAJES.appendChild(DIV_INDIVIDUAL_PERSONAJE);
    });
  }
});