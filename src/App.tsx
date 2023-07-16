import { useEffect, useState } from 'react';
import LandingPage from 'pages/landing-page/landingPage';
import ExperiencesPage from 'pages/experiences-page/experiencesPage';
import ProjectsPage from 'pages/projects-page/projectsPage';
import InfoPage from 'pages/info-page/infoPage';
import BackgroundImage from 'components/background-image/backgroundImage';
import QuickAccessButton from 'components/quick-access-button/quickAccessButton';

import {ReactComponent as ResumeIcon} from 'assets/icons/resume.svg';
import {ReactComponent as GithubIcon} from 'assets/icons/github.svg';
import {ReactComponent as LinkedinIcon} from 'assets/icons/linkedin.svg';
import {ReactComponent as EmailIcon} from 'assets/icons/email.svg';

import ProfileData from 'data/profileData';

const PAGE_IDS: { [key: number]: string } = {
  0: "landing",
  1: "experiences",
  2: "projects",
  3: "info"
};

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState(0);

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const MOBILE_WIDTH = 1024; // following tailwind large breakpoint

  const updateDimensions = () => { setWindowWidth(window.innerWidth) }

  useEffect(() => { 
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  useEffect(() => setIsMobile(windowWidth < MOBILE_WIDTH), [windowWidth]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  const VerticalLine = () => <div className="h-[5%] w-0 border-l border-line gap-1" />;
  const QuickAccessIcons: React.FC<{width: string}> = ({ width }) => <>
    <QuickAccessButton Icon={ResumeIcon} width={width} onClick={() => window.open(ProfileData.resume)}/>
    <QuickAccessButton Icon={GithubIcon} width={width} onClick={() => window.open(ProfileData.links.github)}/>
    <QuickAccessButton Icon={LinkedinIcon} width={width} onClick={() => window.open(ProfileData.links.linkedin)}/>
    <QuickAccessButton Icon={EmailIcon} width={width} onClick={() => window.open(`mailto:${ProfileData.email}`)}/>
  </>;

  const ContentPageCSS = "min-w-[100%] w-screen lg:w-full h-fit min-h-full py-5 last:pb-0";

  const PageNavigationButton: React.FC<{text: string, page: number, href: string}> = ({ text, page, href }) => <a 
    href={href}
    className={`transition-all ${currentPage === page ? "text-primary font-semibold" : "hover:font-semibold"}`}
    onClick={() => setCurrentPage(page)}
  >
    {text}
  </a>;

  const onPageHover = (pageNum: number) => () => {
    setCurrentPage(pageNum);
  };

  return (
    <div 
      className="h-screen w-screen max-w-screen
                 lg:grid lg:grid-rows-1 lg:grid-cols-[auto_auto_auto]
                 flex flex-col min-h-screen max-h-screen 
                 overflow-y-auto scroll-smooth bg-background"
      onScroll={handleScroll}
    >

      <div className="hidden lg:flex col-start-1 sticky top-0 h-screen w-fit
                      flex-col gap-5 justify-start items-center pl-5">
        <VerticalLine />
        <QuickAccessIcons width="30px"/>
      </div> 
      <div className="lg:hidden sticky top-0 z-10 w-full h-[40px] flex flex-row justify-between items-center pt-2 pb-1 px-5 bg-background">
        <a href="#landing" className="text-text text-[20px] tracking-wider">GJY</a>
        <div className="flex flex-row gap-3">
          <QuickAccessIcons width="20px"/>
        </div>
      </div>

      <div className="w-screen h-full lg:w-auto lg:h-screen lg:col-start-2">
        <LandingPage className={ContentPageCSS} scrollTop={scrollTop} onHover={onPageHover(0)}/>
        <ExperiencesPage className={ContentPageCSS} onHover={onPageHover(1)}/>
        <ProjectsPage className={ContentPageCSS} isMobile={isMobile} onHover={onPageHover(2)}/>
        <InfoPage className={ContentPageCSS} onHover={onPageHover(3)}/>
      </div>
      
      <div className="hidden lg:flex col-start-3 sticky top-0 h-screen w-fit flex-col gap-2 justify-end items-end pr-5 text-icon">
        <PageNavigationButton href={`#${PAGE_IDS[0]}`} page={0} text="Welcome"/>
        <PageNavigationButton href={`#${PAGE_IDS[1]}`} page={1} text="Experiences"/>
        <PageNavigationButton href={`#${PAGE_IDS[2]}`} page={2} text="Projects"/>
        <PageNavigationButton href={`#${PAGE_IDS[3]}`} page={3} text="Info"/>
        <VerticalLine />
      </div> 

      <BackgroundImage className="lg:hidden w-full fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none" />
    </div>
  );
    
};

export default App;
