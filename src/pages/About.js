import React from 'react';

function About() {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: 'auto' }}>
      <h2>Giới thiệu về Yến Nhà Làm</h2>
      <p>
        Yến Nhà Làm được thành lập với sứ mệnh mang đến sản phẩm yến sào chất lượng cao, nguyên chất và an toàn cho sức khỏe.
      </p>
      <p>
        Chúng tôi cam kết quy trình tinh chế thủ công, giữ trọn dưỡng chất quý giá từ tổ yến. Uy tín và chất lượng là nền tảng để xây dựng thương hiệu.
      </p>
      <p>
        Với đội ngũ nhân viên tận tâm và chuyên nghiệp, Yến Nhà Làm luôn đồng hành cùng sức khỏe và sự hài lòng của khách hàng.
      </p>
      <img 
        src="/assets/about-yen.jpg" 
        alt="Yến Nhà Làm" 
        style={{ width: '100%', borderRadius: 8, marginTop: 20 }}
      />
    </div>
  );
}

export default About;
