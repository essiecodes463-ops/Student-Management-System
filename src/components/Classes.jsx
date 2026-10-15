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
  handleClassDelete
}) {
  return (
    <div>
      <h2>Manage Classes</h2>

      <form onSubmit={handleClassSubmit}>
        <label>Class Name</label>
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

        <button type="submit">
          {editClassId === null ? "Save Class" : "Update Class"}
        </button>

        <button type="button" onClick={clearClassForm}>
          Clear Form
        </button>
      </form>

      <h2>Class List</h2>

      <table>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Class Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td>{classItem.className}</td>
              <td>{classItem.classTeacher}</td>
              <td>
                <button onClick={() => handleClassEdit(classItem.id)}>
                  Edit
                </button>
                <button onClick={() => handleClassDelete(classItem.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classes;