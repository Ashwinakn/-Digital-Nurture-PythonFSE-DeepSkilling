import { useState } from "react";

function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [semester, setSemester] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="page">
      <h2 className="page-title">Student Profile</h2>

      {saved && (
        <div className="success-message">
          ✓ Profile saved successfully!
        </div>
      )}

      <div className="profile-card">
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester (1-8)</label>
            <input
              id="semester"
              type="number"
              placeholder="e.g. 4"
              min="1"
              max="8"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-enroll">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
