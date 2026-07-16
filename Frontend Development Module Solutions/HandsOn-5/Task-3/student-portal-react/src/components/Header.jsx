// Header component - displays site name, navigation, enrolled count, and profile toggle
function Header({ siteName, enrolledCount, onProfileClick }) {
  return (
    <header>
      <h1>{siteName}</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <button onClick={onProfileClick} className="nav-profile-btn">
          Profile
        </button>
      </nav>

      <span className="enrolled-badge">
        Enrolled: {enrolledCount}
      </span>
    </header>
  );
}

export default Header;