
// import React, { useEffect, useState } from "react";
// import { useAuth } from "../../context/auth";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate,useParams} from "react-router-dom";

// export default function EmployeeUpdate() {
//   const [auth] = useAuth();
//   const [f_Id, setId] = useState("");
//   const [f_Name, setName] = useState("");
//   const [f_Email, setEmail] = useState("");
//   const [f_Mobile, setMobile] = useState("");
//   const [f_Designation, setDesignation] = useState("");
//   const [f_gender, setGender] = useState(""); // Updated state name to be more consistent
//   const [f_Course, setCourse] = useState("");
//   const [f_Image, setPhoto] = useState(null);
  
//   const navigate = useNavigate();
//   const params = useParams();
//   console.log('params =>',params);

//   useEffect(() =>{
//      loadEmployee()
//   },[])


//   const loadEmployee = async () => {
     
//     try{
//         const { data } = await axios.get(`/employee/${params.id}`);
//         console.log('data =>',data);

//     } catch (err){
//         console.log(err);

//     }
//   }

//   const handleCourseChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setCourse((prev) => [...prev, value]);
//     } else {
//       setCourse((prev) => prev.filter((course) => course !== value));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if gender is selected
//     if (!f_gender) {
//         toast.error("Gender is required.");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("f_Id", f_Id);
//     formData.append("f_Name", f_Name);
//     formData.append("f_Email", f_Email);
//     formData.append("f_Mobile", f_Mobile);
//     formData.append("f_Designation", f_Designation);
//     formData.append("f_gender", f_gender); 
//     formData.append("f_Course", f_Course);
//     if (f_Image) {
//         formData.append("f_Image", f_Image);
//     }

//     try {
//         const { data } = await axios.post("http://localhost:3000/api/employee", formData);
//         if (data?.error) {
//             toast.error(data.error);
//         } else {
//             toast.success(`"${data.employee.f_Name}" is created`);
//             navigate("/employee-list");
//         }
//         console.log("Data being sent:", { f_Id, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course, f_Image });
//     } catch (err) {
//         console.error('Error in handleSubmit:', err);
//         toast.error("Employee creation failed. Try again.");
//     }
// };


//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-9">
//           <div className="p-3 mt-2 mb-2 h4 bg-light">Create Employee</div>

//           {f_Image && (
//             <div className="text-center">
//               <img
//                 src={URL.createObjectURL(f_Image)}
//                 alt="employee photo"
//                 className="img img-responsive"
//                 height="200px"
//               />
//             </div>
//           )}

//           <div className="pt-2">
//             <label className="btn btn-outline-secondary col-12 mb-3">
//               {f_Image ? f_Image.name : "Upload photo"}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setPhoto(e.target.files[0])}
//                 hidden
//               />
//             </label>
//           </div>

//           <input
//             type="text"
//             className="form-control p-2 mb-3"
//             placeholder="Employee ID"
//             value={f_Id}
//             onChange={(e) => setId(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control p-2 mb-3"
//             placeholder="Write a name"
//             value={f_Name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             className="form-control p-2 mb-3"
//             placeholder="Email"
//             value={f_Email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control p-2 mb-3"
//             placeholder="Mobile Number"
//             value={f_Mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />
       

// <div className="mb-3">
//   <label className="form-label">Gender</label>
//   <div>
//     <input
//       type="radio"
//       id="gender-male"
//       name="gender"
//       value="Male"
//       checked={f_gender === "Male"}
//       onChange={(e) => setGender(e.target.value)}
//     />
//     <label htmlFor="gender-male" className="ms-2">Male</label>
//   </div>
//   <div>
//     <input
//       type="radio"
//       id="gender-female"
//       name="gender"
//       value="Female"
//       checked={f_gender === "Female"}
//       onChange={(e) => setGender(e.target.value)}
//     />
//     <label htmlFor="gender-female" className="ms-2">Female</label>
//   </div>
//   <div>
//     <input
//       type="radio"
//       id="gender-other"
//       name="gender"
//       value="Other"
//       checked={f_gender === "Other"}
//       onChange={(e) => setGender(e.target.value)}
//     />
//     <label htmlFor="gender-other" className="ms-2">Other</label>
//   </div>
// </div>

//           <select
//             className="form-control p-2 mb-3"
//             value={f_Designation}
//             onChange={(e) => setDesignation(e.target.value)}
//           >
//             <option value="">Select Designation</option>
//             <option value="HR">HR</option>
//             <option value="Manager">Manager</option>
//             <option value="Sales">Sales</option>
//           </select>
          
//           <div className="mb-3">
//             <label className="form-label">Course:</label>
//             <div>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="MCA"
//                   onChange={handleCourseChange}
//                   checked={f_Course.includes("MCA")}
//                 /> MCA
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="BCA"
//                   onChange={handleCourseChange}
//                   checked={f_Course.includes("BCA")}
//                 /> BCA
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="BSC"
//                   onChange={handleCourseChange}
//                   checked={f_Course.includes("BSC")}
//                 /> BSC
//               </label>
//             </div>
//           </div>
//           <button onClick={handleSubmit} className="btn btn-primary mb-5">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";

// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";

// export default function UpdateEmployee() {

//   const [f_Id, setId] = useState("");
//   const [f_Name, setName] = useState("");
//   const [f_Email, setEmail] = useState("");
//   const [f_Mobile, setMobile] = useState("");
//   const [f_Designation, setDesignation] = useState("");
//   const [f_gender, setGender] = useState("");
//   const [f_Course, setCourse] = useState([]);
//   const [f_Image, setPhoto] = useState(null);

//   const navigate = useNavigate();
//   const { id } = useParams(); // Fetching the employee id from params

//   useEffect(() => {
//     loadEmployee();
//   }, []);

//   const loadEmployee = async () => {
//     try {
//       const { data } = await axios.get(`/employee/${id}`);
//       setId(data.f_Id);
//       setName(data.f_Name);
//       setEmail(data.f_Email);
//       setMobile(data.f_Mobile);
//       setDesignation(data.f_Designation);
//       setGender(data.f_gender);
//       setCourse(data.f_Course);
//       // Optionally handle the employee image if needed
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleCourseChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setCourse((prev) => [...prev, value]);
//     } else {
//       setCourse((prev) => prev.filter((course) => course !== value));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!f_gender) {
//       toast.error("Gender is required.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("f_Id", f_Id);
//     formData.append("f_Name", f_Name);
//     formData.append("f_Email", f_Email);
//     formData.append("f_Mobile", f_Mobile);
//     formData.append("f_Designation", f_Designation);
//     formData.append("f_gender", f_gender);
//     formData.append("f_Course", f_Course);
//     if (f_Image) {
//       formData.append("f_Image", f_Image);
//     }

//     try {
//       const { data } = await axios.put(`http://localhost:3000/api/employee/${id}`, formData);
//       if (data?.error) {
//         toast.error(data.error);
//       } else {
//         toast.success(`"${data.employee.f_Name}" has been updated`);
//         navigate("/employee-list");
//       }
//     } catch (err) {
//       console.error("Error in handleSubmit:", err);
//       toast.error("Employee update failed. Try again.");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-9">
//           <div className="p-3 mt-2 mb-2 h4 bg-light">Update Employee</div>

//           {f_Image && (
//             <div className="text-center">
//               <img
//                 src={URL.createObjectURL(f_Image)}
//                 alt="employee photo"
//                 className="img img-responsive"
//                 height="200px"
//               />
//             </div>
//           )}

//           <div className="pt-2">
//             <label className="btn btn-outline-secondary col-12 mb-3">
//               {f_Image ? f_Image.name : "Upload photo"}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setPhoto(e.target.files[0])}
//                 hidden
//               />
//             </label>
//           </div>

//           <input
//             type="text"
//             className="form-control p-2 mb-3"
//             placeholder="Employee ID"
//             value={f_Id}
//             onChange={(e) => setId(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control p-2 mb-3"
//             placeholder="Name"
//             value={f_Name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             className="form-control p-2 mb-3"
//             placeholder="Email"
//             value={f_Email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="text"
//             className="form-control p-2 mb-3"
//             placeholder="Mobile"
//             value={f_Mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />

//           <div className="mb-3">
//             <label className="form-label">Gender</label>
//             <div>
//               <input
//                 type="radio"
//                 id="gender-male"
//                 name="gender"
//                 value="Male"
//                 checked={f_gender === "Male"}
//                 onChange={(e) => setGender(e.target.value)}
//               />
//               <label htmlFor="gender-male" className="ms-2">Male</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 id="gender-female"
//                 name="gender"
//                 value="Female"
//                 checked={f_gender === "Female"}
//                 onChange={(e) => setGender(e.target.value)}
//               />
//               <label htmlFor="gender-female" className="ms-2">Female</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 id="gender-other"
//                 name="gender"
//                 value="Other"
//                 checked={f_gender === "Other"}
//                 onChange={(e) => setGender(e.target.value)}
//               />
//               <label htmlFor="gender-other" className="ms-2">Other</label>
//             </div>
//           </div>

//           <select
//             className="form-control p-2 mb-3"
//             value={f_Designation}
//             onChange={(e) => setDesignation(e.target.value)}
//           >
//             <option value="">Select Designation</option>
//             <option value="HR">HR</option>
//             <option value="Manager">Manager</option>
//             <option value="Sales">Sales</option>
//           </select>

//           <div className="mb-3">
//             <label className="form-label">Course:</label>
//             <div>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="MCA"
//                   onChange={handleCourseChange}
//                   checked={f_Course.includes("MCA")}
//                 /> MCA
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="BCA"
//                   onChange={handleCourseChange}
//                   checked={f_Course.includes("BCA")}
//                 /> BCA
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="BSC"
//                   onChange={handleCourseChange}
//                   checked={f_Course.includes("BSC")}
//                 /> BSC
//               </label>
//             </div>
//           </div>
//           <button onClick={handleSubmit} className="btn btn-primary mb-5">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function EmployeeUpdate() {
  const [f_Id, setId] = useState("");
  const [f_Name, setName] = useState("");
  const [f_Email, setEmail] = useState("");
  const [f_Mobile, setMobile] = useState("");
  const [f_Designation, setDesignation] = useState("");
  const [f_gender, setGender] = useState("");
  const [f_Course, setCourse] = useState("");
  const [f_Image, setPhoto] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams(); // Fetching the employee id from params



useEffect(() => {
    loadEmployee();
  }, []);
  const loadEmployee = async () => {
    if (!id) {
      toast.error("Invalid employee ID.");
      return;
    }
  
    try {
      console.log("Fetching employee with ID:", id);
      const { data } = await axios.get(`http://localhost:3000/api/employee/${id}`);
      console.log("Employee data received:", data);
  
      if (data) {
        setId(data.f_Id);
        setName(data.f_Name);
        setEmail(data.f_Email);
        setMobile(data.f_Mobile);
        setDesignation(data.f_Designation);
        setGender(data.f_gender);
        setCourse(data.f_Course);
        console.log("Employee state updated");
      }
    } catch (err) {
      console.error("Failed to load employee:", err.response ? err.response.data : err.message);
      if (err.response && err.response.status === 404) {
        toast.error("Employee not found.");
      } else {
        toast.error("Failed to load employee data.");
      }
    }
  };
  



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!f_gender) {
      toast.error("Gender is required.");
      return;
    }

    const formData = new FormData();
    formData.append("f_Id", f_Id);
    formData.append("f_Name", f_Name);
    formData.append("f_Email", f_Email);
    formData.append("f_Mobile", f_Mobile);
    formData.append("f_Designation", f_Designation);
    formData.append("f_gender", f_gender);
    formData.append("f_Course", f_Course); 
    if (f_Image) {
      formData.append("f_Image", f_Image);
    }

    try {
      const { data } = await axios.put(`http://localhost:3000/api/employee/${id}`, formData);
      console.log("Response data:", data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`"${data.f_Name}" has been updated`);
        navigate("/employee-list");
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      toast.error("Employee update failed. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="p-3 mt-2 mb-2 h4 bg-light">Update Employee</div>

          {f_Image && (
            <div className="text-center">
              <img
                src={URL.createObjectURL(f_Image)}
                alt="employee photo"
                className="img img-responsive"
                height="200px"
              />
            </div>
          )}

          <div className="pt-2">
            <label className="btn btn-outline-secondary col-12 mb-3">
              {f_Image ? f_Image.name : "Upload photo"}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>

          <input
            type="text"
            className="form-control p-2 mb-3"
            placeholder="Employee ID"
            value={f_Id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            className="form-control p-2 mb-3"
            placeholder="Name"
            value={f_Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control p-2 mb-3"
            placeholder="Email"
            value={f_Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="form-control p-2 mb-3"
            placeholder="Mobile"
            value={f_Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <input
                type="radio"
                id="gender-male"
                name="gender"
                value="Male"
                checked={f_gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="gender-male" className="ms-2">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="gender-female"
                name="gender"
                value="Female"
                checked={f_gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="gender-female" className="ms-2">Female</label>
            </div>
            <div>
              <input
                type="radio"
                id="gender-other"
                name="gender"
                value="Other"
                checked={f_gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="gender-other" className="ms-2">Other</label>
            </div>
          </div>

          <select
            className="form-control p-2 mb-3"
            value={f_Designation}
            onChange={(e) => setDesignation(e.target.value)}
          >
            <option value="">Select Designation</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>

          <div className="mb-3">
            <label className="form-label">Course:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="MCA"
                  onChange={(e) => setCourse(e.target.value)}
                  checked={f_Course === "MCA"}
                /> MCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BCA"
                  onChange={(e) => setCourse(e.target.value)}
                  checked={f_Course === "BCA"}
                /> BCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BSC"
                  onChange={(e) => setCourse(e.target.value)}
                  checked={f_Course === "BSC"}
                /> BSC
              </label>
            </div>
          </div>
          <button onClick={handleSubmit} className="btn btn-primary mb-5">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
