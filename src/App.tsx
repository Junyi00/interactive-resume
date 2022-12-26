import { useEffect, useState } from 'react';
import LandingPage from 'pages/landing-page/landingPage';
import ExperiencesPage from 'pages/experiences-page/experiencesPage';
import ProjectsPage from 'pages/projects-page/projectsPage';

import {ReactComponent as ResumeIcon} from 'assets/icons/resume_btn.svg';
import {ReactComponent as GithubIcon} from 'assets/icons/github_btn.svg';
import {ReactComponent as LinkedinIcon} from 'assets/icons/linkedin_btn.svg';
import {ReactComponent as EmailIcon} from 'assets/icons/email_btn.svg';
import {ReactComponent as NavigationLeft} from "assets/navigation/navigation_left.svg";
import {ReactComponent as NavigationRight} from "assets/navigation/navigation_right.svg";
import QuickAccessButton from 'components/quick-access-button/quickAccessButton';

const PAGE_IDS: { [key: number]: string } = {
  0: "landing",
  1: "experiences",
  2: "projects",
}

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
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
    <QuickAccessButton Icon={ResumeIcon} width={width} onClick={() => window.open("/Resume_Goh_Jun_Yi.pdf")}/>
    <QuickAccessButton Icon={GithubIcon} width={width} onClick={() => window.open("https://github.com/Junyi00")}/>
    <QuickAccessButton Icon={LinkedinIcon} width={width} onClick={() => window.open("https://sg.linkedin.com/in/goh-jun-yi")}/>
    <QuickAccessButton Icon={EmailIcon} width={width} onClick={() => window.open("mailto:gohjunyi00@gmail.com")}/>
  </>;

  const ContentPageCSS = `relative ${ !isMobile ? "w-full" : "left-0 w-full" } h-screen snap-start`;

  const PageNavigationButton: React.FC<{text: string, page: number, href: string}> = ({ text, page, href }) => <a 
    href={href}
    className={`${currentPage === page ? "text-[#438EFF]" : "hover:text-[#FFFFFF]"}`}
    onClick={() => setCurrentPage(page)}
  >
    {text}
  </a>;

  const onPageHover = (pageNum: number) => () => {
    setCurrentPage(pageNum);
  };

  const onMobileNavigation = (left: boolean) => () => {
    if ((left && currentPage === 0) || (!left && currentPage === Object.keys(PAGE_IDS).length - 1)) {
      return;
    }

    const nextPage: number = left ? currentPage - 1 : currentPage + 1;
    const targetRef = document.getElementById(PAGE_IDS[nextPage]);

    if (targetRef === null) {
      return;
    }

    targetRef.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrentPage(nextPage);
  }

  return (
    <div className={`h-screen w-screen max-w-screen
                    ${ !isMobile ? "grid grid-rows-1 grid-cols-[auto_auto_auto]" : "flex flex-col" } 
                    overflow-y-auto scroll-smooth snap-y snap-mandatory bg-[#111111]`}>
      { !isMobile ?
        <div className="col-start-1 sticky top-0 h-screen w-fit
                        flex flex-col gap-5 justify-start items-center pl-5">
          <VerticalLine />
          <QuickAccessIcons width="30px"/>
        </div> :
        <div className="fixed left-0 top-0 w-full h-fit flex flex-row justify-between items-center pt-2 px-5 z-10">
          <a href="#landing" className="text-[#FFFFFF] text-[20px] tracking-wider">GJY</a>
          <div className="flex flex-row gap-3">
            <QuickAccessIcons width="20px"/>
          </div>
        </div>
      }

      <div className={`${ !isMobile ? "col-start-2 min-w-0 min-h-0 h-screen w-auto" : "flex-grow w-full" } `}>
        <LandingPage className={ContentPageCSS} isMobile={isMobile} onHover={onPageHover(0)}/>
        <ExperiencesPage className={ContentPageCSS} isMobile={isMobile} onHover={onPageHover(1)}/>
        <ProjectsPage className={ContentPageCSS} isMobile={isMobile} onHover={onPageHover(2)}/>
      </div>
      
      { !isMobile &&
        <div className="col-start-3 sticky top-0 h-screen w-fit flex flex-col gap-2 justify-end items-end pr-5 text-[#595959]">
          <PageNavigationButton href={`#${PAGE_IDS[0]}`} page={0} text="Welcome"/>
          <PageNavigationButton href={`#${PAGE_IDS[1]}`} page={1} text="Experiences"/>
          <PageNavigationButton href={`#${PAGE_IDS[2]}`} page={2} text="Projects"/>
          <VerticalLine />
        </div> 
      }

      { isMobile && 
        <div className="absolute bottom-0 right-0 w-fit h-fit p-2 flex flex-row justify-end b">
          <NavigationLeft 
            className="z-10 opacity-30 hover:opacity-90 transition-opacity"
            onClick={onMobileNavigation(true)}
          />
          <NavigationRight
            className="z-10 opacity-30 hover:opacity-90 transition-opacity"
            onClick={onMobileNavigation(false)}
          />
        </div>
      }
    </div>
  );
    
}

export default App;
