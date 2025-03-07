import { useState } from "react";
import "./style.css";

export function Botoes({ val }) {
  const [count, setCount] = useState(0);

  return (
    <div id="btns">
      <p id="valor">R$<span id="val2">{val}</span></p>
      <div id="maisMenos">
        <button className="butao" onClick={() => setCount(count - 1)}> - </button>
        <p>{count}</p>
        <button className="butao" onClick={() => setCount(count + 1)}> + </button>
      </div>
      <button type="submit" id="compra">
        <img src="src/img/market.png" alt="carrinho de compras" />
      </button>
    </div>
  );
}
