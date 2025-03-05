import { useState } from "react";
import "./style.css";

export function Botoes({ val }) {
  const [count, setCount] = useState(0);

  return (
    <div id="btns">
      <p id="valor">{val}</p>
      <div id="maisMenos">
        <button onClick={() => setCount(count - 1)}> - </button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
      <button type="submit" id="compra">
        <img src="src/img/compras.png" alt="carrinho de compras" />
      </button>
    </div>
  );
}
