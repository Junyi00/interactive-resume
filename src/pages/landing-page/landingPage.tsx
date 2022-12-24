import BackgroundImg from '../../assets/background_img.png';

interface LandingPageProps {
  className: string;
  isMobile: boolean;
}

interface HighlightTextProps {
  children: React.ReactNode;
}

const HighlightText = ({ children }: HighlightTextProps) => <span className="text-[#438EFF]">{children}</span>;
const HorizontalLine: React.FC<{className: string}> = ({ className }) => <div className={`${className} border-t border-[#438EFF]`}/>

const LandingPage = ({ className, isMobile }: LandingPageProps) => {
  const flexItemAlignment = isMobile ? "items-start" : "items-end";

  return <div id="landing" className={`${className} bg-[#000000] text-[#FFFFFF] p-5 flex ${ isMobile ? "flex-col-reverse" : "flex-row" } gap-2 items-center justify-center`}>
    <div className={`flex flex-col ${flexItemAlignment} gap-4`}>
      <div className={`flex flex-col ${flexItemAlignment} w-fit`}>
        <p className="text-right text-[#595959] text-[40px] leading-[50px]">Hello there! I am</p>

        <div className="w-fit flex flex-col items-end gap-1">
          <p className="text-right text-[#FFFFFF] text-[40px] leading-[50px]">Goh Jun Yi</p>
          <HorizontalLine className="w-full"/>
          <HorizontalLine className="w-[60%]"/>
        </div>
      </div>

      <p className={`${ isMobile ? "w-full text-left" : "w-[60%] text-right" } text-[#595959]`}>
        I am currently a <HighlightText>Year 2</HighlightText> computer science student in <HighlightText>National University of Singapore</HighlightText>.
      </p>
    </div>

    <img src={BackgroundImg} width={isMobile ? "100%" : "40%"}/>
  </div>;
};

export default LandingPage;