import React, { useState } from 'react'
import "./App.css";
const App = () => {
  const[StudentFormData , setStudentFormData] = useState({
    name:"",
    classroom:"",
    rollno:"",
    email:"",
    githublink:"",
    photo:"",
    gender:"",
    skills:[],
  });

  const [students,setStudents] = useState([]);
  const [photUrl,setPhotoUrl] =useState("");

  //handle change
  const handleChange =(e) =>{
    const {name,value}= e.target;
    setStudentFormData({
      ...StudentFormData,
      [name]:value,
    });
  };
 

  //handle skiils
  const handleSkillsChange =(e)=>{
    const {value} =e.target;
    setStudentFormData({
      ...StudentFormData,
      skills: StudentFormData.skills.includes(value)
        ? StudentFormData.skills.filter((skill) => skill !== value)
        : [...StudentFormData.skills, value],
    });
  };
 
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setStudentFormData({
        ...StudentFormData,
        photo: file,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    // Update photUrl state to show the file name
    setPhotoUrl(file ? file.name : "");
  };
  // form submit handeling data
  const handleSubmitdata = (e) =>{
    e.preventDefault();
    setStudents([...students,StudentFormData]);
    setStudentFormData({
      name:"",
      classroom:"",
      rollno:"",
      email:"",
      githublink:"",
      photo:"",
      gender:"",
      skills:[]
     });
     setPhotoUrl("");
  };

  const handleRemove =(index)=>{
    const updatedStudents=[...students];
    updatedStudents.splice(index,1);
    setStudents(updatedStudents);
  };

  return (
    <>
     <div className='head-title' ><h2 className='Heading'>Student Enrollment System</h2></div>
    <div className="form" style={{ background: '#34495e', minHeight: '100vh', padding: '20px' }}>
      <form style={{ background: '#f1f1f1', padding: '25px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box' }} onSubmit={handleSubmitdata}>
        {/* input for name */}
        <div className="from-group">
          <label>Name:</label>
          <input type="text" 
           name="name"
           value={StudentFormData.name} 
           onChange={handleChange}
           placeholder='Surname Name Middle' 
           required />
        </div>
        {/* input for classroom */}
        <div className="from-group">
          <label>Standard:</label>
          <input type="text"
            placeholder='6th'
            name="classroom"
            value={StudentFormData.classroom} 
            onChange={handleChange}
            required />
        </div>
        {/* input for rollno */}
         
        <div className="from-group">
          <label>Roll No:</label>
          <input type='number' 
            placeholder='01'
            name="rollno"
            value={StudentFormData.rollno} 
            onChange={handleChange}
            required />
        </div>
        {/* input for email*/}
        <div className="from-group">
          <label>Email id:</label>
          <input type="text"
            placeholder='shinchan@gmail.com'
            name="email"
            value={StudentFormData.email} 
            onChange={handleChange}
            required />
        </div>
        {/* input for github */}
        <div className="from-group">
          <label>GitHub Link:</label>
          <input type="text" 
            placeholder='https://gitgub/calculator' 
            name="githublink"
            value={StudentFormData.githublink} 
            onChange={handleChange}
            required />
        </div>
        {/* input for photo */}
          
        <div class="form-group">
        <label>Photo:</label>
        <div class="custom-file-upload">
        <input
              type="file"
              id="photo-input"
              name="photo"
              onChange={handlePhotoChange}
              accept="image/*"
              required
        />
        <label for="photo-input">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/> <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/> </svg>
      {photUrl ? photUrl : 'Choose file...'}
       
            </label>
          </div>
        </div>
          
   


        {/* gender */}
        <div className="from-group">
          <label>Gender:</label>
          <select name="gender" 
                  value={StudentFormData.gender}
                  onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* skills: */}
        
        <div className="skills-group">
          
          <div className='skill'>
            <label>
              <input 
               type="checkbox" 
               value="c"
               name='skills'
               checked={StudentFormData.skills.includes("c")}
               onChange={handleSkillsChange}/>C
            </label>
          </div>
          <div className='skill'>
            <label>
              <input 
               type="checkbox"  
               value="c++"
               name='skills'
               checked={StudentFormData.skills.includes("c++")}
               onChange={handleSkillsChange}/>C++
            </label>
          </div>
          <div className='skill'>
            <label>
              <input 
               type="checkbox"  
               value="java"
               name='skills'
               checked={StudentFormData.skills.includes("java")}
               onChange={handleSkillsChange}/>java
            </label>
          </div>
          <div className='skill'>
            <label>
              <input 
               type="checkbox"  
               value="python"
               name='skills'
               checked={StudentFormData.skills.includes("python")}
               onChange={handleSkillsChange}/>Python
            </label>
          </div>
          <div className='skill'>
            <label>
              <input 
               type="checkbox"  
               value="html"
               name='skills'
               checked={StudentFormData.skills.includes("html")}
               onChange={handleSkillsChange}/>HTML
            </label>
          </div>
          <div className='skill'>
            <label>
              <input 
               type="checkbox"  
               value="css"
               name='skills'
               checked={StudentFormData.skills.includes("css")}
               onChange={handleSkillsChange}/>CSS
            </label>
          </div>
          <div className='skill'>
            <label>
              <input 
               type="checkbox"  
               value="js"
               name='skills'
               checked={StudentFormData.skills.includes("js")}
               onChange={handleSkillsChange}/>JS
            </label>
          </div>
        </div>
        <div className="btn">
        <button type='submit' className='enrollbtn'>Enrolled</button>
        </div>
      </form>
    </div>

    {/* display info */}
    {students.length > 0 && (
        <div className="enrolled-students">
          <h2 className="enrolled-heading">Enrolled Students</h2>
          <table className="enrolled-table">
            <thead>
              <tr>
                <th>Photograph</th>
                <th>Name</th>
                <th>Standard</th>
                <th>RollNo</th>
                <th>GitHub Link</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Skills</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>
                    {student.photo && (
                      <img
                        src={URL.createObjectURL(student.photo)}
                        alt={student.name}
                        className="student-photo"
                      />
                    )}
                  </td>
                  <td>{student.name}</td>
                  <td>{student.classroom}</td>
                  <td>{student.rollno}</td>
                  <td>{student.githublink}</td>
                  <td>{student.gender}</td>
                  <td>{student.email}</td>
                  <td>{student.skills.join(",")}</td>
                  <td>
                    <button onClick={() => handleRemove(index)}>
                      Remove Student
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default App