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
            `;
            cuerpoTabla.appendChild(fila);    
        }        
    });
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarTablaTickets();
});

function editarTicket(id, campo, valor) {
    let tickets = obtenerTicketsDesdeLocalStorage();
    let ticketIndex = tickets.findIndex(ticket => ticket.id === id);
    
    if (ticketIndex !== -1) {
        tickets[ticketIndex][campo] = valor;
        localStorage.setItem("tickets", JSON.stringify(tickets));
        console.log(`Ticket ${id} actualizado:`, tickets[ticketIndex]);
    }
}
