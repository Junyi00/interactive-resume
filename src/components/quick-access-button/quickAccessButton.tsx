
interface QuickAccessButtonProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width: string;
  onClick?: () => void;
}

const QuickAccessButton = ({ Icon, width, onClick }: QuickAccessButtonProps) => {
  return <div 
    className={`w-fit h-fit cursor-pointer [&>svg>path]:fill-icon [&>svg>path]:hover:fill-primary [&>svg>path]:transition [&>svg>path]:ease-in-out`}
    onClick={onClick}
  >
    <Icon width={width}/>
  </div>;
};

export default QuickAccessButton; 