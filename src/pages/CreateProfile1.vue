
<style scoped>
.profile-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 100;
}

.profile-form h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.form-group {
    margin-bottom: 25px;
    border-top: 0.5px solid #bebebe;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    margin-top: 10px;
    font-weight: bold;
    color: #555;
}

.form-group input[type="text"],
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

.form-group textarea {
    resize: vertical;
}

.form-group input[type="file"] {
    padding: 5px;
}

button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}
.avatar-container {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #ddd;
  margin-top: 10px;
}

.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.avatar-container:hover .avatar-overlay {
  opacity: 1;
}

input[type="file"] {
  display: none;
}

label::after {
  content: " *";
  color: red;
}
</style>
<template>
  <div class="container mt-5">
    <div class="profile-form">
      <h2>Tạo hồ sơ của bạn</h2>
      <form id="profileForm" class="d-flex">
        <div class="container form-flex">
          <div class="form-group">
          <div class="form-group-name-avarta d-flex">
          <div class="avatar-container">
            <img id="avatarPreview" src="/src/assets/img/icon/219983.png" alt="Ảnh đại diện">
            <div class="avatar-overlay">Cập nhật</div>
            <input type="file" id="avatar" name="avatar" accept="image/*" @change="handleFileChange">
          </div>
            <div class="mt-3" style="margin-left: 10px;">
              <label for="displayName">Tên hiển thị của bạn:</label>
              <input type="text" id="displayName" name="displayName" v-model="users" required>
          </div>
          </div>
        </div>
        <div class="form-group">
          <label for="role">Mục đích sử dụng</label>
              <input type="text" :value="selectedCheckboxes.join(', ')"  readonly>
          <!-- <label for="fullName">Tên đầy đủ:</label>
          <input type="text" id="fullName" name="fullName" v-model="users" required> -->
        </div>
   
        <div class="form-group">
          <label for="description">Bio:</label>
          <textarea id="description" name="description" rows="4" v-model="description" required></textarea>
        </div>
        <div class="form-group">
          <label for="language">Ngôn ngữ sử dụng:</label>
          <select id="language" name="language"  required>
            <option value="English">Tiếng Anh</option>
            <option value="Spain">Tiếng TBN</option>
            <option value="China">Tiếng Trung</option>
            <option value="Indian">Tiếng Hindi</option>
            <option value="French">Tiếng Pháp</option>
            <option value="Russia">Tiếng Nga</option>
            <option value="Japan">Tiếng Nhật</option>
            <option value="Korea">Tiếng Hàn</option>
            <option value="VietNam">Tiếng Việt</option>

          </select>
        </div>
        <div class="form-group">
          <label for="languageProficiency">Trình độ ngôn ngữ:</label>
          <select id="languageProficiency" name="languageProficiency" v-model="languageProficiency" required>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="native">Native</option>
          </select>
        </div>
        <div class="form-group">
             <label for="education">Bạn đang ở: </label>
                 <select v-model="selectedCountry" id="country">
                  <option value="" disabled>-- Chọn quốc gia --</option>
                  <option v-for="country in countries" :key="country.code" :value="country.code">
                    {{ country.name }}
                  </option>
                </select>
        </div>
        <div class="form-group">
          <label for="expertise">Mục tiêu cụ thể của bạn là:</label>
          <select id="expertise" name="expertise"  required>
            <option value="graphicsDesign">Đồ họa & Thiết kế</option>
            <option value="ProgramingTech">Lập trình & Công nghệ</option>
            <option value="digitalMarketing">Tiếp thị</option>
            <option value="translationWriting">Viết & Dịch thuật</option>
            <option value="animation">Video & Hoạt hình</option>
            <option value="music">Nhạc & Âm thanh</option>
            <option value="business">Kinh doanh</option>
            <option value="cons">Tư vấn viên</option>
          </select>
        </div>
        <router-link to="/updateProfile">
          <button type="button" class="btn btn-primary mt-2" @click="saveProfileData" >
            Tiếp tục
          </button>
        </router-link>
        </div>


<!-- Flex -->

      </form>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'; // Nếu bạn vẫn cần mapState từ Vuex
import { useRouter } from 'vue-router'; // Sử dụng useRouter để điều hướng
import { useProfileStore } from '@/store/profileStore'; // Import Pinia store

export default {
  name: "CreateProfile",
  data() {
    return {
      users: null,
      role: null,
      description: "",
      languageProficiency: "",
      avatar: null, // Thêm trường avatar nếu cần
      countries: [], // Danh sách quốc gia
      selectedCountry: "", // Quốc gia được chọn
    };
  },
  computed: {
    ...mapState(['selectedCheckboxes']), // Nếu bạn vẫn cần mapState từ Vuex
  },
  mounted() {
    // Lấy thông tin người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username && user.role) {
      this.users = user.username;
      this.role = user.role;
    }

    // Gọi API lấy danh sách quốc gia
    this.fetchCountries();
  },
  methods: {
    // Lấy danh sách quốc gia từ API
    async fetchCountries() {
      try {
        const response = await fetch("http://localhost:3000/api/countries"); // Thay bằng API thực tế
        const data = await response.json();
        this.countries = data;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách quốc gia:", error);
      }
    },
    // Xử lý khi người dùng chọn file ảnh
    handleFileChange(event) {
      this.avatar = event.target.files[0]; // Lưu file ảnh
    },

    // Lưu dữ liệu và chuyển hướng
    saveProfileData() {
      const router = useRouter(); // Sử dụng useRouter để điều hướng
      const profileStore = useProfileStore(); // Sử dụng Pinia store

      // Tạo đối tượng dữ liệu hồ sơ
      const profileData = {
        users: this.users,
        role: this.role,
        description: this.description,
        languageProficiency: this.languageProficiency,
        avatar: this.avatar, // Thêm avatar nếu cần
        country: this.selectedCountry,

      };

      // Lưu dữ liệu vào Pinia store
      profileStore.setProfileData(profileData);

      // Chuyển hướng đến trang updateProfile
      router.push("/updateProfile");
    },
  },
};
</script>
