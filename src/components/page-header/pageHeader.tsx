interface PageHeaderProps {
  className?: string;
  isMainHeader?: boolean;
  text: string;
}

const PageHeader = ({ className, isMainHeader=false, text }: PageHeaderProps) => {
  return <h2 className={`${className} text-[30px] leading-[40px] font-bold tracking-wider ${ isMainHeader ? "lg:mb-5" : "lg:mb-1" }`}>
    {text}
  </h2>;
};

export default PageHeader;