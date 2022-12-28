import { LogoType } from "components/logo-icon/logoIcon";
import PageHeader from "components/page-header/pageHeader";
import ExperienceEntry from "./experienceEntry";

import "./experiencePage.css";

interface ExperiencesPageProps {
  className: string;
  isMobile: boolean;
  onHover: () => void;
}

const EXPERIENCES = [
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

const EndLine: React.FC<{ className?: string }> = ({ className }) => <div className={`${className} flex flex-row w-full items-center gap-3`}>
  <div className="border-t-[1px] w-full h-0 border-[#ABABAB] flex-grow"/>
  <p className="text-[12px] text-[#ABABAB]">END</p>
  <div className="border-t-[1px] w-full h-0 border-[#ABABAB] flex-grow"/>
</div>;

const ExperiencesPage = ({ className, isMobile, onHover }: ExperiencesPageProps) => {
  return (
  <div 
    id="experiences" 
    className={`${className} bg-[#111111] text-[#FFFFFF] ${ !isMobile ? "" : "h-fit"}
                flex flex-col gap-2 justify-start items-start pt-10`}
    onMouseEnter={onHover}
  >
    <PageHeader className="top-[38px] px-5 w-full sticky bg-[#111111]" text={"EXPERIENCES"}/>

    { !isMobile ? 
      <div className={`w-[95%] h-[90%] py-10 px-5
        flex flex-col gap-3 justify-start items-start 
        overflow-y-scroll scrollable`
      }>
        {
          EXPERIENCES.map((experience, index) => <ExperienceEntry key={index} isMobile={isMobile} {...experience} />)
        }
        <EndLine />
      </div> :
      <>
        {
          EXPERIENCES.map((experience, index) => <ExperienceEntry className="px-5" key={index} isMobile={isMobile} {...experience} />)
        }
        <EndLine className="px-5" />
      </>
    }
    
  </div>);
};

export default ExperiencesPage;