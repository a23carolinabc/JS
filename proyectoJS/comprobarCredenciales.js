document.addEventListener("DOMContentLoaded", () => {
    const usuarios = [
        { usuario: "usuario1", contrasena: "abc", rol: "user" },
        { usuario: "usuario2", contrasena: "abc", rol: "user" },
        { usuario: "usuario3", contrasena: "abc", rol: "user" }
    ];

    const tecnicos = [
        { usuario: "carol", contrasena: "abc", rol: "tecnico" },
        { usuario: "hugo", contrasena: "abc", rol: "tecnico" },
        { usuario: "julio", contrasena: "abc", rol: "tecnico" }
    ];

    // Definir la función para iniciar sesión
    window.iniciarSesion = function () {
        const usuarioIngresado = document.getElementById("usuario").value.trim();
        const contrasenaIngresada = document.getElementById("password").value.trim();
                
        const usuario = usuarios.find(u => u.usuario === usuarioIngresado && u.contrasena === contrasenaIngresada);
        const tecnico = tecnicos.find(t => t.usuario === usuarioIngresado && t.contrasena === contrasenaIngresada);

        if (usuario) {
            localStorage.setItem("usuarioAutenticado", JSON.stringify(usuario));
            window.location.href = "crearTicket.html";
        } else if (tecnico) {
            localStorage.setItem("usuarioAutenticado", JSON.stringify(tecnico));
            window.location.href = "index.html";
        } else {            
            var aviso = document.getElementById('aviso');
            
            aviso.classList.add('avisoVisible');
            
            setTimeout(() => {                
                aviso.classList.remove('avisoVisible');
            }, 3000);
        }
    };
});
