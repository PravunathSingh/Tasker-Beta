import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Tasks from './components/tasks/Tasks';
import AddTask from './components/tasks/AddTask';

const App = () =>{
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 2th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meet with friends',
            day: 'Feb 4th at 2:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 4:30pm',
            reminder: false
        }
    ]
  )

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <AddTask />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h5>Woohoo, No Tasks Pending!!</h5>}
      </div>
    </div>
  );
}

export default App;
