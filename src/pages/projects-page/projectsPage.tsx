import Carousell from "components/carousell/carousell";
import PageHeader from "components/page-header/pageHeader";
import ProjectEntry from "./projectEntry";

import ProjectsData from "data/projectsData";

interface ProjectsPageProps {
  className: string;
  isMobile: boolean;
  onHover: () => void;
}

const ProjectsPage = ({ className, isMobile, onHover }: ProjectsPageProps) => {
  const itemsAlignmentCSS = !isMobile ? "justify-center items-center" : "justify-start items-start"

  return <div 
    id="projects" 
    className={`${className} bg-background text-text ${ !isMobile ? "" : "h-fit"}
                flex flex-col gap-2 ${itemsAlignmentCSS} pt-10 pb-2`} 
    onMouseEnter={onHover}
  >
    <PageHeader className={`top-[38px] px-5 ${ isMobile ? "w-full sticky bg-background" : "w-fit" }`} text={"PROJECTS"}/>
    
    { !isMobile ?
      <Carousell prefix="project" width="90%">
        {
          ProjectsData.map((project, index) => <ProjectEntry id={`project_${index}`} key={index} isMobile={isMobile} {...project} />)
        }
      </Carousell> :
      <>
        {
          ProjectsData.map((project, index) => <ProjectEntry className="mx-5 mb-3" key={index} isMobile={isMobile} {...project} />)
        }
      </>
    }
  </div> 
};

export default ProjectsPage;