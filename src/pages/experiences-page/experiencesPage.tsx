interface ExperiencesPageProps {
  className: string;
  isMobile: boolean;
}


const ExperiencesPage = ({ className, isMobile }: ExperiencesPageProps) => {
  return <div id="experiences" className={`${className} bg-[#000000] text-[#FFFFFF]`}>
    Experiences
  </div>
};

export default ExperiencesPage;