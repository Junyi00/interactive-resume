
interface QuickAccessButtonProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width: string;
  onClick?: () => void;
}

const QuickAccessButton = ({ Icon, width, onClick }: QuickAccessButtonProps) => {
  return <div 
    className="w-fit h-fit cursor-pointer [&>svg>path]:hover:opacity-50 [&>svg>path]:transition-opacity"
    onClick={onClick}
  >
    <Icon width={width}/>
  </div>;
};

export default QuickAccessButton; 