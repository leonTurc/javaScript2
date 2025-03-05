import { useState } from "react";
import "./style.css";

export function Adicionais() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}> - </button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button type="submit" id="compra">
        <img src="src/img/compras.png" alt="carrinho de compras" />
      </button>
    </div>
  );
}
