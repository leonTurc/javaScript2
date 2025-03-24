import "./style.css";

export function Card({img, title, desc, price}) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h1 className="title">{ title }</h1>
      <p>{ desc }</p>
      <strong>R${price}</strong>
      <button type="button">comprar agora</button>
    </div>
  );
}
