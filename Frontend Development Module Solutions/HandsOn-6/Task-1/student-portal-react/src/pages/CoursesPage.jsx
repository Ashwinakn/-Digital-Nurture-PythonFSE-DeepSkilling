import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import coursesData from "../data";

function CoursesPage() {
  const [courses] = useState(coursesData);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">
      <h2 className="page-title">Available Courses</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p>Code: {course.code}</p>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>

            {/* Step 79: Link to course detail page using useParams */}
            <Link to={`/courses/${course.id}`} className="btn-detail">
              View Details
            </Link>

            {/* Step 80: Enroll navigates to /profile using useNavigate */}
            <button
              className="btn-enroll"
              onClick={() => navigate("/profile")}
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
