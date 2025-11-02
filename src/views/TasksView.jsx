// src/views/TasksView.jsx
import { useState, useEffect } from 'react';
import Task from '../components/Task'; // Note: The path changed to ../
import { getTasks, getTags } from '../services/api'; // Note: The path changed to ../

function TasksView() { // Rename component from App to TasksView
  // We set the initial state to empty arrays
  const [tasks, setTasks] = useState([]);
  // ... (all the other useState, useEffect, and data processing logic) ...
  // ... (is exactly the same as our old App.jsx) ...
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tasksResponse, tagsResponse] = await Promise.all([
          getTasks(),
          getTags(),
        ]);

        const tagMap = {};
        tagsResponse.data.forEach(tag => {
          tagMap[tag.id] = tag.name;
        });

        const processedTasks = tasksResponse.data.map(task => {
          const tagIds = task.tags ? task.tags.split(',') : []; 
          const tagNames = tagIds.map(id => tagMap[id]).filter(Boolean); 
          
          return {
            ...task, 
            tags: tagNames, 
          };
        });

        setTasks(processedTasks);

      } catch (err) {
        setError('Failed to fetch data. Is the server running?');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  // --- Render Logic ---

  if (loading) {
    return <div className="loading-message">Loading tasks...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // We don't need the <h1> or the "app-container" div here,
  // because App.jsx will provide them.
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          name={task.name} 
          tags={task.tags} 
        />
      ))}
    </div>
  );
}

export default TasksView; // Don't forget to export TasksView!
