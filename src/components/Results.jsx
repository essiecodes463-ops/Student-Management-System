
import { useState } from "react";

function Results() {
  const [studentName, setStudentName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [results, setResults] = useState([]);

  const saveResult = (event) => {
    event.preventDefault();

    if (studentName.trim() === "" || subject.trim() === "" || marks === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (Number(marks) < 0 || Number(marks) > 100) {
      alert("Marks must be between 0 and 100.");
      return;
    }

    const newResult = {
      id: Date.now(),
      studentName: studentName,
      subject: subject,
      marks: Number(marks),
    };

    setResults((previousResults) => [...previousResults, newResult]);

    setStudentName("");
    setSubject("");
    setMarks("");
  };

  const deleteResult = (id) => {
    setResults((previousResults) =>
      previousResults.filter((result) => result.id !== id)
    );
  };

  return (
    <div>
      <h2>Student Results</h2>

      <form onSubmit={saveResult}>
        <label>Student Name</label>
        <input
          type="text"
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
        />

        <label>Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />

        <label>Marks</label>
        <input
          type="number"
          min="0"
          max="100"
          value={marks}
          onChange={(event) => setMarks(event.target.value)}
        />

        <button type="submit">Save Result</button>
      </form>

      <h3>Results List</h3>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.studentName}</td>
              <td>{result.subject}</td>
              <td>{result.marks}</td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteResult(result.id)}
                >
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

export default Results;
