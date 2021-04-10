import './AddTask.css';


function AddTask() {
    return (
        <div className='add-task-container'>
          <div className='data-container'>
            <div>
              <label >Task:</label>
              <input type='text' />
            </div>
            <label>
              Due Date:
              <input type='date' />
            </label>
            
          </div>
          <label>
              Description:
              <input type='textarea'/>
            </label>
          <button type='submit'>Add</button>
      </div>

    )
}

export default AddTask;