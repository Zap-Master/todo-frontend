import {useState} from 'react';
import {useRef} from 'react';
import './DetailOfTask.css';

function DetailOfTask({task, editTask}) {
    
    
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description,  setDescription] = useState('');
    const [user_id, setUserId] = useState('');
    const [taskId, setTaskId] = useState('');
    const [complete, setComplete] = useState('');

    const inputTaskName = useRef(null);
    
    const handleClickSave = () => {
        setUserId(task.userId);
        setTaskId(task.taskId);
        if (taskName === ''){
            setTaskName(task.taskName);
        } else {
              alert('user_id '+ task.userId);
              editTask(taskName, dueDate, description, user_id, taskId);
              setTaskName('');
              setDueDate('');
              setDescription('');
              setUserId('');
              setTaskId('');
          }
    }

    return (
        <div className='detail-of-task'>
            <label>
                Task:
                <input 
                    type ='text'
                    ref = {inputTaskName}
                    defaultValue = {task.taskName}
                    onChange = {(e) => setTaskName(e.target.value)}/>
            </label>
            <label>
                Due Date:
                <input 
                    type='date'
                    defaultValue = {task.dueDate}
                    onChange = {(e) => setDueDate(e.target.value)} />
            </label>
            <label>
                Description:
                <input
                    type='textarea'
                    defaultValue = {task.description}
                    onChange = {(e) => setDescription(e.target.value)} />
            </label>
            <button onClick = {handleClickSave}>Save</button>
            <button >Cancel</button>
        </div>

    )
}

export default DetailOfTask;