import React from "react";
import { useState } from "react";

export default function FormFunctional() {
  const [input, setInput] = useState({});
  const [qualification, setQualification] = useState([]);
  const submitData = (i) => {
    i.preventDefault();
    console.log("Name : " + input.name);
    console.log("Gender : " + input.gender);
    console.log("Qualification : " + input.qualification);
    console.log("Email : " + input.email);
    console.log("Password : " + input.password);
    console.log("Country : " + input.country);
    console.log("Address : " + input.address);
  };
  const getQualification = (e) => {
    qualification.push(e.target.value);
    setQualification(qualification);
    console.log("Added " + input.qualification);
  };
  const setData = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInput((i) => ({ ...i, [name]: value }));
  
  };
  return (
    <div>
      <h2>
        <u> Functional-REGISTRATION FORM</u>
      </h2>
      <form name="Form" onSubmit={submitData}>
        <label htmlFor="">
          <b>Name : </b>
        </label>
        <input
          type="text"
          name="Uname"
          value={input.name}
          onChange={setData}
          placeholder="Enter Your Name"
          required=""
        />
        <br />
        <br />
        <label htmlFor="">
          <b>Gender : </b>
        </label>
        <input
          type="radio"
          name="Gender"
          value="Male"
          onChange={setData}
          defaultChecked=""
        />
        Male
        <input type="radio" name="Gender" value="Female" onChange={setData} />
        Female
        <br />
        <br />
        <label>Qualification : </label>
        <input type="checkbox" name="qualification" value="10th" onChange={getQualification}/>10th
        <input type="checkbox" name="qualification" value="12th" onChange={getQualification}/>12th
        <input type="checkbox" name="qualification" value="BCA" onChange={getQualification}/>BCA
        <input type="checkbox" name="qualification" value="MCA" onChange={getQualification}/>MCA
        <br/><br/>
        <label htmlFor="">
          <b>Email : </b>
        </label>
        <input
          type="text"
          name="email"
          onChange={setData}
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <label htmlFor="">
          <b>Password : </b>
        </label>
        <input
          type="password"
          name="Pwd"
          onChange={setData}
          placeholder="Enter Your Password"
        />
        <br />
        <br />
        <label htmlFor="">
          <b>Address : </b>
        </label>
        <textarea
          rows={3}
          cols={40}
          name="Address"
          onChange={setData}
          defaultValue={""}
        />
        <br />
        <br />
        <label htmlFor="">
          <b>Country : </b>
        </label>
        <select name="Country" onChange={setData}>
          <option>-- Select Country --</option>
          <option value="india" selected="">
            INDIA
          </option>
          <option value="uk">UK</option>
          <option value="usa">USA</option>
        </select>
        <br />
        <br />
        <input
          type="submit"
          className="btn btn-outline-secondary m-4"
          name="register"
          align="center"
        />
        <input
          type="reset"
          className="btn btn-outline-secondary m-4"
          name="reset"
        />
      </form>
    </div>
  );
}
