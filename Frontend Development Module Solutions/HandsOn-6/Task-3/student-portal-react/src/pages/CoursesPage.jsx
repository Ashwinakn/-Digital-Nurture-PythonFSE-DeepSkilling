import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import coursesData from "../data";
import { enroll } from "../store/enrollmentSlice";

// Step 88: Replace Context enrollment with Redux: dispatch the enroll action
// Step 89: Read state in components using useSelector

function CoursesPage() {
  const [courses] = useState(coursesData);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrollment.enrolledCourses);

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

              {/* Enroll button - dispatches Redux action and redirects to Profile */}
              <button
                className={isEnrolled ? "btn-enrolled" : "btn-enroll"}
                disabled={isEnrolled}
                onClick={() => {
                  dispatch(enroll(course));
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
