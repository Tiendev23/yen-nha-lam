import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import productsData from '../data/products.json';

function Products() {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    if (!category || category === 'all') {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [category]);

  useEffect(() => {
    if (sortOrder === 'low-to-high') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else if (sortOrder === 'high-to-low') {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sortOrder]);

  return (
    <>
      <style>{`
        /* Các style giống bạn đã dùng */
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .product-card {
          background: #e6f4ea;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 25px rgba(40, 167, 69, 0.3);
        }
        .product-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 20px;
        }
        .product-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #28a745;
          margin-bottom: 10px;
        }
        .product-description {
          flex-grow: 1;
          font-size: 1rem;
          color: #444;
          margin-bottom: 15px;
        }
        .product-price {
          font-weight: 700;
          font-size: 1.2rem;
          color: #2f6f32;
        }
        .btn-detail {
          display: inline-block;
          padding: 10px 20px;
          background-color: #28a745;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease;
          margin-top: 10px;
          text-align: center;
        }
        .btn-detail:hover {
          background-color: #1f6f20;
        }
      `}</style>

      <div>
        <h1>Sản phẩm {category ? `- ${category}` : ''}</h1>

        <div className="product-list">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-name">{product.name}</div>
              <div className="product-description">{product.description}</div>
              <div className="product-price">{product.price.toLocaleString()} VND</div>
              <Link to={`/product/${product.id}`} className="btn-detail">
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
