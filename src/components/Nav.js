import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {

    

    return (
        <nav className="nav">
            <div className="nav__logo">
                <h1>Shop</h1>
            </div>
            <div className="nav__icons">
                <Link>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
            </div>
        </nav>
    );
}
