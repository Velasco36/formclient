document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    const productName = document.getElementById("firstName").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value;
    const status = document.getElementById("status").value;
  
   
    if (
      productName === "" ||
      description === "" ||
      price === "" ||
      status === ""
    ) {
      showError("Por favor, complete todos los campos");
      return; 
    }
  
    
    if (isNaN(price) || Number(price) <= 0) {
      showError("Por favor, ingrese un precio válido");
      return; 
    }
  
   
    alert("Formulario enviado correctamente");
  
  
    setTimeout(function() {
      location.reload();
    }, 3000);
  });
  
  function showError(message) {
    const errorContainer = document.getElementById("errorContainer");
    if (errorContainer) {
      errorContainer.textContent = message;
      errorContainer.style.display = "block";
    } else {
      alert(message); 
    }
  }
  