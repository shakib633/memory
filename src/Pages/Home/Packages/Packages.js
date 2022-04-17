import React, { useEffect, useState } from 'react';
import Package from '../Home/Package/Package';

const Packages = () => {
    const [Packages, setPackages]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])

    return (
        <div>
            <h2>services:{Packages.length}</h2>
            {
                Packages.map(pack=><Package key={pack.id} pack={pack}>

                </Package>)

            }
        </div>
    );
};

export default Packages;