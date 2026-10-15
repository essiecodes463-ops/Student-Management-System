
function Navbar({ activePage, setActivePage }) {
  return (
    <>
      <nav className="navbar">
        <h2>Student Management System</h2>

        <div>
          <button onClick={() => setActivePage("dashboard")}>
            Dashboard
          </button>

          <button onClick={() => setActivePage("students")}>
            Students
          </button>

          <button onClick={() => setActivePage("classes")}>
            Classes
          </button>

          <button onClick={() => setActivePage("results")}>
            Results
          </button>

          <button onClick={() => setActivePage("attendance")}>
            Attendance
          </button>
        </div>
      </nav>

      <p>Current page: {activePage}</p>
    </>
  );
}

export default Navbar;
