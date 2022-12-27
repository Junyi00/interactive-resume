interface PageHeaderProps {
  className?: string;
  text: string;
}

const PageHeader = ({ className, text }: PageHeaderProps) => {
  return <p className={`${className} text-[30px] font-bold tracking-wider`}>
    {text}
  </p>;
};

export default PageHeader;