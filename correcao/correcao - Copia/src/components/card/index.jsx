import { ShoppingCart } from "lucide-react";
import "./styles.css";
import { useState } from "react";

export function Card({ coffeeImg, tags, title, description }) {
  const [count, setCount] = useState(0);
  return (
    <div id="card">
      <img src={coffeeImg} alt={title} id="coffeeImg" />
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <h1>{title}</h1>
      <p className="description">{description} </p>

      <div id="details">
        <div className="price">
          <p>
            R$ <strong>9,90</strong>
          </p>
        </div>

        <div id="qtButtons">
          <button type="button" id="menos" onClick={() => setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button type="button" id="mais" onClick={() => setCount(count + 1)}>+</button>
        </div>

        <button type="button" className="shoppBtn">
          <ShoppingCart color="#F3F2F2" fill="#F3F2F2" size={20} />
        </button>
      </div>
    </div>
  );
}