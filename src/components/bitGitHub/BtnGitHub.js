import gitHubIcon from "./img/icons/gitHub-black.svg";
import "./style.css";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link}  className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
