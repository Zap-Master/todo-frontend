import {useState} from 'react';
import {useRef} from 'react';
import './AddTask.css';


function AddTask({addTask}) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
  const [description,  setDescription] = useState('');

  const inputTaskName = useRef(null);

  const handleClick = () => {
    if (taskName === ''){
      inputTaskName.current.focus();        
    } else {
        addTask(taskName, dueDate, description);
        setTaskName('');
        setDueDate('');
        setDescription('');
    }
  }

  return (
    <div className='add-task-container'>
      <div className='data-container'>
        <div>
          <label >Task:</label>
          <input 
            type='text'
            ref = {inputTaskName}
            value = {taskName}
            onChange = {(e) => setTaskName(e.target.value)} />
        </div>
        <label>
          Due Date:
          <input
            type='date'
            value = {dueDate}
            onChange = {(e) => setDueDate(e.target.value)} />
        </label>
      </div>
      <label>
        Description:
        <input
          type='textarea'
          value = {description}
          onChange = {(e) => setDescription(e.target.value)} />
      </label>
      <button onClick = {handleClick}>Add</button>
    </div>
  )
}

export default AddTask;