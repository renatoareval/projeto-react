import React from 'react';
import './App.css'; // Assuming you have a global CSS file
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home'; // Assuming Home component exists
import Login from './Components/Login/Login';

const App = () => {
    return <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>;
};

export default App;
