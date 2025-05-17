import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';

function Products() {
  const { category } = useParams(); // Lấy category từ URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(productsData); // Hiển thị tất cả sản phẩm nếu category là 'all'
    } else {
      const filtered = productsData.filter(product => product.category === category);
      setFilteredProducts(filtered); // Lọc sản phẩm theo category
    }
  }, [category]); // Cập nhật lại khi category thay đổi

  return (
    <>
      <style>{`
        /* Đảm bảo các styles giống Home.js */
      `}</style>

      <div className="products-container">
        <h1>Sản Phẩm - {category === 'all' ? 'Tất cả sản phẩm' : category}</h1>

        {/* Hiển thị danh sách sản phẩm */}
        <div className="product-list">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-name">{product.name}</div>
              <div className="product-description">{product.description}</div>
              <div className="product-price">{product.price.toLocaleString()} VND</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
