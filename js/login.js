document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Aquí iría la validación real (por ejemplo, contra una base de datos)
    if (username && password) {
      // Guardamos el estado de sesión
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", username);
  
      // Redirigir al index
      window.location.href = "index.html"; // Cambia esto por la página de bienvenida real
    } else {
      alert("Credenciales incorrectas");
    }
  });
  
  