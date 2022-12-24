interface LandingPageProps {
  className: string;
}

const LandingPage = ({ className }: LandingPageProps) => {
  return <div className={`${className} text-[#FFFFFF]`}>
    Landing
  </div>;
};

export default LandingPage;