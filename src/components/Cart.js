import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = ({ cartItems = [], addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);
  
  return (
    <Wrapper>
      <h2>장바구니</h2>
      {cartItems.length === 0 ? <p>현재 등록된 상품이 없습니다.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>총 가격 : ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;
