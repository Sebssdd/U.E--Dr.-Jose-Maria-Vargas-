const specialAdmins = ["33200923"]; // cambiar por el usuario que desees como administrador

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const found = users.find(u => u.username === username && u.password === password);

      if (found) {
        localStorage.setItem("username", found.username);
        localStorage.setItem("userRole", found.role);
        window.location.href = "index.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const users = JSON.parse(localStorage.getItem("users")) || [];

      if (users.find(u => u.username === username)) {
        alert("El usuario ya existe.");
        return;
      }

      const role = specialAdmins.includes(username) ? "administracion" : "visitante";
      users.push({ username, password, role });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registro exitoso. Inicia sesión.");
      window.location.href = "login.html";
    });
  }
});