//redirige a login.html

function cerrarSesion() {
    localStorage.removeItem("usuarioAutenticado");
    window.location.href = "login.html";
}