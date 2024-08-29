document.getElementById('add-acompanante-btn').addEventListener('click', function () {
    // Contenedor donde se añadirán los acompañantes
    var container = document.getElementById('acompanantes-container');

    // Crear una nueva fila para el acompañante
    var nuevaFila = document.createElement('div');
    nuevaFila.className = 'acompanante-row';

    // Crear el campo de texto para el nombre del acompañante
    var nuevoInput = document.createElement('input');
    nuevoInput.type = 'text';
    nuevoInput.name = 'acompanantes[]';
    nuevoInput.placeholder = 'Nombre del acompañante';

    // Añadir el campo de texto a la nueva fila
    nuevaFila.appendChild(nuevoInput);

    // Añadir la nueva fila al contenedor de acompañantes
    container.appendChild(nuevaFila);
});
