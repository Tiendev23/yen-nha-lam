import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import products from '../data/products.json'; // Giả sử bạn đã có data sản phẩm

function ProductCategory() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Lọc sản phẩm theo loại
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);

        if (category === 'all') {
            setFilteredProducts(products); // Hiển thị tất cả sản phẩm
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered); // Hiển thị sản phẩm theo phân loại
        }
    };

    // Lấy danh sách các loại sản phẩm duy nhất
    const categories = ['all', ...new Set(products.map(product => product.category))];

    return (
        <>
            <style>{`
        .home-container {
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .title {
          font-size: 2.8rem;
          color: #2f6f32;
          font-weight: 700;
          text-align: center;
          margin-bottom: 40px;
        }
        .filter-section {
          margin-bottom: 30px;
          text-align: center;
        }
        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .category-tab {
          padding: 10px 20px;
          font-size: 1.2rem;
          font-weight: 600;
          color: #28a745;
          cursor: pointer;
          background: #eaf2e1;
          border-radius: 8px;
          transition: background-color 0.3s ease, transform 0.3s ease;
          border: 2px solid transparent;
          text-transform: uppercase;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .category-tab:hover, .category-tab.active {
          background-color: #a5d6a7;
          transform: scale(1.05);
          border-color: #2f6f32;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
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
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
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

        /* Responsive */
        @media (max-width: 768px) {
          .category-tabs {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

            <div className="home-container">
                <h1 className="title">Sản Phẩm Của Chúng Tôi</h1>

                {/* Phân loại sản phẩm */}
                <div className="filter-section">
                    <div className="category-tabs">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to={`/products/${category}`} // Dùng Link để điều hướng đến trang Products và truyền category
                                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category)} // Cập nhật trạng thái khi chọn category
                            >
                                {category === 'all' ? 'Tất cả sản phẩm' : category}
                            </Link>
                        ))}
                    </div>
                </div>


            </div>
        </>
    );
}

export default ProductCategory;
