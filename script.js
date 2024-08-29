document.getElementById('add-acompanante-btn').addEventListener('click', function () {
    // Contenedor donde se a�adir�n los acompa�antes
    var container = document.getElementById('acompanantes-container');

    // Crear una nueva fila para el acompa�ante
    var nuevaFila = document.createElement('div');
    nuevaFila.className = 'acompanante-row';

    // Crear el campo de texto para el nombre del acompa�ante
    var nuevoInput = document.createElement('input');
    nuevoInput.type = 'text';
    nuevoInput.name = 'acompanantes[]';
    nuevoInput.placeholder = 'Nombre del acompa�ante';

    // A�adir el campo de texto a la nueva fila
    nuevaFila.appendChild(nuevoInput);

    // A�adir la nueva fila al contenedor de acompa�antes
    container.appendChild(nuevaFila);
});
