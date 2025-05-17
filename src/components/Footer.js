import React from 'react';
import footerData from '../data/footerData.json';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const iconMap = {
    FaFacebookF: <FaFacebookF />,
    FaInstagram: <FaInstagram />,
    FaYoutube: <FaYoutube />
};

function Footer() {
    const { logoText, description, contact, socials } = footerData;

    return (
        <>
            <style>{`
        .footer {
          background: linear-gradient(135deg, #1b3a1a, #285e22);
          color: #c5d9ac;
          padding: 60px 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          border-radius: 0 0 20px 20px;
          box-shadow: inset 0 0 60px rgba(255,255,255,0.05);
        }
        .footer-column {
          flex: 1 1 250px;
          margin: 0 20px;
          min-width: 220px;
        }
        .footer-logo {
          font-size: 2rem;
          font-weight: 800;
          color: #a8d08d;
          margin-bottom: 25px;
          user-select: none;
          letter-spacing: 2px;
        }
        .footer-title {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 18px;
          color: #e3f0c3;
          border-bottom: 2px solid #a8d08d;
          padding-bottom: 6px;
        }
        .footer-text, .footer-link {
          font-size: 1rem;
          line-height: 1.8;
          color: #c5d9ac;
          text-decoration: none;
          user-select: text;
          display: block;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #f0fff0;
          text-decoration: underline;
          cursor: pointer;
        }
        .footer-socials {
          margin-top: 10px;
          display: flex;
          gap: 20px;
        }
        .footer-socials a {
          color: #a8d08d;
          font-size: 1.8rem;
          transition: color 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-socials a:hover {
          color: #e3f0c3;
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .footer {
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
          }
          .footer-column {
            margin: 20px 0;
            text-align: center;
          }
          .footer-socials {
            justify-content: center;
          }
        }
      `}</style>

            <footer className="footer">
                <div className="footer-column">
                    <div className="footer-logo">{logoText}</div>
                    <p className="footer-text">{description}</p>
                </div>

                <div className="footer-column">
                    <div className="footer-title">Liên hệ</div>
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="footer-link">Điện thoại: {contact.phone}</a>
                    <a href={`mailto:${contact.email}`} className="footer-link">Email: {contact.email}</a>
                    <p className="footer-text">Địa chỉ: {contact.address}</p>
                </div>

                <div className="footer-column">
                    <div className="footer-title">Theo dõi chúng tôi</div>
                    <div className="footer-socials">
                        {socials.map(({ name, url, icon }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="footer-social-link"
                            >
                                {iconMap[icon] || null}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
