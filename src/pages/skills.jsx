import PageTitle from "../components/PageTitle";
import SkillCase from "../components/SkillCase";
import { skills } from "../utils/data";

const Skills = () => {
  return (
    <>
      <PageTitle title="SKILLS" />
      <div className="min-h-max px-4 mt-10 w-full rounded-lg">
        <SkillCase items={skills} />
      </div>
    </>
  );
};

export default Skills;