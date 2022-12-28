import { useEffect, useState } from 'react';
import LandingPage from 'pages/landing-page/landingPage';
import ExperiencesPage from 'pages/experiences-page/experiencesPage';
import ProjectsPage from 'pages/projects-page/projectsPage';
import InfoPage from 'pages/info-page/infoPage';

import BackgroundImg from 'assets/background_img.png';
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
  3: "info"
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

  const ContentPageCSS = `w-full h-full snap-start ${ isMobile ? "min-w-[100%] w-screen" : "" }`;

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
                    ${ !isMobile ?
                      "grid grid-rows-1 grid-cols-[auto_auto_auto] snap-y snap-mandatory" : 
                      "flex flex-col min-h-screen max-h-screen" 
                    } 
                    overflow-y-auto scroll-smooth bg-[#111111]`}>

      { !isMobile ?
        <div className="col-start-1 sticky top-0 h-screen w-fit
                        flex flex-col gap-5 justify-start items-center pl-5">
          <VerticalLine />
          <QuickAccessIcons width="30px"/>
        </div> :
        <div className="sticky top-0 z-10 w-full h-[38px] flex flex-row justify-between items-center pt-2 px-5 bg-[#111111]">
          <a href="#landing" className="text-[#FFFFFF] text-[20px] tracking-wider">GJY</a>
          <div className="flex flex-row gap-3">
            <QuickAccessIcons width="20px"/>
          </div>
        </div>
      }

      <div className={`${ !isMobile ? 
        "col-start-2 min-w-0 min-h-0 h-screen w-auto" : 
        "w-screen h-full" }`}
      >
        <LandingPage className={ContentPageCSS} isMobile={isMobile} onHover={onPageHover(0)}/>
        <ExperiencesPage className={ContentPageCSS} isMobile={isMobile} onHover={onPageHover(1)}/>
        <ProjectsPage className={ContentPageCSS} isMobile={isMobile} onHover={onPageHover(2)}/>
        <InfoPage className={ContentPageCSS} isMobile={isMobile} onHover={onPageHover(3)}/>
      </div>
      
      { !isMobile &&
        <div className="col-start-3 sticky top-0 h-screen w-fit flex flex-col gap-2 justify-end items-end pr-5 text-[#595959]">
          <PageNavigationButton href={`#${PAGE_IDS[0]}`} page={0} text="Welcome"/>
          <PageNavigationButton href={`#${PAGE_IDS[1]}`} page={1} text="Experiences"/>
          <PageNavigationButton href={`#${PAGE_IDS[2]}`} page={2} text="Projects"/>
          <PageNavigationButton href={`#${PAGE_IDS[3]}`} page={3} text="Info"/>
          <VerticalLine />
        </div> 
      }

      { isMobile && 
        <div className="fixed bottom-0 right-0 w-fit h-fit p-2 flex flex-row justify-end">
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

      { isMobile && 
          <img className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none" alt="background" src={BackgroundImg} width="100%"/>
      }
    </div>
  );
    
}

export default App;
