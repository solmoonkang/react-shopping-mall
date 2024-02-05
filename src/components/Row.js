import React, { useEffect, useState } from "react";
import { addToCart } from "../actions/cartActions";
import axios from "../api/axios";
import { Grid } from '@material-ui/core';
import styled from "styled-components";
import requests from "../api/requests";
import { useDispatch, useSelector } from "react-redux";

// Row 컴포넌트: Banner 컴포넌트에서 클릭한 카테고리 버튼에 해당하는 상품들을 나열한다.
// Row 컴포넌트는 선택된 카테고리에 따라 동적으로 상품 목록을 갱신하게 된다.

// TODO: CSS Styling 이 제대로 적용되지 않았으므로 수정이 필요하다.

const Product = ({ product, handleAddToCart }) => (
    <Products item key={product.id} xs={3}>
        <ProductImage>
            <img src={product.image} alt={product.title} />
        </ProductImage>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDetails>
            <ProductButton onClick={() => handleAddToCart(product)}>장바구니에 담기</ProductButton>
            <ProductPrice>$ {product.price}</ProductPrice>
        </ProductDetails>
    </Products>
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
                <div>Showing: {products.length} items</div>
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

const Products = styled(Grid)`
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  margin: 1rem;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ProductPrice = styled.h3`
  margin-bottom: 1rem;
`;

const ProductButton = styled.button`
  width: 60%;
  height: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;

  > div:first-child {
    margin-bottom: 1rem;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
    margin-top: 10px;
  }
`;
