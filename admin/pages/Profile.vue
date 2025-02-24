
<template>
 <div class="container mt-5">
    <div class="row">

        <div class="col">
               
    <header  class="profile-header">
        <div class="profile-info">
            <img class="avatar" src="/src/assets/img/icon/219983.png" alt="User Avatar">
            <div>
                <h1>{{ users || "Tên" }}</h1>
                <p>{{ role }}</p>
                <button class="edit-btn"><router-link to="/editprofile" class="nav-link">Chỉnh sửa</router-link></button>
            </div>
        </div>
        
    </header>

        </div>
        <div class="col">
              <main class="gigs-section">
        <p><a href="/" style="color: gray;">Trang chủ</a> / <b>Hồ sơ của tôi</b></p>
        <h3 class="mt-2 mb-2">Bạn định sử dụng trang web với mục đích gì?</h3>
        <div class="gigs-grid">
            <div class="gig-card">
                <div class="svg-f d-flex p-4">
                <div class="form-check1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_6560_8185)"><path d="M1 1H4V16H23" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 23C7.10457 23 8 22.1046 8 21C8 19.8954 7.10457 19 6 19C4.89543 19 4 19.8954 4 21C4 22.1046 4.89543 23 6 23Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 23C22.1046 23 23 22.1046 23 21C23 19.8954 22.1046 19 21 19C19.8954 19 19 19.8954 19 21C19 22.1046 19.8954 23 21 23Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4H9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.2012 1.81175C20.9852 0.575747 18.9552 0.777747 18.0002 2.23975C17.0442 0.775747 15.0142 0.576747 13.7992 1.81175C12.7342 2.89375 12.7342 4.64875 13.7992 5.73075L18.0002 9.99975L22.2022 5.73075C23.2662 4.64875 23.2662 2.89375 22.2012 1.81175Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_6560_8185"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div class="form-check2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                </div>
                </div>
                <div class="gig-info">
                    <h3>Người sử dụng các dịch vụ</h3>
                    <p>Tôi đang tìm kiếm những nhà tài năng để làm việc cùng</p>
                </div>
            </div>
            <div class="gig-card">
                <div class="svg-f d-flex p-4">
                <div class="form-check1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.5 12C18.8807 12 20 10.8807 20 9.5C20 8.11929 18.8807 7 17.5 7C16.1193 7 15 8.11929 15 9.5C15 10.8807 16.1193 12 17.5 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 6C10.8807 6 12 4.88071 12 3.5C12 2.11929 10.8807 1 9.5 1C8.11929 1 7 2.11929 7 3.5C7 4.88071 8.11929 6 9.5 6Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.476 16H19C21.817 16 22 18 22 18L10.235 22.525C9.448 22.828 8.57 22.785 7.816 22.408L1 19V12H2C3.105 12 5.906 12.438 7 14H10C12.209 14 14 15.791 14 18H7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div class="form-check2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                </div>
                </div>
                <div class="gig-info">
                    <h3>Freelancer</h3>
                    <p>Tôi muốn cung cấp các dịch vụ của tôi</p>
                </div>
            </div>
            <!-- Add more gig cards here -->
        </div>
    </main>
        </div>
    </div>
 </div>
 
</template>

<script>
export default {
    name : "Profile",
  data() {
    return {
      users: null, // Lưu tên người dùng
    };
  },
  methods: {
  
    },
  mounted() {
    // Lấy thông tin người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username, user.role) {
      this.users = user.username;
      this.role = user.role;
    }
  },
};


</script>

<style scoped>
.profile-header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f8f8f8;
}

.profile-header .profile-info {
    display: flex;
    align-items: center;
}

.profile-header .profile-info .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
}

.profile-header .profile-info button.edit-btn {
    border: 1px solid black;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

/* .profile-header .profile-info button.edit-btn:hover {
    background-color: #005f8a;
} */
.gigs-section {
    padding: 20px;
}

.gigs-section h2 {
    margin-bottom: 20px;
}

.gigs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.gig-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.gig-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.gig-card .gig-info {
    padding: 10px;
}

.gig-card .gig-info h3 {
    font-size: 1.2em;
    margin: 0;
    margin-bottom: 5px;
}

.gig-card .gig-info p {
    color: #555;
    font-size: 0.9em;
}
.svg-f {
  display: flex;
  justify-content: space-between; /* Đưa các phần tử con ra hai đầu */
  align-items: center; /* Canh giữa theo trục dọc */
  padding: 16px; /* Khoảng cách bên trong */
}

.form-check1, .form-check2 {
  display: flex;
  align-items: center; /* Canh giữa checkbox theo chiều dọc */
}
</style>