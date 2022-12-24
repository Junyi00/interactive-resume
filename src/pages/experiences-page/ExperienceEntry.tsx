interface ExperienceEntryProps {
  title: string;
  period: string;
  location: string;
  role: string;
  description: string[];
  isMobile?: boolean;
};

const ExperienceEntry = (props: ExperienceEntryProps) => {

  const Header: React.FC = () => <>
    <p className={`${ props.isMobile ? "text-[20px] leading-[25px]" : "text-[25px] leading-[30px]" }`}>{props.title}</p>
    <p className="text-[15px] text-[#ADADAD] font-bold">{props.period}</p>
  </>;

  return (
    <div className="flex flex-row gap-2">

      <div className="flex flex-col items-center mt-1">
        <div className="w-2 h-2 border border-[#438EFF]"/>
        <div className="w-0 flex-grow border-l border-[#438EFF]"/>
      </div>

      <div className="flex flex-col">
        { !props.isMobile ?
          <div className="flex flex-row gap-2 items-center">
            <Header />
          </div> :
          <Header />
        }
        <p className="italic text-[15px] text-[#438EFF] mb-2">{props.location}, {props.role}</p>
        <ul className="list-square list-inside">
        {
          props.description.map((desc, index) => <li key={index} className="mb-2 text-[12px]">
            {desc}
          </li>)
        }
        </ul>
      </div>
    </div>
  );
};

export default ExperienceEntry;