import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Badge, IconButton } from "@material-ui/core";
import { useSelector} from "react-redux";
import "./Nav.css";
import { login, logout } from "../actions/userActions";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearCart } from "../actions/cartActions";

// NAV 컴포넌트: 로고, 장바구니, 사용자 페이지, 로그인 버튼 등의 네비게이션 요소를 담당한다.

function Nav() {

    const cartItems = useSelector(state => state.cart);
    const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0);
    const { loggedIn, email } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login());
            } else {
                dispatch(logout());
            }
        });

        return () => unsubscribe();
    }, [auth, dispatch]);

    const handleLogout = async () => {
        const auth = getAuth();
        
        try {
            await signOut(auth);
            localStorage.setItem(email, JSON.stringify(cartItems));
            dispatch(logout());
            dispatch(clearCart());
            localStorage.removeItem('token');
            alert('로그아웃이 성공적으로 완료되었습니다.');
        } catch (error) {
            console.log(error);
            alert('로그아웃에 실패하였습니다.');
        }
    }

    const handleLogoClick = () => {
        navigate("/");
        window.location.reload();
    }

    const handleCartIconClick = () => {
        return loggedIn ? navigate("/cart") : navigate("/auth/login");
    }

    const handleUserIconClcik = () => {
        return loggedIn ? navigate("/user") : navigate("/auth/login");
    }
    
    return (
        <nav className="nav">
            <div className="nav__logo" onClick={handleLogoClick}>
                <h2>Shop</h2>
            </div>
            <div className="nav__icons">
                <IconButton onClick={handleCartIconClick}>
                    <Badge badgeContent={totalItems} color="error" overlap="rectangular">
                        <AddShoppingCartIcon />
                    </Badge>
                </IconButton>
                <IconButton onClick={handleUserIconClcik}>
                    <PersonIcon />
                </IconButton>
                <IconButton onClick={loggedIn ? handleLogout : () => navigate("/auth/login")}>
                    {loggedIn ? <ExitToAppIcon/> : <AccountCircleIcon />}
                </IconButton>
            </div>
        </nav>
    );
}

export default Nav;
