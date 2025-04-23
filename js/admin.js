const usuarios = [
    { nombre: 'Carlos', rol: 'Visitante' },
    { nombre: 'María', rol: 'Estudiante' },
    { nombre: 'Luis', rol: 'Docente' }
  ];
  
  const roles = ['Visitante', 'Estudiante', 'Docente'];
  
  function renderTabla() {
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";
  
    usuarios.forEach((usuario, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>${usuario.rol}</td>
        <td>
          <select id="select-${i}">
            ${roles.map(rol => `<option ${rol === usuario.rol ? 'selected' : ''}>${rol}</option>`).join("")}
          </select>
        </td>
        <td><button onclick="asignarRol(${i})">Asignar</button></td>
      `;
      tbody.appendChild(row);
    });
  }
  
  function asignarRol(index) {
    const nuevoRol = document.getElementById(`select-${index}`).value;
    usuarios[index].rol = nuevoRol;
    renderTabla();
  }
  
  document.getElementById("searchInput").addEventListener("input", function () {
    const search = this.value.toLowerCase();
    document.querySelectorAll("#userTable tbody tr").forEach(row => {
      const nombre = row.children[0].textContent.toLowerCase();
      row.style.display = nombre.includes(search) ? "" : "none";
    });
  });
  
  renderTabla();
  