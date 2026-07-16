import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import coursesData from "../data";
import { EnrollmentContext } from "../context/EnrollmentContext";

// Step 83: Consume context in CourseDetailPage

function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { enrolledCourses, enroll } = useContext(EnrollmentContext);

  const course = coursesData.find((c) => c.id === Number(courseId));

  if (!course) {
    return (
      <div className="page">
        <div className="error-container">
          <p className="error-message">Course not found.</p>
          <Link to="/courses" className="btn-primary">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const isEnrolled = enrolledCourses.some((c) => c.id === course.id);

  return (
    <div className="page">
      <div className="course-detail-card">
        <Link to="/courses" className="back-link">← Back to Courses</Link>
        <h2>{course.name}</h2>
        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">Course Code</span>
            <span className="detail-value">{course.code}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Credits</span>
            <span className="detail-value">{course.credits}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Grade</span>
            <span className="detail-value grade">{course.grade}</span>
          </div>
        </div>

        {/* Enroll button - triggers enroll action and redirects to Profile */}
        <button
          className={isEnrolled ? "btn-enrolled" : "btn-enroll"}
          disabled={isEnrolled}
          onClick={() => {
            enroll(course);
            navigate("/profile");
          }}
          style={{ marginTop: "1.5rem" }}
        >
          {isEnrolled ? "✓ Enrolled" : "Enroll in This Course"}
        </button>
      </div>
    </div>
  );
}

export default CourseDetailPage;
