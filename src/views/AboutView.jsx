// src/views/AboutView.jsx

// We'll add some simple inline styles to structure this page a bit
const sectionStyle = {
    marginBottom: '24px',
  };
  
  const headingStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: '4px',
    marginTop: '0',
  };
  
  function AboutView() {
    return (
      <div>
        <section style={sectionStyle}>
          <h3 style={headingStyle}>Author</h3>
          {/* === TODO: Add your name here! === */}
          <p>Your Name Here</p>
        </section>
  
        <section style={sectionStyle}>
          <h3 style={headingStyle}>Instructions</h3>
          <p>
            Using the application should be intuitive and straightforward:
          </p>
          <ul>
            <li>Click the <b>Tasks</b> tab to see all your tasks.</li>
            <li>Click the <b>Summary</b> tab to see your time usage statistics.</li>
            <li>(More features and instructions will be added here as we build them!)</li>
          </ul>
        </section>
  
        <section style={sectionStyle}>
          <h3 style={headingStyle}>Content Credits</h3>
          <p>
            All code in this application was written by the author. All visual
            assets (icons, etc.) are part of standard libraries or are custom-made.
            No external images or content requiring specific licenses have been used.
          </p>
        </section>
  
        <section style={sectionStyle}>
          <h3 style={headingStyle}>AI Tool Usage</h3>
          <p>
              I used an AI assistant (Copilot) to help with
              boilerplate code, debugging, and explaining concepts,
              but I wrote all the core application logic myself.
          </p>
        </section>
      </div>
    );
  }
  
  export default AboutView;
  
  