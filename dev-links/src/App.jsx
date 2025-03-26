import { ButtonLink } from "./components/buttons";
import {
  Moon,
  Sun,
  GithubLogo,
  YoutubeLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

import { api } from "./services/api";
import { useEffect, useState } from "react";
import { useTheme } from "./context/themeContext";

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/leonTurc");
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.log("erro ao buscar dados do fodendo usuario", error);
      }
    }

    getUserData();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <div className="profile">
        <img src={user.avatar_url} alt="" />
        <p>@{user.login}</p>
      </div>
      <div className="toggle-container" onClick={toggleTheme}>
        <div className="toggle-switch dark">
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </div>
      </div>
      <div className="links">
        <ButtonLink name="inscreva-se no NWL" link="" />
        <ButtonLink name="baixe meu e-book" link="" />
        <ButtonLink name="veja meu portfolio" link="" />
        <ButtonLink name="conheça o explorer" link="" />
      </div>
      <div className="midia">
        <a href="https://github.com/leonTurc">
        <GithubLogo size={24} />
        </a>
        <a href="https://www.instagram.com">
        <InstagramLogo size={24} />
        </a>
        <a href="https://www.youtube.com">
        <YoutubeLogo size={24} />
        </a>
        <a href="https://www.linkedin.com/">
        <LinkedinLogo size={24} />
        </a>
      </div>
    </div>
  );
}
