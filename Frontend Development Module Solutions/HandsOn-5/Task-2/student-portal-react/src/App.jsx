import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

import coursesData from "./data";

// Task 2: State with useState and Dynamic Lists
// - courses state initialized from data file
// - searchTerm state for real-time filtering
// - enrolledCourses state for tracking enrolled courses (lifted state)

function App() {
  // Step 66: useState initialized with course objects from data file
  const [courses] = useState(coursesData);

  // Step 68: Search state for filtering
  const [searchTerm, setSearchTerm] = useState("");

  // Step 69: Enrolled courses state (lifted up from CourseCard)
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Handler passed down as prop to CourseCard
  function handleEnroll(course) {
    const alreadyEnrolled = enrolledCourses.some((c) => c.id === course.id);

    if (!alreadyEnrolled) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  }

  // Step 68: Filter courses by searchTerm
  // Using lowercase comparison for case-insensitive search
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Step 70: Pass enrolledCount as prop to Header */}
      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
      />

      <main>
        <div className="search-container">
          {/* Step 68: Controlled input bound to searchTerm state */}
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Step 67: Map over filtered courses to render CourseCard for each */}
        <div className="course-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onEnroll={handleEnroll}
                isEnrolled={enrolledCourses.some((c) => c.id === course.id)}
              />
            ))
          ) : (
            <p className="no-results">No courses found for "{searchTerm}"</p>
          )}
        </div>

        {/* Display enrolled courses summary */}
        {enrolledCourses.length > 0 && (
          <section className="enrolled-section">
            <h2>My Enrolled Courses</h2>
            <ul className="enrolled-list">
              {enrolledCourses.map((course) => (
                <li key={course.id}>
                  {course.name} — {course.credits} credits
                </li>
              ))}
            </ul>
            <p className="total-credits">
              Total Credits: {enrolledCourses.reduce((sum, c) => sum + c.credits, 0)}
            </p>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;