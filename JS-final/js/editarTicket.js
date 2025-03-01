window.onload = function() {
    // Obtener el técnico autenticado
    var tecnicoAutenticado = JSON.parse(localStorage.getItem("usuarioAutenticado"));

    //Cargamos el nombre del técnico
    var nombreUsuario = document.getElementById("nombreUsuario");
    nombreUsuario.innerHTML = tecnicoAutenticado.usuario.charAt(0).toUpperCase() + tecnicoAutenticado.usuario.slice(1);

    // Obtener el ticket desde sessionStorage
    let ticket = JSON.parse(sessionStorage.getItem("ticketParaEditar"));

    if (ticket) {
        // Llenar los campos del formulario con los datos del ticket
        document.querySelector('input[name="titulo"]').value = ticket.titulo;
        document.querySelector('input[name="descripcion"]').value = ticket.descripcion;
        document.querySelector('select[name="prioridad"]').value = ticket.prioridad;
        document.querySelector('select[name="estado"]').value = ticket.estado;
        document.querySelector('select[name="departamento"]').value = ticket.departamento;
    } else {
        console.error("No se encontró el ticket para editar.");
    }
};

function guardarCambios() {
    // Obtener el ticket original
    let ticketOriginal = JSON.parse(sessionStorage.getItem("ticketParaEditar"));
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    
    // Obtener el nuevo departamento seleccionado
    const nuevoDepartamento = document.querySelector('select[name="departamento"]').value;
    
    // Asignar técnico según el nuevo departamento (como en crearTicket.js)
    let nuevoTecnico;
    switch (nuevoDepartamento) {
        case "DAM":
            nuevoTecnico = "carol";
            break;
        case "DAW":
            nuevoTecnico = "hugo";
            break;
        case "ASIR":
            nuevoTecnico = "julio";
            break;
        default:
            nuevoTecnico = ticketOriginal.tecnico; // Por si hay un valor inesperado
    }

    // Actualizar datos del ticket
    const ticketActualizado = {
        ...ticketOriginal,
        titulo: document.querySelector('input[name="titulo"]').value,
        descripcion: document.querySelector('input[name="descripcion"]').value,
        prioridad: document.querySelector('select[name="prioridad"]').value,
        estado: document.querySelector('select[name="estado"]').value,
        departamento: nuevoDepartamento,
        tecnico: nuevoTecnico
    };
    
    // Reemplazar el ticket en el array
    const index = tickets.findIndex(t => t.id === ticketOriginal.id);
    tickets[index] = ticketActualizado;
    
    // Guardar y redirigir
    localStorage.setItem("tickets", JSON.stringify(tickets));
    var aviso = document.getElementById('aviso');
    aviso.innerHTML = "Ticket actualizado correctamente";
    aviso.classList.add('avisoVisible');            
    setTimeout(() => {                
        aviso.classList.remove('avisoVisible');
    }, 3000);
}

function cancelarYVolver() {
    window.location.href = "index.html";
}