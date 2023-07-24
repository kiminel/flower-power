import { Link } from "react-router-dom";
import LinkedInLogo from "../icons/LinkedInLogo";
import GithubLogo from "../icons/GithubLogo";
import PortfolioIcon from "../icons/PortfolioIcon";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-between h-60px bg-red z-100">
      <div className="flex gap-x-2 pl-8 items-center">
        <Link
          to={"https://github.com/kiminel"}
          className="text-current hover:bg-white p-3 rounded-full hover:shadow-xl"
          target="_blank"
        >
          <GithubLogo className={"h-5 w-auto"} />
        </Link>

        <Link
          to={"https://www.linkedin.com/in/kimi-monique-nel-67a289191/"}
          className="text-current hover:bg-white p-3 rounded-full hover:shadow-xl"
          target="_blank"
        >
          <LinkedInLogo className={"h-5 w-auto"} />
        </Link>

        <Link
          to={"https://portfolio-kimi-nel.vercel.app/"}
          className="text-current hover:bg-white p-3 rounded-full hover:shadow-xl"
          target="_blank"
        >
          <PortfolioIcon className={"h-6 w-auto animate-bounce"} />
        </Link>
      </div>
      <div className="text-xs pt-2 pr-8">
        {new Date().getFullYear()} &copy; All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
