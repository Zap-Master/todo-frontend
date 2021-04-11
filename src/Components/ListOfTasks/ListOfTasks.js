import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailOfTask from '../DetailOfTask/DetailOfTask';
import './ListOfTasks.css';


function ListOfTasks({listOfTasks, deleteTask, completeTask}) {
    
    const [detailOfTask, setDetailOfTask] = useState('');

    const showDetails = (taskId) => {
        const updatedTask = listOfTasks.filter(t => t.taskId === taskId);
        setDetailOfTask(updatedTask[0]);
      }
    
      useEffect(() => {
        if (listOfTasks === true) {
            setDetailOfTask(listOfTasks[0]);
        }
      }, [])

    const editTask = (taskName, dueDate, description, userId, taskId) => {
        const updatedTask = {
          taskId: taskId,
          userId: userId,
          taskName: taskName,
          dueDate: dueDate,
          complete: 0,
          description: description
        }
        /*
        axios.put(`https://kmvoiplith.execute-api.eu-west-2.amazonaws.com/dev/updateTask/${taskId}`, updatedTask)
          .then(() => axios.get(`https://kmvoiplith.execute-api.eu-west-2.amazonaws.com/dev/tasks/${userId}`)
                        .then((response) => setTasks(response.data))
          .catch((error) =>console.log(error))
          )
          */
      }
    
    return (
        <div className='list-of-tasks'>
            <ul>
                {listOfTasks.map((task) =>(
                    <li key = {task.taskId} className={`task ${(task.complete===1) ? 'task-complete' : ''}`}>
                            <div className = 'task-row'>
                                <p className='task-name'>{task.taskName}</p>
                                <div className = 'buttons'>
                                    <button onClick = {() => deleteTask(task.taskId)}>Delete</button>
                                    {(task.complete===1)
                                        ? <button onClick = {() => completeTask(task.taskId)}>Uncomplete</button>
                                        : <button>Complete</button>
                                    }
                                    <button onClick ={() => showDetails(task.taskId)}>Edit</button>
                                </div>
                            </div>
                            
                    </li>)
                    )}
            </ul>
            <DetailOfTask task = {detailOfTask} editTask = {editTask}  />
        </div>
    )
}

export default ListOfTasks;