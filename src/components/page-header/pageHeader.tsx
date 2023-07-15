interface PageHeaderProps {
  className?: string;
  text: string;
}

const PageHeader = ({ className, text }: PageHeaderProps) => {
  return <h2 className={`${className} text-[30px] leading-[40px] font-bold tracking-wider`}>
    {text}
  </h2>;
};

export default PageHeader;