import React from "react";
import CartItem from "../../components/CartItem";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";

// 여기는 우측 상단에 있는 장바구니 버튼을 누르면 열리는 곳으로, 현재 등록된 상품과 해당 상품들의 총 가격을 출력한다.

const CartPage = () => {
    
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const handleAddToCart = (clickedItem) => {
        dispatch(addToCart(clickedItem));
    }

    const calculateTotal = (items) => 
        items.reduce((ack, item) => ack + item.amount * item.price, 0);

    return (
        <Wrapper>
            <h2>장바구니</h2>
            {cartItems.length === 0 ? <p>현재 등록된 상품이 없습니다.</p> : null}
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
            ))}
            <h2>총 가격 : ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    );
}

export default CartPage;

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;
