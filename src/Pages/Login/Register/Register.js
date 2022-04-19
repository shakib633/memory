import React,{ useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
        
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  }
  if(loading || updating){
    return <Loading></Loading>
}

  if(user){
      navigate('/home')
  }
  const register=async (event)=>{
      event.preventDefault();
      const name = event.target.name.value;
      const email= event.target.email.value;
      const password= event.target.password.value;
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });

      navigate('/home');
  }
  return (
    <div>
      <p className="text-center mt-2 fs-3 fw-bold text-success "> Register Here</p>
      <form  className="text-center"onSubmit={register}>
        
        <input className="mx-5" type="text" name="name" id="" placeholder="first Name"></input>
        <input type="text" name="name" id="" placeholder="last Name"></input>
        <br></br>
        <br></br>
        <input type="email" name="email" id="" placeholder="Your Email" required></input>
        <br></br>
        <br></br>
        <input type="password" name="password" id="" placeholder="Password" required></input>
        <br></br>
        <input
          className="mt-3 bg-success fw-bold border p-2 shadow-md rounded text-white"
          type="submit"
          value="Register"
        ></input>
      </form>
      <p className="fw-bold text-success text-center mt-2">  Already Have An Account !!<Link to="/login" className="text-primary text-decoration-none pe-auto fw-bold"
 onClick={navigateLogin}
        >  Sign In 
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
