import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About'; // không dùng nữa
import Products from './pages/Products'; // thay thế

import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Đổi trang About thành Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} /> {/* Điều hướng đến trang sản phẩm với category */}
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Trang chi tiết sản phẩm */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
