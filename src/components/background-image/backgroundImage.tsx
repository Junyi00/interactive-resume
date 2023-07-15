import { useEffect, useState } from 'react';

import BackgroundBottom from 'assets/background_bottom.png';
import BackgroundTop from 'assets/background_top.png';

interface BackgroundImageProps {
  className?: string;
  translateY?: number;
}

const BackgroundImage = ({ className, translateY }: BackgroundImageProps) => {
  const FLY_UP_THRESHOLD = 150;

  const [inAnimate, setInAnimate] = useState<boolean>(true);

  // Flies in from above on component load 
  useEffect(() => {
    setInAnimate(false);
  }, [])

  return (
    <div className={className}>
      <div className="grid grid-cols-1 grid-rows-1">
        <img 
          alt=""
          src={BackgroundTop} 
          className={`row-start-1 col-start-1 z-20 transition-transform duration-[1500ms] ease-in-out 
                      ${ translateY && translateY > FLY_UP_THRESHOLD ? "translate-y-[-100vw]" : "" }
                      ${ inAnimate && "translate-y-[-100vw]" }`}
        />
        <img src={BackgroundBottom} className="row-start-1 col-start-1 z-10" alt="" />
      </div>
    </div>
  );
};

export default BackgroundImage;