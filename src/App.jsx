import "./style.css";

const App = () => {
  // Task 2: Variables (JSX Expressions)
  const name = "Faizan Khan";
  const profession = "Frontend Developer";
  const experience = 2;

  // Task 3: Skills Array
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  // Task 7: Multiple Profiles
  const developers = [
    {
      id: 1,
      name: "Faizan Khan",
      profession: "Frontend Developer",
      experience: 2,
      skills: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Ali Ahmed",
      profession: "Backend Developer",
      experience: 3,
      skills: ["Node.js", "Express", "MongoDB"],
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sara Khan",
      profession: "Full Stack Developer",
      experience: 4,
      skills: ["React", "Node.js", "MySQL"],
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      {/* Task 1: Profile Card Layout */}
      <h1 style={{ color: "blue", textAlign: "center" }}>
        Developer Profiles
      </h1>

      <div className="container">
        {developers.map((dev) => (
          <div key={dev.id} className="profile-card">
            
            {/* Image */}
            <img
              src={dev.image}
              alt="profile image"
              className="profile-image"
            />

            {/* Name */}
            <h2 className="profile-name">{dev.name}</h2>

            {/* Bio / Profession */}
            <p>{dev.profession}</p>

            {/* Experience */}
            <p>Experience: {dev.experience} years</p>

            {/* Skills */}
            <ul className="skills-list">
              {dev.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              className="contact-button"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Contact
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;