interface LandingPageProps {
  className: string;
  windowWidth: number;
}

const LandingPage = ({ className, windowWidth }: LandingPageProps) => {
  return <div className={`${className} bg-[#000000] text-[#FFFFFF] p-5`}>
    Landing
  </div>;
};

export default LandingPage;