import "./style.css"

export function List({ i1, i2, i3, i4 }) {
    return (
      <ul className="list">
        <li> {i1} </li>
        <li> {i2} </li>
        <li> {i3} </li>
        <li> {i4} </li>
      </ul>
    );
  }