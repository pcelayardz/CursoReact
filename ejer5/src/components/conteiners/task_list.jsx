import React, { useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskFormik from '../pure/forms/taskFormik';
import TaskComponent from '../pure/taskComponent';

const TaskList = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])

    function completeTask(task) {
        console.log('Complete this Task:', task);
        //Sacamos sobre que task estamos pinchando
        const index = tasks.indexOf(task);
        //Recomienda usar una variable temporal, esta es de todas las tareas
        //* Se llama spread syntaxis
        const tempTasks = [...tasks];
        //Le damos el valor contrario. esto esta en una var temporal
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log('Detele this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log('Add this Task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}
                            >
                            </TaskComponent>
                        )
                    }
                    )}
                </tbody>
            </table>
        )
    }

    let taskTable = <Table></Table>

    if (tasks.length > 0) {
        taskTable = <Table></Table>
    } else {
        taskTable = (
            <div>
                <h3> There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            {/* Indica que va a ocupar el lugar de 12 columnas */}
            <div className='col-12'>

                <div className='card'>
                    {/* Card Header (title) con un padding de 3 */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        {/* TODO: Add Loading Spinner */}
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : taskTable}

                    </div>
                    <TaskFormik add={addTask}></TaskFormik>
                </div>
            </div>
        </div>
    );
}

export default TaskList;
