import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

import coursesData from "./data";

function App() {
  const [courses] = useState(coursesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  function handleEnroll(course) {
    const alreadyEnrolled =
      enrolledCourses.some(
        (c) => c.id === course.id
      );

    if (!alreadyEnrolled) {
      setEnrolledCourses([
        ...enrolledCourses,
        course
      ]);
    }
  }

  const filteredCourses =
    courses.filter((course) =>
      course.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
      />

      <main>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            onEnroll={handleEnroll}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;