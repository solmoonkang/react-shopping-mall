import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import axios from "../api/axios";
import { Grid, Button } from '@material-ui/core';
import styled from "styled-components";

// Row 컴포넌트: Banner 컴포넌트에서 클릭한 카테고리 버튼에 해당하는 상품들을 나열한다.
// Row 컴포넌트는 선택된 카테고리에 따라 동적으로 상품 목록을 갱신하게 된다.

const Product = ({ product, handleAddToCart }) => (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <img src={product.image} alt={product.title} />
        <div>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(product)}>장바구니 추가</Button>
    </Grid>
)

const Row = () => {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("/products");
            setProducts(response.data);
        }

        fetchProducts();
    }, []);

    const handleAddToCart = (clickedItem) => {
        dispatch(addToCart(clickedItem));
    }

    return (
        <Wrapper>
            <div className="grid-container">
                <Grid container spacing={5}>
                    {products.map(product => (
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                    ))}
                </Grid>
            </div>
        </Wrapper>
    );
}

export default Row;

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
    max-height: 200px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
