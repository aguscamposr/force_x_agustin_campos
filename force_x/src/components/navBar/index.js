import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "reactstrap";
import './styles.css'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
        <nav className="navContainer">
            <a className='brand' href='#home'>Force X</a>
            <ul className="unorderList">
                <li className="listStyle">
                    <a href="#home" onClick={handleMenuClick}>
                        Musculosas
                    </a>
                </li>
                <li className="listStyle">
                    <a href="#home" onClick={handleMenuClick}>
                        Shorts
                    </a>
                </li>
                <li className="listStyle">
                    <a href="#home" onClick={handleMenuClick}>
                        Sudaderas
                    </a>
                </li>
                <li className="listStyle">
                    <a href="#home" onClick={handleMenuClick}>
                        Buzos y Canguros
                    </a>
                </li>
                <li className="listStyle">
                    <a href="#home" onClick={handleMenuClick}>
                    <FaShoppingCart className="navbar__cart-icon" />
                <Badge className="navbar__cart-count" color="danger">
                  {cartCount}
                </Badge>
                    </a>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default NavBar