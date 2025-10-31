// src/App.jsx
import { useState } from 'react';
import Task from './components/Task'; // Import our new component

// This is our "fake" data for now
const DUMMY_TASKS = [
  {
    id: 1,
    name: 'Work on React project',
    tags: ['coding', 'school', 'important'],
  },
  {
    id: 2,
    name: 'Feed the cat',
    tags: ['chores', 'animals'],
  },
  {
    id: 3,
    name: 'Go for a run',
    tags: ['health'],
  },
];

function App() {
  // We use 'useState' to store our list of tasks
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  return (
    <div className="app-container">
      <h1>Time Tracker</h1>

      {/* This is the list of our tasks */}
      <div className="task-list">
        {tasks.map((task) => (
          <Task 
            key={task.id} 
            name={task.name} 
            tags={task.tags} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;

