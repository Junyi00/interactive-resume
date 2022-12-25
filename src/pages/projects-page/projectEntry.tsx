import RecyclopsImage from "../../assets/projects/recyclops/Recyclops.png";

interface ProjectEntryProps {
  id?: string;
  name: string;
  date: string;
  description: string[];
}

const ProjectEntry = ({ id, name, date, description }: ProjectEntryProps) => {
  return <div id={id} className="w-auto max-w-[100%] min-h-[500px] max-h-[700px] flex-auto 
    flex flex-col gap-2 bg-[#222222] rounded-lg drop-shadow shadow-white">
      
    <div className="w-full h-fit p-2 flex items-center justify-center bg-[#D9D9D9] rounded-t-lg">
      <img alt={name + "_image"} src={RecyclopsImage} width="80%"/>
    </div>

    <div className="flex flex-col gap-4 px-2 py-1">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[20px] font-bold tracking-wider">{name.toUpperCase()}</p>
        <p className="text-[15px] font-bold text-[#438EFF]">{date}</p>
      </div>

      {
        description.map((desc, index) => <p key={index} className="text-[15px]">{desc}</p>)
      }
    </div>
  </div>;
};

export default ProjectEntry;