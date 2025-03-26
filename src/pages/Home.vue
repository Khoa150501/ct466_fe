<template>

    <div class="container mt-5">
        <div class=""> 
        <img src="/src/assets/img/slidebar/predictable-income-1.jpg" style="max-width: 1300px; border-radius: 10px; margin-top: 10px;">
        </div>
          <div class="text-overlay">
            Mở rộng lực lượng lao động chuyên nghiệp của bạn<br>
            với các dịch vụ tự do
        </div>
    </div>
  <div class="text-center mt-5">
    <!-- <h1>Welcome to Home</h1> -->
    <p v-if="!isLoggedIn">Đăng nhập ngay để sử dụng các dịch vụ</p>
    <h4 p v-else  class="welcome-message">Chào mừng bạn <b>{{ users }}</b></h4>
  </div>
    <div class="container my-5">
        <div class="row g-4">
            <!-- Card 1 -->
            <div class="col-6 col-md-3">
                <router-link to="/categories/ProgrammingTech" class="nav-link">
                    <div class="category-card p-4">
                        <div class="category-icon">💻</div>
                        <div class="category-title">Lập trình & Công nghệ</div>
                    </div>
                </router-link>
            </div>
            <!-- Card 2 -->
            <div class="col-6 col-md-3">
                <router-link to="/categories/GraphicsDesign" class="nav-link">
                <div class="category-card p-4">
                    <div class="category-icon">🎨</div>
                    <div class="category-title">Đồ họa & thiết kế</div>
                </div>
                </router-link>
            </div>
            <!-- Card 3 -->
                <div class="col-6 col-md-3">
                <router-link to="/categories/DigitalMarketing" class="nav-link">
                <div class="category-card p-4">
                <div class="category-icon">📈</div>
                <div class="category-title">Tiếp thị kỹ thuật số</div>
                </div>
                </router-link>
            </div>
            <!-- Card 4 -->
            <div class="col-6 col-md-3">
                <router-link to="/categories/WritingTranslation" class="nav-link">
                <div class="category-card p-4">
                    <div class="category-icon">✍️</div>
                    <div class="category-title">Viết & Dịch thuật</div>
                </div>
                </router-link>
            </div>
            <!-- Card 5 -->
            <div class="col-6 col-md-3">
                <router-link to="/categories/VideoAnimation" class="nav-link">
                <div class="category-card p-4">
                    <div class="category-icon">🎬</div>
                    <div class="category-title">Video & Hoạt hình</div>
                </div>
                </router-link>
            </div>
            <!-- Card 6 -->
            <!-- <div class="col-6 col-md-3">
                <div class="category-card p-4">
                    <div class="category-icon">🤖</div>
                    <div class="category-title">AI Services</div>
                </div>
            </div> -->
            <!-- Card 7 -->
            <div class="col-6 col-md-3">
                <router-link to="/categories/MusicAudio" class="nav-link">
                <div class="category-card p-4">
                    <div class="category-icon">🎵</div>
                    <div class="category-title">Nhạc & Âm thanh</div>
                </div>
                </router-link>
            </div>
            <!-- Card 8 -->
            <div class="col-6 col-md-3">
                <router-link to="/categories/Business" class="nav-link">
                <div class="category-card p-4">
                    <div class="category-icon">💼</div>
                    <div class="category-title">Kinh doanh</div>
                </div>
                </router-link>
            </div>
            <!-- Card 9 -->
            <div class="col-6 col-md-3">
                <router-link to="/categories/Consulting" class="nav-link">
                <div class="category-card p-4">
                    <div class="category-icon">🗨️</div>
                    <div class="category-title">Tư vấn</div>
                </div>
                </router-link>
            </div>
        </div>
    </div>

    <div class="container mt-5">
        <h1 style="font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif; color: #404145;" class="mb-5">Dịch vụ thịnh hành</h1>
      <div class="d-flex">
  <div class="cards-container d-flex flex-wrap justify-content-center">
    <div class="card custom-card m-2" style="--card-bg-color: #00732E; --hover-color: #009845; ">
        <div>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" 
                class="card-img-top">
        </div>
        <div class="card-body">
            <p class="card-text text-center">Lập trình Website</p>
        </div>
    </div>

    <div class="card custom-card m-2" style="--card-bg-color: #FF7640; --hover-color: #FF8E60;">
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center">Thiết kế logo</p>
        </div>
    </div>

    <div class="card custom-card m-2" style="--card-bg-color: #003912; --hover-color: #005C1E;">
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center">SEO</p>
        </div>
    </div>

    <div class="card custom-card m-2" style="--card-bg-color: #BE5272; --hover-color: #D45A80;">
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center">Chỉnh sửa video</p>
        </div>
    </div>

    <div class="card custom-card m-2" style="--card-bg-color: #687200; --hover-color: #8A9600;">
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center">Tiếp thị truyền thông xã hội</p>
        </div>
    </div>

    <div class="card custom-card m-2" style="--card-bg-color: #9D431F; --hover-color: #B84D29;">
        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center">Máy học</p>
        </div>
    </div>
</div>
      </div>
    </div>

    <div class="container mt-5">
        <h1 style="font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif; color: #404145; margin-bottom: 10px;">Làm việc trực tiếp với Freelancers</h1>
            <div class="row align-items-start mt-5">
            <div class="col">
            <img src="/src/assets/img/icon/categories.8badf97.svg" alt="">
            <p class="mt-2">Tiếp cận được nhóm tài năng hàng đầu</p>
            </div>
            <div class="col">
            <img src="/src/assets/img/icon/quickly.6879514.svg" alt="">
            <p class="mt-2">Hoàn thành công việc nhanh chóng và chi phí phù hợp</p>
            </div>
            <div class="col">
                <img src="/src/assets/img/icon/matching.0eef7cc.svg" alt="">
            <p class="mt-2">Trải nghiệp người dùng đơn giản, dễ sử dụng</p>
            </div>
             <div class="col">
                <img src="/src/assets/img/icon/happy.42ed7bd.svg" alt="">
            <p class="mt-2"> Chỉ trả phí khi bạn hài lòng</p>
            </div>
        </div>
    </div>
    <div class="container mt-5">
        <h1 style="font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif; color: #404145; margin-bottom: 10px;">Được thực hiện bởi Website</h1>
<div class="image-grid mt-5">
    <div class="image-container image-large">
        <img src="/src/assets/img/category/Design/1-thiet-ke-noi-that-phong-cach-contemporary.jpg" alt="Image 1">
          <div class="overlay">
        <p class="image-text">Thiết kế nội thất nhà đẹp...</p>
        </div>
        <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/a9354a2580dbeb20f59e496496ca3eb5-1742214808/Hawaiimusician%20-%20Makapuu%20beach.png" alt="Image 2" style="height: 188px;">
          <div class="overlay">
        <p class="image-text">Lập trình web 1</p>
        </div>
        <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container image-height">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c8df278c1436e5a0f08bb9f74b0b40af-1739836928/char_534_valic_.jpg" alt="Image 3">
          <div class="overlay">
        <p class="image-text">Lập trình web</p>
        </div>
        <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/25506c800c0947dcc2fbab66f2354b67-1742189643/807%20BEDROOM%20V1.png" alt="Image 4" style="height: 188px;">
          <div class="overlay">
        <p class="image-text">Lập trình web 1</p>
        </div>
          <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container image-large">
        <img src="/src/assets/img/category/Design/thiet-ke-logo.jpg" alt="Image 5" style="height: 387px;">
          <div class="overlay">
        <p class="image-text">Lập trình web 2</p>
        </div>
        <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container">
        <img src="https://glints.com/vn/blog/wp-content/uploads/2022/11/Di%CC%A3nh-hi%CC%80nh-phong-ca%CC%81ch-thie%CC%82%CC%81t-ke%CC%82%CC%81-Animation-cu%CC%89a-rie%CC%82ng-mi%CC%80nh-1024x602.jpg" alt="Image 6" style="height: 188px;">
          <div class="overlay">
        <p class="image-text">Lập trình web 1</p>
        </div>
         <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container image-height">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/5f5876f95b042a021097aae1f26d5d3e-1741724166/castle.png" alt="Image 7">
          <div class="overlay">
        <p class="image-text">Lập trình web</p>
        </div>
        <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container">
        <img src="https://haycafe.vn/wp-content/uploads/2022/05/Hinh-nen-cay-xanh-thien-nhien.jpg" alt="Image 8" style="height: 188px;">
          <div class="overlay">
        <p class="image-text">Lập trình web 1</p>
        </div>
          <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container image-large">
        <img src="/src/assets/img/category/Design/mau-nha-dep-anh-dai-dien-2024-scaled.jpg" alt="Image 9">
          <div class="overlay">
        <p class="image-text">Lập trình web 2</p>
        </div>
        <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container">
        <img src="https://xhomesg.com.vn/wp-content/uploads/2024/10/biet-thu-hien-dai-lo-goc-2-mat-tien-2-scaled.jpg" alt="Image 10" style="height: 188px;">
          <div class="overlay">
        <p class="image-text">Lập trình web 1</p>
        </div>
         <i class="fas fa-heart heart-icon"></i>
        <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
    <div class="image-container image-height">
        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/0ceadaa11c4222210f993a44fbb5b711-1730750780/gabrielberntson.jpg" alt="Image 11">
          <div class="overlay">
        <p class="image-text">Lập trình web</p>
        </div>
        <i class="fas fa-heart heart-icon"></i>
          <i class="fas fa-ellipsis-v menu-icon"></i>
    </div>
</div>
        <div class="container mt-5">
            <h1 style="font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif; color: #404145; margin-bottom: 10px;">Hướng dẫn giúp bạn phát triển</h1>

            <div class="row mt-5">
                <div class="col">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg" style="width: 100%; object-fit: cover;  height: 200px; border-radius: 5px;" alt="">
                    <p class="fw-bold" style="font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif; color: #404145; margin-top: 10px;">
                        Bắt đầu một công việc kinh doanh bán thời gian</p>
                </div>
                <div class="col">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg" style="width: 100%; object-fit: cover; height: 200px; border-radius: 5px;" alt="">
                      <p class="fw-bold" style="font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif; color: #404145; margin-top: 10px;">
                        Ý tưởng kinh doanh thương mại điện tử</p>
                </div>
                <div class="col">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg" style="width: 100%; object-fit: cover; height: 200px; border-radius: 5px;" alt="">
                      <p class="fw-bold" style="font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif; color: #404145; margin-top: 10px;">
                        Bắt đầu ý tưởng kinh doanh trực tuyến và làm việc tại nhà</p>
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name: "Home",
  data() {
    return {
      isLoggedIn: false,
      users: null,
    };
  },
  mounted() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem("user"));
    if (token) {
      this.isLoggedIn = true;
    }    if (user && user.username, user.role) {
      this.users = user.username;
      this.role = user.role;
    }
  },

};
</script>
    <style>
         .text-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 36px;
            font-weight: bold;
            text-align: center;
            font-style: italic;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        }
        .category-card {
            border: none;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .category-icon {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: #000;
            /* Adjust icon color */
        }

        .category-title {
            font-size: 1.1rem;
            font-weight: bold;
        }
/* Grid chính */
.image-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
}

/* Container ảnh */
.image-container {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.image-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
}

/* Hiệu ứng hover ảnh */
.image-container:hover img {
    transform: scale(1.05);
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    opacity: 0; /* Ẩn mặc định */
    transition: opacity 0.3s ease;
}
.image-text {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    z-index: 2;
    opacity: 0; /* Ẩn mặc định */
    transition: opacity 0.3s ease;
}

/* Hiển thị overlay và chữ khi hover */
.image-container:hover .overlay,
.image-container:hover .image-text {
    opacity: 1;
}
/* Icon trái tim */
.heart-icon, .menu-icon {
    position: absolute;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
}

.heart-icon {
    top: 10px;
    right: 10px;
}

.menu-icon {
    bottom: 10px;
    right: 10px;
}

/* Hiệu ứng hover icon */
.heart-icon:hover, .menu-icon:hover {
    background: rgba(0, 0, 0, 0.8);
}

/* Ảnh lớn hơn */
.image-large {
    grid-column: span 2;
    grid-row: span 2;
}

.image-height {
    grid-row: span 2;
    max-height: 383px;
}

        /* Responsive */
        @media (max-width: 1024px) {
            .image-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width: 768px) {
            .image-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .image-grid {
                grid-template-columns: 1fr;
            }
        }
.custom-card {
    width: 12.5rem;
    border-radius: 10px;
    background-color: var(--card-bg-color); 
    transition: background-color 0.3s ease, transform 0.3s ease;
    overflow: hidden;
    cursor: pointer;
}

/* Tùy chỉnh hình ảnh bên trong */
.custom-card .card-img-top {
    padding: 10px;
    border-radius: 20px;
    transition: transform 0.3s ease;
}

.custom-card .card-body {
    text-align: center;
}

.custom-card .card-text {
    color: aliceblue;
    font-weight: bold;
}

.custom-card:hover {
    background-color: var(--hover-color);
    transform: translateY(-5px); 
}

.custom-card:hover .card-img-top {
    transform: scale(1.1);
}
.welcome-message {
  font-family: 'Arial', sans-serif; /* Phông chữ đơn giản và thân thiện */
  font-size: 24px; /* Tăng kích thước chữ */
  font-weight: bold; /* Làm chữ đậm */
  color: #4CAF50; /* Màu xanh lá thân thiện */
  text-align: center; /* Canh giữa */
  background: linear-gradient(to right, #e0f7fa, #a7ffeb); /* Nền gradient dịu mắt */
  padding: 10px 20px; /* Khoảng cách bên trong */
  border-radius: 8px; /* Bo góc mềm mại */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Hiệu ứng đổ bóng */
  display: inline-block; /* Gói gọn nội dung */
  margin: 20px auto; /* Canh giữa trang */
}

.welcome-message b {
  color: #FF5722; /* Tô đậm màu chữ của tên người dùng */
}
</style>
