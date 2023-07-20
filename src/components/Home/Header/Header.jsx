import React from "react";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";

//library imports
import Typewriter from 'typewriter-effect'

//images imports
import HeroImg from '../../../assets/images/profile2.svg'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <Navbar />
          
          <div className="hero-container">
            <div className="desc">
              <h1 className="title">
                I'm <br /> 
                <Typewriter 
                  onInit={(typewriter)=>{
                    typewriter.typeString("TARUN SHARMA").pauseFor(1000).deleteAll().typeString("A DEVELOPER").pauseFor(1000).start()
                  }}
                  options={{
                    autoStart:true,
                    loop:true,
                  }}
                />
              </h1>
              <p>I love to develop more solid and scalable products with great user experience.</p>
              <button className="btn cv-btn">DOWNLOAD CV</button>
            </div>
            <div className="img"><img src={HeroImg} alt="" /></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
