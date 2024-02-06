import React from "react";
import { Router, Route, Routes, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";
import "./.firebase/firebaseConfig.js";

const Layout = () => {

    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
}

function App () {

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/signup" element={<SignupPage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
