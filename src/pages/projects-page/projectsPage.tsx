import { useEffect, useState } from "react";

import PageHeader from "components/page-header/pageHeader";
import ProjectEntry from "./projectEntry";
import ProjectEntryModal from "./projectEntryModal";

import ProjectsData from "data/projectsData";

interface ProjectsPageProps {
  className: string;
  onHover: () => void;
}

const ProjectsPage = ({ className, onHover }: ProjectsPageProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openCardIndex === null) return;
    setIsOpenModal(true);
  }, [openCardIndex])

  return <div 
    id="projects" 
    className={`${className} bg-background text-text
                flex flex-col gap-2 justify-start items-stretch pt-10 pb-2`} 
    onMouseEnter={onHover}
  >
    <PageHeader className="sticky md:relative top-[38px] md:top-0  bg-background px-5 md:px-10 w-full md:w-fit" text="PROJECTS" isMainHeader />
    
    <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
      {
        ProjectsData.map((project, index) => (
          <ProjectEntry 
            id={`project_${index}`} 
            key={index}
            onClick={() => { setOpenCardIndex(index); }}
            projectData={project} 
          />
        ))
      }
    </div>

    <ProjectEntryModal 
      isOpen={isOpenModal} 
      onClose={() => { setIsOpenModal(false); setOpenCardIndex(null); }} 
      projectData={ openCardIndex !== null ? ProjectsData[openCardIndex] : null } 
    />
  </div> 
};

export default ProjectsPage;