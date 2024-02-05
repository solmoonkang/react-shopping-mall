import React from "react";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Badge, IconButton } from "@material-ui/core";
import { useSelector} from "react-redux";
import "./Nav.css";
// import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';

// NAV 컴포넌트: 로고, 장바구니, 사용자 페이지, 로그인 버튼 등의 네비게이션 요소를 담당한다.

function Nav() {

    const cartItems = useSelector(state => state.cart);
    const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0);
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const navigate = useNavigate();
    
    return (
        <nav className="nav">
            <div className="nav__logo" onClick={() => navigate("/")}>
                <h2>Shop</h2>
            </div>
            <div className="nav__icons">
                <IconButton onClick={() => navigate("/cart")}>
                    <Badge badgeContent={totalItems} color="error" overlap="rectangular">
                        <AddShoppingCartIcon />
                    </Badge>
                </IconButton>
                <IconButton onClick={() => navigate("/user")}>
                    <PersonIcon />
                </IconButton>
                <IconButton onClick={() => navigate("/auth/login")}>
                    {loggedIn ? <ExitToAppIcon /> : <AccountCircleIcon />}
                </IconButton>
            </div>
        </nav>
    );
}

export default Nav;
