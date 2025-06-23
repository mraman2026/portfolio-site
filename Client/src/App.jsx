import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [flag, setflag] = useState(false);
  return (
    <>
      <div className="container text-center my-5">
        <button className="btn btn-primary mx-5" onClick={() => setflag(true)}>
          Register
        </button>
        <button className="btn btn-warning mx-5" onClick={() => setflag(false)}>
          Login
        </button>
      </div>
      <div>
        {flag ? <Register setflag={setflag} /> : <Login setflag={setflag} />}
      </div>
    </>
  );
};

export default App;
