import PageHeader from "components/page-header/pageHeader";
import QuickAccessButton from "components/quick-access-button/quickAccessButton";
import { LogoType } from "components/logo-icon/logoIcon";

import {ReactComponent as ResumeIcon} from 'assets/icons/resume.svg';
import {ReactComponent as GithubIcon} from 'assets/icons/github.svg';
import {ReactComponent as LinkedinIcon} from 'assets/icons/linkedin.svg';
import {ReactComponent as EmailIcon} from 'assets/icons/email.svg';
import SkillsetsBox, { Skillsets } from "components/skillsets-box/skillsetsBox";

interface InfoPageProps {
  className: string;
  isMobile: boolean;
  onHover: () => void;
}

const skillsetsData: Skillsets = {
  Languages: {
    experienced: [LogoType.Python, LogoType.Java, LogoType.JavaScript, LogoType.TypeScript],
    familiar: [LogoType.C, LogoType.Ruby],
  },
  Frontend: {
    experienced: [LogoType.React, LogoType.TailwindCSS, LogoType.Redux, LogoType.MaterialUI, LogoType.Storybook],
    familiar: [LogoType.Ionic, LogoType.Dash],
  },
  Backend: {
    experienced: [LogoType.PostgreSQL, LogoType.Flask, LogoType.Rails],
    familiar: [LogoType.MongoDB, LogoType.Django, LogoType.Neo4J],
  },
  Others: {
    experienced: [LogoType.Git, LogoType.Docker, LogoType.TensorFlow, LogoType.PyTorch],
    familiar: [LogoType.Nginx]
  }
}

const StyledList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="mt-2 list-square list-outside marker:text-[#595959] [&>li]:ml-3 text-[14px]">
    {children}
  </ul>
);

const InfoPage = ({ className, isMobile, onHover }: InfoPageProps) => {
  const iconLength = "30px";

  return <div 
    id="info" 
    onMouseEnter={onHover}
    className={`${className} text-[#FFFFFF] w-full ${isMobile ? "h-fit" : "h-screen"}
                flex flex-col gap-5 justify-between pt-10`}
  >
    <div className={`flex flex-row ${isMobile ? "flex-wrap" : "justify-evenly"} gap-1 w-full`}> 
      <div className={`flex flex-col gap-1 ${isMobile ? "w-full" : ""}`}>
        <PageHeader className={`${isMobile ? `sticky top-[38px] w-full bg-[#111111]` : ""} px-5`} text={"SKILLSETS"}/>
        <div className="w-full h-fit px-5"><SkillsetsBox skillsets={skillsetsData} singleColumn={false}/></div>
      </div>

      <div className={`flex flex-col ${!isMobile ? "justify-center" : ""} gap-5`}>
        <div className="flex flex-col gap-1">
          <PageHeader className={`${isMobile ? `sticky top-[38px] w-full bg-[#111111]` : ""} px-5`} text={"EDUCATION"}/>
          <div className="px-5">
            <p className="text-[25px] leading-[30px] text-[#438EFF]">National University of Singapore</p>
            <p className="text-[15px] text-[#ADADAD] font-bold">August 2021 - Current</p>
            <StyledList>
              <li>Computing for Voluntary Welfare Organisations (May 2022)</li>
              <li>Google Developer Student Club NUS (AY2223 - Current)</li>
            </StyledList>
            <StyledList>
              <li>Teaching Assistant for CS1101S (AY2223 Sem 1)</li>
            </StyledList>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <PageHeader className={`${isMobile ? `sticky top-[38px] w-full bg-[#111111]` : ""} px-5`} text={"ACHIEVEMENTS"}/>
          <div className="px-5">
            <StyledList>
              <li>Goh Chok Tong’s Young Student Leader Award (2018)</li>
              <li>Deans List (AY2122 Sem 2)</li>
            </StyledList>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full h-fot flex justify-center items-center">
      <div className={`bg-[#222222] h-fit 
                      flex flex-col items-center justify-center 
                      ${!isMobile ? "w-[90%] p-10 m-2 text-[18px] rounded-lg shadow-lg shadow-[#555555]" : "w-full px-2 py-5 text-[18px]"} `}>
        <p className="break-normal">Thanks for reading this far!</p>
        <p className="break-normal">Feel free to drop a message to say hello!</p>
        <div className="flex flex-row justify-center items-center gap-5 mt-5">
          <QuickAccessButton Icon={ResumeIcon} width={iconLength} onClick={() => window.open("/Resume_Goh_Jun_Yi.pdf")}/>
          <QuickAccessButton Icon={GithubIcon} width={iconLength} onClick={() => window.open("https://github.com/Junyi00")}/>
          <QuickAccessButton Icon={LinkedinIcon} width={iconLength} onClick={() => window.open("https://sg.linkedin.com/in/goh-jun-yi")}/>
          <QuickAccessButton Icon={EmailIcon} width={iconLength} onClick={() => window.open("mailto:gohjunyi00@gmail.com")}/>
        </div>
      </div>
    </div>

  </div>;
};

export default InfoPage;