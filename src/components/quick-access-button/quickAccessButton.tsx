
interface QuickAccessButtonProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width: string;
  onClick?: () => void;
}

const QuickAccessButton = ({ Icon, width, onClick }: QuickAccessButtonProps) => {
  return <div 
    className="w-fit h-fit [&>svg>path]:hover:opacity-50"
    onClick={onClick}
  >
    <Icon width={width}/>
  </div>;
};

export default QuickAccessButton; 