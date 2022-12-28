import LogoIcon, { LogoType } from "components/logo-icon/logoIcon";

type Skillset = {
  experienced: LogoType[],
  familiar: LogoType[],
};
export type Skillsets = { [key: string]: Skillset};

interface SkillsetsBoxProps {
  skillsets: Skillsets,
  className?: string; 
  singleColumn?: boolean;
};

const SkillComponent: React.FC<{ 
  experienced: LogoType[], 
  familiar: LogoType[], 
  title: string,
  singleColumn?: boolean
}> = (props) => {
  return <>  
    <p className={`${ !props.singleColumn ? "col-span-2" : "" } font-bold font-[18px]`}>
      {props.title}
    </p>
    <div className="flex flex-col mb-1 gap-1">
      <p className="text-[#595959] font-bold">Experienced</p>
      <div className="h-min w-fit flex flex-row flex-wrap gap-2">
        {
          props.experienced.map((tech, index) => <LogoIcon key={index} name={tech} length="30px"/>)
        } 
      </div>
    </div>

    <div className="flex flex-col mb-1 gap-1">
      <p className="text-[#595959] font-bold">Familiar</p>
      <div className="h-min w-fit flex flex-row flex-wrap gap-2">
        {
          props.familiar.map((tech, index) => <LogoIcon key={index} name={tech} length="30px"/>)
        } 
      </div>
    </div>
  </>;
};

const SkillsetsBox = ({ skillsets, className, singleColumn }: SkillsetsBoxProps) => {
  return <div className={`${className} grid gap-x-5 ${ singleColumn ? "grid-cols-1" : "grid-cols-2" }
                          w-full rounded-lg bg-[#222222] p-2 shadow-sm shadow-gray-300`}>
    { Object.keys(skillsets).map((skill, index) => <SkillComponent 
        key={index} 
        title={skill} 
        experienced={skillsets[skill].experienced} 
        familiar={skillsets[skill].familiar}
        singleColumn={singleColumn}
      />) 
    }
  </div>
};

export default SkillsetsBox;