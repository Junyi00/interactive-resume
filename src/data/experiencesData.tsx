import { LogoType } from "components/logo-icon/logoIcon";

const ExperiencesData = [
  {
    title: "Developer Student Club NUS",
    period: "August 2022 - Current",
    location: "Singapore",
    role: "Software Engineer",
    description: [
      "Creating an online learning platform for Dyslexic Association of Singapore that is engaging and customised to dyslexic students’ learning needs by using a multisensory approach", 
      "Developing a progressive web application using React, NestJS and Recoil",
    ],
    techStack: [LogoType.TypeScript, LogoType.React],
  },
  {
    title: "Computing for Volunteer Organisations",
    period: "May 2022 - July 2022",
    location: "Singapore",
    role: "Full Stack Engineer",
    description: [
      "Led a team of 3 on the implementation of 2 factor authentication (SingPass, Email) to enhance access control for 2 organisations", 
      "Deployed staging environments with Capistrano, Nginx and GitLab’s CI/CD",
      "Spearheaded the upgrade of Ruby on Rails backend from 5.2.0 to 6.1.6, removing unsupported gems and upgrading dependencies",
      "Maintained relational databases on PostgreSQL and backend APIs for a decade old Ruby on Rails application",
    ],
    techStack: [LogoType.Ruby, LogoType.JavaScript, LogoType.Ionic, LogoType.Rails, LogoType.PostgreSQL, LogoType.Nginx],
  },
  {
    title: "Medical Operations Task Force",
    period: "April 2020 – May 2020",
    location: "Singapore",
    role: "Computer Vision Engineer",
    description: [
      "MOTF was formed in 2020 to assist Ministry of Health (MOH) in managing the rise in Covid-19 cases", 
      "Developed 3D visualisation web application of Covid-19 cases for spatial analysis of spread with DeckGL",
      "Trained machine learning models on graph database to predict potential Covid19 clusters",
    ],
    techStack: [LogoType.Python, LogoType.JavaScript, LogoType.Pandas, LogoType.Neo4J],
  },
  {
    title: "Singapore Armed Forces",
    period: " March 2020 – July 2021",
    location: "Singapore",
    role: "Computer Vision Engineer",
    description: [
      "Designed database architecture to track the training and testing of machine learning models against datasets and metrics", 
      "Maintained and developed task management extensions for an in-house geospatial software and QGIS separately with Java",
      "Created docker images for deployment of applications to various military units",
    ],
    techStack: [LogoType.Python, LogoType.JavaScript, LogoType.Java, LogoType.TensorFlow, LogoType.PostgreSQL, LogoType.Docker]
  },
]

export default ExperiencesData;