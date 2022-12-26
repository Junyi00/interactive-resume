import {ReactComponent as ReactIcon} from "assets/icons/react.svg";
import {ReactComponent as IonicIcon} from "assets/icons/ionic.svg";
import {ReactComponent as ReduxIcon} from "assets/icons/redux.svg";
import {ReactComponent as TypeScriptIcon} from "assets/icons/typescript.svg";
import {ReactComponent as TailwindCSSIcon} from "assets/icons/tailwind-css.svg";
import {ReactComponent as PythonIcon} from "assets/icons/python.svg";
import {ReactComponent as PyTorchIcon} from "assets/icons/pytorch-icon.svg";
import {ReactComponent as GithubIcon} from "assets/icons/github.svg";
import {ReactComponent as FigmaIcon} from "assets/icons/figma.svg";
import {ReactComponent as DevPostIcon} from "assets/icons/devpost.svg";
import {ReactComponent as OpenIcon} from "assets/icons/open-in-new.svg";

export enum LogoType {
  React = "React",
  Ionic = "Ionic",
  Redux = "Redux",
  TypeScript = "TypeScript",
  TailwindCSS = "TailwindCSS",
  Python = "Python",
  PyTorch = "PyTorch",
  Github = "Github",
  Figma = "Figma",
  DevPost = "DevPost",
  View = "View",
}

const LogoSVG = {
  React: ReactIcon,
  Ionic: IonicIcon,
  Redux: ReduxIcon,
  TypeScript: TypeScriptIcon,
  TailwindCSS: TailwindCSSIcon,
  Python: PythonIcon,
  PyTorch: PyTorchIcon,
  Github: GithubIcon,
  Figma: FigmaIcon,
  DevPost: DevPostIcon,
  View: OpenIcon,
}

const LogoLink = {
  React: "https://reactjs.org/",
  Ionic: "https://ionicframework.com/",
  Redux: "https://redux.js.org/",
  TypeScript: "https://www.typescriptlang.org/",
  TailwindCSS: "https://tailwindcss.com/",
  Python: "https://www.python.org/",
  PyTorch: "https://pytorch.org/",
  Github: "https://github.com/",
  Figma: "https://www.figma.com/",
  DevPost: "https://devpost.com/",
  View: "",
}

interface LogoIconProps {
  name: LogoType;
  link?: string;
}

const LogoIcon = ({ name, link }: LogoIconProps) => {
  const onLogoClick = () => window.open(link || LogoLink[name]);

  const Icon = LogoSVG[name];
  return <div className="flex flex-col items-center [&>*]:hover:opacity-70 [&>p]:hover:visible w-[32px]" onClick={onLogoClick}>
    <Icon width="24px" height="24px" />
    <p className="text-[10px] invisible">{name}</p>
  </div>
};

export default LogoIcon;