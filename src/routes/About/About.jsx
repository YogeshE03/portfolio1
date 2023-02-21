import React from "react";
import "./About.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function About() {
  const interestData = [
    {
      img: <i className="fa-solid fa-mobile-screen-button"></i>,
      text: "Smartphones & Tech Gadgets",
    },
    {
      img: <i className="fa-solid fa-headphones-simple "></i>,
      text: "Listening Music",
    },
    {
      img: <i className="fa-solid fa-gamepad "></i>,
      text: "Casual Mobile Gaming",
    },
  ];
  return (
    <div className="about">
      <div classname="interestHeading">
        <h2>About Me</h2>
      </div>
      <div className="aboutSection">
        <p>
          Full Stack Developer. <br />I have the desire
          to learn new things and experiment with it.
          <br />
          As a problem solver who loves facing challenges in my work, <br />
          I'm excited to be at the deployment phase of my career as a web
          developer.
        </p>
      </div>

      <div classname="interestHeading">
        <h2>Interests</h2>
      </div>
      <div className="interest">
        {interestData.map((data) => (
          <Card className="cardview">
            {data.img}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <p>{data.text}</p>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}