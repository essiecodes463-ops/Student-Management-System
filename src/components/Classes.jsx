
function Classes({
  className,
  setClassName,
  classTeacher,
  setClassTeacher,
  handleClassSubmit,
  clearClassForm,
  editClassId,
  classes,
  handleClassEdit,
  handleClassDelete,
}) {
  return (
    <div className="classes-page">
      <h2>Class Management</h2>

      <form onSubmit={handleClassSubmit}>
        <div>
          <label htmlFor="class-name">Class / Grade Name</label>
          <input
            id="class-name"
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="e.g. Grade 5"
            required
          />
        </div>

        <div>
          <label htmlFor="class-teacher">Class Teacher</label>
          <input
            id="class-teacher"
            type="text"
            value={classTeacher}
            onChange={(e) => setClassTeacher(e.target.value)}
            placeholder="Enter teacher's name"
            required
          />
        </div>

        <button type="submit">
          {editClassId === null ? "Save Class" : "Update Class"}
        </button>

        <button type="button" onClick={clearClassForm}>
          Clear Form
        </button>
      </form>

      <hr />

      <h3>Registered Classes</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Class / Grade</th>
              <th>Class Teacher</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {classes.length === 0 ? (
              <tr>
                <td colSpan="3">No classes registered yet.</td>
              </tr>
            ) : (
              classes.map((classItem) => (
                <tr key={classItem.id}>
                  <td>{classItem.className}</td>
                  <td>{classItem.classTeacher}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleClassEdit(classItem.id)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleClassDelete(classItem.id)}
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

export default Classes;
