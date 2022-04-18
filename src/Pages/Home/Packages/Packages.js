import React, { useEffect, useState } from 'react';
import Package from '../Home/Package/Package';
import './Packages.css'

const Packages = () => {
    const [Packages, setPackages]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])

    return (
        <div id="packages" > 
            <h4 className="text-primary mb-5 fw-bold fs-2 text-center mt-5">Our packages</h4>
           <div className="container"> 
           {
                Packages.map(pack=><Package key={pack._id} pack={pack}>

                </Package>)

            }
           </div>
        </div>
    );
};

export default Packages;