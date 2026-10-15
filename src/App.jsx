import {useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard.jsx";
import Students from "./components/Students.jsx";
import Classes from "./components/Classes.jsx";
import Attendance from "./components/Attendance.jsx";
import Results from "./components/Results.jsx";
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
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {activePage === "dashboard" && (
  <Dashboard
    totalStudents={totalStudents}
    maleStudents={maleStudents}
    femaleStudents={femaleStudents}
  />
)}

      
{activePage === "students" && (
  <Students
    handleSubmit={handleSubmit}
    name={name}
    setName={setName}
    admission={admission}
    setAdmission={setAdmission}
    gender={gender}
    setGender={setGender}
    dob={dob}
    setDob={setDob}
    studentGrade={studentGrade}
    setStudentGrade={setStudentGrade}
    classes={classes}
    guardian={guardian}
    setGuardian={setGuardian}
    phone={phone}
    setPhone={setPhone}
    editId={editId}
    clearForm={clearForm}
    search={search}
    setSearch={setSearch}
    filteredStudents={filteredStudents}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />
)}


{activePage === "classes" && (
  <Classes
    className={className}
    setClassName={setClassName}
    classTeacher={classTeacher}
    setClassTeacher={setClassTeacher}
    handleClassSubmit={handleClassSubmit}
    clearClassForm={clearClassForm}
    editClassId={editClassId}
    classes={classes}
    handleClassEdit={handleClassEdit}
    handleClassDelete={handleClassDelete}
  />
)}


      
{activePage === "attendance" && (
  <Attendance
    handleAttendanceSubmit={handleAttendanceSubmit}
    attendanceStudent={attendanceStudent}
    setAttendanceStudent={setAttendanceStudent}
    attendanceDate={attendanceDate}
    setAttendanceDate={setAttendanceDate}
    attendanceStatus={attendanceStatus}
    setAttendanceStatus={setAttendanceStatus}
  />
)}

{activePage === "results" && <Results />}


    </div>
  );
}

export default App;
