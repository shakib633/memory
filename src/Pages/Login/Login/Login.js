
import React, { useRef } from "react";
import { Button, Form, ToastContainer } from "react-bootstrap";
import { useSendPasswordResetEmail,useSignInWithEmailAndPassword,useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import './Login.css'
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const[sendPasswordResetEmail,sending]=useSendPasswordResetEmail(auth);
    
    const handleLogin=e=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }


    const[
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ]=useSignInWithEmailAndPassword(auth);
     const navigate=useNavigate();
     const location=useLocation();
     let from =location.state?.from?.pathname|| "/";
     if(user){
        navigate(from, {replace: true});
     }
     let loginError;
    if (error) {
        loginError = <p className='text-danger'>{"Error: enter a valid mail"}</p>
    }

    const[signInWithGoogle, googleUser, googleLoading, googleError]=useSignInWithGoogle(auth);
    let errorElement='';
    if(googleError){
        errorElement=<p>{'Error:closed by user'}</p>
    }

    if(googleUser){
        navigate(from, {replace: true});
     }

     if(googleLoading||loading){
         return <Loading></Loading>
     }

     const resetPassword=async()=>{
         const email=emailRef.current.value;
         if(email){
             await sendPasswordResetEmail(email);
            return (' sent email')
         }
         else{
            return ('entere your mail')
         }
     }

     if (sending){
         return <Loading></Loading>
     }
  return (
   <div className="background">
       <p className="text-center mt-3 text-success mb-3 fw-bold fs-2">please login</p>
        <div className=" mt-3 container w-50 mx-auto">
     
      <Form onSubmit={handleLogin}>
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
        {loginError}
        <Button  className="border btn btn-primary shadow-md rounded p-1 fw-normal" variant="primary" type="submit">
          Sign In
        </Button>
        {errorElement}
        <p> Have No Account ? <Link to="/register"> Resister</Link></p>
      <p>Forget Your Password ? <Button variant='link' onClick={resetPassword}>Reset Password</Button> </p>
      <SocialLogin></SocialLogin>
      </Form>
      

      </div>
    </div>

    
  );
};

export default Login;
