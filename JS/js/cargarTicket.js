// Obtiene los tickets de localStorage
function obtenerTicketsDesdeLocalStorage() {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    console.log("Tickets cargados para edición:", tickets);
    return tickets;
}

// ***********************
//  CARGAR TICKETS
// ***********************

function actualizarTablaTickets() {
    let tickets = obtenerTicketsDesdeLocalStorage();
    let cuerpoTabla = document.getElementById("cuerpoTablaTickets");

    if (!cuerpoTabla) {
        console.error("No se encontró la tabla de tickets.");
        return;
    }

    // Limpiar contenido previo
    cuerpoTabla.innerHTML = "";

    // Obtener el técnico autenticado
    var tecnicoAutenticado = JSON.parse(localStorage.getItem("usuarioAutenticado"));

    //Cargamos el nombre del técnico en el html
    var nombreUsuario = document.getElementById("nombreUsuario");
    nombreUsuario.innerHTML = tecnicoAutenticado.usuario.charAt(0).toUpperCase() + tecnicoAutenticado.usuario.slice(1);

    // Filtrar tickets: solo los asignados al técnico y que no estén resueltos
    const ticketsFiltrados = tickets.filter(ticket => 
        ticket.tecnico === tecnicoAutenticado.usuario && ticket.estado.toLowerCase() !== "resuelto"
    );

    // Ordenar tickets por prioridad: Alta primero, luego Media, luego Baja.
    const prioridadOrder = { alta: 1, media: 2, baja: 3 };
    ticketsFiltrados.sort((a, b) => {
        return (prioridadOrder[a.prioridad.toLowerCase()] || 4) - (prioridadOrder[b.prioridad.toLowerCase()] || 4);
    });

    // Listar los tickets ordenados
    ticketsFiltrados.forEach(ticket => {
        let fila = document.createElement("tr");
        
        fila.id = ticket.id;
        fila.innerHTML = `
            <td>${ticket.titulo}</td>
            <td>${ticket.descripcion}</td>
            <td>${ticket.prioridad}</td>
            <td>${ticket.estado}</td>
            <td>${ticket.departamento}</td>
            <td>${new Date(ticket.fechaCreacion).toLocaleString('es-ES')}</td>
        `;

        // Agregar evento de click a la fila
        fila.addEventListener("click", () => {
            editarTicket(ticket.id);
            
        });
        cuerpoTabla.appendChild(fila);    
    });    
}

// Hacerla accesible globalmente
window.actualizarTablaTickets = actualizarTablaTickets;

document.addEventListener("DOMContentLoaded", () => {
    actualizarTablaTickets();
});


//LISTAR TICKETS RESUELTOS BARRA LATERAL
function listarTicketsResueltos() {
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

    // Filtrar tickets: solo los asignados al técnico y que estén resueltos    
    let ticketsResueltos = tickets.filter(ticket => 
        ticket.tecnico === tecnicoAutenticado.usuario && ticket.estado.toLowerCase() === "resuelto");

    // Insertar tickets en la barra lateral
    ticketsResueltos.forEach(ticket => {
        let item = document.createElement("li");
        item.textContent = `${ticket.id}. ${ticket.titulo}`;
        listaSidebar.appendChild(item);
        // Agregar evento de click a la fila
        item.addEventListener("click", () => {
            editarTicket(ticket.id);
            
        });
    });
}

// Llamar la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    listarTicketsResueltos();
});


// ***********************
//  EDITAR TICKET
// ***********************

function editarTicket(id) {
    // Obtienes los tickets desde el localStorage
    let tickets = obtenerTicketsDesdeLocalStorage();

    // Buscas el ticket con el id correspondiente
    let ticketIndex = tickets.findIndex(ticket => ticket.id === id);

    if (ticketIndex !== -1) {
        // Encuentra el ticket correcto
        let ticket = tickets[ticketIndex];

        // Guardas el ticket en sessionStorage para accederlo en la página de edición
        sessionStorage.setItem("ticketParaEditar", JSON.stringify(ticket));

        // Rediriges a la página de edición del ticket
        window.location.href = "editarTicket.html";
    }
}
