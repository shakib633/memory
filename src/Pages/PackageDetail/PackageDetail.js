import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetail = () => {
    const {packageId}=useParams();
    return (
        <div>
            <h2>baal {packageId}</h2>
        </div>
    );
};

export default PackageDetail;