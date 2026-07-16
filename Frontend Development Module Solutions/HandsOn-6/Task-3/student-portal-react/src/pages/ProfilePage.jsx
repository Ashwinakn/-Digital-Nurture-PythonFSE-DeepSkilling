import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unenroll } from "../store/enrollmentSlice";

// Step 88: Replace Context un-enrollment with Redux: dispatch the unenroll action
// Step 89: Read state in components using useSelector

function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [semester, setSemester] = useState("");
  const [saved, setSaved] = useState(false);

  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrollment.enrolledCourses);

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const totalCredits = enrolledCourses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <div className="page" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      <div style={{ flex: "1 1 400px" }}>
        <h2 className="page-title">Student Profile</h2>

        {saved && (
          <div className="success-message">
            ✓ Profile saved successfully!
          </div>
        )}

        <div className="profile-card">
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="semester">Semester (1-8)</label>
              <input
                id="semester"
                type="number"
                placeholder="e.g. 4"
                min="1"
                max="8"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-enroll">
              Save Profile
            </button>
          </form>
        </div>
      </div>

      {/* Enrolled Courses list display from Redux store */}
      <div style={{ flex: "1 1 400px" }}>
        <h2 className="page-title">My Enrolled Courses</h2>
        <div className="profile-card">
          {enrolledCourses.length > 0 ? (
            <>
              <ul className="enrolled-list" style={{ listStyleType: "none", padding: 0 }}>
                {enrolledCourses.map((course) => (
                  <li
                    key={course.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.8rem 0",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <div>
                      <strong style={{ color: "#1a237e" }}>{course.name}</strong>
                      <div style={{ fontSize: "0.85rem", color: "#666" }}>
                        {course.code} — {course.credits} Credits
                      </div>
                    </div>
                    {/* Dispatches Redux unenroll action */}
                    <button
                      onClick={() => dispatch(unenroll(course.id))}
                      style={{
                        padding: "0.3rem 0.6rem",
                        background: "#ef5350",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1rem", fontWeight: "bold", color: "#1a237e" }}>
                Total Credits Enrolled: {totalCredits}
              </div>
            </>
          ) : (
            <p style={{ color: "#666", fontStyle: "italic" }}>
              You are not enrolled in any courses yet. Go to the Courses page to enroll.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
