import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// Step 89: Read state using useSelector from Redux store instead of Context

function Header({ siteName }) {
  const enrolledCourses = useSelector((state) => state.enrollment.enrolledCourses);

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