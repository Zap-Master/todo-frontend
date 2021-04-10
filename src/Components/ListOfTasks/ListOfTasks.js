import './ListOfTasks.css';

function ListOfTasks({listOfTasks}) {
    console.log(listOfTasks);
    return (
        <div className='list-of-tasks'>
            <ul>
                {listOfTasks.map((task) =>(
                    <li key = {task.taskId}>
                        {task.taskName}
                    </li>)
                    )}
            </ul>
        </div>
    )
}

export default ListOfTasks;