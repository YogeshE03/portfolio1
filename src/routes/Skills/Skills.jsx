import "./Skills.css";
import { skillData } from "./skillData";

export default function Skills() {
  return (
    <>
      {" "}
      <div className="skillsDiv">
        <div className="coding">
          <h2 className="skilltitle">My Skills</h2>
          <div className="skillContainer">
            {skillData.map((data) => (
              <div className="fullCard">
                <img
                  src={data.icon}
                  alt={data.text}
                  style={{ backgroundColor: "white" }}
                  className="codingIcon"
                />
                {data.text}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="languageDiv">
          <h2 className="skilltitle">Language Certifications</h2>
          <div className="languageContainer">
            {languageData.map((data) => (
              <div className="fullCard">
                <img
                  src={data.icon}
                  alt={data.text}
                  style={{ backgroundColor: "white" }}
                  className="languageIcon"
                />
                <br />
                {data.text}
                <br />
                Year : {data.year}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}