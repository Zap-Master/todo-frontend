import './DetailOfTask.css';

function DetailOfTask() {
    return (
        <div className='detail-of-task'>
            <label>
                Task:
                <input type='text' />
            </label>
            <label>
                Due Date:
                <input type='date' />
            </label>
            <label>
                Description:
                <input type='textarea'/>
            </label>
            <button type='submit'>Save</button>
            <button type='submit'>Cancel</button>
        </div>

    )
}

export default DetailOfTask;