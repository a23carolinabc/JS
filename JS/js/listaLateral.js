// LISTAR TICKETS BARRA LATERAL
function obtenerTicketsDesdeLocalStorage() {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    console.log("Tickets cargados para edición:", tickets);
    return tickets;
}

function listarTickets() {
    let tickets = obtenerTicketsDesdeLocalStorage();
    let listaSidebar = document.getElementById("listaTicketsResueltos");

    if (!listaSidebar) {
        console.error("No se encontró la lista de tickets resueltos.");
        return;
    }

    // Limpiar contenido previo
    listaSidebar.innerHTML = "";
    
    //Cargamos el técnico
    var tecnicoAutenticado = JSON.parse(localStorage.getItem("usuarioAutenticado"));

    // Filtrar tickets: solo los asignados al técnico    
    tickets = tickets.filter(ticket => 
        ticket.tecnico === tecnicoAutenticado.usuario);

    // Insertar tickets en la barra lateral
    tickets.forEach(ticket => {
        let item = document.createElement("li");
        item.textContent = `${ticket.id}. ${ticket.titulo}`;
        listaSidebar.appendChild(item);
        // Agregar evento de clic a la fila
        item.addEventListener("click", () => {
            editarTicket(ticket.id);
            
        });
    });
}

// Llamar la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    listarTickets();
});

// ***********************
//  EDITAR TICKET
// ***********************
function editarTicket(id) {
    // Obtienes los tickets desde el localStorage
    let tickets = obtenerTicketsDesdeLocalStorage();

    // Buscas el ticket con el id correspondiente
    let ticketIndex = tickets.findIndex(ticket => ticket.id === id);

    
        // Encuentra el ticket correcto
        let ticket = tickets[ticketIndex];

        // Guardas el ticket en sessionStorage para accederlo en la página de edición
        sessionStorage.setItem("ticketParaEditar", JSON.stringify(ticket));

        // Rediriges a la página de edición del ticket
        window.location.href = "editarTicket.html";
}