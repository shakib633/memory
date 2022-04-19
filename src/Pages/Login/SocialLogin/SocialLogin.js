import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import {  useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/social/gogle.png";
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
 const [
     signInWithGoogle,
      user, 
      loading,
       error,
    ] = useSignInWithGoogle(auth);
    const navigate=useNavigate()

 let errorElement;
 if(loading){
    return <Loading></Loading>
}
    if(error){
       errorElement = <p className='text-danger'>Error: {error?.message}</p>
        
    }
    if (user) {
        navigate('/home');
    }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="px-2 mt-2 fw-bold">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div className="">
        <button onClick={()=> signInWithGoogle()}
         className=" d-block mx-auto btn btn-primary">
          <img
            style={{ width: "30px", height: "30px" }}
            src={google}
            alt=""
          ></img>
          <span className="px-2 fw-normal">Google sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
