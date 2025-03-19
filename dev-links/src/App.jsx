import { MoonStars } from "@phosphor-icons/react";
import alessandroChan from "./assets/img/alessandro-chan.jpg";
import { ButtonLink } from "./components/buttons";
import {
  GithubLogo,
  YoutubeLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

export function App() {
  return (
    <div className="container">
      <div className="profile">
        <img src={alessandroChan} alt="" />
        <p>@AlessandroCaminhões-chan</p>
      </div>
      <div className="toggle-container">
        <div className="toggle-switch dark">
          <MoonStars size={16} />
        </div>
      </div>
      <div className="links">
        <ButtonLink name="inscreva-se no NWL" link="" />
        <ButtonLink name="baixe meu e-book" link="" />
        <ButtonLink name="veja meu portfolio" link="" />
        <ButtonLink name="conheça o explorer" link="" />
      </div>
      <div className="midia">
        <GithubLogo size={24}/>
        <InstagramLogo size={24}/>
        <YoutubeLogo size={24}/>
        <LinkedinLogo size={24}/>
      </div>
    </div>
  );
}
