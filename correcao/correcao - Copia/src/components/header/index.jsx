import { MapPin, ShoppingCart } from "lucide-react";
import logo from "../../assets/logo.svg";
import { useNavigate, Link } from "react-router";

import "./styles.css";

export function Header() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/checkout");
  }

  return (
    <header className="flex">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>

      <nav className="flex">
        <div id="location" className="flex">
          <MapPin size={22} color="var(--purple)" />
          <p>Porto Alegre, RS</p>
        </div>

        <button id="cart" className="flex" onClick={() => handleNavigate()}>
          <ShoppingCart
            size={22}
            color="var(--yellow-dark)"
            fill="var(--yellow-dark)"
          />
        </button>
      </nav>
    </header>
  );
}
