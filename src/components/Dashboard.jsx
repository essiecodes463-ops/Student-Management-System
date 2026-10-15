
function Dashboard({ totalStudents, maleStudents, femaleStudents }) {
  return (
    <div>
      <h1>Student Management System</h1>
      <h2>Dashboard</h2>

      <div className="dashboard">
        <div className="card">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>

        <div className="card">
          <h3>Male Students</h3>
          <p>{maleStudents}</p>
        </div>

        <div className="card">
          <h3>Female Students</h3>
          <p>{femaleStudents}</p>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
