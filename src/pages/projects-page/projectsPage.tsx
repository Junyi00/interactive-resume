import {  useState } from "react";

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
  
  return <div 
    id="projects" 
    className={`${className} bg-background text-text
                flex flex-col gap-2 justify-start items-stretch pt-10 pb-2`} 
    onMouseEnter={onHover}
  >
    <PageHeader className="sticky lg:relative top-[38px] lg:top-0 bg-background px-5 lg:px-10 w-full lg:w-fit" text="PROJECTS" isMainHeader />
    
    <div className="px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
      {
        ProjectsData.map((project, index) => (
          <ProjectEntry 
            id={`project_${index}`} 
            key={index}
            onClick={() => { setOpenCardIndex(index); setIsOpenModal(true); }}
            projectData={project} 
          />
        ))
      }
    </div>

    {!isMobile && <ProjectEntryModal 
      isOpen={isOpenModal} 
      onClose={() => { setIsOpenModal(false); }} 
      projectData={ ProjectsData[openCardIndex] } 
    />}
  </div> 
};

export default ProjectsPage;