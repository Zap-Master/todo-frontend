import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from 'react';
import axios from 'axios';

import AddTask from './Components/AddTask/AddTask';
import ListOfTasks from './Components/ListOfTasks/ListOfTasks';

import './App.css';

function App() {
  const userId = 1; // userId hard coded
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`https://kmvoiplith.execute-api.eu-west-2.amazonaws.com/dev/tasks/${userId}`)
      .then(response => setTasks(response.data))
      .catch(error => console.log(error))
  }, [])

  const addTask = (taskName, dueDate, description) => {
    const newTask = {
      taskId: "",
      userId: userId,
      taskName: taskName,
      dueDate: dueDate,
      complete: 0,
      description: description
    }
    axios.post(`https://kmvoiplith.execute-api.eu-west-2.amazonaws.com/dev/createTask`, newTask)
      .then(() => axios.get(`https://kmvoiplith.execute-api.eu-west-2.amazonaws.com/dev/tasks/${userId}`)
                    .then((response) => setTasks(response.data))
      .catch((error) =>console.log(error))
      )
    
  }

  const deleteTask = (taskId) => {
    axios.delete(`https://kmvoiplith.execute-api.eu-west-2.amazonaws.com/dev/deleteTask/${taskId}`)
      .then(() => axios.get(`https://kmvoiplith.execute-api.eu-west-2.amazonaws.com/dev/tasks/${userId}`)
                    .then((response) => setTasks(response.data))
      .catch((error) =>console.log(error))
      )
  }

  const completeTask = (taskId) => {

  }

  return (
    <div className="App">
      <Container className='app-container'>
        <Row>
          <Col xs={12} md={3}>
              <div className='componemt-container'>
                <AddTask addTask = {addTask}/>
                <ListOfTasks listOfTasks = {tasks} deleteTask = {deleteTask} completeTask = {completeTask}/>

              </div>
              
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
