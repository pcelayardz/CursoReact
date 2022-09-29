import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/leves.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add,length}) => {

    //Referencia al nombre de la tarea
    const nameRef = useRef('');
    //Referencia a la descripcion de la tarea
    const descriptionRef = useRef('');
    //Referencia al nivel, y queremos que sea inicialmente de tipo normal
    const levelRef = useRef(LEVELS.NORMAL);
    //No hacemos una referencia de si esta completada o no porque, una tarea cuando se añade no suele estar completada


    /**
     * 
     * @param {*} e elemento por defecto que recive
     */
    function addTask(e){
        //Para prevenir que recargue la pagina
        e.preventDefault();
        //Creamos nueva tarea
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        //Llamamos al padre a traves de la funcion para que añada la nueva funcion
        add(newTask);
    }


    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'/>
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add New Task' : 'Create your First Task'}
                </button>
            </div>
        </form>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}


export default TaskForm;
