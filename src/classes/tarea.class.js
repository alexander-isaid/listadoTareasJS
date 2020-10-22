export class Tarea {

    static fromJson({ id, tarea, completado, fecha_creaion }) {
        const tempTarea = new Tarea();
        tempTarea.tarea = tarea;
        tempTarea.id = id;
        tempTarea.completado = completado;
        tempTarea.fecha_creaion = fecha_creaion;

        return tempTarea;

    }

    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.fecha_creaion = new Date();
    }
}