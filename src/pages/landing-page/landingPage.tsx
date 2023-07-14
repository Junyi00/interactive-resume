import { TypeAnimation } from 'react-type-animation';

import BackgroundImg from 'assets/background_img.png';

interface LandingPageProps {
  className: string;
  isMobile: boolean;
  onHover: () => void;
}

const HighlightText: React.FC<{children: React.ReactNode}> = ({ children }) => <span className="text-primary">{children}</span>;
const HorizontalLine: React.FC<{className: string}> = ({ className }) => <div className={`${className} border-t border-primary`}/>

const LandingPage = ({ className, isMobile, onHover }: LandingPageProps) => {
  const flexItemAlignment = isMobile ? "items-start" : "items-end";

  return <div 
    id="landing" 
    className={`${className} bg-background text-text p-5 flex ${ isMobile ? "flex-col-reverse" : "flex-row" } gap-2 items-center justify-center`}
    onMouseEnter={onHover}
  >
    <div className={`flex flex-col ${flexItemAlignment} gap-4`}>
      <div className={`flex flex-col ${flexItemAlignment} w-fit`}>
        <span className="text-left md:text-right text-subtext text-[35px] leading-[45px]">Hello there! I am</span>
        <span className="text-left md:text-right font-bold text-text text-[55px] leading-[65px] hover:text-primary transition-all duration-200 ease-in-out">
          <TypeAnimation
            sequence={[
              'Goh Jun Yi',
              1500,
              '',
              500
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </span>
      </div>

      <p className={`${ isMobile ? "w-full text-left" : "w-[60%] text-right" } text-subtext`}>
        I am currently a <HighlightText>Year 3</HighlightText> computer science student in <HighlightText>National University of Singapore</HighlightText>.
      </p>
    </div>

    <img className={ isMobile ? "fixed opacity-10 hidden" : "hover:w-[45%] transition-all duration-100 ease-in-out" } alt="background" src={BackgroundImg} width={isMobile ? "100%" : "40%"}/>
  </div>;
};

export default LandingPage;