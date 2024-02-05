import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import "./App.css";

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
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/detail/:id" element={<DetailPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
