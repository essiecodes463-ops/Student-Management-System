
function Students({
  handleSubmit,
  name,
  setName,
  admission,
  setAdmission,
  gender,
  setGender,
  dob,
  setDob,
  studentGrade,
  setStudentGrade,
  classes,
  guardian,
  setGuardian,
  phone,
  setPhone,
  editId,
  clearForm,
  search,
  setSearch,
  filteredStudents,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="students-page">
      <h2>Student Management</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="student-name">Full Name</label>
          <input
            id="student-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="admission">Admission Number</label>
          <input
            id="admission"
            type="text"
            value={admission}
            onChange={(e) => setAdmission(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="grade">Grade / Class</label>
          <select
            id="grade"
            value={studentGrade}
            onChange={(e) => setStudentGrade(e.target.value)}
          >
            <option value="">Select Grade</option>
            {classes.map((classItem) => (
              <option
                key={classItem.id}
                value={classItem.className}
              >
                {classItem.className}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guardian">Parent / Guardian</label>
          <input
            id="guardian"
            type="text"
            value={guardian}
            onChange={(e) => setGuardian(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="phone">Parent / Guardian Phone</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit">
          {editId === null ? "Save Student" : "Update Student"}
        </button>

        <button type="button" onClick={clearForm}>
          Clear Form
        </button>
      </form>

      <hr />

      <h3>Student Records</h3>

      <div>
        <label htmlFor="student-search">Search by name</label>
        <input
          id="student-search"
          type="text"
          placeholder="Enter student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Admission No.</th>
              <th>Gender</th>
              <th>Grade</th>
              <th>Date of Birth</th>
              <th>Parent / Guardian</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="8">No students found.</td>
              </tr>
            ) : (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.admission}</td>
                  <td>{student.gender}</td>
                  <td>{student.studentGrade}</td>
                  <td>{student.dob}</td>
                  <td>{student.guardian}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleEdit(student.id)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
