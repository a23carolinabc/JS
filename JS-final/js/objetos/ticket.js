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

// función para generar el id de los tickets

function generarIdUnico() {
    let ultimoId = localStorage.getItem("ultimoId") || 1; 
    let nuevoId = parseInt(ultimoId) + 1; // Incrementar en 1
    localStorage.setItem("ultimoId", nuevoId); // Guardar el nuevo ID
    return nuevoId;
}