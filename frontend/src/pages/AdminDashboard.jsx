import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/AdminDashboard.css";

function AdminDashboard() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    fetchStudents();

  }, []);

  const fetchStudents = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8080/students"
        );

      setStudents(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="dashboard-container">

      <h1>
        Student Applications Dashboard
      </h1>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>School Name</th>
            <th>Competition</th>

          </tr>

        </thead>

        <tbody>

          {
            students.map((student) => (

              <tr key={student.id}>

                <td>{student.id}</td>

                <td>
                  {student.studentName}
                </td>

                <td>
                  {student.email}
                </td>

                <td>
                  {student.phone}
                </td>

                <td>
                  {student.schoolName}
                </td>

                <td>
                  {student.competitionCategory}
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );

}

export default AdminDashboard;