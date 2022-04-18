import React, { useRef } from "react";
import { Form } from "react-bootstrap";

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');

    const submit=e=>{
        e.preventDefault();
        const email=emailRef.current.value
        const password=passwordRef.current.value

        console.log(email, password);
    }
  return (
    <div className=" mt-3 container w-50 mx-auto">
      <p className="text-center mb-3 fw-bold fs-2">pleae login</p>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button  className="border shadow-md rounded p-1 fw-bold" variant="primary" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Login;
