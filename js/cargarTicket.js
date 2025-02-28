// ***********************
//  EDITAR TICKET
// ***********************

function obtenerTicketsDesdeLocalStorage() {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    console.log("Tickets cargados para edición:", tickets);
    return tickets;
}

function actualizarTablaTickets() {
    let tickets = obtenerTicketsDesdeLocalStorage();
    let cuerpoTabla = document.getElementById("cuerpoTablaTickets");

    if (!cuerpoTabla) {
        console.error("No se encontró la tabla de tickets.");
        return;
    }

    // Limpiar contenido previo
    cuerpoTabla.innerHTML = "";

    var tecnicoAutenticado = JSON.parse(localStorage.getItem("usuarioAutenticado"));
    tickets.forEach(ticket => {
        if (ticket.tecnico == tecnicoAutenticado.usuario) {
            let fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${ticket.titulo}</td>
                <td>${ticket.descripcion}</td>
                <td>${ticket.prioridad}</td>
                <td>${ticket.estado}</td>
                <td>${ticket.departamento}</td>
                <td>${new Date(ticket.fechaCreacion).toLocaleString()}</td>
                <td><button id="editar" onclick="editarTicket(${ticket.id})">Editar</button></td>
                <td><button id="eliminar" onclick="eliminarTicket(${ticket.id})">Eliminar</button></td>
            `;
            cuerpoTabla.appendChild(fila);    
        }        
    });
}

// Hacerla accesible globalmente
window.actualizarTablaTickets = actualizarTablaTickets;

document.addEventListener("DOMContentLoaded", () => {
    actualizarTablaTickets();
});

function editarTicket(id) {
    // Obtienes los tickets desde el localStorage
    let tickets = obtenerTicketsDesdeLocalStorage();

    // Buscas el ticket con el id correspondiente
    let ticketIndex = tickets.findIndex(ticket => ticket.id === id);

    if (ticketIndex !== -1) {
        // Encuentra el ticket correcto
        let ticket = tickets[ticketIndex];

        // Guardas el ticket en sessionStorage para accederlo en la página de edición
        sessionStorage.setItem("ticketToEdit", JSON.stringify(ticket));

        // Rediriges a la página de edición del ticket
        window.location.href = "formTicket.html";
    }
}
