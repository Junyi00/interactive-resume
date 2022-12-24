interface LandingPageProps {
  className: string;
}

const LandingPage = ({ className }: LandingPageProps) => {
  return <div className={ className }>
    Landing
  </div>;
};

export default LandingPage;