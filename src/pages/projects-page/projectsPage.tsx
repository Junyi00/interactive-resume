import Carousell from "components/carousell/carousell";
import { LogoType } from "components/logo-icon/logoIcon";
import ProjectEntry from "./projectEntry";

interface ProjectsPageProps {
  className: string;
  isMobile: boolean;
  onHover: () => void;
}

const PROJECTS = [
  {
    name: "Recyclops",
    date: "July 2022",
    description: [
      "A Progressive Web App that aims to simplify recycling for Singaporeans.",
      "Empowered by machine learning, the user can scan any household object. Recyclops will inform them if it is safe to recycle, how to recycle it and whether any special instructions are needed. It also serves as an information dashboard of articles so users can access them easily to learn more."
    ],
    techStack: [LogoType.TypeScript, LogoType.React, LogoType.Ionic, LogoType.Redux, LogoType.TailwindCSS, LogoType.Python, LogoType.PyTorch],
    links: [
      { location: LogoType.Github, link: "https://github.com/Recyclops-LifeHack-2022-Singapore" },
      { location: LogoType.Figma, link: "https://www.figma.com/file/Von8ACBD5yA7R6gY5gBqIv/Recyclops?node-id=0%3A1" },
      { location: LogoType.DevPost, link: "https://devpost.com/software/recyclops-6lyh30" },
      { location: LogoType.View, link: "https://recyclops.netlify.app/" },
    ],
  },
  {
    name: "Lorem Ipsum",
    date: "August 2023",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare sodales orci, ut pulvinar quam iaculis at. Phasellus vulputate velit fermentum fermentum ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      "Nunc sollicitudin massa et enim pellentesque, nec aliquet nibh volutpat. Sed sodales tortor ut pulvinar hendrerit. Vestibulum auctor erat ac accumsan gravida. Proin ac sapien eget ex aliquam porttitor vitae non ipsum."
    ],
  },
  {
    name: "Recyclops",
    date: "July 2022",
    description: [
      "Ut efficitur finibus elementum. Pellentesque mattis finibus nisl, et finibus ex consequat vitae. Donec nec faucibus velit. Morbi non cursus nibh. Nam ac dapibus diam. Morbi auctor, lacus et dapibus iaculis, augue leo varius sapien, eu mollis nulla arcu et nisl. Fusce rhoncus pretium sem eget consectetur.",
      "Aenean lacinia ex molestie dolor convallis rutrum. Pellentesque ultricies molestie dapibus. Ut at mattis elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas laoreet elit non auctor semper. Donec nunc neque, luctus et sem ut, accumsan ornare ligula."
    ],
  },
  {
    name: "Recyclops",
    date: "July 2022",
    description: [
      "A Progressive Web App that aims to simplify recycling for Singaporeans.",
      "Empowered by machine learning, the user can scan any household object. Recyclops will inform them if it is safe to recycle, how to recycle it and whether any special instructions are needed. It also serves as an information dashboard of articles so users can access them easily to learn more."
    ],
  },
]

const ProjectsPage = ({ className, isMobile, onHover }: ProjectsPageProps) => {
  const itemsAlignmentCSS = !isMobile ? "justify-center items-center" : "justify-center items-start"

  return <div 
    id="projects" 
    className={`${className} bg-[#111111] text-[#FFFFFF] w-full h-screen
                flex flex-col gap-2 ${itemsAlignmentCSS} px-5 pt-10`} 
    onMouseEnter={onHover}
  >
    <p className="text-[30px] font-bold tracking-wider">PROJECTS</p>
    { !isMobile ?
      <Carousell width="100%">
        {
          PROJECTS.map((project, index) => <ProjectEntry id={`carousell_${index}`} key={index} isMobile={isMobile} {...project} />)
        }
      </Carousell> :
      <div className="flex flex-col h-[85%] gap-5 p-1 overflow-y-auto scrollable scroll-smooth snap-y snap-mandatory [&>*]:snap-start">
        {
          PROJECTS.map((project, index) => <ProjectEntry key={index} isMobile={isMobile} {...project} />)
        }
      </div>
    }
  </div> 
};

export default ProjectsPage;