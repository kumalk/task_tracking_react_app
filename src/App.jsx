// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import TasksView from './views/TasksView';
import SummaryView from './views/SummaryView';
import AboutView from './views/AboutView';

function App() {
  // This state will track which view is active
  const [currentView, setCurrentView] = useState('tasks');

  // This function will render the correct view component
  const renderView = () => {
    switch (currentView) {
      case 'tasks':
        return <TasksView />;
      case 'summary':
        return <SummaryView />;
      case 'about':
        return <AboutView />;
      default:
        return <TasksView />;
    }
  };

  return (
    <div className="app-container">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      <header>
        {/* We can add a dynamic title later */}
        <h1>Time Tracker</h1>
      </header>
      <main>
        {renderView()}
      </main>
    </div>
  );
}

export default App;

