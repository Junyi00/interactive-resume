import BackgroundBottom from 'assets/background_bottom.png';
import BackgroundTop from 'assets/background_top.png';

interface BackgroundImageProps {
  className?: string;
}

const BackgroundImage = ({ className }: BackgroundImageProps) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 grid-rows-1 hover:[&>*:first-child]:scale-110">
        <img src={BackgroundTop} className="row-start-1 col-start-1 z-20 transition-transform ease-in-out" alt="" />
        <img src={BackgroundBottom} className="row-start-1 col-start-1 z-10" alt="" />
      </div>
    </div>
  );
};

export default BackgroundImage;