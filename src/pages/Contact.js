import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ở đây bạn có thể gọi API gửi dữ liệu hoặc xử lý gì đó
        console.log('Form data gửi đi:', formData);
        setSubmitted(true);
        // Reset form nếu muốn
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
            <h2>Liên hệ với chúng tôi</h2>
            {submitted && <p style={{ color: 'green' }}>Cảm ơn bạn đã gửi liên hệ!</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 10 }}>
                    <label>Họ tên:</label><br />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Lời nhắn:</label><br />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#f5deb3',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: 4,
                        cursor: 'pointer'
                    }}
                >
                    Gửi liên hệ
                </button>
            </form>
        </div>
    );
}

export default Contact;
