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
        this.id = Math.random()*1000; // ID único autogenerado
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = "Sin iniciar";
        this.departamento = departamento;
        this.fechaCreacion = new Date().toISOString();
        this.tecnico = tecnico;
    }
}