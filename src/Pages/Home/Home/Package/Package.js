import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Package = ({pack}) => {
    const { name, balance, picture, type, time, edit ,print, about }=pack;
    return (
        <div className="border-none shadow-lg rounded-6">
      <h4 className="text-center mt-2 fw-bold mx-5">{name}</h4>
      <p className="text-center text-primary">{type}</p>
      <img className="mx-3" src={picture} alt='/'></img>
      <p className="fs-2 mx-5 fw-bold text-danger">{balance}</p>
      <p className="mx-5"><small className='dot'>⚫</small>{time}</p>
      <p className="mx-5"><small className='dot'>⚫</small>{edit}</p>
      <p className="mx-5"><small className='dot '>⚫</small>{print}</p>
      <p className="mx-5"><small className='dot'>⚫</small>{about}</p>
      <Link to='/checkout' ><Button className='mx-5 mb-2 fw-bold rounded'>Book Now</Button> </Link>
 
      </div>
    );
};

export default Package;