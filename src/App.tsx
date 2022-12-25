import { useEffect, useState } from 'react';
import LandingPage from './pages/landing-page/landingPage';
import ExperiencesPage from './pages/experiences-page/experiencesPage';
import ProjectsPage from './pages/projects-page/projectsPage';

import {ReactComponent as ResumeIcon} from './assets/resume_icon.svg';
import {ReactComponent as GithubIcon} from './assets/github_icon.svg';
import {ReactComponent as LinkedinIcon} from './assets/linkedin_icon.svg';
import {ReactComponent as EmailIcon} from './assets/email_icon.svg';
import QuickAccessButton from './components/quick-access-button/quickAccessButton';

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const MOBILE_WIDTH = 850;

  const updateDimensions = () => { setWindowWidth(window.innerWidth) }

  useEffect(() => { 
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  useEffect(() => setIsMobile(windowWidth < MOBILE_WIDTH), [windowWidth]);

  const VerticalLine = () => <div className="h-[5%] w-0 border-l border-[#FFFFFF] gap-1"/>;
  const QuickAccessIcons: React.FC<{width: string}> = ({ width }) => <>
    <QuickAccessButton Icon={ResumeIcon} width={width}/>
    <QuickAccessButton Icon={GithubIcon} width={width}/>
    <QuickAccessButton Icon={LinkedinIcon} width={width}/>
    <QuickAccessButton Icon={EmailIcon} width={width}/>
  </>;

  const ContentPageCSS = `relative ${ !isMobile ? "left-[5%] w-[85%]" : "left-0 w-full" } h-screen snap-start`;

  return (
    <div className="h-screen w-full overflow-y-auto scroll-smooth snap-y snap-mandatory bg-[#111111]">
      { !isMobile ?
        <div className="absolute left-0 w-[5%] h-screen flex flex-col gap-5 justify-start items-center">
          <VerticalLine />
          <QuickAccessIcons width={ isMobile ? "20px" : "30px" }/>
        </div> :
        <div className="absolute top-0 left-0 w-full h-[5%] flex flex-row justify-between items-center pt-4 px-5 z-10">
          <a href="#landing" className="text-[#FFFFFF] text-[20px] tracking-wider">GJY</a>
          <div className="flex flex-row gap-3">
            <QuickAccessIcons width={ isMobile ? "20px" : "30px" }/>
          </div>
        </div>
      }

      <LandingPage className={ContentPageCSS} isMobile={isMobile}/>
      <ExperiencesPage className={ContentPageCSS} isMobile={isMobile}/>
      <ProjectsPage className={ContentPageCSS} isMobile={isMobile}/>
      
      { !isMobile &&
        <div className="absolute top-0 right-0 w-[10%] h-screen flex flex-col gap-2 justify-end items-end pr-10 text-[#FFFFFF]">
          <a href="#landing">Welcome</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Projects</a>
          <VerticalLine />
        </div> 
      }
    </div>
  );

    
}

export default App;
