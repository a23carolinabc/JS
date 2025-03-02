export class Ticket {
    id;
    titulo;
    descripcion;
    prioridad;
    departamento;
    tecnico;
    estado;
    fechaCreacion;

    constructor(titulo, descripcion, prioridad, departamento, tecnico) {
        this.id = generarIdUnico(); // ID único autogenerado
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = "Sin iniciar";
        this.departamento = departamento;
        this.fechaCreacion = new Date().toISOString();
        this.tecnico = tecnico;
    }
}

// Función para generar el id de los tickets
function generarIdUnico() {
    // Obtener los tickets existentes (si los hay)
    const ticketsExistentes = JSON.parse(localStorage.getItem("tickets")) || [];
    
    // Determinar el próximo id: si existen tickets, usar el mayor + 1; si no, iniciar en 1.
    let idBase = ticketsExistentes.length > 0 
        ? Math.max(...ticketsExistentes.map(t => t.id)) + 1 
        : 1;
    
    return idBase;
}