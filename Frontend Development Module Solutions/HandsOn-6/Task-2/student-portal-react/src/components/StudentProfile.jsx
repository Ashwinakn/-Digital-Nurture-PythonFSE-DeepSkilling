import { useState } from "react";

// Step 74: StudentProfile component with its own local state
// - Local state for name, email, semester
// - Form inputs bound to state via onChange handlers

function StudentProfile() {
  // Local state managed within this component (not lifted to App)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [semester, setSemester] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Profile saved:", { name, email, semester });
    alert(`Profile saved!\nName: ${name}\nEmail: ${email}\nSemester: ${semester}`);
  }

  return (
    <section className="profile-section">
      <h2>Student Profile</h2>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          {/* Step 74: Input bound to name state via onChange */}
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="semester">Semester</label>
          <input
            id="semester"
            type="number"
            placeholder="e.g. 4"
            min="1"
            max="8"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-enroll">
          Save Profile
        </button>
      </form>
    </section>
  );
}

export default StudentProfile;
