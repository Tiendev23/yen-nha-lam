import React, { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState('home');

    const handleMenuToggle = () => setMenuOpen(prev => !prev);

    const handleNavClick = (page) => {
        setActivePage(page);
        setMenuOpen(false);
    };

    const navLinks = [
        { id: 'home', label: 'Trang chủ', href: '#home' },
        { id: 'about', label: 'Giới thiệu', href: '#about' },
        { id: 'contact', label: 'Liên hệ', href: '#contact' },
    ];

    return (
        <>
            <style>{`
        header {
          background-color: #28a745;
          padding: 0.8rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          color: white;
          font-family: Arial, sans-serif;
        }
        .logo {
          font-weight: bold;
          font-size: 1.6rem;
        }
        .hamburger {
          font-size: 1.8rem;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: none;
          transition: transform 0.3s ease;
        }
        .hamburger.open {
          transform: rotate(90deg);
        }
        nav {
          display: flex;
          gap: 1.5rem;
        }
        nav.open {
          animation: slideDown 0.4s forwards;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #28a745;
          padding: 1rem 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          z-index: 100;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #a5d6a7;
        }
        a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: white;
          border-radius: 2px;
          animation: underlineFadeIn 0.5s forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes underlineFadeIn {
          from {
            opacity: 0;
            width: 0;
          }
          to {
            opacity: 1;
            width: 100%;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }
          nav {
            display: none;
          }
          nav.open {
            display: flex;
          }
        }
      `}</style>

            <header>
                <div className="logo">Yến Nhà Làm</div>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={handleMenuToggle}
                    aria-label="Toggle menu"
                >
                    &#9776;
                </button>

                <nav className={menuOpen ? 'open' : ''}>
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => handleNavClick(link.id)}
                            className={activePage === link.id ? 'active' : ''}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </header>
        </>
    );
}

export default Header;
