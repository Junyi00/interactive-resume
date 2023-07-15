import PageHeader from "components/page-header/pageHeader";
import QuickAccessButton from "components/quick-access-button/quickAccessButton";
import SkillsetsBox from "components/skillsets-box/skillsetsBox";

import {ReactComponent as ResumeIcon} from 'assets/icons/resume.svg';
import {ReactComponent as GithubIcon} from 'assets/icons/github.svg';
import {ReactComponent as LinkedinIcon} from 'assets/icons/linkedin.svg';
import {ReactComponent as EmailIcon} from 'assets/icons/email.svg';

import ProfileData from 'data/profileData';
import SkillsetsData from "data/skillsetsData";

interface InfoPageProps {
  className: string;
  onHover: () => void;
}

const StyledList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="mt-2 list-square list-outside marker:text-subtext [&>li]:ml-3 text-[14px]">
    {children}
  </ul>
);

const InfoPage = ({ className, onHover }: InfoPageProps) => {
  const iconLength = "30px";

  return <div 
    id="info" 
    onMouseEnter={onHover}
    className={`${className} text-text w-full h-fit
                flex flex-col gap-5 justify-between pt-10`}
  >
    <div className="w-full flex flex-row flex-wrap md:justify-evenly gap-5"> 
      <div className="flex flex-col gap-1 w-full md:w-fit">
        <PageHeader className="sticky md:relative top-[38px] md:top-0 px-5 w-full bg-background" text={"SKILLSETS"}/>
        <div className="w-full h-fit px-5"><SkillsetsBox skillsets={SkillsetsData} singleColumn={false}/></div>
      </div>

      <div className="flex flex-col justiy-start gap-5">
        <div className="flex flex-col gap-1">
          <PageHeader className="sticky md:relative top-[38px] md:top-0 px-5 w-full bg-background" text={"EDUCATION"}/>
          <div className="px-5">
            <p className="text-[25px] leading-[30px] text-primary">National University of Singapore</p>
            <p className="text-[15px] text-subtext font-bold">August 2021 - Current</p>
            <StyledList>
              <li>Computing for Voluntary Welfare Organisations (May 2022)</li>
              <li>Google Developer Student Club NUS (AY2223 - Current)</li>
            </StyledList>
            <StyledList>
              <li>Teaching Assistant for CS1101S (AY2223 Sem 1)</li>
              <li>Teaching Assistant for CS2100 (AY2223 Sem 2)</li>
            </StyledList>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <PageHeader className="sticky md:relative top-[38px] md:top-0 px-5 w-full bg-background" text={"ACHIEVEMENTS"}/>
          <div className="px-5">
            <StyledList>
              <li>Goh Chok Tong’s Young Student Leader Award (2018)</li>
              <li>NSF of the Year 2021</li>
              <li>Dean's List (AY21/22 Sem 2)</li>
              <li>Dean's List (AY22/23 Sem 1)</li>
              <li>Dean's List (AY22/23 Sem 2)</li>
            </StyledList>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full h-fot flex justify-center items-center">
      <div className="h-fit w-full bg-background-card md:bg-transparent md:border-t md:border-line 
                      flex flex-col items-center justify-center 
                      md:w-[90%] px-4 py-5 md:px-0 md:py-16 md:m-2 text-[18px] text-center">
        <p className="break-normal">Thanks for reading this far!</p>
        <p className="break-normal">Feel free to drop a message to say hello!</p>
        <div className="flex flex-row justify-center items-center gap-5 mt-5">
          <QuickAccessButton Icon={ResumeIcon} width={iconLength} onClick={() => window.open(ProfileData.resume)}/>
          <QuickAccessButton Icon={GithubIcon} width={iconLength} onClick={() => window.open(ProfileData.links.github)}/>
          <QuickAccessButton Icon={LinkedinIcon} width={iconLength} onClick={() => window.open(ProfileData.links.linkedin)}/>
          <QuickAccessButton Icon={EmailIcon} width={iconLength} onClick={() => window.open(`mailto:${ProfileData.email}`)}/>
        </div>
      </div>
    </div>

  </div>;
};

export default InfoPage;