const userRole = localStorage.getItem("userRole");
const username = localStorage.getItem("username");
const menuList = document.getElementById("menuList");
const welcomeUser = document.getElementById("welcomeUser");

if (welcomeUser && username) {
  welcomeUser.innerText = "Usuario: " + username + " (Rol: " + userRole + ")";
}

function addMenuItem(name, link) {
  const li = document.createElement("li");
  li.innerHTML = '<a href="' + link + '">' + name + '</a>';
  menuList.appendChild(li);
}

if (userRole === "administracion") {
  addMenuItem("Administración", "pages/admin/control_roles.html");
}

if (["estudiante", "docente", "administracion"].includes(userRole)) {
  addMenuItem("Actividades", "pages/actividades/index.html");
  addMenuItem("Pagos", "pages/pagos/index.html");
  addMenuItem("Reportes", "pages/reportes/index.html");
}