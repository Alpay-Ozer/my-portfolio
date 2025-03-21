import React from "react";
import "./App.css"; // Zorg ervoor dat je App.css importeert

const skills = [
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C#", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MariaDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Kotlin", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Swift", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
];

const App = () => {
  return (
    <div className="container">
      <img src="/cv_foto.webp" alt="Profielfoto" className="profile-picture" />

      <h1>Portfolio</h1>
      <p>Full Stack Developer</p>

      <p></p>
      <p></p>

      <h2>About me</h2>
      <p>
       Hallo! Mijn naam is Alpay Ozer, een gepassioneerde Full Stack Developer met ervaring in zowel frontend- als backendtechnologieën. Ik werk met HTML, CSS, JavaScript, React, Node.js en .NET om dynamische en schaalbare webapplicaties te bouwen. Daarnaast heb ik een sterke achtergrond in Java, C#, Kotlin en Swift, waardoor ik ook mobiele apps en complexe softwareoplossingen kan ontwikkelen.

        Voor databasebeheer en backendontwikkeling gebruik ik MySQL en MariaDB, en ik blijf altijd up-to-date met de nieuwste technologieën.

       In mijn vrije tijd vlieg ik graag met drones, waarbij ik mijn passie voor technologie en precisie combineer met prachtige luchtopnames. Daarnaast ben ik een enthousiaste skiër, wat me de perfecte balans geeft tussen avontuur en focus.

       Ik hou van uitdagingen en ben altijd op zoek naar nieuwe manieren om mijn vaardigheden verder te ontwikkelen. Heb je een interessant project of een vraag? Neem gerust contact op!
      </p>

      <p></p>
      <p></p>

      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>

      <p></p>
      <p></p>

      <section className="social">
        <h2>Connect with me</h2>
        <ul className="social-list">
          <li>
            <a href="https://github.com/Alpay-Ozer" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alpay-ozer-05044332b/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100009839226055&locale=nl_BE" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
                className="social-icon"
              />
            </a>
          </li>
        </ul>
      </section>
      
    </div>
  );
};

export default App;
