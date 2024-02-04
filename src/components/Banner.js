import React from 'react'
import { useDispatch } from "react-redux";
import { loadCategory } from "../actions/loadCategory";
import "./Banner.css";
import axios from "axios";
import requests from '../api/requests';

// Banner 컴포넌트: 모두, 전자기기, 쥬얼리, 남성의류, 여성의류 등의 카테고리 버튼을 담당한다. 
// 사용자가 버튼을 클릭하면 해당 카테고리의 상품들이 보여질 수 있도록 이벤트를 처리한다.

const categories = ["모두", "전자기기", "쥬얼리", "남성의류", "여성의류"];

function Banner() {

    const dispatch = useDispatch();

    const handleClick = async (category) => {
        const products = await axios.get(requests.fetchAllProducts);
        const items = products.filter(item => item.category === category);
        dispatch(loadCategory(category, items));
    };

    return (
        <div>
            {categories.map((category) => (
                <button onClick={() => handleClick(category)}>{category}</button>
            ))}
        </div>
    );
}

export default Banner;



// const [cartItems, setCartItems] = useState([]);
    // const { data, isLoading, error } = useQuery("products", getProducts);

    // const getProducts = async () => {
    //     return await (await fetch("https://fakestoreapi.com/products")).json();
    // }

    // if (isLoading) return <LinearProgress />;
    // if (error) return <div>ERROR!</div>