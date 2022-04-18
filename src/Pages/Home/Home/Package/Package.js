import React from 'react';
import { useNavigate } from 'react-router-dom';
const Package = ({pack}) => {
    const {_id, name, balance, picture, type, time, edit ,print, about }=pack;
    const navigate=useNavigate();

     const packageDetail=id=>{
        navigate(`/package/${id}`)
     }
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
      <button onClick={() =>packageDetail(_id)} className="border shadow text-white bg-primary mx-5 mb-3 p-2 text-bold">Book Now</button>
 
      </div>
    );
};

export default Package;