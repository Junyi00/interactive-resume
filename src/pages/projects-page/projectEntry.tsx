import LogoIcon, { LogoType } from "components/logo-icon/logoIcon";

type ProjectLink = {
  location: LogoType;
  link: string;
}

interface ProjectEntryProps {
  className?: string;
  id?: string;
  name: string;
  date: string;
  description: string[];
  image: string;
  bgColor?: string;
  techStack?: LogoType[];
  links?: ProjectLink[];
  isMobile: boolean;
}

const ProjectEntry = ({ className="", id, name, date, description, image, bgColor="#D9D9D9", isMobile, techStack, links }: ProjectEntryProps) => {

  const sizeCSS = !isMobile ? `w-[100%] max-h-[90%]` : "max-w-[100%] h-fit";

  return <div id={id} className={`${className} ${sizeCSS} rounded-lg flex-auto 
    flex flex-col gap-2 bg-background-card shadow-sm shadow-gray-300`}>
      
    <div style={{ backgroundColor: bgColor }} className={`min-w-[50%] w-full h-fit p-2 flex items-center justify-center rounded-t-lg`}>
      <img alt={name + "_image"} src={image} width="50%"/>
    </div>

    <div className="flex-grow flex flex-col gap-4 px-3 py-1">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[20px] font-bold tracking-wider text-text">{name.toUpperCase()}</p>
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
        </div>
        }
        {links !== undefined && <div className="w-min flex flex-col justify-end">
          <p className="text-subtext font-bold">Links</p>
          <div className="h-min w-min flex flex-row gap-1 ">
            {
              links.map((pLink, index) => <LogoIcon key={index} name={pLink.location} link={pLink.link}/>)
            } 
          </div>
        </div>
        }
      </div>
    </div>

  </div>;
};

export default ProjectEntry;