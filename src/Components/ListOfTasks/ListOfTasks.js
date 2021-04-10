import './ListOfTasks.css';

function ListOfTasks() {
    return (
        <div className='list-of-tasks'>
            <ul>
            <li>
                <p>buy milk</p>
                <button>Complete</button>
                <button>Delete</button>
            </li>
            <li>
                <p>buy bread</p>
                <button>Complete</button>
                <button>Delete</button>
            </li>
            <li>
                <p>wash cat</p>
                <button>Complete</button>
                <button>Delete</button>
            </li>
            </ul>
        </div>
    )
}

export default ListOfTasks;