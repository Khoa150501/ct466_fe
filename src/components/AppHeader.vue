<template>
    <header>
        <div class="container mt-2 mb-2">
            <div class="logo">
                <router-link to="/">FiverrClone</router-link>
                <!-- <a href="#">FiverrClone</a> -->
            </div>
             <div class="search-container">
                <input type="text" id="searchInput" placeholder="Tìm kiếm...">
                <i class="fas fa-search search-icon"></i>
            </div>
            <nav>
            <ul class="nav-links">
                <li><a href="#">Khám phá</a></li>
                <li class="dropdown">
                    <a href="#">Dịch vụ</a>
                    <ul class="dropdown-menu">
                        <div class="container ">
                        <div class="row">
                            <div class="col">
                                <a href="" >Lập trình & Công nghệ</a><br>

                                 <a href="">Viết & Dịch thuật</a><br>

                                 <a href="">Video & Hoạt hình</a><br>
                            </div>
                            <div class="col">
                                <a href="">Đồ họa & thiết kế</a> <br>

                                <a href="">Kinh doanh</a><br>

                                 <a href="">Nhạc & Âm thanh</a><br>
                            </div>
                            <div class="col">
                                <a href="">Tiếp thị kỹ thuật số</a><br>

                                <a href="">Tư vấn</a><br>
                            </div>
                        </div> 
                        </div>
                    </ul>
                </li>
                <li><a href="#">Liên hệ</a></li>
            </ul>
            </nav>
        <!--Chưa đăng nhập-->
        <div class="actions" v-if="!isLoggedIn">
            <a href="#" class="btn login" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Đăng nhập</a>
            <a href="#" class="btn signup" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Đăng ký</a>
            </div>
        <!--Đã đăng nhập-->
            <div class="navbar" v-else>
            <div class="icon">
                <i class="fas fa-bell"></i>
            </div>
            <div class="icon">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="icon">
                <i class="fas fa-heart"></i>
            </div>
            <div class="orders">
                <a href="#">Đơn hàng</a>
            </div>
            <div class="profile" @click="toggleDropdown">
                <img src="/src/assets/img/icon/219983.png" alt="Avatar" id="avatar" />
                <span class="status"></span>
                <!-- Dropdown Menu -->
                <div
                class="dropdown-menu-profile"
                v-if="showDropdown"
                @click.stop
                >
                <ul>
                    <li><router-link to="/profile" class="nav-link">Hồ sơ</router-link></li>
                    <li><router-link to="/setting" class="nav-link">Cài đặt</router-link></li>
                    <li><router-link to="/upgrage" class="nav-link">Nâng cấp</router-link></li>
                    <li><a href="#" @click.prevent="logout">Đăng xuất</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    <div class="container nav-chill" style="display: none;" v-if="!isLoggedIn">
            <ul class="d-flex ">
            <li class="dropdown">
            <router-link to="/GraphicsDesign" class="nav-links">Đồ họa & thiết kế</router-link>
            <ul class="submenu">
                <li><a href="#">Thiết kế logo</a></li>
                <li><a href="#">Thiết kế banner</a></li>
                <li><a href="#">Thiết kế giao diện</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Lập trình & Công nghệ</a>
            <ul class="submenu">
                <li><a href="#">Phát triển website</a></li>
                <li><a href="#">Ứng dụng di động</a></li>
                <li><a href="#">Khoa học dữ liệu</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Tiếp thị & kỹ thuật số</a>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Viết & Dịch thuật</a>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Video & Hoạt hình</a>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Nhạc & Âm thanh</a>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Kinh doanh</a>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#">Tư vấn</a>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
            </ul>
        </div>
           <div class="container nav-chill" style="display: block;" v-else>
            <ul class="d-flex ">
            <li class="dropdown">
              <router-link to="/categories/GraphicsDesign" class="nav-links">Đồ họa & thiết kế</router-link>
            <ul class="submenu">
                <li><router-link to="/categories/GraphicsDesign" class="nav-links">Thiết kế logo</router-link></li>
                <li><router-link to="/categories/GraphicsDesign" class="nav-links">Thiết kế banner</router-link></li>
                <li><router-link to="/categories/GraphicsDesign" class="nav-links">Thiết kế giao diện</router-link></li>
            </ul>
        </li>
        <li class="dropdown">
            <router-link to="/categories/ProgrammingTech" class="nav-links">Lập trình & Công nghệ</router-link>
            <ul class="submenu">
                <li><a href="#">Phát triển website</a></li>
                <li><a href="#">Ứng dụng di động</a></li>
                <li><a href="#">Khoa học dữ liệu</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <router-link to="/categories/DigitalMarketing" class="nav-links">Tiếp thị & kỹ thuật số</router-link>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <router-link to="/categories/WritingTranslation" class="nav-links">Viết & Dịch thuật</router-link>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <router-link to="/categories/VideoAnimation" class="nav-links">Video & Hoạt hình</router-link>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <router-link to="/categories/MusicAudio" class="nav-links">Nhạc & Âm thanh</router-link>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <router-link to="/categories/Business" class="nav-chill">Kinh doanh</router-link>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <router-link to="/categories/Consulting" class="nav-links">Tư vấn</router-link>
            <ul class="submenu">
                <li><a href="#">SEO</a></li>
                <li><a href="#">Quảng cáo Google</a></li>
                <li><a href="#">Social Media</a></li>
            </ul>
        </li>
            </ul>
        </div>
    </header>


    
     <!-- Model lg-rs -->

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-container">
     <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="email"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="password"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </form>
            <p>Bạn chưa có mật khẩu? <a href="/register" onclick="switchToRegister()">Đăng ký</a></p>

        <!-- Register Form -->
        <form id="registerForm" class="form hidden">
            <h2>Register</h2>
            <div class="form-group">
                <label for="regEmail">Email</label>
                <input type="email" id="regEmail" name="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="regPassword">Password</label>
                <input type="password" id="regPassword" name="password" placeholder="Enter your password" required>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required>
            </div>
            <button type="submit" class="btn">Register</button>
            <p>or</p>
            <button type="button" class="btn gmail-btn">Register with Gmail</button>
            <p>Bạn chưa có mật khẩu? <a href="#" onclick="switchToLogin()">Login</a></p>
        </form>
    </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
    name : "AppHeader",
  data() {
    return {
      isLoggedIn: false, // Trạng thái đăng nhập
      showDropdown: false,
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          email: this.email,
          password: this.password,
        });

        const { token, user } = response.data;

        // Lưu thông tin
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Cập nhật trạng thái
        this.isLoggedIn = true;
        // Hiển thị thông báo thành công
        Swal.fire({
        title: 'Thành công!',
        text: 'Đăng nhập thành công!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Chuyển hướng tới trang /home sau khi đóng alert
        this.$router.push('/');
        window.location.reload();
      });
      
      } catch (error) {
        alert(error.response?.data?.message || 'Đăng nhập thất bại!');
      }
    },
      logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.isLoggedIn = false;
        alert('Đăng xuất thành công!');
        this.$router.push('/');
        window.location.reload();

  },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    //  handleOutsideClick(event) {
    //   const dropdown = this.$el.querySelector(".dropdown-menu-profile");
    //   if (dropdown && !dropdown.contains(event.target)) {
    //     this.showDropdown = false;
    //   }
    // },
    checkLoginStatus() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
        this.isLoggedIn = true;
    } else {
        this.isLoggedIn = false;
    }
    },
  },
  mounted() {

    this.checkLoginStatus();
     document.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    // Gỡ bỏ sự kiện khi component bị hủy
    document.removeEventListener("click", this.handleOutsideClick);
  },
};
</script>

<style scoped>
header {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    /* position: sticky; */
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid rgb(170, 170, 170);
    position: fixed;
    left: 0;
    width: 100%;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
}
a{
    color: #404145;
}
header a{
    font-size: 18px;
}
header .logo a {
    font-size: 24px;
    font-weight: bold;
    color: #1dbf73;
}

header nav .nav-links {
    display: inline-flex;
    gap: 15px;
}

header nav .nav-links li a {
    color: #333;
    font-size: 16px;
    transition: color 0.3s ease;
}

header nav .nav-links li a:hover {
    color: #1dbf73;
}
/* Dropdown menu */
.dropdown-menu {
    position: absolute;
    top: 100%; /* Xuất hiện bên dưới mục cha */
    left: 0;
    background-color: rgb(255, 255, 255); 
    list-style: none;
    display: none; /* Ẩn mặc định */
    min-width: 600px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 0%;
    z-index: 900;
}

.dropdown-menu li:last-child {
    border-bottom: none; /* Xóa đường viền cuối cùng */
}

.dropdown-menu a {
    color: white;
    padding: 10px 15px;
}

/* Hiển thị dropdown khi hover vào "Dịch vụ" */
.dropdown:hover .dropdown-menu {
    display: block;
}
header .actions .btn {
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

header .actions .btn.login {
    background-color: transparent;
    border: 1px solid #1dbf73;
    color: #1dbf73;
}

header .actions .btn.login:hover {
    background-color: #1dbf73;
    color: #fff;
}

header .actions .btn.signup {
    background-color: #1dbf73;
    color: #fff;
}

header .actions .btn.signup:hover {
    background-color: #17a866;
}

.form-container {
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

/* Form Styles */
.form {
    display: flex;
    flex-direction: column;
}

.hidden {
    display: none;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-size: 14px;
    color: #555;
}

input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
}

input:focus {
    outline: none;
    border-color: #1dbf73;
}

button {
    padding: 10px 15px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

button.btn {
    background-color: #1dbf73;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

button.btn:hover {
    background-color: #17a866;
}

button.gmail-btn {
    background-color: #db4437;
    color: #fff;
}

button.gmail-btn:hover {
    background-color: #c53929;
}

p {
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
}

p a {
    color: #1dbf73;
    font-weight: bold;
    text-decoration: none;
}

p a:hover {
    text-decoration: underline;
}
        .search-container {
            position: relative;
            width: 400px;
            /* margin: 10px; */
        }

        .search-container input[type="text"] {
            width: 100%;
            padding: 12px 40px 12px 20px;
            border: 2px solid #ddd;
            border-radius: 25px;
            font-size: 16px;
            outline: none;
        }

        .search-container input[type="text"]:focus {
            border-color: #17a866;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        .search-container .search-icon {
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            color: #888;
            font-size: 18px;
            pointer-events: none; /* Đảm bảo icon không ảnh hưởng đến input */
        }
.blurred {
    filter: blur(5px);
    pointer-events: none;
    /* Ngăn click vào nội dung bị mờ */
}

.container.nav-chill {
    position: relative;
    padding: 10px;
}

.d-flex {
    display: flex;
    gap: 16px;
}

.d-flex > li {
    position: relative;
}

.d-flex > li a {
    text-decoration: none;
    /* color: #333; */
    /* padding: 10px 15px; */
    display: inline-block;
    transition: color 0.3s ease;
}

.d-flex > li a:hover {
    color: #1dbf73;
}

/* Submenu Styling */
.submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    z-index: 100;
    min-width: 200px;
}

.submenu li {
    margin: 0;
}

.submenu li a {
    color: #555;
    padding: 10px 15px;
    display: block;
    text-decoration: none;
    transition: background 0.3s ease, color 0.3s ease;
}

.submenu li a:hover {
        color: #1dbf73;

}

/* Show submenu on hover */
.dropdown:hover .submenu {
    display: block;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 20px;
}

/* Icons Styling */
.icon {
    margin: 0 10px;
    font-size: 20px;
    color: #555;
    cursor: pointer;
}

.icon:hover {
    color: #1dbf73;
}

/* Orders Text Styling */
.orders a {
    font-size: 16px;
    color: #555;
    text-decoration: none;
    margin-right: 20px;
}

.orders a:hover {
    color: #1dbf73;
}

/* Profile Avatar Styling */
.profile {
    position: relative;
    display: flex;
    align-items: center;
    display: inline-block;
    cursor: pointer;
}

.profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ddd;
}

/* Online Status Dot */
.status {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: #4caf50; /* Green for online */
    border: 2px solid #fff;
    border-radius: 50%;
}
.dropdown-menu-profile {
  position: absolute;
  top: 20px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  z-index: 1000;
  display: none;
}

.dropdown-menu-profile ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu-profile li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.dropdown-menu-profile li:last-child {
  border-bottom: none;
}

.dropdown-menu-profile li a {
  text-decoration: none;
  color: #555;
  font-size: 14px;
  display: block;
  text-align: left;
}

.dropdown-menu-profile li a:hover {
  /* background-color: #f4f4f9; */
  color: #1dbf73;
}
.profile:hover .dropdown-menu-profile {
  display: block;
}
</style>

<!-- <script>

export default {
  data() {
    return {
        showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

  },
  mounted() {
    // Đóng dropdown khi click bên ngoài
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    // Gỡ bỏ sự kiện khi component bị hủy
    document.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleOutsideClick(event) {
      const dropdown = this.$el.querySelector(".dropdown-menu-profile");
      if (dropdown && !dropdown.contains(event.target)) {
        this.showDropdown = false;
      }
    },
  },
};
    // JavaScript to switch between login and register forms
    function switchToRegister() {
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("registerForm").classList.remove("hidden");
    }
    function switchToLogin() {
        document.getElementById("registerForm").classList.add("hidden");
        document.getElementById("loginForm").classList.remove("hidden");
    }
    // Toggle dropdown menu on avatar click

</script> -->

