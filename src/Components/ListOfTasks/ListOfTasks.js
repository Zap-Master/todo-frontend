import './ListOfTasks.css';

function ListOfTasks({listOfTasks, deleteTask}) {
    return (
        <div className='list-of-tasks'>
            <ul>
                {listOfTasks.map((task) =>(
                    <li key = {task.taskId}>
                        {task.taskName}
                        <button onClick = {() =>deleteTask(task.taskId)}>Delete</button>
                        {(task.complete===1)
                            ? <button>Complete</button>
                            : <button>Uncomplete</button>
                        }
                    </li>)
                    )}
            </ul>
        </div>
    )
}

export default ListOfTasks;