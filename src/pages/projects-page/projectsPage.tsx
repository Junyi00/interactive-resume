import Carousell from "../../components/carousell/carousell";
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
      "A Progressive Web App that aims to simplify recycling for Singaporeans.",
      "Empowered by machine learning, the user can scan any household object. Recyclops will inform them if it is safe to recycle, how to recycle it and whether any special instructions are needed. It also serves as an information dashboard of articles so users can access them easily to learn more."
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
  return <div 
    id="projects" 
    className={`${className} bg-[#111111] text-[#FFFFFF] h-screen w-full flex flex-col gap-5 justify-center items-center px-5 pt-2`} 
    onMouseEnter={onHover}
  >
    <p className="text-[30px] font-bold tracking-wider">PROJECTS</p>
    <Carousell width="100%">
    {
      PROJECTS.map((project, index) => <ProjectEntry id={`carousell_${index}`} key={index} {...project} />)
    }
    </Carousell>
  </div> 
};

export default ProjectsPage;