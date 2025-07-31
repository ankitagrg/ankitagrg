import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

export const GITHUB_URL = "https://github.com/ankitagrg";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ankita-gurung-97312a2a8/";
export const MAIL = "ankitagurung43@gmail.com";

const SocialMedia = () => {
  return (
    <div className="flex justify-start items-center gap-2 mt-1">
      <IconContext.Provider
        value={{
          size: "24px",
          className:
            "text-black hover:text-black-800 transition-transform duration-300 transform hover:scale-110",
        }}
      >
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <BsGithub />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          href={`mailto:${MAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <LuMail />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default SocialMedia;
