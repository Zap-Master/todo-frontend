import './ListOfTasks.css';

function ListOfTasks({listOfTasks, deleteTask, completeTask}) {
    return (
        <div className='list-of-tasks'>
            <ul>
                {listOfTasks.map((task) =>(
                    <li key = {task.taskId} className={`task ${(task.complete===1) ? 'task-complete' : ''}`}>
                        {task.taskName}
                        <button onClick = {() => deleteTask(task.taskId)}>Delete</button>
                        {(task.complete===1)
                            ? <button onClick = {() => completeTask(task.taskId)}>Uncomplete</button>
                            : <button>Complete</button>
                        }
                    </li>)
                    )}
            </ul>
        </div>
    )
}

export default ListOfTasks;