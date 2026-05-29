import { useState } from "react";
import axios from "axios";
import "../styles/StudentForm.css";

function StudentForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    schoolName: "",
    competitionCategory: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const response = await axios.post(
      "http://localhost:8080/students",
      formData
    );

    console.log(response.data);

    alert("Application Submitted Successfully");

    setFormData({
      studentName: "",
      email: "",
      phone: "",
      schoolName: "",
      competitionCategory: "",
    });

  } catch (error) {

    console.error(error);

    alert("Error submitting form");

  }
};



  return (
    <div className="container">
      <div className="card">

        <h1>Student Application Form </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            onChange={handleChange}
          />

          <select
            name="competitionCategory"
            onChange={handleChange}
          >
            <option>Select Competition</option>
            <option>Drawing</option>
            <option>Dance</option>
            <option>Speech</option>
          </select>

          <button type="submit">
            Submit Application
          </button>

        </form>

      </div>
    </div>
  );
}

export default StudentForm;