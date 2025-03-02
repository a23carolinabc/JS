function eliminarTicket() {
    let ticket = JSON.parse(sessionStorage.getItem("ticketParaEditar"));
    let id = ticket.id;
    // Confirmación del usuario
    const confirmacion = confirm("¿Estás seguro de eliminar este ticket?");
    
    if (confirmacion) {
        // Obtener tickets del localStorage
        let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
        
        // Filtrar el ticket a eliminar
        const ticketsActualizados = tickets.filter(ticket => ticket.id !== id);
        
        // Guardar cambios
        localStorage.setItem("tickets", JSON.stringify(ticketsActualizados));                     

        //Redirigir
        window.location.href = "index.html";
    }    
}