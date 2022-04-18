import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const handleRegister=e=>{
      e.preventDefault();
  }
  return (
    <div>
      <p className="text-center mt-2 fs-3 fw-bold text-success">
        {" "}
        Register Here{" "}
      </p>
      <form onSubmit={handleRegister} className="w-50 text-center mx-auto">
        <input type="text" name="name" id="" placeholder="First Name"></input>
        <br></br>
        <br></br>
        <input type="text" name="name" id="" placeholder="last Name"></input>
        <br></br>
        <br></br>
        <input type="email" name="email" id="" placeholder="Your Email" required></input>
        <br></br>
        <br></br>
        <input type="password" name="name" id="" placeholder="Password" required></input>
        <br></br>
        <input
          className="mt-3 bg-success fw-bold border p-2 shadow-md rounded text-white"
          type="submit"
          value="Register"
        ></input>
      </form>
      <p className="fw-bold text-success text-center mt-2">  Already Have An Account !!<Link to="/login" className="text-primary text-decoration-none pe-auto fw-bold"
 onClick={login}
        >  Sign In 
        </Link>
      </p>
    </div>
  );
};

export default Register;
