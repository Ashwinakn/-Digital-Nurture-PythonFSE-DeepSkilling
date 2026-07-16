import { Link, NavLink } from "react-router-dom";

// Step 78: Update Header nav links to use React Router's <Link> component
// <Link> prevents full page reload (client-side navigation)

function Header({ siteName }) {
  return (
    <header>
      {/* Link to home using React Router */}
      <Link to="/" className="site-title">
        <h1>{siteName}</h1>
      </Link>

      <nav>
        {/* Step 78: NavLink adds 'active' class automatically to the current route */}
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
}

export default Header;