import LogoIcon, { LogoType } from "components/logo-icon/logoIcon";

interface ExperienceEntryProps {
  className?: string;
  title: string;
  period: string;
  location: string;
  role: string;
  description: string[];
  techStack?: LogoType[];
  isMobile?: boolean;
};

const ExperienceEntry = (props: ExperienceEntryProps) => {

  const Header: React.FC = () => <>
    <p className={`${ props.isMobile ? "text-[20px] leading-[25px]" : "text-[25px] leading-[30px]" }`}>{props.title}</p>
    <p className="text-[15px] text-[#ADADAD] font-bold">{props.period}</p>
  </>;

  return (
    <div className={`${props.className} flex flex-row gap-2 w-full`}>

      <div className="flex flex-col items-center mt-1">
        <div className="w-2 h-2 border border-[#438EFF]"/>
        <div className="w-0 flex-grow border-l border-[#438EFF]"/>
      </div>

      <div className="flex flex-col w-full">
        { !props.isMobile ?
          <div className="flex flex-row gap-2 items-center justify-between flex-wrap">
            <Header />
          </div> :
          <Header />
        }
        <p className="italic text-[15px] text-[#438EFF] mb-2">{props.location}, {props.role}</p>
        <ul className="list-square list-outside marker:text-[#595959]">
        {
          props.description.map((desc, index) => <li key={index} className="ml-3 mb-2 text-[12px]">
            {desc}
          </li>)
        }
        </ul>

        {props.techStack !== undefined && <div className="w-min">
          <p className="text-[#595959] text-[15px] font-bold">Tech</p>
          <div className="h-min w-min flex flex-row gap-1 ">
            {
              props.techStack.map((tech, index) => <LogoIcon key={index} name={tech}/>)
            } 
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default ExperienceEntry;