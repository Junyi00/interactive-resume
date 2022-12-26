import { useState, Children } from "react";
import "./carousell.css";

import {ReactComponent as NavigationLeft} from "assets/navigation/navigation_left.svg";
import {ReactComponent as NavigationRight} from "assets/navigation/navigation_right.svg";

interface CarousellProps {
  children?: React.ReactNode;
  width: string;
}

const Carousell = ({ children, width }: CarousellProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onNavClick = (left: boolean) => () => {
    if (left && currentSlide === 0) {
      return;
    }
    else if (!left && currentSlide === Children.count(children) - 1) {
      return;
    }

    const nextSlide = left ? currentSlide - 1 : currentSlide + 1;
    const aNav = document.getElementById(`a_carousell_${nextSlide}`);
    aNav?.click();
    setCurrentSlide(nextSlide)
  }

  return <div className={`relative h-fit w-[${width}] flex justify-center items-center`}>
    <div className="carousell w-[90%] h-fit py-2">
      {children}
    </div>
    <NavigationLeft 
      className="absolute left-0 translate-x-full top-[50%] -translate-y-1/2 text-[#FFFFFF] z-10 opacity-30 hover:opacity-90 transition-opacity"
      onClick={onNavClick(true)}
    />
    <NavigationRight 
      className="absolute right-0 -translate-x-full top-[50%] -translate-y-1/2 text-[#FFFFFF] z-10 opacity-30 hover:opacity-90 transition-opacity"
      onClick={onNavClick(false)}
    />
    {
      Children.map(children, (child, index) => <a key={index} id={`a_carousell_${index}`} href={`#carousell_${index}`} className="hidden">hidden</a>)
    }
  </div>
};

export default Carousell;
