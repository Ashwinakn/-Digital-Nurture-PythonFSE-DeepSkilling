import { useParams, Link, useNavigate } from "react-router-dom";
import coursesData from "../data";

// Step 79: CourseDetailPage uses useParams() to read courseId from the URL
// URL: /courses/:courseId
// useParams returns { courseId: '1' } — always a string, so convert to Number

function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Step 79: Always check that the param exists before using it
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

        {/* Step 80: useNavigate() — after clicking Enroll, navigate to /profile */}
        <button
          className="btn-enroll"
          onClick={() => navigate("/profile")}
          style={{ marginTop: "1.5rem" }}
        >
          Enroll in This Course
        </button>
      </div>
    </div>
  );
}

export default CourseDetailPage;
