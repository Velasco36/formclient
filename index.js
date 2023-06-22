document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores de los campos del formulario
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const firstSurname = document.getElementById("firstSurname").value.trim();
  const secondSurname = document.getElementById("secondSurname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Validar los campos del formulario
  if (
    firstName === "" ||
    lastName === "" ||
    firstSurname === "" ||
    secondSurname === "" ||
    email === "" ||
    password === ""
  ) {
    showError("Por favor, complete todos los campos");
    return; // Detener el envío del formulario si hay campos vacíos
  }

  // Validar el formato del email utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError("Por favor, ingrese un email válido");
    return; // Detener el envío del formulario si el email no es válido
  }

  // Validar la fortaleza de la contraseña utilizando una expresión regular
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    showError(
      "La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
    );
    return; // Detener el envío del formulario si la contraseña no cumple el requisito mínimo
  }

  // Si todo está validado, puedes enviar el formulario aquí
  alert("Formulario enviado correctamente");
  // document.getElementById("myForm").submit(); // Envía el formulario
});

function showError(message) {
  const errorContainer = document.getElementById("errorContainer");
  if (errorContainer) {
    errorContainer.textContent = message;
    errorContainer.style.display = "block";
  } else {
    alert(message); // Muestra una alerta si no se encuentra el elemento errorContainer
  }
}
