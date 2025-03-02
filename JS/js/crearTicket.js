import { Ticket } from "./objetos/ticket.js";

// ***********************
//  CREACIÓN DE TICKETS
// ***********************
document.getElementById("crearTicket").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    // Obtener valores del formulario
    const titulo = document.getElementById("titulo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const prioridad = document.getElementById("prioridad").value.trim();
    const departamento = document.getElementById("departamento").value.trim();
    var tecnico;

    // Validar que los campos no estén vacíos o sean de valor 0
    if (!titulo || !descripcion || !prioridad || prioridad == 0 || !departamento || departamento == 0) {
        var aviso = document.getElementById('aviso');
        aviso.innerHTML = "Por favor, complete todos los campos";
        aviso.classList.add('avisoVisible');            
        setTimeout(() => {                
            aviso.classList.remove('avisoVisible');
        }, 3000);
        return;
    }

    //Asignamos técnicos según departamento
    switch (departamento) {
        case "DAM":
            tecnico = "carol";
            break;
        case "DAW":
            tecnico = "hugo";
            break;
        case "ASIR":
            tecnico = "julio";
            break;
        default:
            break;
    }

    // Crear el objeto Ticket
    const nuevoTicket = new Ticket(titulo, descripcion, prioridad, departamento, tecnico);

    // Guardar en localStorage
    guardarEnLocalStorage(nuevoTicket);

    // Limpiar formulario
    document.getElementById("crearTicket").reset();

    // Notificamos al usuario
    var aviso = document.getElementById('aviso');
    aviso.innerHTML = "¡Ticket creado exitosamente!";
    aviso.classList.add('avisoVisible');            
    setTimeout(() => {                
        aviso.classList.remove('avisoVisible');
    }, 3000);
});

// ***********************
//  LOCAL STORAGE (GUARDAR Y OBTENER)
// ***********************
function guardarEnLocalStorage(ticket) {
    let tickets = obtenerTicketsDesdeLocalStorage();
    tickets.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(tickets));
}

function obtenerTicketsDesdeLocalStorage() {
    return JSON.parse(localStorage.getItem("tickets")) || [];
}