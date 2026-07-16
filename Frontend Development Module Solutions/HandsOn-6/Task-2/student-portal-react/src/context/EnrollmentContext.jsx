import { createContext, useState } from 'react';

export const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  function enroll(course) {
    const alreadyEnrolled = enrolledCourses.some((c) => c.id === course.id);
    if (!alreadyEnrolled) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  }

  function unenroll(courseId) {
    setEnrolledCourses(enrolledCourses.filter((c) => c.id !== courseId));
  }

  return (
    <EnrollmentContext.Provider value={{ enrolledCourses, enroll, unenroll }}>
      {children}
    </EnrollmentContext.Provider>
  );
}
