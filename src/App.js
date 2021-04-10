import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddTask from './Components/AddTask/AddTask';
import ListOfTasks from './Components/ListOfTasks/ListOfTasks';
import DetailOfTask from './Components/DetailOfTask/DetailOfTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className='app-container'>
        <Row>
          <Col xs={12} md={3}>
              <div className='componemt-container'>
                <AddTask />
                <ListOfTasks />
                <DetailOfTask />
              </div>
              
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
