import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";

// Step 83: Consume EnrollmentContext in Header to display count of enrolled courses without prop drilling

function Header({ siteName }) {
  const { enrolledCourses } = useContext(EnrollmentContext);

  return (
    <header>
      <Link to="/" className="site-title">
        <h1>{siteName}</h1>
      </Link>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <span className="enrolled-badge">
        Enrolled: {enrolledCourses.length}
      </span>
    </header>
  );
}

export default Header;