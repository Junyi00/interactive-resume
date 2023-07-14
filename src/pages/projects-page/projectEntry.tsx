import { useEffect, useState } from "react";
import LogoIcon, { LogoType } from "components/logo-icon/logoIcon";
import { ProjectType } from "types/projectType";

export type ProjectLink = {
  location: LogoType;
  link: string;
}

interface ProjectEntryProps {
  className?: string;
  id?: string;
  projectData: ProjectType;
  isMobile: boolean;
  isOpen?: boolean;
  onClick: () => void;
}

const ProjectEntry = ({ 
  className="", 
  id, 
  projectData,
  isOpen=false,
  onClick
}: ProjectEntryProps) => {
  const {
    name,
    shortName=name,
    date, 
    description, 
    image, 
    bgColor="#D9D9D9",
    techStack,
    links
  } = projectData

  const [expanded, setExpanded] = useState<boolean>(isOpen);

  useEffect(() => {
    setExpanded(isOpen);
  }, [isOpen])

  const handleOnClick = () => {
    onClick(); 
    setExpanded(!expanded);
  };

  return (
    <div 
      id={id} 
      className={`${className} col-span-1 gap-1 h-fit rounded-lg flex flex-col bg-transparent transition-all ease-in-out`}
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
    >
      <div 
        style={{ backgroundColor: bgColor }} 
        className="col-span-1 h-[200px] flex p-2 gap-10 items-center justify-center rounded"
      >
        <img alt={name + "_image"} src={image} />
      </div>
      <p className="text-[20px] font-bold tracking-wider text-text col-span-3">
        {expanded ? name.toUpperCase() : shortName.toUpperCase()}
      </p>
      <div className={`md:hidden w-full flex flex-col gap-2 h-fit max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[10000px] overflow-visible" : ""}`}>
        <div className="flex flex-col">
          <p className="text-[15px] font-bold text-primary">{date}</p>
        </div>
        
        {
          description.map((desc, index) => <p key={index} className="text-[15px]">{desc}</p>)
        }
        <div className="flex-grow flex flex-wrap gap-x-14 gap-y-1">
          {techStack !== undefined && <div className="w-min flex flex-col justify-end">
            <p className="text-subtext font-bold">Tech</p>
            <div className="h-min w-min flex flex-row gap-1 ">
              {
                techStack.map((tech, index) => <LogoIcon key={index} name={tech}/>)
              } 
            </div>
          </div>}
          {links !== undefined && <div className="w-min flex flex-col justify-end">
            <p className="text-subtext font-bold">Links</p>
            <div className="h-min w-min flex flex-row gap-1 ">
              {
                links.map((pLink, index) => <LogoIcon key={index} name={pLink.location} link={pLink.link}/>)
              } 
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ProjectEntry;