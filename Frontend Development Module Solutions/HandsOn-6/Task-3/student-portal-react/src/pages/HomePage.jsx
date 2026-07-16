import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Welcome to the Student Portal</h1>
        <p>Manage your courses, view grades, and track your academic progress.</p>
        <Link to="/courses" className="btn-primary">
          Browse Courses
        </Link>
      </section>

      <section className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-label">Courses Available</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3.8</span>
          <span className="stat-label">GPA</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">6</span>
          <span className="stat-label">Current Semester</span>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
