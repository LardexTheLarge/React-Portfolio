import React from "react";

function Main() {
  return (
    <div className="container d-flex flex-column min-vh-100">
      <h2 className="m-3 text-center">About Me</h2>
      <div className="bg-dark text-light m-3 rounded">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./React-Portfolio/logo192.png"
              className="m-3 rounded"
              alt="profile pic"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="m-3">
                My name is Gabriel Vasquez, I am a Junior developer that has
                lived in Colorado since the beginning of my life, I would never
                leave here because this place has shaped me into the person I am
                today. I graduated from William Smith High School and Pickens
                Technical College May, 2021. From there I worked as a Lathe/Mill
                Machinist at a company called <b>Dynetics: A Leidos Company</b>.
                I worked there as an intern from August 2021 to November 2021, I
                left there because I knew I could find work that allowed my to
                explore more than what I was doing at the time. My work will
                show how I have improved with the various technologies that the
                boot camp has taught me.
              </p>
            </div>
          </div>
        </div>
        <div class="card m-3 bg-secondary bg-gradient">
          <h5 class="card-header">Skills & Tech</h5>
          <div class="card-body">
            <h5 class="card-title">Front-end</h5>
            <ul class="list-group list-group-flush rounded">
              <li class="list-group-item bg-dark text-light">JavaScript</li>
              <li class="list-group-item bg-dark text-light">HTML</li>
              <li class="list-group-item bg-dark text-light">CSS</li>
              <li class="list-group-item bg-dark text-light">HandleBars</li>
              <li class="list-group-item bg-dark text-light">BootStrap</li>
              <li class="list-group-item bg-dark text-light">React</li>
            </ul>
            <h5 class="card-title my-2">Back-end</h5>
            <ul class="list-group list-group-flush rounded">
              <li class="list-group-item bg-dark text-light">MongoDB</li>
              <li class="list-group-item bg-dark text-light">Mongoose</li>
              <li class="list-group-item bg-dark text-light">ExpressJS</li>
              <li class="list-group-item bg-dark text-light">MySQL</li>
              <li class="list-group-item bg-dark text-light">Sequelize</li>
              <li class="list-group-item bg-dark text-light">NodeJS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
