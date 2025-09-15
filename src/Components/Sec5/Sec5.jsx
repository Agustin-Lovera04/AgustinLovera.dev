import jwt from "../../assets/jwt.svg";
import webSocket from "../../assets/websocket.svg";
import "./Sec5_Style.css";
const Sec5 = () => {
  const skills = {
    Frontend: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "ReactJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "SASS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "WordPress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
    Backend: [
      {
        name: "NodeJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "ExpressJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Mocha",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg",
      },
      {
        name: "Swagger",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Handlebars",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original.svg",
      },
      {
        name: "WebSockets",
        icon: webSocket,
      },
      {
        name: "JWT",
        icon: jwt,
      },
      {
        name: "Passport",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/passport/passport-original.svg",
      },
    ],
    Learning: [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "TDD",
        icon: "https://img.icons8.com/ios-filled/50/test-passed.png",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  };
  return (
    <div className="Sec5" id="habilidades">
      <h1 className="text-light var-h1 text-center">Skills</h1>
      <div className="d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
          <div className="col-10 col-md-4">
            <div className="skills-block shadow skills-bg text-light">
              <h4 className="text-center">Frontend</h4>
              <div className="skills-list gap-2">
                {skills.Frontend.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-10 col-md-4">
            <div className="skills-block shadow skills-bg text-light">
              <h4 className="text-center">Backend</h4>
              <div className="skills-list gap-2">
                {skills.Backend.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="skills-block text-light">
            <h5 className="text-center">En progreso</h5>
            <div className="skills-list gap-2">
              {skills.Learning.map((skill, index) => (
                <div className="skill-item small-skill" key={index}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon small-icon"
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec5;
