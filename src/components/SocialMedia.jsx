import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

export const GITHUB_URL = "https://github.com/ankitagrg";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ankita-gurung-97312a2a8/";
export const MAIL = "ankitagurung43@gmail.com";


export const SocialMedia = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <IconContext.Provider value={{ size: "24px", className: "text-black-700 hover:text-black transition-transform transform hover:scale-125" }}>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href={`mailto:${MAIL}`} target="_blank" rel="noopener noreferrer">
          <LuMail />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default SocialMedia;
