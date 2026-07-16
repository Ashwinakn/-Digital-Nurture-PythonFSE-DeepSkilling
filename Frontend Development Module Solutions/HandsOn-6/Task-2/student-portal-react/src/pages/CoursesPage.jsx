import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import coursesData from "../data";
import { EnrollmentContext } from "../context/EnrollmentContext";

// Step 83: Consume context in CoursesPage to fetch enrollment functions
// Step 85: Verify enrolling updates the context state

function CoursesPage() {
  const [courses] = useState(coursesData);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { enrolledCourses, enroll } = useContext(EnrollmentContext);

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
        {filteredCourses.map((course) => {
          const isEnrolled = enrolledCourses.some((c) => c.id === course.id);
          return (
            <div key={course.id} className={`course-card ${isEnrolled ? "enrolled" : ""}`}>
              <h3>{course.name}</h3>
              <p>Code: {course.code}</p>
              <p>Credits: {course.credits}</p>
              <p>Grade: {course.grade}</p>

              {/* View Details link */}
              <Link to={`/courses/${course.id}`} className="btn-detail">
                View Details
              </Link>

              {/* Enroll button - triggers enroll action and navigates to profile */}
              <button
                className={isEnrolled ? "btn-enrolled" : "btn-enroll"}
                disabled={isEnrolled}
                onClick={() => {
                  enroll(course);
                  navigate("/profile");
                }}
              >
                {isEnrolled ? "✓ Enrolled" : "Enroll"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesPage;
