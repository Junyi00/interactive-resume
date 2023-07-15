import { LogoType } from "components/logo-icon/logoIcon";
import { Skillsets } from "components/skillsets-box/skillsetsBox";

const SkillsetsData: Skillsets = {
  Languages: {
    experienced: [LogoType.Python, LogoType.Java, LogoType.JavaScript, LogoType.TypeScript],
    familiar: [LogoType.C, LogoType.Ruby, LogoType.Elixir],
  },
  Frontend: {
    experienced: [LogoType.React, LogoType.TailwindCSS, LogoType.Redux, LogoType.MaterialUI, LogoType.Storybook],
    familiar: [LogoType.Ionic, LogoType.Dash, LogoType.Recoil],
  },
  Backend: {
    experienced: [LogoType.PostgreSQL, LogoType.Flask, LogoType.Rails],
    familiar: [LogoType.MongoDB, LogoType.Django, LogoType.Neo4J, LogoType.Elasticsearch],
  },
  Others: {
    experienced: [LogoType.Git, LogoType.Docker, LogoType.TensorFlow, LogoType.PyTorch],
    familiar: [LogoType.Nginx]
  }
};

export default SkillsetsData;