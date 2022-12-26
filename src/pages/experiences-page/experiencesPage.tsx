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
    ]
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
    ]
  },
  {
    title: "Paper Marchel",
    period: "Jan 2021 - Aug 2021",
    location: "Singapore",
    role: "Software Engineer",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare sodales orci, ut pulvinar quam iaculis at.", 
      "Nunc sollicitudin massa et enim pellentesque, nec aliquet nibh volutpat. Sed sodales tortor ut pulvinar hendrerit. ",
      "Vestibulum auctor erat ac accumsan gravida.",
    ]
  },
  {
    title: "One Cycle Pte. Ltd.",
    period: "Jan 2020 - Mar 2020",
    location: "Singapore",
    role: "Software Developer",
    description: [
      "Aenean lacinia ex molestie dolor convallis rutrum. Pellentesque ultricies molestie dapibus. Ut at mattis elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas laoreet elit non auctor semper. Donec nunc neque, luctus et sem ut, accumsan ornare ligula.",
    ]
  },
  {
    title: "Bravoda Loresa",
    period: "May 2019",
    location: "Singapore",
    role: "Software Developer",
    description: [
      "Proin ac sapien eget ex aliquam porttitor vitae non ipsum.", 
      "Aenean ornare sodales orci, ut pulvinar quam iaculis at.",
      "Phasellus vulputate velit fermentum fermentum ornare.",
    ]
  },
  {
    title: "Potato Life",
    period: "Jan 2019 - Feb 2019",
    location: "Singapore",
    role: "Developer",
    description: [
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", 
      "Donec nunc neque, luctus et sem ut, accumsan ornare ligula.",
    ]
  },
]

const ExperiencesPage = ({ className, isMobile, onHover }: ExperiencesPageProps) => {
  return (
  <div 
    id="experiences" 
    className={`${className} bg-[#111111] text-[#FFFFFF] h-screen w-full flex flex-col gap-2 justify-center items-start px-5 pt-2`}
    onMouseEnter={onHover}
  >
    <p className="text-[30px] font-bold tracking-wider">EXPERIENCES</p>
    <div className={`w-[95%] h-[85%] py-10
      flex flex-col gap-3 justify-start items-start 
      overflow-y-scroll scrollable`
    }>
      {
        EXPERIENCES.map((experience, index) => <ExperienceEntry key={index} isMobile={isMobile} {...experience} />)
      }
    </div>
  </div>);
};

export default ExperiencesPage;