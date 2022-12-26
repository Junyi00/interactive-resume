import RecyclopsImage from "assets/projects/recyclops/Recyclops.png";
import LogoIcon, { LogoType } from "components/logo-icon/logoIcon";

type ProjectLink = {
  location: LogoType;
  link: string;
}

interface ProjectEntryProps {
  id?: string;
  name: string;
  date: string;
  description: string[];
  techStack?: LogoType[];
  links?: ProjectLink[];
  isMobile: boolean;
}

const ProjectEntry = ({ id, name, date, description, isMobile, techStack, links }: ProjectEntryProps) => {

  const sizeCSS = !isMobile ? `w-[100%] max-h-[90%]` : "max-w-[99%] max-h-[90%]";

  return <div id={id} className={`${sizeCSS} rounded-lg flex-auto 
    flex flex-col gap-2 bg-[#222222] shadow shadow-gray-300`}>
      
    <div className="min-w-[50%] w-full h-fit p-2 flex items-center justify-center bg-[#D9D9D9] rounded-t-lg">
      <img alt={name + "_image"} src={RecyclopsImage} width="50%"/>
    </div>

    <div className="flex flex-col gap-4 px-2 py-1">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[20px] font-bold tracking-wider">{name.toUpperCase()}</p>
        <p className="text-[15px] font-bold text-[#438EFF]">{date}</p>
      </div>

      {
        description.map((desc, index) => <p key={index} className="text-[15px]">{desc}</p>)
      }

      <div className="flex flex-row gap-14">
        {techStack !== undefined && <div>
          <p className="text-[#595959] font-bold">Tech</p>
          <div className="h-min w-min flex flex-row gap-1 ">
            {
              techStack.map((tech, index) => <LogoIcon key={index} name={tech}/>)
            } 
          </div>
        </div>
        }
        {links !== undefined && <div>
          <p className="text-[#595959] font-bold">Links</p>
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