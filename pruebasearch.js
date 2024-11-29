// script.js
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');
const autocompleteContainer = document.getElementById('autocomplete');

// Función para buscar en los h3
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase(); // Convertir a minúsculas
    resultsContainer.innerHTML = '';
    autocompleteContainer.innerHTML = '';
    autocompleteContainer.style.display = 'none'; // Ocultar el contenedor de autocompletado

    // Obtener todos los h3
    const h3Elements = document.querySelectorAll('section.recipe');

    if (query) {
        const filteredData = [];

        // Filtrar los h3
        h3Elements.forEach(h3 => {
            const h3Text = h3.textContent.toLowerCase();
            if (h3Text.includes(query)) {
                filteredData.push(h3.textContent);
                h3.classList.remove('hidden'); // Mostrar el elemento coincidente
            } else {
                h3.classList.add('hidden'); // Ocultar el elemento no coincidente
            }

            // Agregar sugerencias de autocompletado
            if (h3Text.startsWith(query)) {
                const li = document.createElement('li');
                li.textContent = h3.textContent;
                li.addEventListener('click', () => {
                    searchInput.value = h3.textContent; // Rellena el input con la sugerencia
                    autocompleteContainer.innerHTML = ''; // Limpiar sugerencias
                    autocompleteContainer.style.display = 'none'; // Ocultar sugerencias
                    filterResults(h3.textContent); // Filtrar resultados
                });
                autocompleteContainer.appendChild(li);
            }
        });

        // Mostrar sugerencias de autocompletado
        if (filteredData.length > 0) {
            autocompleteContainer.style.display = 'block'; // Mostrar el contenedor de autocompletado
        }
    } else {
        // Si la consulta está vacía, mostrar todos los h3
        h3Elements.forEach(h3 => {
            h3.classList.remove('hidden');
        });
    }
});

// Función para filtrar resultados (ya no es necesaria, se maneja en input)
function filterResults(query) {
    resultsContainer.innerHTML = '';
}

// Cerrar autocompletado al hacer clic fuera
document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !autocompleteContainer.contains(event.target)) {
        autocompleteContainer.style.display = 'none';
    }
});
