import "./style.css";
import { Adicionais } from "../button";

export function CardTrad({ foto, tipo, tipo2, desc }) {
  return (
    <div id="card">
      <img src={foto} alt="foto do café" id="cafe" />
      <p id="tipo">{tipo}</p>
      <p id="tp2">{tipo2}</p>
      <p id="desc">{desc}</p>
      <Adicionais/>
    </div>
  );
}
