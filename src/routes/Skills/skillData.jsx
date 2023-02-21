// Importing images and assigning to a variable

import git from "../../images/github.png";
import react from "../../images/react.png";
import html from "../../images/html.png";
import bootstrap from "../../images/bootstrap.png";
import css from "../../images/css3.png";

import js from "../../images/javascript.png";
import mongodb from "../../images/mongodb.png";
import mysql from "../../images/mysql.png";
import netlify from "../../images/netlify.png";

// creating an array of objects of icon and title(Text) for skillset
const skillData = [
  { icon: html, text: "HTML" },
  { icon: css, text: "CSS" },
  { icon: js, text: "JS" },
  { icon: bootstrap, text: "Bootstrap" },
  { icon: react, text: "React" },

  { icon: mongodb, text: "Mongodb" },
  { icon: mysql, text: "MySQL" },
  { icon: git, text: "Github" },

  { icon: netlify, text: "Netlify" },
];

// creating an array of objects of icon and title(Text) for language certifications

export { skillData };
