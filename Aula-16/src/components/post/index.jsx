import "./styles.css";
import { Pfp } from "../pfp";
import { Feedback } from "../feedback";

export function Post({ image, name, desc, text }) {
  return (
    <div className="container">
      <div className="header">
        <Pfp image={image} />
        <p>{name}</p>
        <p>{desc}</p>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
      <Feedback/>
    </div>
  );
}
