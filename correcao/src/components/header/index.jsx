import { MapPin, ShoppingCart } from "lucide-react";
import logo from "../../assets/logo.svg";

import "./styles.css";
export function Header() {
  return (
    <header className="flex">
      <img src={logo} alt="logo" />

      <nav className="flex">
        <div id="location" className="flex">
          <MapPin size={22} color="var(--purple)" />
          <p>Porto Alegre, RS</p>
        </div>

        <div id="cart" className="flex">
          <ShoppingCart size={22} color="var(--yellow-dark)" fill="var(--yellow-dark)" />
        </div>
      </nav>
    </header>
  );
}
