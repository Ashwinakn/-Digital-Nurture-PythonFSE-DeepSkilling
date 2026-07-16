// Header component - displays site name, navigation, and enrolled course count
// The enrolledCount prop is passed from App (lifted state) - Step 70
function Header({ siteName, enrolledCount }) {
  return (
    <header>
      <h1>{siteName}</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Profile</a>
      </nav>

      {/* Step 70: Display enrolled count as a badge in the header */}
      <span className="enrolled-badge">
        Enrolled: {enrolledCount}
      </span>
    </header>
  );
}

export default Header;