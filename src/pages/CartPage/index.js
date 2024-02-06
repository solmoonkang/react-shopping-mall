import React from "react";
import CartItem from "../../components/CartItem";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../actions/cartActions";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// 여기는 우측 상단에 있는 장바구니 버튼을 누르면 열리는 곳으로, 현재 등록된 상품과 해당 상품들의 총 가격을 출력한다.

const CartPage = () => {
    
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    const handleAddToCart = (clickedItem) => {
        dispatch(addToCart(clickedItem));
    }

    const calculateTotal = (items) => 
        items.reduce((ack, item) => ack + item.quantity * item.price, 0);

    const handleCheckout = () => {
        alert("결제가 완료되었습니다.");
        dispatch(clearCart());
    }

    return (
        <Wrapper>
            {cartItems.length === 0 ? (
                <EmptyCart>
                    <ShoppingCartIcon style={{ fontSize: 100 }} />
                    <h3>Cart가 비어있습니다.</h3>
                    Cart에 상품을 넣어주세요.
                    <p onClick={() => navigate("/")}>쇼핑 계속하기</p>
                </EmptyCart>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
                    ))}
                    <Payment>
                        <h3>총 가격 : ${calculateTotal(cartItems).toFixed(2)}</h3>
                        <button onClick={handleCheckout}>결제하기</button>
                    </Payment>
                </>
            )}
        </Wrapper>
    );
}

export default CartPage;

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  img {
    width: 200px;
    height: 200px;
  }

  h3, p {
    margin-top: 10px 0;
  }

  p {
    color: blue;
    cursor: pointer;
  }
`;

const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 120px;
    height: 40px;
    cursor: pointer;
  }
`;
