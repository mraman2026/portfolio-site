import React, { useState } from "react";
import axios from "axios";

const Login = ({ setflag }) => {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const register = async ( email, password) => {
    const api = await axios.post(
      "http://localhost:8000/api/login",
      {
        
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log("form has been submited ", api.data);
    alert(api.data.message+" "+api.data.name);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    register(email, password);

    setEmail("");
    setpassword("");

    // setflag();

    // console.log("your form has been sumbited ...", name, email, password);
  };

  return (
    <div
      className="container my-5 p-5"
      style={{ width: "800px", border: "2px solid blue", borderRadius: "10px" }}
    >
      <h1 className="text-center">Login Form</h1>
      <form onSubmit={onSubmitHandler}>
       
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
