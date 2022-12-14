import React from "react";

const style = {
  object: {
    height: "700px",
  },
};

function Resume() {
  return (
    <div className="mt-3 d-flex flex-column min-vh-100">
      <h2 className=" text-center">Resume</h2>
      <div className="container">
        <ul className="text-center list-group">
          <a
            className="list-group-item bg-dark text-light list-group-item-action"
            href="Resume for Gabriel Vasquez.pdf"
            download
          >
            Download Resume Here
          </a>
          <object
            className="list-group-item bg-dark"
            style={style.object}
            data="./React-Portfolio/Resume for Gabriel Vasquez.pdf"
          ></object>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
