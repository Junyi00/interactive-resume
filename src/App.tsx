import { useEffect, useState } from 'react';
import LandingPage from './pages/landing-page/landingPage';
import ExperiencesPage from './pages/experiences-page/experiencesPage';

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

  const ContentPageCSS = `relative ${ windowWidth > 600 ? "left-[5%] w-[85%]" : "left-0 w-full" } h-screen snap-start`;

  return (
    <div className="h-screen w-full overflow-y-auto scroll-smooth snap-y snap-mandatory bg-[#000000]">
      { windowWidth > 600 && 
        <div className="absolute left-0 w-[5%] h-screen flex flex-col gap-1 justify-start items-center">
          <VerticalLine />
        </div>
      }

      <LandingPage className={ContentPageCSS} isMobile={isMobile}/>
      <ExperiencesPage className={ContentPageCSS} isMobile={isMobile}/>
      
      { windowWidth > 600 && 
        <div className="absolute top-0 right-0 w-[10%] h-screen flex flex-col gap-1 justify-end items-center">
          <VerticalLine />
        </div>
      }
    </div>
  );

    
}

export default App;
