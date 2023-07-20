import React from "react";
import "./Project.scss";

const Project = ({ title, desc, btn }) => {
  return (
    <>
      <div className="project-wrapper">
        <h2 className="title">{title}</h2>
        <p className="desc">{desc}</p>
        <button className="btn">{btn}</button>
      </div>
    </>
  );
};

export default Project;
