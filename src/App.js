import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import MainPage from "./pages/MainPage";

import "./App.css";

function App () {

    return (
        <Router>
            <div>
                <Nav />
                <Banner />
                <Row />
                <Routes>
                    <Route path="/" index element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
