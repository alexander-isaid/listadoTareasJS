import './styles.css'

import { crearListadoHtml } from './js/componentes'
import { Tarea, Listado } from './classes'

export const listado = new Listado();

listado.listado_tarea.forEach(tarea => {
    crearListadoHtml(tarea);
});

console.log(listado.listado_tarea);