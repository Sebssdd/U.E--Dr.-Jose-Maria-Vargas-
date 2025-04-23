document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const specialAdmins = ["33200923"]; // Aquí puedes poner los usuarios que serán administración automáticamente
    const role = specialAdmins.includes(username) ? "administracion" : "visitante";
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registro exitoso. Inicia sesión.");
  
    // Redirigir al login
    window.location.href = "login.html";
  });
  