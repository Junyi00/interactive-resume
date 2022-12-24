interface ExperiencesPageProps {
  className: string;
  windowWidth: number;
}


const ExperiencesPage = ({ className, windowWidth }: ExperiencesPageProps) => {
  return <div className={`${className} bg-[#000000] text-[#FFFFFF]`}>
    Experiences
  </div>
};

export default ExperiencesPage;