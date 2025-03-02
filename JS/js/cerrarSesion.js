// Redirige a login.html y borra la información del usuario autenticado
function cerrarSesion() {
    localStorage.removeItem("usuarioAutenticado");
    window.location.href = "login.html";
}

