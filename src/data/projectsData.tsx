import { LogoType } from "components/logo-icon/logoIcon";

import RecyclopsImage from "assets/projects/recyclops/Recyclops.png";
import FootprintImage from "assets/projects/footprint/footprint.jpg";

const ProjectsData = [
  {
    name: "Recyclops",
    date: "July 2022",
    description: [
      "A Progressive Web App that aims to simplify recycling for Singaporeans.",
      "Empowered by machine learning, the user can scan any household object. Recyclops will inform them if it is safe to recycle, how to recycle it and whether any special instructions are needed. It also serves as an information dashboard of articles so users can access them easily to learn more."
    ],
    image: RecyclopsImage,
    bgColor: "#D9D9D9",
    techStack: [LogoType.TypeScript,  LogoType.Python, LogoType.React, LogoType.Ionic, LogoType.Redux, LogoType.TailwindCSS, LogoType.PyTorch],
    links: [
      { location: LogoType.Github, link: "https://github.com/Recyclops-LifeHack-2022-Singapore" },
      { location: LogoType.Figma, link: "https://www.figma.com/file/Von8ACBD5yA7R6gY5gBqIv/Recyclops?node-id=0%3A1" },
      { location: LogoType.DevPost, link: "https://devpost.com/software/recyclops-6lyh30" },
      { location: LogoType.View, link: "https://recyclops.netlify.app/" },
    ],
  },
  {
    name: "footprint",
    date: "December 2021",
    description: [
      "A web application to visualise the proportion of the Earth we have visited, our 'footprint' on the world.",
      "This shows you how much of the world you already covered by extracting all those 'footprints' you have clocked in your favourite exercise applications. (e.g NRC, Strava)",
      "Gives you the power to record where you have walked and explored on a day to basis. Colour the map with your 'footprints' as you explore the unknown.",
    ],
    image: FootprintImage,
    bgColor: "#404e5b",
    techStack: [LogoType.TypeScript, LogoType.React, LogoType.Python, LogoType.Ruby, LogoType.Rails, LogoType.PostgreSQL],
    links: [
      { location: LogoType.DevPost, link: "https://devpost.com/software/footprint-4ad3tz" },
    ]
  },
];

export default ProjectsData;