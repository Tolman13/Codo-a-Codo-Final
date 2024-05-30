// script.js
function handleFormSubmission() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;

    // Agregar la lógica para enviar la solicitud al servidor
    // y procesar la recuperación de contraseña.

    console.log('Correo electrónico ingresado:', emailValue);

    // Mostrar el modal de éxito
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'block';
}

function closeModal() {
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'none';
}

// Evitar que el formulario se envíe automáticamente
document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
});


