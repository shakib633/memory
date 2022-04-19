
import React, { useRef } from "react";
import { Form, Toast } from "react-bootstrap";
import { useSendPasswordResetEmail,useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

import './Login.css'
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const location=useLocation();
    let from=location.state?.from?.pathname||"/"
    let errorElement;


    const[
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ]=useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if(user){
        navigate(from, {replace: true});
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    const submit=e=>{
        e.preventDefault();
        const email=emailRef.current.value
        const password=passwordRef.current.value

        signInWithEmailAndPassword(email,password);

    }
      const register=(e)=>{
             navigate("/register")
      }
      const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            Toast('Sent email');
        }
        else{
            Toast('please enter your email address');
        }
    }

  return (
   <div className="background">
       <p className="text-center mt-3 text-success mb-3 fw-bold fs-2">please login</p>
        <div className=" mt-3 container w-50 mx-auto">
     
      <Form onSubmit={submit}>
        <Form.Group className="" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button  className="border btn btn-primary shadow-md rounded p-1 fw-normal" variant="primary" type="submit">
          Sign In
        </button>
        <p className="fw-bold text-primary">  New User ?  <Link to="/register" className="text-danger text-decoration-none pe-auto fw-bold" onClick={register}>Sign Up !</Link></p>
        <SocialLogin></SocialLogin>
      </Form>
      
    </div>
   </div>
    
  );
};

export default Login;
