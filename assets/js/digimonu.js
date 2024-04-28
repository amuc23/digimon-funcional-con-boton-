import { digimon } from "./digimon.js";

// Función para generar el HTML de los detalles del Digimon
const generateDigimonDetailHTML = (digimon) => {
    return `
        <div class="container">
            <div class="digimon-details">
                <img src="${digimon.img}" alt="${digimon.name}" class="digimon-image">
                <div class="digimon-info">
                    <h1 class="digimon-name">${digimon.name}</h1>
                    <h1 class="digimon-name">${digimon.level}</h1>
                </div>
            </div>
        </div>
    `;
};

// Función para obtener el nombre del Digimon de la URL
const getDigimonNameFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
};

// Obtener la información del Digimon por su nombre
const getDigimonByName = (name) => {
    return digimon.find(digimon => digimon.name === name);
};

// Obtener el nombre del Digimon de la URL
const digimonName = getDigimonNameFromUrl();

// Obtener la información del Digimon por su nombre
const selectedDigimon = getDigimonByName(digimonName);

// Obtener el contenedor de detalles del Digimon por su ID
const digimonDetailContainer = document.getElementById("digimonDetailContainer");

// Generar HTML con la información detallada del Digimon y mostrarlo en el contenedor
if (selectedDigimon) {
    digimonDetailContainer.innerHTML = generateDigimonDetailHTML(selectedDigimon);
} else {
    digimonDetailContainer.innerHTML = "<p>Digimon no encontrado.</p>";
}