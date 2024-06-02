import { LogoType } from "components/logo-icon/logoIcon";

const ExperiencesData = [
  {
    title: "Morgan Stanley",
    period: "May 2024 - Current",
    location: "Singapore",
    role: "Software Engineer Intern",
    description: [
      "Design and develop a high-frequency data system to generate performance metrics and identify operational issues",
    ],
    techStack: [LogoType.TypeScript, LogoType.React, LogoType.Kafka, LogoType.Java, LogoType.SpringBoot, LogoType.DB2],
  },
  {
    title: "NodeFlair",
    period: "May 2023 - Dec 2023",
    location: "Singapore",
    role: "Software Engineer Intern",
    description: [
      "Developed an AI-powered resume builder with personalized recommendations, real-time feedbacks, and PDF export capabilities",
      "Engineered newsletter feature that recommends weekly job opportunities and other data based on users’ job search status and preferences, now utilized by over 1000 users", 
      "Revamped frontend features which reduced bounce rate by 10% and exit rate by 20%",
    ],
    techStack: [LogoType.TypeScript, LogoType.React, LogoType.Rails, LogoType.PostgreSQL, LogoType.Elasticsearch, LogoType.Selenium],
  },
  {
    title: "Computing for Voluntary Welfare Organisations",
    period: "May 2022 - July 2022",
    location: "Singapore",
    role: "Software Engineer Intern",
    description: [
      "Led a team of 3 to design and implement 2-factor authentication (SingPass, Email, TOTP) for an elderly management system, currently being deployed for 2,500 staff and over 20,000 seniors", 
      "Spearheaded the upgrade of Ruby on Rails backend from 5.2.0 to 6.1.6, removing unsupported gems and upgrading dependencies",
      "Deployed staging environments with Capistrano, Nginx and GitLab’s CI/CD",
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