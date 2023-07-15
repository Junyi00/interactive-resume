import LogoIcon, { LogoType } from "components/logo-icon/logoIcon";

interface ExperienceEntryProps {
  className?: string;
  title: string;
  period: string;
  location: string;
  role: string;
  description: string[];
  techStack?: LogoType[];
};

const ExperienceEntry = (props: ExperienceEntryProps) => {

  const Header: React.FC = () => <div className="flex flex-col md:flex-row justify-start md:justify-between gap-2">
    <p className="text-[22px] leading-[28px] md:text-[25px] md:leading-[30px] font-bold">{props.title}</p>
    <p className="text-[15px] text-[#ADADAD] font-bold">{props.period}</p>
  </div>;

  return (
    <div className={`${props.className} flex flex-row gap-2 w-full`}>

      <div className="hidden md:flex flex-col items-center mt-1">
        <div className="w-2 h-2 border border-[#438EFF]"/>
        <div className="w-0 flex-grow border-l border-[#438EFF]"/>
      </div>

      <div className="flex flex-col w-full">
        <Header />
        <p className="italic text-[15px] text-[#438EFF] mb-2">{props.location}, {props.role}</p>
        <ul className="list-square list-outside marker:text-[#595959]">
        {
          props.description.map((desc, index) => <li key={index} className="ml-3 mb-2 text-[14px]">
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