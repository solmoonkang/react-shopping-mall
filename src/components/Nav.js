import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import "./Nav.css";
import { Badge, IconButton } from "@material-ui/core";

export default function Nav({ cartItems, setCartOpen, getTotalItems }) {

    return (
        <nav className="nav">
            <div className="nav__logo">
                <h2>Shop</h2>
            </div>
            <div className="nav__icons">
                <IconButton onClick={() => setCartOpen(true)}>
                    <Badge badgeContent={getTotalItems(cartItems)} color="error">
                        <AddShoppingCartIcon />
                    </Badge>
                </IconButton>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
                <IconButton>
                    <LockOpenIcon />
                </IconButton>
            </div>
        </nav>
    );
}
