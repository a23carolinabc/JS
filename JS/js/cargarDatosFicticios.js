function cargarTicketsFicticios() {    
    
    let ticketsFinales;

    // Obtener los tickets existentes (si los hay)
    const ticketsExistentes = JSON.parse(localStorage.getItem("tickets")) || [];
    
    // Si hay tickets previos no generamos ficticios
    if (ticketsExistentes.length != 0) {
        ticketsFinales = [...ticketsExistentes];    
    } else {
        // Determinar el próximo id
        let idBase = 1;

        // Definir los nuevos tickets con id autoincremental
        const nuevosTickets = [
            // DAM - Carol
            {
                id: idBase++,
                titulo: "Login no funciona en Android",
                descripcion: "Error al validar credenciales en dispositivos móviles",
                prioridad: "Alta",
                departamento: "DAM",
                tecnico: "carol",
                estado: "En progreso",
                fechaCreacion: new Date("2024-03-01").toISOString()
            },
            {
                id: idBase++,
                titulo: "Diseño roto en tablets",
                descripcion: "Los botones se superponen en pantallas de 10 pulgadas",
                prioridad: "Media",
                departamento: "DAM",
                tecnico: "carol",
                estado: "Sin iniciar",
                fechaCreacion: new Date("2024-03-05").toISOString()
            },
            {
                id: idBase++,
                titulo: "Monitorización de red offline",
                descripcion: "Nagios no reporta estados desde hace 24h",
                prioridad: "Baja",
                departamento: "DAM",
                tecnico: "carol",
                estado: "Sin iniciar",
                fechaCreacion: new Date("2024-03-14").toISOString()
            },
            // DAW - Hugo
            {
                id: idBase++,
                titulo: "API devuelve error 500",
                descripcion: "Fallo en el endpoint /users al consultar roles",
                prioridad: "Media",
                departamento: "DAW",
                tecnico: "hugo",
                estado: "Sin iniciar",
                fechaCreacion: new Date("2024-03-02").toISOString()
            },
            {
                id: idBase++,
                titulo: "Falta traducción al francés",
                descripcion: "Página de contacto no está traducida",
                prioridad: "Baja",
                departamento: "DAW",
                tecnico: "hugo",
                estado: "En progreso",
                fechaCreacion: new Date("2024-03-07").toISOString()
            },
            {
                id: idBase++,
                titulo: "Monitorización de red offline",
                descripcion: "Nagios no reporta estados desde hace 24h",
                prioridad: "Alta",
                departamento: "DAW",
                tecnico: "hugo",
                estado: "Sin iniciar",
                fechaCreacion: new Date("2024-03-14").toISOString()
            },

            // ASIR - Julio
            {
                id: idBase++,
                titulo: "Cortes en el servidor NAS",
                descripcion: "Intermitencias cada 2 horas en el almacenamiento",
                prioridad: "Alta",
                departamento: "ASIR",
                tecnico: "julio",
                estado: "En progreso",
                fechaCreacion: new Date("2024-03-03").toISOString()
            },
            {
                id: idBase++,
                titulo: "Actualizar certificado SSL",
                descripcion: "Certificado expirado en el dominio principal",
                prioridad: "Media",
                departamento: "ASIR",
                tecnico: "julio",
                estado: "Sin iniciar",
                fechaCreacion: new Date("2024-03-09").toISOString()
            },
            {
                id: idBase++,
                titulo: "Actualizar certificado SSL",
                descripcion: "Certificado expirado en el dominio principal",
                prioridad: "Baja",
                departamento: "ASIR",
                tecnico: "julio",
                estado: "Sin iniciar",
                fechaCreacion: new Date("2024-03-09").toISOString()
            },

            // Tickets adicionales
            {
                id: idBase++,
                titulo: "Exportar datos a CSV",
                descripcion: "El botón de exportar no genera archivo",
                prioridad: "Media",
                departamento: "DAM",
                tecnico: "carol",
                estado: "Resuelto",
                fechaCreacion: new Date("2024-03-10").toISOString()
            },
            {
                id: idBase++,
                titulo: "Validación de formulario rota",
                descripcion: "Permite enviar campos vacíos en el registro",
                prioridad: "Alta",
                departamento: "DAW",
                tecnico: "hugo",
                estado: "Resuelto",
                fechaCreacion: new Date("2024-03-12").toISOString()
            },
            {
                id: idBase++,
                titulo: "Monitorización de red offline",
                descripcion: "Nagios no reporta estados desde hace 24h",
                prioridad: "Alta",
                departamento: "ASIR",
                tecnico: "julio",
                estado: "Resuelto",
                fechaCreacion: new Date("2024-03-14").toISOString()
            },
            {
                id: idBase++,
                titulo: "Iconos faltantes en dashboard",
                descripcion: "No se muestran los iconos de notificaciones",
                prioridad: "Baja",
                departamento: "DAM",
                tecnico: "carol",
                estado: "Sin iniciar",
                fechaCreacion: new Date("2024-03-15").toISOString()
            }
        ];
        
        ticketsFinales = [...nuevosTickets];
    } 

    // Guardar el array de tickets en localStorage
    localStorage.setItem("tickets", JSON.stringify(ticketsFinales));
}

cargarTicketsFicticios();