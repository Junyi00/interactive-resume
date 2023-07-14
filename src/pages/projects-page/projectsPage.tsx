import { useEffect, useState } from "react";

import PageHeader from "components/page-header/pageHeader";
import ProjectEntry from "./projectEntry";
import ProjectEntryModal from "./projectEntryModal";

import ProjectsData from "data/projectsData";

interface ProjectsPageProps {
  className: string;
  isMobile: boolean;
  onHover: () => void;
}

const ProjectsPage = ({ className, isMobile, onHover }: ProjectsPageProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [openCardIndex, setOpenCardIndex] = useState<number>(0);

  const itemsAlignmentCSS = !isMobile ? "justify-start items-center" : "justify-start items-start"

  return <div 
    id="projects" 
    className={`${className} bg-background text-text ${ !isMobile ? "" : "h-fit"}
                flex flex-col gap-2 ${itemsAlignmentCSS} pt-10 pb-2`} 
    onMouseEnter={onHover}
  >
    <PageHeader className={`top-[38px] px-5 ${ isMobile ? "w-full sticky bg-background" : "w-fit" }`} text={"PROJECTS"}/>
    
    <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
      {
        ProjectsData.map((project, index) => (
          <ProjectEntry 
            id={`project_${index}`} 
            key={index} 
            isMobile={isMobile} 
            isOpen={openCardIndex === index} 
            onClick={() => { setOpenCardIndex(index); setIsOpenModal(true); }}
            projectData={project} 
          />
        ))
      }
    </div>

    <ProjectEntryModal 
      isOpen={isOpenModal} 
      onClose={() => { setIsOpenModal(false); }} 
      projectData={ProjectsData[openCardIndex]} 
    />
  </div> 
};

export default ProjectsPage;