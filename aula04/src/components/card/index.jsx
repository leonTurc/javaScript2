import "./styles.css";

export function Card({ title, preco, desc }) {
  return (
    <div id="cardBlack">
      <p id="desc">{desc}</p>

      <div id="principal">
        <h1 id="titulo"> {title} </h1>
        <p id="preco">
          {" "}
          <span id="cifrao">R$ </span>
          {preco}
          <span id="month">/mês</span>
        </p>
      </div>
    </div>
  );
}