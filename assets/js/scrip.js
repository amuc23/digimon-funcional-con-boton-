import { digimon } from "./digimon.js";

// Función para generar el HTML de una tarjeta de Digimon
const generateDigimonCard = (digimon) => {
    return `
        <div class="card col-md-3 mb-3">
            <img src="${digimon.img}" class="card-img-top" alt="${digimon.level}">
            <div class="card-body">
                <h5 class="card-title">${digimon.name}</h5>
                <h5 class="card-title">${digimon.level}</h5>
                <!-- Botón "Mejor Digimon" -->
                <button class="btn btn-primary">Mejor Digimon</button>
            </div>
        </div>
    `;
};

// Función para renderizar las tarjetas de Digimon
const renderDigimons = (digimons) => {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // Limpiar el contenedor
    digimons.forEach((digimon) => {
        const cardHTML = generateDigimonCard(digimon);
        contenedor.innerHTML += cardHTML; // Agregar la tarjeta al contenedor
    });
};

// Mostrar todos los Digimon al principio
renderDigimons(digimon);

// Listener de evento para el campo de búsqueda
const searchInput = document.getElementById("nombre");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredDigimons = digimon.filter((digimon) =>
        digimon.name.toLowerCase().includes(searchTerm)
    );
    renderDigimons(filteredDigimons);
});

// Listener de evento para el botón "Mejor Digimon"
const contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
        const button = event.target;
        const digimonCard = button.closest(".card");
        const digimonName = digimonCard.querySelector(".card-title").textContent;
        // Redireccionar al detalle del Digimon seleccionado
        window.location.href = `digimonunico.html?name=${encodeURIComponent(digimonName)}`;
    }
});