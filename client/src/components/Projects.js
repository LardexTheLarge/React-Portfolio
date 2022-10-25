import React from "react";

const proj = [
  {
    name: "Trip expense tracker",
    description:
      "An app that tracks a group of users going on a trip and what they spent on the trip, this was made with React and MongoDB",
    pic: "TripSplit.PNG",
    github: "https://github.com/LardexTheLarge/trip_split",
    link: "https://trip-split-atoz.herokuapp.com",
    technology: ["NodeJs", "MongoDB", "Mongoose", "Express", "React"],
  },
  {
    name: "F00000d",
    description: "Using an API to make a nutrition tracking app.",
    pic: "F00000d.png",
    github: "https://github.com/LardexTheLarge/project1-group5",
    link: "https://lardexthelarge.github.io/project1-group5/",
    technology: ["bootstrap", "edamam.com - API", "pexels.com - API", "JS"],
  },
  {
    name: "Five Guys",
    description:
      "An E commerce website to order menu items from other restaurants using mysql and sequelize.",
    pic: "five_guys.png",
    github: "https://github.com/LardexTheLarge/Five-Guys",
    link: "https://arcane-mesa-45752.herokuapp.com",
    technology: [
      "bcrypt",
      "stripe",
      "express",
      "handlebars",
      "mysql",
      "sequelize",
      "NodeJs",
    ],
  },
  {
    name: "Movie Library",
    description:
      "Movie library that stores movies in a database using C# and AirTable.",
    pic: "movie-lib.png",
    github: "https://github.com/LardexTheLarge/MovieLibrary",
    link: "https://62b3793eedd09f2807a8dda0--brilliant-begonia-22bb67.netlify.app",
    technology: ["C#", "blazor"],
  },
  {
    name: "Note Taker",
    description: "Take notes and have them be saved by a database.",
    pic: "Note-Taker.PNG",
    github: "https://github.com/LardexTheLarge/Note-Taker",
    link: "https://shielded-fortress-29538.herokuapp.com",
    technology: ["JavaScript", "NodeJS", "Express"],
  },
  {
    name: "Social Media Back End",
    description:
      "A back end for a social media website using MongoDB and mongoose.",
    pic: "Social-media-api.PNG",
    github: "https://github.com/LardexTheLarge/Social-Network-API",
    technology: ["NodeJS", "Mongoose", "MongoDB", "Express", "dayjs"],
  },
  {
    name: "Weather Forecast App",
    description:
      "Weather forecast using local storage and a weather API using .",
    pic: "weather-app.PNG",
    github: "https://github.com/LardexTheLarge/Weather-Dashboard",
    link: "https://lardexthelarge.github.io/Weather-Dashboard/",
    technology: ["JavaScript", "Weatherbit.io - API"],
  },
];

function Projects() {
  return (
    <>
      <h2 className="m-3 text-center">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 m-3 g-4">
        {proj.map((projects) => (
          <div className="col">
            <div className="card bg-dark text-light">
              <img
                src={`./React-Portfolio/${projects.pic}`}
                className="card-img-top"
                alt={projects.description}
              />

              <div className="card-body">
                <h5 className="card-title">{projects.name}</h5>
                <p className="card-text">{projects.description}</p>
                <ul className="list-group list-group-flush rounded my-2 ">
                  {projects.technology.map((tech) => (
                    <li className="list-group-item bg-dark text-light">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={projects.github}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
                {projects.link ? (
                  <a
                    href={projects.link}
                    target="_blank"
                    className="btn btn-primary ms-1"
                    rel="noreferrer"
                  >
                    Web Page
                  </a>
                ) : (
                  <a></a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
