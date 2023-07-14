import { LogoType } from "components/logo-icon/logoIcon";
import { ProjectLink } from "pages/projects-page/projectEntry";

export interface ProjectType {
  id?: string;
  name: string;
  shortName?: string;
  date: string;
  description: string[];
  image: string;
  bgColor?: string;
  techStack?: LogoType[];
  links?: ProjectLink[];
}  