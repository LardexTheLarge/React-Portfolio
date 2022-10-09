import React from "react";

const style = {
  object: {
    height: "700px",
  },
};

function Resume() {
  return (
    <div className="mt-3 d-flex flex-column min-vh-100">
      <div className="container">
        <ul class="text-center list-group">
          <a
            className="list-group-item bg-dark text-light list-group-item-action"
            href="Resume.pdf"
            download
          >
            Download Resume Here
          </a>
          <object
            className="list-group-item bg-dark"
            style={style.object}
            data="Resume.pdf"
          ></object>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
