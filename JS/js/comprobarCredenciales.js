import { Usuario } from "./objetos/usuario.js";

// Añadimos las funciones una vez que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    const usuarios = [
        new Usuario("usuario", "abc", "user")
    ];

    const tecnicos = [
        new Usuario("carol", "abc", "tecnico"),
        new Usuario("hugo", "abc", "tecnico"),
        new Usuario("julio", "abc", "tecnico")
    ];

    // Definir la función para iniciar sesión
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita recargar la página
        const usuarioIngresado = document.getElementById("usuario").value.trim();
        const contrasenaIngresada = document.getElementById("password").value.trim();
                
        const usuario = usuarios.find(u => u.usuario === usuarioIngresado && u.contrasena === contrasenaIngresada);
        const tecnico = tecnicos.find(t => t.usuario === usuarioIngresado && t.contrasena === contrasenaIngresada);

        //Si se encontró un usuario lo guardamos y redirigimos a la página que corresponda
        if (usuario) {
            localStorage.setItem("usuarioAutenticado", JSON.stringify(usuario));
            window.location.href = "crearTicket.html";
        } else if (tecnico) {
            localStorage.setItem("usuarioAutenticado", JSON.stringify(tecnico));
            window.location.href = "index.html";
        } else {            
            // Notificamos al usuario de que no se han introducido credenciales válidas
            var aviso = document.getElementById('aviso');
            aviso.innerHTML = "Usuario o contraseña incorrectos";
            aviso.classList.add('avisoVisible');            
            setTimeout(() => {                
                aviso.classList.remove('avisoVisible');
            }, 3000);
        }
    });
});


