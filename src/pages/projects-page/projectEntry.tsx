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
  onClick: () => void;
}

const ProjectEntry = ({ 
  className="", 
  id, 
  projectData,
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

  const [expanded, setExpanded] = useState<boolean>(false);

  const handleOnClick = () => {
    onClick(); 
    setExpanded(!expanded);
  };

  return (
    <div 
      id={id} 
      className={`${className} col-span-1 gap-1 h-fit rounded-lg flex flex-col bg-transparent cursor-pointer
                  lg:hover:[&>*:first-child]:drop-shadow-md lg:hover:[&>*:first-child]:-translate-y-1 lg:[&>h3]:hover:text-primary
                  [&>*:first-child]:active:-translate-y-1 [&>h3]:active:text-primary`}
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
    >
      <div 
        style={{ backgroundColor: bgColor }} 
        className="col-span-1 h-[200px] flex gap-10 items-center justify-center rounded transition-all ease-in-out 
                   object-cover overflow-hidden shadow-sm shadow-gray-300"
      >
        <img className="" alt={name + "_image"} src={image} />
      </div>
      <h3 className="lg:hidden text-[18px] lg:text-[20px] font-semibold tracking-wider text-text col-span-3 transition-all ease-in-out">
        {expanded ? name.toUpperCase() : shortName.toUpperCase()}
      </h3>
      <h3 className="hidden lg:block text-[18px] lg:text-[20px] font-semibold text-text col-span-3 transition-all ease-in-out">
        {shortName.toUpperCase()}
      </h3>
      <div className={`lg:hidden w-full flex flex-col gap-2 h-fit max-h-0 overflow-hidden transition-all duration-500 ${expanded ? "max-h-[10000px] overflow-visible ease-in" : "ease-out"}`}>
        <div className="flex flex-col">
          <p className="text-[15px] font-bold text-subtext">{date}</p>
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