interface PageHeaderProps {
  className?: string;
  isMainHeader?: boolean;
  text: string;
}

const PageHeader = ({ className, isMainHeader=false, text }: PageHeaderProps) => {
  return <h2 className={`${className} text-[30px] leading-[40px] font-bold tracking-wider ${ isMainHeader ? "md:mb-5" : "md:mb-1" }`}>
    {text}
  </h2>;
};

export default PageHeader;