
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
  handleDelete
}) {
  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Admission Number</label>
        <input
          type="text"
          value={admission}
          onChange={(e) => setAdmission(e.target.value)}
        />

        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <label>Grade</label>
        <select
          value={studentGrade}
          onChange={(e) => setStudentGrade(e.target.value)}
        >
          <option value="">Select Grade</option>
          {classes.map((classItem) => (
            <option key={classItem.id} value={classItem.className}>
              {classItem.className}
            </option>
          ))}
        </select>

        <label>Parent/Guardian</label>
        <input
          type="text"
          value={guardian}
          onChange={(e) => setGuardian(e.target.value)}
        />

        <label>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">
          {editId === null ? "Save Student" : "Update Student"}
        </button>

        <button type="button" onClick={clearForm}>
          Clear Form
        </button>
      </form>

      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Search Student..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Admission No.</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Dob</th>
            <th>Guardian</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.admission}</td>
              <td>{student.gender}</td>
              <td>{student.studentGrade}</td>
              <td>{student.dob}</td>
              <td>{student.guardian}</td>
              <td>{student.phone}</td>
              <td>
                <button onClick={() => handleEdit(student.id)}>Edit</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
