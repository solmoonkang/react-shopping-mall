import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import styled from "styled-components";
import instance from "../../api/axios";
import axios from "axios";

const DetailPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const loggedIn = useSelector(state => state.user.loggedIn);

    const [product, setProducts] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchProducts = async () => {
            try {
                const response = await instance.get(`/products/${id}`, {cancelToken: source.token});
                setProducts(response.data);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    console.log(error);
                }
            }
        };

        fetchProducts();

        return () => source.cancel();
    }, [id]);

    const handleAddToCart = () => {
        if (!loggedIn) {
            alert('장바구니에 물건을 담으려면 로그인해야 합니다.');
            navigate('/auth/login');
            return;
        }
        dispatch(addToCart(product));
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product));
    }

    const handleCart = () => {
        if (!loggedIn) {
            alert('로그인 후 이용이 가능합니다.');
            navigate('/auth/login');
            return;
        }
        navigate("/cart");
    }

    const isInCart = product && cartItems.find(item => item.id === product.id);

    return (
        <Wrapper>
            {product && (
                <>
                    <Image src={product.image} alt={product.title} />
                    <Info>
                        <p>{product.category}</p>
                        <h2>{product.title}</h2>
                        <h1>$ {product.price}</h1>
                        <p>{product.description}</p>
                        <ButtonContainer>
                            <button onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>{isInCart ? "장바구니에 담긴 제품" : "장바구니에 담기"}</button>
                            <button onClick={() => handleCart}>장바구니로 이동</button>
                        </ButtonContainer>
                    </Info>
                </>
            )}
        </Wrapper>
    );
}

export default DetailPage;

const Wrapper = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    margin-top: 50px;
`;

const Image = styled.img`
    width: 40%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    button {
        border: 1px solid black;
        border-radius: 2px;
        width: 100px;
        height: 50px;
    }
`;
