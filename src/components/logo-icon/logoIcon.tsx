import {ReactComponent as ReactIcon} from "assets/icons/react.svg";
import {ReactComponent as IonicIcon} from "assets/icons/ionic.svg";
import {ReactComponent as ReduxIcon} from "assets/icons/redux.svg";
import {ReactComponent as TypeScriptIcon} from "assets/icons/typescript.svg";
import {ReactComponent as TailwindCSSIcon} from "assets/icons/tailwindcss-icon.svg";
import {ReactComponent as PythonIcon} from "assets/icons/python.svg";
import {ReactComponent as PyTorchIcon} from "assets/icons/pytorch-icon.svg";
import {ReactComponent as GithubIcon} from "assets/icons/github.svg";
import {ReactComponent as FigmaIcon} from "assets/icons/figma.svg";
import {ReactComponent as DevPostIcon} from "assets/icons/devpost.svg";
import {ReactComponent as OpenIcon} from "assets/icons/open-in-new.svg";
import {ReactComponent as PostgreSQLIcon} from "assets/icons/postgresql.svg";
import {ReactComponent as GitIcon} from "assets/icons/git.svg";
import {ReactComponent as JavaIcon} from "assets/icons/java.svg";
import {ReactComponent as RubyIcon} from "assets/icons/ruby.svg";
import {ReactComponent as TensorFlowIcon} from "assets/icons/tensorflow-icon.svg";
import {ReactComponent as StorybookIcon} from "assets/icons/storybook.svg";
import {ReactComponent as CIcon} from "assets/icons/c.svg";
import {ReactComponent as JavaScriptIcon} from "assets/icons/javascript.svg";
import {ReactComponent as MaterialUIIcon} from "assets/icons/material-ui.svg";
import {ReactComponent as RailsIcon} from "assets/icons/rails.svg";
import {ReactComponent as DockerIcon} from "assets/icons/docker-tile.svg";
import {ReactComponent as DashIcon} from "assets/icons/dash_plotly.svg";
import {ReactComponent as FlaskIcon} from "assets/icons/flask-icon.svg";
import {ReactComponent as DjangoIcon} from "assets/icons/django-logo-negative.svg";
import {ReactComponent as MangoDBIcon} from "assets/icons/mongodb.svg";
import {ReactComponent as Neo4JIcon} from "assets/icons/neo4j-icon-colored.svg"; 
import {ReactComponent as NginxIcon} from "assets/icons/nginx-icon.svg"; 
import {ReactComponent as MySQLIcon} from "assets/icons/mysql-icon.svg"; 
import {ReactComponent as PandasIcon} from "assets/icons/pandas.svg"
import {ReactComponent as RecoilIcon} from "assets/icons/recoil.svg";
import ElixirIcon from "assets/icons/elixir-lang-icon.png";
import {ReactComponent as EctoIcon} from "assets/icons/ecto.svg";

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
  PostgreSQL = "PostgreSQL",
  Git = "Git",
  Java = "Java",
  Ruby = "Ruby",
  TensorFlow = "TensorFlow",
  Storybook = "Storybook",
  C = "C",
  JavaScript = "JavaScript",
  MaterialUI = "MaterialUI",
  Rails = "Rails",
  Docker = "Docker",
  Dash = "Dash/Plotly",
  Flask = "Flask",
  Django = "Django",
  MongoDB = "MongoDB",
  Neo4J = "Neo4J",
  Nginx = "Nginx",
  MySQL = "MySQL",
  Pandas = "Pandas",
  Recoil = "Recoil",
  Elixir = "Elixir",
  Ecto = "Ecto",
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
  PostgreSQL: PostgreSQLIcon,
  Git: GitIcon,
  Java: JavaIcon,
  Ruby: RubyIcon,
  TensorFlow: TensorFlowIcon,
  Storybook: StorybookIcon,
  C: CIcon,
  JavaScript: JavaScriptIcon,
  MaterialUI: MaterialUIIcon,
  Rails: RailsIcon,
  Docker: DockerIcon,
  "Dash/Plotly": DashIcon,
  Flask: FlaskIcon,
  Django: DjangoIcon,
  MongoDB: MangoDBIcon,
  Neo4J: Neo4JIcon,
  Nginx: NginxIcon,
  MySQL: MySQLIcon,
  Pandas: PandasIcon,
  Recoil: RecoilIcon,
  Elixir: ({width, height}: {width?: string; height?: string;}) => <img src={ElixirIcon} width={width} height={height} alt=""/>,
  Ecto: EctoIcon,
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
  PostgreSQL: "https://www.postgresql.org/",
  Git: "https://git-scm.com/",
  Java: "https://www.java.com/",
  Ruby: "https://www.ruby-lang.org/",
  TensorFlow: "https://www.tensorflow.org/",
  Storybook: "https://storybook.js.org/",
  C: "https://en.wikipedia.org/wiki/C_(programming_language)",
  JavaScript: "https://www.javascript.com/",
  MaterialUI: "https://mui.com/",
  Rails: "https://rubyonrails.org/",
  Docker: "https://www.docker.com/",
  "Dash/Plotly": "https://dash.plotly.com/",
  Flask: "https://flask.palletsprojects.com/",
  Django: "https://www.djangoproject.com/",
  MongoDB: "https://www.mongodb.com/",
  Neo4J: "https://neo4j.com/",
  Nginx: "https://www.nginx.com/",
  MySQL: "https://www.mysql.com/",
  Pandas: "https://pandas.pydata.org/",
  Recoil: "https://recoiljs.org/",
  Elixir: "https://elixir-lang.org/",
  Ecto: "https://hexdocs.pm/ecto/Ecto.html",
}

interface LogoIconProps {
  name: LogoType;
  length?: string;
  link?: string;
}

const LogoIcon = ({ name, length, link }: LogoIconProps) => {
  const DEFAULT_LENGTH = "24px";
  const onLogoClick = () => window.open(link || LogoLink[name]);

  const Icon = LogoSVG[name];
  return <div className="flex flex-col items-center cursor-pointer [&>svg]:hover:drop-shadow-md [&>*]:hover:ease-in-out [&>*]:hover:transition [&>p]:hover:visible w-[32px]" onClick={onLogoClick}>
    <Icon width={length || DEFAULT_LENGTH} height={length || DEFAULT_LENGTH} />
    <p className="text-[10px] invisible">{name}</p>
  </div>
};

export default LogoIcon;