
function Attendance({
  handleAttendanceSubmit,
  attendanceStudent,
  setAttendanceStudent,
  attendanceDate,
  setAttendanceDate,
  attendanceStatus,
  setAttendanceStatus
}) {
  return (
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
  );
}

export default Attendance;
