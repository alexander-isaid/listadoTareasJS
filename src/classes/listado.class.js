import { Tarea } from "./tarea.class";


export class Listado {
    constructor() {
        //this.listado_tarea = [];
        this.cargarLocalStorage();
    }

    nuevoTarea(tarea) {
        this.listado_tarea.push(tarea);
        this.guardarLocalStorage();
    }

    eliminarTarea(tarea_id) {
        this.listado_tarea = this.listado_tarea.filter(tarea => tarea.id != tarea_id);
        this.guardarLocalStorage();
    }

    cambiarEstado(tarea_id) {
        for (const tarea of this.listado_tarea) {
            if (tarea.id == tarea_id) {
                tarea.completado = !tarea.completado
            }
        }
        this.guardarLocalStorage();

    }

    eliminarCompletado() {

        this.listado_tarea = this.listado_tarea.filter(tarea => !tarea.estado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {

        localStorage.setItem('listado', JSON.stringify(this.listado_tarea));

    }

    cargarLocalStorage() {

        this.listado_tarea = (localStorage.getItem('listado')) ?
            this.listado_tarea = JSON.parse(localStorage.getItem('listado')) :
            this.listado_tarea = [];

        this.listado_tarea = this.listado_tarea.map(tarea => Tarea.fromJson(tarea))

    }
}