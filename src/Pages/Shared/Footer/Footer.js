import React from 'react';

const Footer = () => {
    const day=new Date();
    const year=day.getFullYear()
    return (
        <footer className="text-center">
            <p><span className="my-5">©️</span>copyright M e m o r y ,{year}<small> </small></p>
            
        </footer>
    );
};
 
export default Footer;