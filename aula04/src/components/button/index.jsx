import "./style.css";

export function Button({ title }) {
    return (
      <button type="Button" class="sign">
        <strong>{title}</strong>
      </button>
    );
  }