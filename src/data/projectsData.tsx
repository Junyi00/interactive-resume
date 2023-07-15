import { LogoType } from "components/logo-icon/logoIcon";
import { ProjectType } from "types/projectType";

import RecyclopsImage from "assets/projects/recyclops/Recyclops.png";
import FootprintImage from "assets/projects/footprint/footprint.jpg";
import EcoQuestImage from "assets/projects/ecoquest/ecoquest.png";
import SourceAcademyImage from "assets/projects/source-academy/source_academy.jpg";
import SightWordsImage from "assets/projects/sight-words/sight_words.png";

const ProjectsData: ProjectType[] = [
  {
    name: "Sight Words - Google Developer Student Club",
    shortName: "Sight Words",
    date: "August 2022 - Current",
    description: [
      "Creating an online learning platform for Dyslexic Association of Singapore that is engaging and customised to dyslexic students’ learning needs by using a multisensory approach", 
      "Developing a progressive web application using React, NestJS and Recoil",
    ],
    image: SightWordsImage,
    bgColor: "#333333",
    techStack: [LogoType.TypeScript, LogoType.React, LogoType.Recoil, LogoType.Storybook],
  },
  {
    name: "Source Academy",
    date: "January 2023 - May 2023",
    description: [
      "Designed and implemented a notification system while ensuring that extendibility across various notification mediums", 
      "Revamped background job processing for fault-tolerant execution, job tracking and monitoring",
    ],
    image: SourceAcademyImage,
    bgColor: "#1E293B",
    techStack: [LogoType.TypeScript, LogoType.Elixir, LogoType.React, LogoType.Ecto, LogoType.PostgreSQL],
  },
  {
    name: "EcoQuest",
    date: "March 2023 - May 2023",
    description: [
      "Top 100 finalist for Google Solutions Challenge 2023",
      "EcoQuest is a community-based game designed to promote sustainable living by engaging users in activities with object detection to validate user submissions",
    ],
    image: EcoQuestImage,
    bgColor: "#FFFFFF",
    techStack: [LogoType.TypeScript, LogoType.Python, LogoType.React, LogoType.Redux, LogoType.PostgreSQL, LogoType.PyTorch],
  },
  {
    name: "Recyclops",
    date: "July 2022",
    description: [
      "Winner of NUS LifeHack 2022",
      "A Progressive Web App that aims to simplify recycling for Singaporeans.",
      "Empowered by machine learning, the user can scan any household object. Recyclops will inform them if it is safe to recycle, how to recycle it and whether any special instructions are needed. It also serves as an information dashboard of articles so users can access them easily to learn more."
    ],
    image: RecyclopsImage,
    bgColor: "#768C3C",
    techStack: [LogoType.TypeScript,  LogoType.Python, LogoType.React, LogoType.Ionic, LogoType.Redux, LogoType.TailwindCSS, LogoType.PyTorch],
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
  },
];

export default ProjectsData;