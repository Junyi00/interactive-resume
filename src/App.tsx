import { useEffect, useState } from 'react';
import LandingPage from './pages/landing-page/landingPage';
import ExperiencesPage from './pages/experiences-page/experiencesPage';

import {ReactComponent as ResumeIcon} from './assets/resume_icon.svg';
import {ReactComponent as GithubIcon} from './assets/github_icon.svg';
import {ReactComponent as LinkedinIcon} from './assets/linkedin_icon.svg';
import {ReactComponent as EmailIcon} from './assets/email_icon.svg';

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const MOBILE_WIDTH = 600;

  const updateDimensions = () => { setWindowWidth(window.innerWidth) }

  useEffect(() => { 
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  useEffect(() => setIsMobile(windowWidth < MOBILE_WIDTH), [windowWidth]);

  const VerticalLine = () => <div className="h-[5%] w-0 border-l border-[#FFFFFF] gap-1"/>;
  const QuickAccessIcons = () => <>
    <ResumeIcon />
    <GithubIcon />
    <LinkedinIcon />
    <EmailIcon />
  </>;

  const ContentPageCSS = `relative ${ windowWidth > 600 ? "left-[5%] w-[85%]" : "left-0 w-full" } h-screen snap-start`;

  return (
    <div className="h-screen w-full overflow-y-auto scroll-smooth snap-y snap-mandatory bg-[#000000]">
      { !isMobile && 
        <div className="absolute left-0 w-[5%] h-screen flex flex-col gap-5 justify-start items-center">
          <VerticalLine />
          <QuickAccessIcons />
        </div>
      }

      <LandingPage className={ContentPageCSS} isMobile={isMobile}/>
      <ExperiencesPage className={ContentPageCSS} isMobile={isMobile}/>
      
      { !isMobile &&
        <div className="absolute top-0 right-0 w-[10%] h-screen flex flex-col gap-2 justify-end items-end pr-10 text-[#FFFFFF]">
          <a href="#landing">Welcome</a>
          <a href="#experiences">Experiences</a>
          <VerticalLine />
        </div> 
      }
    </div>
  );

    
}

export default App;
