import "./style.css";
import { Botoes } from "../button";

export function CardTrad({ foto, tipo, tipo2, desc, preco}) {
  return (
    <div id="card">
      <img src={foto} alt="foto do café" id="cafe" />
      <p id="tp">{tipo}</p>
      <p id="tp2">{tipo2}</p>
      <p id="desc">{desc}</p>
      <Botoes val={preco}/>
    </div>
  );
}
