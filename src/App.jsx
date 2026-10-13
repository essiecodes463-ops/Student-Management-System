import {useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [admission, setAdmission] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [guardian, setGuardian] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState("dashboard");

  const [className, setClassName] = useState("");
  const [classTeacher, setClassTeacher] = useState("");
  const [classes, setClasses] = useState([]);
  const [classEditId, setClassEditId] = useState(null);

  const [resultStudent, setResultStudent] = useState("");
  const [resultSubject, setResultSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [results, setResults] = useState([]);

  const [attendanceStudent, setAttendanceStudent] = useState("");
  const [attendanceDate, setAttendanceDate]=useState("");
  const [attendanceStatus, setAttendanceStatus]= useState("");
  const [attendance, setAttendance]= useState([]);

  const clearForm = () => {
    setName("");
    setAdmission("");
    setGender("");
    setDob("");
    setStudentGrade("");
    setGuardian("");
    setPhone("");
    setEditId(null);
  };

  const clearClassForm = () => {
    setClassName("");
    setClassTeacher("");
    setClassEditId(null);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const student = {
      id: editId ?? Date.now(),
      name,
      admission,
      gender,
      dob,
      studentGrade,
      guardian,
      phone,
    };

    if (editId === null) {
      setStudents((currentStudents) => [...currentStudents, student]);
    } else {
      setStudents((currentStudents) =>
        currentStudents.map((currentStudent) =>
          currentStudent.id === editId ? { ...student, id: currentStudent.id } : currentStudent
        )
      );
      setEditId(null);
    }

    clearForm();
  }

  const handleClassSubmit = (e) => {
    e.preventDefault();

    if (!className.trim() || !classTeacher.trim()) return;

    const classData = {
      id: classEditId ?? Date.now(),
      className: className.trim(),
      classTeacher: classTeacher.trim(),
    };

    if (classEditId === null) {
      setClasses((currentClasses) => [...currentClasses, classData]);
    } else {
      setClasses((currentClasses) =>
        currentClasses.map((classItem) =>
          classItem.id === classEditId ? { ...classItem, ...classData } : classItem
        )
      );
      setClassEditId(null);
    }

    clearClassForm();
  };

  const handleClassEdit = (id) => {
    const classToEdit = classes.find((classItem) => classItem.id === id);
    if (!classToEdit) return;

    setClassName(classToEdit.className);
    setClassTeacher(classToEdit.classTeacher);
    setClassEditId(id);
  };

  const handleClassDelete = (id) => {
    setClasses((currentClasses) =>
      currentClasses.filter((classItem) => classItem.id !== id)
    );

    if (classEditId === id) {
      clearClassForm();
    }
  };

  const handleResultSubmit = (e) => {
    e.preventDefault();
     const newResult ={
      id:Date.now(),
      student: resultStudent,
      subject: resultSubject,
      marks: marks,
     };

     setResults([...results, newResult]);

     setResultStudent("")
     setResultSubject("")
     setMarks("")
    };


  const handleEdit = (id) => {
    const student = students.find((student) => student.id === id);
    if (!student) return;

    setName(student.name);
    setAdmission(student.admission);
    setGender(student.gender);
    setDob(student.dob);
    setStudentGrade(student.studentGrade);
    setGuardian(student.guardian);
    setPhone(student.phone);

    setEditId(id);
  };

  const handleDelete = (id) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalStudents = students.length;

  const maleStudents = students.filter(
    (student) => student.gender === "Male"
  ).length;

  const femaleStudents = students.filter(
    (student) => student.gender === "Female"
  ).length;

  const handleAttendanceSubmit = (e) => {
    e.preventDefault();

    const newAttendance = {
      id: Date.now(),
      student: attendanceStudent,
      date: attendanceDate,
      status: attendanceStatus,
    };

    setAttendance((currentAttendance) => [...currentAttendance, newAttendance]);

    setAttendanceStudent("");
    setAttendanceDate("");
    setAttendanceStatus("");
  };

  return (
    <div>
      <nav className="navbar">
        <h2>SMS</h2>

        <div>
          <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
          <button onClick={() => setActivePage("students")}>Students</button>
          <button onClick={() => setActivePage("classes")}>Classes</button>
          <button onClick={() => setActivePage("results")}>Results</button>
          <button onClick={() => setActivePage("attendance")}>Attendance</button>
        </div>
      </nav>

      <p>Current page: {activePage}</p>

      {activePage === "dashboard" && (
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
      )}

      {activePage === "students" && (
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
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
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
      )}

      {activePage === "classes" && (
        <div>
          <h2>Classes Page</h2>

          <form onSubmit={handleClassSubmit}>
            <label>Class/Grade</label>
            <input
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />

            <label>Class Teacher</label>
            <input
              type="text"
              value={classTeacher}
              onChange={(e) => setClassTeacher(e.target.value)}
            />

            <button type="submit">Save Class</button>
            <button type="button" onClick={clearClassForm}>Clear</button>
          </form>

          <h3>Saved Classes</h3>
          <ul>
            {classes.map((classItem) => (
              <React.Fragment key={classItem.id}>
                <li>
                  {classItem.className} - {classItem.classTeacher}
                </li>
                <button onClick={() => handleEdit(classItem.id)}>Edit</button>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}

      {activePage === "results" && (
        <div>
          <h2>Results Page</h2>

          <form onSubmit={handleResultSubmit}>
            <label>Student Name</label>
            <input
              type="text"
              value={resultStudent}
              onChange={(e) => setResultStudent(e.target.value)}
            />

            <label>Subject</label>
            <input
              type="text"
              value={resultSubject}
              onChange={(e) => setResultSubject(e.target.value)}
            />

            <label>Marks</label>
            <input
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />

            <button type="submit">Save Result</button>
          </form>
          <h3>Saved Results</h3>

          <ul>
            {results.map((result) => (
              <li key={result.id}>
                {result.student} - {result.subject} - {result.marks} marks
              </li>
            ))}
          </ul>
        </div>
      )}

      {activePage === "attendance" && (
        <div>
          <h2>Attendance Page</h2>

          <form onSubmit={handleAttendanceSubmit}>
            <label>Student Name</label>
            <input
              type="text"
              value={attendanceStudent}
              onChange={(e) => setAttendanceStudent(e.target.value)}
            />

            <label>Date</label>
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
            />

            <label>Status</label>
            <select
              value={attendanceStatus}
              onChange={(e) => setAttendanceStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>

            <button type="submit">Save Attendance</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
