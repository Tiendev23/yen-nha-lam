import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = productsData.find(p => p.id.toString() === id);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>Không tìm thấy sản phẩm</h2>
                <button onClick={() => navigate(-1)} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Quay lại
                </button>
            </div>
        );
    }

    const handleQuantityChange = (e) => {
        const val = parseInt(e.target.value, 10);
        if (val > 0) setQuantity(val);
    };

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    return (
        <>
            <style>{`
        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .back-button {
          margin-bottom: 20px;
          cursor: pointer;
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .back-button:hover {
          background-color: #1f6f20;
        }
        .product-detail {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }
        .product-image {
          flex: 1 1 300px;
          max-width: 400px;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 10px 25px rgba(40, 167, 69, 0.3);
        }
        .product-info {
          flex: 1 1 400px;
          display: flex;
          flex-direction: column;
        }
        .product-name {
          font-size: 2rem;
          font-weight: 700;
          color: #2f6f32;
          margin-bottom: 20px;
          text-transform: capitalize;
        }
        .product-description {
          font-size: 1.1rem;
          color: #444;
          margin-bottom: 30px;
          line-height: 1.5;
        }
        .product-price {
          font-size: 1.8rem;
          font-weight: 800;
          color: #3a7d2f;
          margin-bottom: 30px;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
        }
        .quantity-button {
          width: 36px;
          height: 36px;
          background-color: #28a745;
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
          transition: background-color 0.3s ease;
        }
        .quantity-button:hover {
          background-color: #1f6f20;
        }
        .quantity-input {
          width: 60px;
          font-size: 1.2rem;
          text-align: center;
          border: 2px solid #28a745;
          border-radius: 8px;
          padding: 6px 10px;
          outline: none;
        }
        .buy-button {
          padding: 15px 40px;
          background-color: #28a745;
          color: white;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-size: 1.1rem;
          transition: background-color 0.3s ease;
          width: fit-content;
          user-select: none;
        }
        .buy-button:hover {
          background-color: #1f6f20;
        }
        @media (max-width: 768px) {
          .product-detail {
            flex-direction: column;
            align-items: center;
          }
          .product-image, .product-info {
            max-width: 100%;
          }
        }
      `}</style>

            <div className="container">
                <button className="back-button" onClick={() => navigate(-1)}>
                    ← Quay lại
                </button>

                <div className="product-detail">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />
                    <div className="product-info">
                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-description">{product.description}</p>
                        <div className="product-price">{product.price.toLocaleString()} VND</div>

                        <div className="quantity-selector">
                            <button
                                className="quantity-button"
                                onClick={decrement}
                                aria-label="Giảm số lượng"
                            >
                                –
                            </button>
                            <input
                                type="number"
                                className="quantity-input"
                                value={quantity}
                                min="1"
                                onChange={handleQuantityChange}
                                aria-label="Số lượng"
                            />
                            <button
                                className="quantity-button"
                                onClick={increment}
                                aria-label="Tăng số lượng"
                            >
                                +
                            </button>
                        </div>

                        <button className="buy-button">Mua ngay</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
