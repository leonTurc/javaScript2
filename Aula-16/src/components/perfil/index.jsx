import "./styles.css";
import { Pen } from "@phosphor-icons/react";
import { Pfp } from "../pfp/index";

export function Perfil({ image, name, desc }) {
  return (
    <div className="container">
      <div className="perf">
        <Pfp image={image} />
        <p>{name}</p>
        <p>{desc}</p>
      </div>
      <div className="editamento">
        <button>
          <Pen />
          Editar seu perfil
        </button>
      </div>
    </div>
  );
}
