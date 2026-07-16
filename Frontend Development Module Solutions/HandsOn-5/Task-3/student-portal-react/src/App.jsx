import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";

// Task 3: useEffect Hook & Lifecycle
// - Replace hardcoded state with useEffect that fetches from JSONPlaceholder API
// - Add loading state and error state
// - Create StudentProfile component with form and local state
// - Use useEffect with dependency array

function App() {
  // Step 71: Replace hardcoded initial state
  const [courses, setCourses] = useState([]);

  // Step 72: Loading state — show 'Loading...' while fetching
  const [loading, setLoading] = useState(true);

  // Step 73: Error state for fetch failures
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  // Step 71 & 72: useEffect with empty dependency [] — runs once on mount (like componentDidMount)
  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        setError(null);

        // Fetch posts from JSONPlaceholder, map first 5 to course-like objects
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const posts = await response.json();

        // Map posts to course-like objects
        const mappedCourses = posts.map((post, index) => ({
          id: post.id,
          name: post.title.slice(0, 30) + "...",
          code: `CS10${index + 1}`,
          credits: [3, 4, 4, 5, 3][index],
          grade: ["A", "A+", "B+", "A", "B"][index],
        }));

        setCourses(mappedCourses);
      } catch (err) {
        // Step 73: Catch fetch errors and display error message
        setError("Failed to load courses. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []); // Empty dependency array: runs once after mount

  // Step 75: useEffect with dependency on courses — logs whenever courses change
  useEffect(() => {
    // Dependency array [courses]: this runs every time courses state changes.
    // Without the dependency array, it would run after every render (infinite loop risk).
    // With [], it would only run once and never see updates.
    if (courses.length > 0) {
      console.log("Courses updated:", courses.length, "courses loaded");
    }
  }, [courses]);

  function handleEnroll(course) {
    const alreadyEnrolled = enrolledCourses.some((c) => c.id === course.id);
    if (!alreadyEnrolled) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  }

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
        onProfileClick={() => setShowProfile(!showProfile)}
      />

      <main>
        {/* Step 74: Toggle StudentProfile form */}
        {showProfile && <StudentProfile />}

        <div className="search-container">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Step 72: Show loading message while fetching */}
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading courses...</p>
          </div>
        )}

        {/* Step 73: Show error message if fetch fails */}
        {error && (
          <div className="error-container">
            <p className="error-message">⚠️ {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="retry-btn"
            >
              Retry
            </button>
          </div>
        )}

        {/* Render course grid only when not loading and no error */}
        {!loading && !error && (
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
        )}

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
              Total Credits:{" "}
              {enrolledCourses.reduce((sum, c) => sum + c.credits, 0)}
            </p>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;