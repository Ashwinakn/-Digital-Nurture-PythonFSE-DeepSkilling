import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Step 77: Page components
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ProfilePage from "./pages/ProfilePage";
import CourseDetailPage from "./pages/CourseDetailPage";

// Step 77: Define routes in App.jsx
// / -> HomePage
// /courses -> CoursesPage
// /profile -> ProfilePage
// /courses/:courseId -> CourseDetailPage

function App() {
  return (
    <>
      <Header siteName="Student Portal" />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;