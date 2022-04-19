import React from 'react';

const About = () => {
    return (

      <div>

          <p className="text-center fw-bold text-success mt-">About shakib</p>
            <div className="mx-3 mt-5 d-flex justify-content-between" id="about">
            <div className="mx-auto">
      <p className="mr-2 px-2">Hello I Am Shakib . I am a professional Weeding Photographer . when I was 13 i started Photography. And then I did some professional photograph course and gain my editing Skill. Now I have a Photography Studio. And work As A professional photographer Since 2015. </p>
            </div>
            
            <div className="m-2"> 
            <img style={{height: '400px', width: '400px'}} src="https://fixthephoto.com/blog/UserFiles/Image/what%20should%20a%20photographer%20wear%20to%20shoot%20a%20wedding.jpg" alt=''></img>
            </div>
        </div>
      </div>
    );
};

export default About;