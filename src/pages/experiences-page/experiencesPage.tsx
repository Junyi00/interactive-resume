import PageHeader from "components/page-header/pageHeader";
import ExperienceEntry from "./experienceEntry";

import ExperiencesData from "data/experiencesData";

import "./experiencePage.css";

interface ExperiencesPageProps {
  className: string;
  isMobile: boolean;
  onHover: () => void;
}

const EndLine: React.FC<{ className?: string }> = ({ className }) => <div className={`${className} flex flex-row w-full items-center gap-3`}>
  <div className="border-t-[1px] w-full h-0 border-line flex-grow"/>
  <p className="text-[12px] text-line">END</p>
  <div className="border-t-[1px] w-full h-0 border-line flex-grow"/>
</div>;

const ExperiencesPage = ({ className, isMobile, onHover }: ExperiencesPageProps) => {
  return (
  <div 
    id="experiences" 
    className={`${className} bg-background text-text ${ !isMobile ? "" : "h-fit"}
                flex flex-col gap-2 justify-start items-start pt-10`}
    onMouseEnter={onHover}
  >
    <PageHeader className="top-[38px] px-5 w-full sticky bg-background" text={"EXPERIENCES"}/>

    { !isMobile ? 
      <div className={`w-[95%] h-[90%] py-10 px-5
        flex flex-col gap-3 justify-start items-start 
        overflow-y-scroll scrollable`
      }>
        {
          ExperiencesData.map((experience, index) => <ExperienceEntry key={index} isMobile={isMobile} {...experience} />)
        }
        <EndLine />
      </div> :
      <>
        {
          ExperiencesData.map((experience, index) => <ExperienceEntry className="px-5" key={index} isMobile={isMobile} {...experience} />)
        }
        <EndLine className="px-5" />
      </>
    }
    
  </div>);
};

export default ExperiencesPage;