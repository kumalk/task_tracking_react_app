function Task({ name, tags }) {
    return (
      <div className="task-card">
        <h3 className="task-name">{name}</h3>
        <div className="tags-container">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default Task;
  