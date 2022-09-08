import React from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';




import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, complete, remove}) => {

    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
     function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>{task.level}</span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>{task.level}</span>
                </h6>)
            default:
                break;
        }
    }

    /**
     * Function that returns icon depending on completion of the task
     */
     function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'purple'
    }

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th><span className='ms-2'>{task.name}</span></th>
            <td className='align-middle'><span >{task.description}</span></td>
            {/*  TODO: sustotuir por un badge*/}
            <td className='align-middle'>
            {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
                        {/*  TODO: sustotuir por iconos*/}
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                {/*<span>{task.completed ? 'Completed' : 'Pending'}</span>*/}
                <i className='bi-trash task-action' style={{color:'tomato', fontWeight:'bold', fontSize:'20px'}} onClick={() => remove(task)}></i> 
            </td>
        </tr>
    );
}

TaskComponent.propTypes = {
    //Task es una instancia de tarea
    //Que el padre tiene que enviarle una tarea
    //Nos queremos asegurar que sea tipo task
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
