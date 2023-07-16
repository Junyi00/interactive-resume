import PageHeader from "components/page-header/pageHeader";
import ExperienceEntry from "./experienceEntry";

import ExperiencesData from "data/experiencesData";

interface ExperiencesPageProps {
  className: string;
  onHover: () => void;
}

const EndLine: React.FC<{ className?: string }> = ({ className }) => <div className={`${className} flex flex-row w-full items-center gap-3`}>
  <div className="border-t-[1px] w-full h-0 border-line flex-grow"/>
  <p className="text-[12px] text-line">END</p>
  <div className="border-t-[1px] w-full h-0 border-line flex-grow"/>
</div>;

const ExperiencesPage = ({ className, onHover }: ExperiencesPageProps) => {
  return (
    <div 
      id="experiences" 
      className={`${className} bg-background text-text flex flex-col gap-2 justify-start items-start`}
      onMouseEnter={onHover}
    >
      <PageHeader className="sticky md:relative top-[38px] md:top-0 px-5 md:px-10 w-full bg-background" text={"EXPERIENCES"} isMainHeader />

      <div className="w-full px-5 md:px-10 flex flex-col gap-3 justify-start items-start">
        {
          ExperiencesData.map((experience, index) => <ExperienceEntry key={index} {...experience} />)
        }
        <EndLine />
      </div> 
    </div>
  );
};

export default ExperiencesPage;