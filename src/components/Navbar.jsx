// src/components/Navbar.jsx

// This component receives a prop 'onNavigate' which is a function
function Navbar({ onNavigate, currentView }) {
    return (
      <nav className="navbar">
        <button 
          className={currentView === 'tasks' ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate('tasks')}
        >
          Tasks
        </button>
        <button 
          className={currentView === 'summary' ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate('summary')}
        >
          Summary
        </button>
        <button 
          className={currentView === 'about' ? 'nav-button active' : 'nav-button'}
          onClick={() => onNavigate('about')}
        >
          About
        </button>
      </nav>
    );
  }
  
  export default Navbar;
  