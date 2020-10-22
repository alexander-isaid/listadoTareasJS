import { Tarea } from '../classes';
import { listado } from '../index';

const divListadoTarea = document.querySelector('.todo-list');
const txtNuevaTarea = document.querySelector('.new-todo');
const btnBorrarCompletado = document.querySelector('.clear-completed');
const ulFiltro = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearListadoHtml = (tarea) => {
    const htmlListado = `<li class="${ tarea.completado? 'completed': '' }" data-id="${tarea.id}">
                        <div class="view">
                            <input class="toggle" type="checkbox" ${tarea.completado? 'checked': ''} />
                            <label>${tarea.tarea}</label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="Create a TodoMVC template" />
                    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlListado;
    divListadoTarea.append(div.firstElementChild);
    return div;
}


txtNuevaTarea.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtNuevaTarea.value.length > 0) {
        const nuevaTarea = new Tarea(txtNuevaTarea.value);
        listado.nuevoTarea(nuevaTarea);
        crearListadoHtml(nuevaTarea)
        txtNuevaTarea.value = '';
        console.log(listado);
    }
});

divListadoTarea.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const elemento = event.target.parentElement.parentElement;
    const idtarea = elemento.getAttribute('data-id');


    if (nombreElemento.includes('input')) {
        listado.cambiarEstado(idtarea);
        elemento.classList.toggle('completed')
    } else if (nombreElemento.includes('button')) {
        tarea
        listado.eliminarTarea(idtarea);
        divListadoTarea.removeChild(elemento);
    }
});

btnBorrarCompletado.addEventListener('click', (event) => {
    listado.eliminarCompletado();

    for (let i = divListadoTarea.children.length - 1; i >= 0; i--) {
        const elemento = divListadoTarea.children[i];

        if (elemento.classList.contains('completed')) {
            divListadoTarea.removeChild(elemento);
        }
    }
})

ulFiltro.addEventListener('click', (event) => {
    const filtro = event.target.text;
    if (!filtro) {
        return;
    }

    anchorFiltros.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');


    for (const elemento of divListadoTarea.children) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }

})