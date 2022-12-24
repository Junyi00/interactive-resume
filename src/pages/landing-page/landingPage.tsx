import BackgroundImg from '../../assets/background_img.png';

interface LandingPageProps {
  className: string;
  isMobile: boolean;
}

const LandingPage = ({ className, isMobile }: LandingPageProps) => {
  return <div id="landing" className={`${className} bg-[#000000] text-[#FFFFFF] p-5 flex ${ isMobile ? "flex-col-reverse" : "flex-row" } gap-2 items-center justify-center`}>
    <div className="flex flex-col items-end">
      <p className="text-right text-[#595959] text-[40px]">Hello there! I am</p>
      <div className="w-fit flex flex-col items-end gap-1">
        <p className="text-right text-[#FFFFFF] text-[40px]">Goh Jun Yi</p>
        <div className="border-t w-full border-[#438EFF]"/>
        <div className="border-t w-[60%] border-[#438EFF]"/>
      </div>
    </div>

    <img src={BackgroundImg} width={isMobile ? "100%" : "40%"}/>
  </div>;
};

export default LandingPage;