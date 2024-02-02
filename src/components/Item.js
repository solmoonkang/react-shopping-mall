import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Item = ({ item, handleAddToCart }) => {
    return (
      <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
          <h3>{item.title}</h3>
          <h3>{item.description}</h3>
          <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>장바구니 추가</Button>
      </Wrapper>
    );
  };
  
  export default Item;

  const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
  