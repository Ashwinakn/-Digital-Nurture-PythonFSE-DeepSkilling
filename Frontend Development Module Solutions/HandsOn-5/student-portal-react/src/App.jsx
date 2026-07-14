import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <>
      <Header siteName="Student Portal" />

      <CourseCard
        name="Data Structures"
        code="CS101"
        credits={4}
        grade="A"
      />

      <Footer />
    </>
  );
}

export default App;