import { TypeAnimation } from 'react-type-animation';

import BackgroundImage from 'components/background-image/backgroundImage';

interface LandingPageProps {
  className: string;
  scrollTop: number;
  onHover: () => void;
}

const HighlightText: React.FC<{children: React.ReactNode}> = ({ children }) => <span className="text-primary">{children}</span>;

const LandingPage = ({ className, scrollTop, onHover }: LandingPageProps) => {

  return <div 
    id="landing"
    className={`${className} bg-background text-text p-5 grid grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center`}
    onMouseEnter={onHover}
  >
    <div className="w-fit mx-auto flex flex-col items-start lg:items-end gap-4">
      <div className="flex flex-col items-start lg:items-end w-fit">
        <span className="text-left lg:text-right text-subtext text-[35px] leading-[45px]">Hello there! I am</span>
        <h1 className="text-left lg:text-right font-bold text-text text-[55px] leading-[65px] hover:text-primary transition-all duration-200 ease-in-out">
          <TypeAnimation
            sequence={[
              'Goh Jun Yi',
              2000,
              '',
              500
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </h1>
      </div>

      <p className="w-full text-left lg:w-5/6 lg:text-right text-subtext">
        I am currently a <HighlightText>final year</HighlightText> computer science student in <HighlightText>National University of Singapore</HighlightText>.
      </p>
    </div>

    <BackgroundImage translateY={scrollTop} className="max-w-[500px] hidden lg:block" />
  </div>;
};

export default LandingPage;