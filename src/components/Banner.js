import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from "react-redux";
import "./Banner.css";
import { selectCategory } from '../actions/categoryActions';

// Banner 컴포넌트: 모두, 전자기기, 쥬얼리, 남성의류, 여성의류 등의 카테고리 버튼을 담당한다. 
// 사용자가 버튼을 클릭하면 해당 카테고리의 상품들이 보여질 수 있도록 이벤트를 처리한다.

const categories = {
    "fetchAllProducts": "모두", 
    "fetchElectronics": "전자기기", 
    "fetchJewelery": "쥬얼리", 
    "fetchMenClothing": "남성의류", 
    "fetchWomenClothing": "여성의류"
};

function Banner() {

    const [selectedKey, setSelectedKey] = useState(null);
    const dispatch = useDispatch();

    const handleClick = useCallback((categoryName, categoryKey) => {
        setSelectedKey(categoryKey);
        dispatch(selectCategory(categoryKey));
    }, [dispatch]);

    useEffect(() => {
        handleClick("모두", "fetchAllProducts");
    }, [handleClick]);

    return (
        <div className="banner">
            <h1>Products</h1>
            <div className='banner-buttons'>
                {Object.keys(categories).map(key  => (
                    <button 
                    className={`banner__button ${selectedKey === key ? "banner__button--selected" : ""}`}
                    key={key} 
                    onClick={() => handleClick(categories[key], key)}>
                        {categories[key]}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Banner;
