import React from 'react';
import TaskListComponent from '../../components/conteiners/task_list';
import '../../styles/tasks.css'


const TaskPage = () => {
    return (
        <div className='tasks'>
            <TaskListComponent></TaskListComponent>
        </div>
    );
}

export default TaskPage;
