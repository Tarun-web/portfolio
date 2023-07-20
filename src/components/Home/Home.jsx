import React from "react";
import Header from "./Header/Header";
import Project from "../Project/Project";

// css
import "./Home.scss";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      {/* HEADER SECTION COMPRISING OF NAVBAR AS WELL AS HERO  */}
      <Header />

      {/* SECTION 1 about projects as well as me*/}
      <div className="container">
        <div className="project-container">
          <div className="left">
            <Project
              title="I build & develop stuff related to web"
              desc="Freelancing projects, experimentals and the learning ones as well!"
              btn="MY PROJECTS &rarr;"
            />
          </div>
          <div className="center"></div>
          <div className="right">
            <Project
              title="I cook and edit pics sometimes!"
              desc="Wanna know something like that about me?"
              btn="ABOUT ME &rarr;"
            />
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div className="contact-container">
        <Contact />
      </div>

      {/* FOOTER SECTION */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
