import React, { useState } from "react";
import CartWidget from "../cartWidget";
import './styles.css'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
 

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
                    <CartWidget/>
                    </a>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default NavBar