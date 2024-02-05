import React, { useEffect, useState } from "react";
import { addToCart } from "../actions/cartActions";
import axios from "../api/axios";
import { Grid, Button } from '@material-ui/core';
import styled from "styled-components";
import requests from "../api/requests";
import { useDispatch, useSelector } from "react-redux";

// Row 컴포넌트: Banner 컴포넌트에서 클릭한 카테고리 버튼에 해당하는 상품들을 나열한다.
// Row 컴포넌트는 선택된 카테고리에 따라 동적으로 상품 목록을 갱신하게 된다.

// Commit 처리하고, Row 스타일링 구현해주기
// 장바구니 아이콘 눌렀을 경우, CartPage로 이동하도록 구현해주기
// 마찬가지로, 로그인 아이콘 눌렀을 경우, UserPage로 이동하도록 구현해주기

const Product = ({ product, handleAddToCart }) => (
    <Grid item key={product.id} xs={3}>
        <ProductImage>
            <img src={product.image} alt={product.title} />
        </ProductImage>
        <div>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(product)}>장바구니 추가</Button>
    </Grid>
)

const Row = () => {

    const category = useSelector(state => state.category);
    console.log(`Category from Redux store: ${category}`);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const request = requests[category] || requests.fetchAllProducts;
            console.log(`Request URL: ${request}`);
            const response = await axios.get(request);
            console.log(`Products fetched:`, response.data);
            setProducts(response.data);
        };

        fetchProducts();
    }, [category]);

    const handleAddToCart = (clickedItem) => {
        dispatch(addToCart(clickedItem));
    }

    return (
        <Wrapper>
            <div className="grid-container">
                <Grid container spacing={5}>
                    {products.map((product) => (
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
    margin-top: 10px;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
