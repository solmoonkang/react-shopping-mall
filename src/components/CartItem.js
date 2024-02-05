import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

// 여기서는 Cart 컴포넌트에 들어간 각 상품에 대한 정보가 담긴 컴포넌트이다. 여기서 상품명과 상품가격을 출력한다.

const CartItem = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.id)}>-</Button>
        <p>{item.quantity}</p>
        <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>+</Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
